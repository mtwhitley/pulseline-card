export interface PulseLineCardConfig {
  type: string;
  entity?: string;
}

export interface HomeAssistant {
  states: Record<string, unknown>;
  callService: (domain: string, service: string, data?: Record<string, unknown>) => Promise<void>;
}
