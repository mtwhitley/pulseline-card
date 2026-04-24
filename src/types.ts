export interface KudosRule {
  min: number;
  max?: number;
  label: string;
  icon?: string;
  color?: string;
  accent_override?: boolean;
}

export interface SupportingRowConfig {
  type: "none" | "kudos" | "delta";
  kudos_rules?: KudosRule[];
}

export interface FooterRowConfig {
  type: "none" | "sparkline_days" | "sparkline_values" | "progress_bar";
  x_values?: number;
}

export interface PulseLineCardConfig {
  type: string;
  entity: string;
  entity_2?: string;
  card_mode?: "single" | "dual";
  name?: string;
  icon?: string;
  accent_color?: string;
  display_style?: "unit" | "score";
  score_max?: number;
  value_precision?: number;
  supporting_row?: SupportingRowConfig;
  footer_row?: FooterRowConfig;
}

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  callService: (domain: string, service: string, data?: Record<string, unknown>) => Promise<void>;
  callWS: <T>(msg: Record<string, unknown>) => Promise<T>;
}
