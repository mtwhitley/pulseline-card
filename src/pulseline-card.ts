import { LitElement, html, css, CSSResultGroup, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { CARD_NAME, CARD_VERSION } from "./const";
import type { PulseLineCardConfig, HomeAssistant } from "./types";

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
  @state() private _config?: PulseLineCardConfig;

  public static getStubConfig(): Record<string, unknown> {
    return { entity: "" };
  }

  public setConfig(config: PulseLineCardConfig): void {
    if (!config || typeof config !== "object") {
      throw new Error("Invalid configuration");
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

  protected render(): TemplateResult {
    if (!this._config) {
      return html``;
    }

    return html`
      <ha-card>
        <div class="card-content">
          <div class="title">PulseLine Card</div>
          <div class="subtitle">Scaffold ready</div>
        </div>
      </ha-card>
    `;
  }

  static get styles(): CSSResultGroup {
    return css`
      ha-card {
        padding: 16px;
      }
      .card-content {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .title {
        font-size: 1.1em;
        font-weight: 500;
        color: var(--primary-text-color);
      }
      .subtitle {
        font-size: 0.85em;
        color: var(--secondary-text-color);
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
