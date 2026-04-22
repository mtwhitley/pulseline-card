import type { HomeAssistant } from "./types";

interface StatisticValue {
  start: string;
  mean?: number;
}

interface HistoryEntry {
  state?: string;
  last_updated?: string;
  s?: string;
  lu?: number;
}

function parseNumericEntries(
  entries: HistoryEntry[],
): Array<{ value: number; timestamp: number }> {
  const result: Array<{ value: number; timestamp: number }> = [];
  for (const entry of entries) {
    const stateStr = entry.s ?? entry.state;
    if (!stateStr) continue;
    const val = parseFloat(stateStr);
    if (isNaN(val)) continue;
    let ts: number;
    if (entry.lu != null) {
      ts = entry.lu * 1000;
    } else if (entry.last_updated) {
      ts = new Date(entry.last_updated).getTime();
    } else {
      continue;
    }
    result.push({ value: val, timestamp: ts });
  }
  return result;
}

export async function fetchDailyBuckets(
  hass: HomeAssistant,
  entityId: string,
  days: number,
): Promise<(number | null)[]> {
  const now = new Date();
  const startDate = new Date(now);
  startDate.setDate(startDate.getDate() - (days - 1));
  startDate.setHours(0, 0, 0, 0);

  // Try recorder statistics first
  try {
    const result = await hass.callWS<Record<string, StatisticValue[]>>({
      type: "recorder/statistics_during_period",
      statistic_ids: [entityId],
      period: "day",
      start_time: startDate.toISOString(),
      types: ["mean"],
    });

    const stats = result[entityId];
    if (stats && stats.length > 0) {
      const buckets: (number | null)[] = new Array(days).fill(null);
      for (const stat of stats) {
        if (stat.mean == null) continue;
        const statDate = new Date(stat.start);
        const diffMs = statDate.getTime() - startDate.getTime();
        const dayIndex = Math.floor(diffMs / (24 * 60 * 60 * 1000));
        if (dayIndex >= 0 && dayIndex < days) {
          buckets[dayIndex] = stat.mean;
        }
      }
      return buckets;
    }
  } catch {
    // Fall through to history fallback
  }

  // Fallback: history with daily averaging
  return fetchDailyFromHistory(hass, entityId, days, startDate);
}

async function fetchDailyFromHistory(
  hass: HomeAssistant,
  entityId: string,
  days: number,
  startDate: Date,
): Promise<(number | null)[]> {
  try {
    const result = await hass.callWS<Record<string, HistoryEntry[]>>({
      type: "history/history_during_period",
      start_time: startDate.toISOString(),
      entity_ids: [entityId],
      minimal_response: true,
      no_attributes: true,
      significant_changes_only: false,
    });

    const entries = parseNumericEntries(result[entityId] || []);
    const buckets: (number | null)[] = new Array(days).fill(null);
    const sums: number[] = new Array(days).fill(0);
    const counts: number[] = new Array(days).fill(0);

    for (const entry of entries) {
      const diffMs = entry.timestamp - startDate.getTime();
      const dayIndex = Math.floor(diffMs / (24 * 60 * 60 * 1000));
      if (dayIndex >= 0 && dayIndex < days) {
        sums[dayIndex] += entry.value;
        counts[dayIndex]++;
      }
    }

    for (let i = 0; i < days; i++) {
      if (counts[i] > 0) {
        buckets[i] = sums[i] / counts[i];
      }
    }

    return buckets;
  } catch {
    return new Array(days).fill(null);
  }
}

export async function fetchRecentValues(
  hass: HomeAssistant,
  entityId: string,
  count: number,
): Promise<number[]> {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 30);

  try {
    const result = await hass.callWS<Record<string, HistoryEntry[]>>({
      type: "history/history_during_period",
      start_time: startDate.toISOString(),
      entity_ids: [entityId],
      minimal_response: true,
      no_attributes: true,
      significant_changes_only: false,
    });

    const entries = parseNumericEntries(result[entityId] || []);
    return entries.map((e) => e.value).slice(-count);
  } catch {
    return [];
  }
}
