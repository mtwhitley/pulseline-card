export interface KudosRule {
  min: number;
  max?: number;
  label: string;
}

export interface SupportingRowConfig {
  type: "none" | "kudos";
  kudos_rules?: KudosRule[];
}

export interface PulseLineCardConfig {
  type: string;
  entity: string;
  name?: string;
  icon?: string;
  accent_color?: string;
  display_style?: "unit" | "score";
  score_max?: number;
  supporting_row?: SupportingRowConfig;
}

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  callService: (domain: string, service: string, data?: Record<string, unknown>) => Promise<void>;
}
