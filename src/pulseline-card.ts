import { LitElement, html, css, nothing, CSSResultGroup, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { CARD_NAME, CARD_VERSION, DEFAULT_ICON, DEFAULT_ACCENT_COLOR } from "./const";
import type { PulseLineCardConfig, HomeAssistant, HassEntity, KudosRule } from "./types";

/* eslint-disable no-console */
console.info(
  `%c  ${CARD_NAME.toUpperCase()}  %c  v${CARD_VERSION}  `,
  "color: white; background: #3b82f6; font-weight: bold; padding: 2px 6px; border-radius: 4px 0 0 4px;",
  "color: #3b82f6; background: #e0e7ff; font-weight: bold; padding: 2px 6px; border-radius: 0 4px 4px 0;",
);
/* eslint-enable no-console */

@customElement(CARD_NAME)
export class PulseLineCard extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config!: PulseLineCardConfig;

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
    if (config.display_style && config.display_style !== "unit" && config.display_style !== "score") {
      throw new Error("Invalid configuration: 'display_style' must be 'unit' or 'score'");
    }
    if (config.display_style === "score" && (config.score_max == null || typeof config.score_max !== "number")) {
      throw new Error("Invalid configuration: 'score_max' is required when display_style is 'score'");
    }
    if (config.supporting_row) {
      if (config.supporting_row.type !== "none" && config.supporting_row.type !== "kudos") {
        throw new Error("Invalid configuration: supporting_row.type must be 'none' or 'kudos'");
      }
      if (config.supporting_row.type === "kudos") {
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
    this._config = config;
  }

  public getCardSize(): number {
    return 2;
  }

  public getGridOptions(): { columns: number; rows: number; min_columns: number; min_rows: number } {
    return {
      columns: 6,
      rows: 2,
      min_columns: 3,
      min_rows: 1,
    };
  }

  private _getEntity(): HassEntity | undefined {
    if (!this.hass || !this._config) return undefined;
    return this.hass.states[this._config.entity];
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

  private _evaluateKudos(value: number, rules: KudosRule[]): string | null {
    for (const rule of rules) {
      const aboveMin = value >= rule.min;
      const belowMax = rule.max == null || value <= rule.max;
      if (aboveMin && belowMax) return rule.label;
    }
    return null;
  }

  private _renderValueRow(entity: HassEntity): TemplateResult {
    const stateValue = entity.state;
    const displayStyle = this._config.display_style || "unit";

    if (displayStyle === "score") {
      return html`
        <div class="value-row">
          <span class="value">${stateValue}</span>
          <span class="score-max">/ ${this._config.score_max}</span>
        </div>
      `;
    }

    const unit = entity.attributes.unit_of_measurement as string | undefined;
    return html`
      <div class="value-row">
        <span class="value">${stateValue}</span>
        ${unit ? html`<span class="unit">${unit}</span>` : nothing}
      </div>
    `;
  }

  private _renderSupportingRow(entity: HassEntity): TemplateResult | typeof nothing {
    const supporting = this._config.supporting_row;
    if (!supporting || supporting.type === "none") return nothing;

    if (supporting.type === "kudos" && supporting.kudos_rules) {
      const numValue = parseFloat(entity.state);
      if (isNaN(numValue)) return nothing;
      const label = this._evaluateKudos(numValue, supporting.kudos_rules);
      if (!label) return nothing;
      return html`<div class="supporting-row">${label}</div>`;
    }

    return nothing;
  }

  protected render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html``;
    }

    const entity = this._getEntity();
    if (!entity) {
      return html`
        <ha-card>
          <div class="card-content">
            <div class="not-found">Entity not found: ${this._config.entity}</div>
          </div>
        </ha-card>
      `;
    }

    const accent = this._getAccentColor();
    const icon = this._getIcon(entity);
    const title = this._getTitle(entity);

    return html`
      <ha-card>
        <div class="card-content">
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
      </ha-card>
    `;
  }

  static get styles(): CSSResultGroup {
    return css`
      ha-card {
        padding: 12px;
        overflow: hidden;
        box-sizing: border-box;
      }
      .card-content {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 12px;
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
        margin-top: 4px;
      }
      .value {
        font-size: 32px;
        font-weight: 700;
        color: var(--primary-text-color);
        line-height: 1.15;
      }
      .unit {
        font-size: 14px;
        font-weight: 500;
        color: var(--secondary-text-color);
        margin-left: 5px;
      }
      .score-max {
        font-size: 14px;
        font-weight: 400;
        color: var(--secondary-text-color);
        margin-left: 6px;
        opacity: 0.7;
      }
      .supporting-row {
        font-size: 13px;
        font-weight: 500;
        color: var(--secondary-text-color);
        margin-top: 4px;
        line-height: 1.2;
      }
      .not-found {
        font-size: 13px;
        color: var(--error-color, #ef4444);
        padding: 8px 0;
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
  description: "A compact metric + trend card for Home Assistant",
});
