import { LitElement, html, svg, css, nothing, CSSResultGroup, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { CARD_NAME, CARD_VERSION, DEFAULT_ICON, DEFAULT_ACCENT_COLOR, DEFAULT_X_VALUES, MAX_X_VALUES } from "./const";
import type { PulseLineCardConfig, HomeAssistant, HassEntity, KudosRule } from "./types";
import { fetchDailyBuckets, fetchRecentValues } from "./history";

/* eslint-disable no-console */
console.info(
  `%c  ${CARD_NAME.toUpperCase()}  %c  v${CARD_VERSION}  `,
  "color: white; background: #3b82f6; font-weight: bold; padding: 2px 6px; border-radius: 4px 0 0 4px;",
  "color: #3b82f6; background: #e0e7ff; font-weight: bold; padding: 2px 6px; border-radius: 0 4px 4px 0;",
);
/* eslint-enable no-console */

// SVG sparkline constants
const SVG_W = 300;
const SVG_CHART_H = 40;
const SVG_LABEL_H = 16;
const PAD_X = 12;
const PAD_Y = 6;
const DOT_R = 3.5;
const FETCH_COOLDOWN = 300_000;
const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

@customElement(CARD_NAME)
export class PulseLineCard extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config!: PulseLineCardConfig;
  @state() private _dailyBuckets: (number | null)[] = [];
  @state() private _recentValues: number[] = [];

  private _lastFetchKey = "";
  private _lastFetchTime = 0;
  private _fetchInProgress = false;

  public static getStubConfig(): Record<string, unknown> {
    return { entity: "sensor.temperature" };
  }

  public setConfig(config: PulseLineCardConfig): void {
    if (!config || typeof config !== "object") {
      throw new Error("Invalid configuration: config must be an object");
    }
    if (!config.entity || typeof config.entity !== "string") {
      throw new Error("Invalid configuration: 'entity' is required");
    }

    const cardMode = config.card_mode || "single";
    if (cardMode !== "single" && cardMode !== "dual") {
      throw new Error("Invalid configuration: 'card_mode' must be 'single' or 'dual'");
    }

    // Dual mode validation
    if (cardMode === "dual") {
      if (!config.entity_2 || typeof config.entity_2 !== "string") {
        throw new Error("Invalid configuration: 'entity_2' is required when card_mode is 'dual'");
      }
      if (config.display_style === "score") {
        throw new Error("Invalid configuration: display_style 'score' is not supported in dual mode");
      }
      if (config.footer_row && config.footer_row.type !== "none") {
        throw new Error("Invalid configuration: footer_row is not supported in dual mode");
      }
      if (config.supporting_row && config.supporting_row.type === "delta") {
        throw new Error("Invalid configuration: supporting_row 'delta' is not supported in dual mode");
      }
    }

    if (config.display_style && config.display_style !== "unit" && config.display_style !== "score") {
      throw new Error("Invalid configuration: 'display_style' must be 'unit' or 'score'");
    }
    if (config.display_style === "score" && (config.score_max == null || typeof config.score_max !== "number")) {
      throw new Error("Invalid configuration: 'score_max' is required when display_style is 'score'");
    }

    if (config.value_precision != null && (typeof config.value_precision !== "number" || config.value_precision < 0)) {
      throw new Error("Invalid configuration: 'value_precision' must be a non-negative number");
    }

    // Supporting row validation
    if (config.supporting_row) {
      const sType = config.supporting_row.type;
      if (sType !== "none" && sType !== "kudos" && sType !== "delta") {
        throw new Error("Invalid configuration: supporting_row.type must be 'none', 'kudos', or 'delta'");
      }
      if (sType === "kudos") {
        if (!Array.isArray(config.supporting_row.kudos_rules) || config.supporting_row.kudos_rules.length === 0) {
          throw new Error("Invalid configuration: 'kudos_rules' must be a non-empty array when type is 'kudos'");
        }
        for (const rule of config.supporting_row.kudos_rules) {
          if (typeof rule.min !== "number" || typeof rule.label !== "string") {
            throw new Error("Invalid configuration: each kudos rule must have 'min' (number) and 'label' (string)");
          }
          if (rule.max != null && typeof rule.max !== "number") {
            throw new Error("Invalid configuration: kudos rule 'max' must be a number if provided");
          }
        }
      }
    }

    // Footer row validation
    if (config.footer_row) {
      const fType = config.footer_row.type;
      if (fType !== "none" && fType !== "recent_days_sparkline" && fType !== "recent_values_sparkline" && fType !== "progress_bar") {
        throw new Error("Invalid configuration: footer_row.type must be 'none', 'recent_days_sparkline', 'recent_values_sparkline', or 'progress_bar'");
      }
      if (fType === "recent_values_sparkline" && config.footer_row.x_values != null) {
        if (typeof config.footer_row.x_values !== "number" || config.footer_row.x_values < 2 || config.footer_row.x_values > MAX_X_VALUES) {
          throw new Error(`Invalid configuration: x_values must be a number between 2 and ${MAX_X_VALUES}`);
        }
      }
      if (fType === "progress_bar" && config.display_style !== "score") {
        throw new Error("Invalid configuration: progress_bar footer requires display_style 'score'");
      }
    }

    this._config = config;
  }

  private _computeRowSize(): number {
    const footerType = this._config?.footer_row?.type ?? "none";
    if (footerType === "recent_days_sparkline" || footerType === "recent_values_sparkline") {
      return 3;
    }
    return 2;
  }

  public getCardSize(): number {
    return this._computeRowSize();
  }

  public getGridOptions(): { columns: number; rows: number; min_columns: number; min_rows: number } {
    return {
      columns: 6,
      rows: this._computeRowSize(),
      min_columns: 3,
      min_rows: 1,
    };
  }

  // --- Data fetching ---

  protected updated(changedProperties: Map<PropertyKey, unknown>): void {
    super.updated(changedProperties);
    if (!changedProperties.has("hass") && !changedProperties.has("_config")) return;
    this._scheduleDataFetch();
  }

  private _needsRecentValues(): boolean {
    const footerType = this._config?.footer_row?.type;
    if (footerType === "recent_values_sparkline") return true;
    const supportType = this._config?.supporting_row?.type;
    if (supportType === "delta" && footerType !== "recent_days_sparkline") return true;
    return false;
  }

  private _needsDailyBuckets(): boolean {
    return this._config?.footer_row?.type === "recent_days_sparkline";
  }

  private _scheduleDataFetch(): void {
    if (!this._config || !this.hass) return;

    const needsRecent = this._needsRecentValues();
    const needsDaily = this._needsDailyBuckets();
    if (!needsRecent && !needsDaily) return;

    const xValues = needsRecent ? (this._config.footer_row?.x_values || DEFAULT_X_VALUES) : 0;
    const key = `${this._config.entity}:r${needsRecent ? xValues : 0}:d${needsDaily ? 7 : 0}`;
    const now = Date.now();

    if (key !== this._lastFetchKey || now - this._lastFetchTime > FETCH_COOLDOWN) {
      if (!this._fetchInProgress) {
        this._lastFetchKey = key;
        this._lastFetchTime = now;
        this._fetchData();
      }
    }
  }

  private async _fetchData(): Promise<void> {
    if (!this.hass || !this._config) return;
    this._fetchInProgress = true;

    try {
      if (this._needsDailyBuckets()) {
        this._dailyBuckets = await fetchDailyBuckets(this.hass, this._config.entity, 7);
      }
      if (this._needsRecentValues()) {
        this._recentValues = await fetchRecentValues(
          this.hass,
          this._config.entity,
          this._config.footer_row?.x_values || DEFAULT_X_VALUES,
        );
      }
    } finally {
      this._fetchInProgress = false;
    }
  }

  // --- Interaction ---

  private _handleClick(): void {
    if (!this._config) return;
    const event = new CustomEvent("hass-more-info", {
      bubbles: true,
      composed: true,
      detail: { entityId: this._config.entity },
    });
    this.dispatchEvent(event);
  }

  // --- Entity helpers ---

  private _isDualMode(): boolean {
    return (this._config?.card_mode || "single") === "dual";
  }

  private _getEntity(): HassEntity | undefined {
    if (!this.hass || !this._config) return undefined;
    return this.hass.states[this._config.entity];
  }

  private _getEntity2(): HassEntity | undefined {
    if (!this.hass || !this._config?.entity_2) return undefined;
    return this.hass.states[this._config.entity_2];
  }

  private _getIcon(entity?: HassEntity): string {
    if (this._config.icon) return this._config.icon;
    if (entity?.attributes.icon) return entity.attributes.icon as string;
    return DEFAULT_ICON;
  }

  private _getAccentColor(): string {
    return this._config.accent_color || DEFAULT_ACCENT_COLOR;
  }

  private _getTitle(entity?: HassEntity): string {
    if (this._config.name) return this._config.name;
    if (entity?.attributes.friendly_name) return entity.attributes.friendly_name as string;
    return this._config.entity;
  }

  private _isEntityUnavailable(entity: HassEntity): boolean {
    const s = entity.state;
    return s === "unavailable" || s === "unknown";
  }

  private _isValueUnavailable(): boolean {
    const entity = this._getEntity();
    if (!entity || this._isEntityUnavailable(entity)) return true;
    if (this._isDualMode()) {
      const entity2 = this._getEntity2();
      if (!entity2 || this._isEntityUnavailable(entity2)) return true;
    }
    return false;
  }

  private _evaluateKudos(value: number, rules: KudosRule[]): string | null {
    for (const rule of rules) {
      if (value >= rule.min && (rule.max == null || value <= rule.max)) return rule.label;
    }
    return null;
  }

  // --- Row renderers ---

  private _normalizeNumeric(rawState: string): number {
    const precision = this._config.value_precision ?? 0;
    const num = parseFloat(rawState);
    if (isNaN(num)) return NaN;
    return parseFloat(num.toFixed(precision));
  }

  private _formatValue(rawState: string): string {
    const num = this._normalizeNumeric(rawState);
    if (isNaN(num)) return rawState;
    return num.toFixed(this._config.value_precision ?? 0);
  }

  private _renderValueRow(entity: HassEntity): TemplateResult {
    if (this._isDualMode()) {
      return this._renderDualValueRow(entity);
    }

    if (this._isEntityUnavailable(entity)) {
      return html`<div class="value-row"><span class="value-suffix">–</span></div>`;
    }

    const formatted = this._formatValue(entity.state);
    const displayStyle = this._config.display_style || "unit";

    if (displayStyle === "score") {
      return html`
        <div class="value-row">
          <span class="value">${formatted}</span>
          <span class="value-suffix score-max">/ ${this._config.score_max}</span>
        </div>
      `;
    }

    const unit = this._getUnit(entity);
    return html`
      <div class="value-row">
        <span class="value">${formatted}</span>
        ${unit !== undefined ? html`<span class="value-suffix unit">${unit}</span>` : nothing}
      </div>
    `;
  }

  private _getUnit(entity: HassEntity): string | undefined {
    const raw = entity.attributes.unit_of_measurement;
    if (typeof raw !== "string" || raw.trim() === "") return undefined;
    return raw;
  }

  private _renderDualValueRow(entity: HassEntity): TemplateResult {
    const entity2 = this._getEntity2();
    const unavail1 = this._isEntityUnavailable(entity);
    const unavail2 = !entity2 || this._isEntityUnavailable(entity2);

    if (unavail1 || unavail2) {
      return html`
        <div class="value-row">
          <span class="value-suffix">–</span>
          <span class="value-suffix dual-separator">/</span>
          <span class="value-suffix">–</span>
        </div>
      `;
    }

    const val1 = this._formatValue(entity.state);
    const val2 = this._formatValue(entity2!.state);
    const unit1 = this._getUnit(entity);
    const unit2 = this._getUnit(entity2!);
    const sharedUnit = unit1 !== undefined && unit2 !== undefined && unit1 === unit2;

    return html`
      <div class="value-row">
        <span class="value value-dual">${val1}</span>
        ${!sharedUnit && unit1 !== undefined ? html`<span class="value-suffix unit">${unit1}</span>` : nothing}
        <span class="value-suffix dual-separator">/</span>
        <span class="value value-dual">${val2}</span>
        ${!sharedUnit && unit2 !== undefined ? html`<span class="value-suffix unit">${unit2}</span>` : nothing}
        ${sharedUnit ? html`<span class="value-suffix unit">${unit1}</span>` : nothing}
      </div>
    `;
  }

  private _renderSupportingRow(entity: HassEntity): TemplateResult | typeof nothing {
    if (this._isValueUnavailable()) return nothing;

    const supporting = this._config.supporting_row;
    if (!supporting || supporting.type === "none") return nothing;

    if (supporting.type === "kudos" && supporting.kudos_rules) {
      const numValue = this._normalizeNumeric(entity.state);
      if (isNaN(numValue)) return nothing;
      const label = this._evaluateKudos(numValue, supporting.kudos_rules);
      if (!label) return nothing;
      return html`<div class="supporting-row">${label}</div>`;
    }

    if (supporting.type === "delta") {
      return this._renderDelta(entity);
    }

    return nothing;
  }

  private _getDeltaValues(): number[] {
    const footerType = this._config?.footer_row?.type;
    if (footerType === "recent_days_sparkline") {
      return this._dailyBuckets.filter((v): v is number => v != null);
    }
    return this._recentValues;
  }

  private _renderDelta(entity: HassEntity): TemplateResult | typeof nothing {
    const values = this._getDeltaValues();
    if (values.length < 2) return nothing;

    const first = values[0];
    const last = values[values.length - 1];
    const diff = last - first;
    const absDiff = Math.abs(diff);
    const rounded = Math.round(absDiff * 10) / 10;

    const displayStyle = this._config.display_style || "unit";
    const unitStr = displayStyle === "unit" ? (entity.attributes.unit_of_measurement as string || "") : "";
    const unitDisplay = unitStr ? ` ${unitStr}` : "";

    let icon: string;
    if (rounded === 0) {
      icon = "mdi:minus";
    } else if (diff > 0) {
      icon = "mdi:arrow-up";
    } else {
      icon = "mdi:arrow-down";
    }

    const formatted = rounded === 0 ? "0" : (rounded % 1 === 0 ? rounded.toString() : rounded.toFixed(1));

    const accent = this._getAccentColor();

    return html`<div class="supporting-row delta">
      <div class="delta-badge" style="background: ${accent}33; color: ${accent};">
        <ha-icon .icon=${icon}></ha-icon>
      </div>
      <span>${formatted}${unitDisplay}</span>
    </div>`;
  }

  // --- Footer renderers ---

  private _renderFooterRow(entity: HassEntity, accent: string): TemplateResult | typeof nothing {
    if (this._isValueUnavailable()) return nothing;

    const footer = this._config.footer_row;
    if (!footer || footer.type === "none") return nothing;

    if (footer.type === "recent_days_sparkline") {
      return this._renderSparkline(this._dailyBuckets, accent, true);
    }
    if (footer.type === "recent_values_sparkline") {
      return this._renderSparkline(this._recentValues, accent, false);
    }
    if (footer.type === "progress_bar") {
      return this._renderProgressBar(entity, accent);
    }

    return nothing;
  }

  private _renderSparkline(
    values: (number | null)[],
    accent: string,
    withLabels: boolean,
  ): TemplateResult | typeof nothing {
    const validPoints: { index: number; value: number }[] = [];
    for (let i = 0; i < values.length; i++) {
      if (values[i] != null) {
        validPoints.push({ index: i, value: values[i] as number });
      }
    }

    if (validPoints.length < 2) return nothing;

    const minVal = Math.min(...validPoints.map((p) => p.value));
    const maxVal = Math.max(...validPoints.map((p) => p.value));
    const range = maxVal - minVal || 1;

    const chartW = SVG_W - 2 * PAD_X;
    const chartH = SVG_CHART_H - 2 * PAD_Y;
    const count = values.length;
    const step = count > 1 ? chartW / (count - 1) : 0;

    const points = validPoints.map((p) => ({
      x: PAD_X + p.index * step,
      y: PAD_Y + chartH - ((p.value - minVal) / range) * chartH,
    }));

    const pathD = points
      .map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`)
      .join(" ");

    const dotEls = points.map(
      (p) => svg`<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${DOT_R}" fill="${accent}" />`,
    );

    const viewH = withLabels ? SVG_CHART_H + SVG_LABEL_H : SVG_CHART_H;

    let labelEls: unknown = nothing;
    if (withLabels) {
      const now = new Date();
      labelEls = Array.from({ length: count }, (_, i) => {
        const d = new Date(now);
        d.setDate(d.getDate() - (count - 1 - i));
        const dayName = DAY_NAMES[d.getDay()];
        const x = PAD_X + i * step;
        const isToday = i === count - 1;
        return svg`
          <text
            x="${x.toFixed(1)}"
            y="${SVG_CHART_H + SVG_LABEL_H - 2}"
            text-anchor="middle"
            font-size="9"
            font-weight="${isToday ? "bold" : "normal"}"
            fill="${isToday ? accent : "var(--secondary-text-color)"}"
            opacity="${isToday ? 1 : 0.7}"
          >${dayName}</text>
        `;
      });
    }

    return html`
      <div class="footer-row">
        <svg viewBox="0 0 ${SVG_W} ${viewH}" class="sparkline-svg">
          ${svg`<path d="${pathD}" fill="none" stroke="${accent}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`}
          ${dotEls}
          ${labelEls}
        </svg>
      </div>
    `;
  }

  private _renderProgressBar(entity: HassEntity, accent: string): TemplateResult | typeof nothing {
    const value = parseFloat(entity.state);
    if (isNaN(value)) return nothing;
    const max = this._config.score_max!;
    const pct = Math.max(0, Math.min(100, (value / max) * 100));

    return html`
      <div class="footer-row">
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${pct}%; background: ${accent};"></div>
        </div>
      </div>
    `;
  }

  // --- Main render ---

  protected render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html``;
    }

    const entity = this._getEntity();
    if (!entity) {
      return html`
        <ha-card>
          <div class="content">
            <div class="not-found">Entity not found: ${this._config.entity}</div>
          </div>
        </ha-card>
      `;
    }

    if (this._isDualMode() && !this._getEntity2()) {
      return html`
        <ha-card>
          <div class="content">
            <div class="not-found">Entity not found: ${this._config.entity_2}</div>
          </div>
        </ha-card>
      `;
    }

    const accent = this._getAccentColor();
    const icon = this._getIcon(entity);
    const title = this._getTitle(entity);

    return html`
      <ha-card @click=${this._handleClick}>
        <div class="content">
          <div
            class="icon-badge"
            style="background: ${accent}33; color: ${accent};"
          >
            <ha-icon .icon=${icon}></ha-icon>
          </div>
          <div class="text-block">
            <div class="title-row">${title}</div>
            ${this._renderValueRow(entity)}
            ${this._renderSupportingRow(entity)}
          </div>
        </div>
        ${this._renderFooterRow(entity, accent)}
      </ha-card>
    `;
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        display: block;
      }
      ha-card {
        padding: 10px 15px;
        overflow: hidden;
        box-sizing: border-box;
        cursor: pointer;
      }
      .content {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 14px;
      }
      .icon-badge {
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .icon-badge ha-icon {
        --mdc-icon-size: 20px;
      }
      .text-block {
        display: flex;
        flex-direction: column;
        min-width: 0;
      }
      .title-row {
        font-size: 14px;
        font-weight: 500;
        color: var(--primary-text-color);
        line-height: 1.2;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .value-row {
        display: flex;
        align-items: baseline;
        margin-top: 6px;
        white-space: nowrap;
      }
      .value {
        font-size: 32px;
        font-weight: 700;
        color: var(--primary-text-color);
        line-height: 1.15;
      }
      .value-suffix {
        font-size: 14px;
        font-weight: 400;
        color: var(--secondary-text-color);
        opacity: 0.7;
      }
      .score-max {
        margin-left: 6px;
      }
      .unit {
        margin-left: 6px;
      }
      .dual-separator {
        margin: 0 4px;
      }
      .value-dual {
        font-size: 28px;
      }
      .supporting-row {
        font-size: 13px;
        font-weight: 500;
        color: var(--secondary-text-color);
        margin-top: 6px;
        line-height: 1.2;
      }
      .delta {
        display: flex;
        align-items: center;
        gap: 4px;
      }
      .delta-badge {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .delta-badge ha-icon {
        --mdc-icon-size: 12px;
      }
      .footer-row {
        margin-top: 6px;
      }
      .sparkline-svg {
        display: block;
        width: 100%;
        height: auto;
      }
      .progress-bar {
        height: 4px;
        background: var(--divider-color, rgba(255, 255, 255, 0.12));
        border-radius: 2px;
        overflow: hidden;
      }
      .progress-fill {
        height: 100%;
        border-radius: 2px;
      }
      .not-found {
        font-size: 13px;
        color: var(--error-color, #ef4444);
        padding: 8px 0;
      }
      @media (max-width: 480px) {
        .value {
          font-size: 26px;
        }
        .value-dual {
          font-size: 24px;
        }
        .value-suffix {
          font-size: 12px;
        }
        .score-max,
        .unit {
          margin-left: 4px;
        }
        .dual-separator {
          margin: 0 2px;
        }
        .content {
          gap: 10px;
        }
        .icon-badge {
          width: 36px;
          height: 36px;
        }
        .icon-badge ha-icon {
          --mdc-icon-size: 18px;
        }
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pulseline-card": PulseLineCard;
  }
}

const win = window as unknown as Record<string, unknown>;
win.customCards = win.customCards || [];
(
  win.customCards as Array<{
    type: string;
    name: string;
    description: string;
  }>
).push({
  type: CARD_NAME,
  name: "PulseLine Card",
  description: "A compact metric and trend card with deltas, sparklines, and contextual insights.",
});
