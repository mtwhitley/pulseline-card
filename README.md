# PulseLine Card

A compact, data-dense custom card for Home Assistant that combines a primary metric with contextual insights like trends, deltas, and status labels.

PulseLine is designed to present meaningful information in a small footprint while maintaining strong visual balance and clarity.

[screenshot - overview of multiple PulseLine cards in a dashboard]

---

## Installation

### HACS (Recommended)

PulseLine Card can be installed via HACS as a custom repository.

#### Step 1: Install HACS
If you do not already have HACS installed, follow:
https://hacs.xyz/docs/setup/download/

#### Step 2: Add Custom Repository

1. Open **HACS**
2. Go to **Frontend**
3. Click the **⋮ (three dots)** menu (top right)
4. Select **Custom repositories**
5. Add:
   - **Repository**: `https://github.com/mtwhitley/pulseline-card`
   - **Category**: `Dashboard`
6. Click **Add**

#### Step 3: Install

1. Search for **PulseLine Card** in HACS
2. Click **Download**
3. Restart Home Assistant (or reload resources)

---

### Manual Installation (Fallback)

1. Download `pulseline-card.js` from the latest release  
2. Copy to your Home Assistant `/config/www/` directory  
3. Add to your Lovelace resources:

```yaml
resources:
  - url: /local/pulseline-card.js
    type: module
```

4. Restart Home Assistant or reload resources  

> If the card does not appear after installation, refresh your browser or clear cache.

---

## Quick Start

```yaml
type: custom:pulseline-card
entity: sensor.sleep_score
name: Sleep Score
```

<img width="244" height="99" alt="Screenshot 2026-04-23 at 10 17 30 AM" src="https://github.com/user-attachments/assets/95c9c353-0225-4d0a-b1c0-33031a49b2ee" />

---

## Configuration

| Option | Type | Default | Description |
|--------|------|--------|-------------|
| entity | string | required | Primary sensor |
| entity_2 | string | — | Second sensor (dual mode only) |
| card_mode | single / dual | single | Enables dual value display |
| name | string | entity name | Card title |
| icon | string | auto | MDI icon |
| accent_color | string | theme | Accent color |
| display_style | unit / score | unit | Value display mode |
| score_max | number | — | Required for score mode |
| value_precision | number | 0 | Decimal precision |
| supporting_row | object | none | Adds kudos or delta |
| footer_row | object | none | Adds sparkline or progress |

---

## Name Row

The card title is determined automatically unless overridden. If `name` is set in the config, it is used as-is; otherwise the entity's `friendly_name` is used, falling back to the raw entity ID.

---

## Value Row

The value row is the visual centerpiece of the card. In `unit` mode it shows the value followed by its unit; in `score` mode it shows the value followed by `/ score_max`.

The `value_precision` setting controls decimal places for display, and the same rounded value is used for all logic including kudos and delta.

When an entity is unavailable or unknown, the value row renders a dash and all dependent rows (kudos, delta, footer) are hidden.

---

## Supporting Row

### Kudos

Kudos maps a numeric value to a human-readable label based on ordered range rules. Each rule defines a `min` (and optional `max`) threshold with a label; rules are evaluated in order and the first match wins.

The value is rounded according to `value_precision` before comparison, so the label always corresponds to the number shown on screen. Make sure range boundaries align with your configured precision to avoid gaps.

```yaml
type: custom:pulseline-card
entity: sensor.sleep_score
name: Sleep Score
supporting_row:
  type: kudos
  kudos_rules:
    - min: 80
      label: Good
    - min: 60
      max: 79
      label: Fair
    - min: 0
      max: 59
      label: Poor
```

<img width="250" height="121" alt="Screenshot 2026-04-23 at 10 18 58 AM" src="https://github.com/user-attachments/assets/cfc971c9-ab72-41ff-a74a-2b4ac8d67827" />


---

### Delta

Delta shows the net change across a time window, not just the difference from the previous value. It is calculated as the last value minus the first value in the selected data set.

The data set depends on the footer configuration. When a `recent_values_sparkline` footer is present, delta uses the same values shown in that sparkline — the last N values, controlled by `x_values` (default 7). When a `recent_days_sparkline` footer is present, delta uses the same daily bucket averages, covering up to 7 days.

When no footer is configured, delta uses a fixed internal window of the 7 most recent distinct values. This is not configurable without adding a footer.

Values are rounded according to `value_precision` before the delta is computed. If fewer than 2 valid values exist, the delta row is hidden.

```yaml
type: custom:pulseline-card
entity: sensor.sleep_score
name: Sleep Score
icon: mdi:power-sleep
accent_color: "#8b5cf6"
display_style: score
score_max: 100
supporting_row:
  type: delta
```

<img width="247" height="118" alt="Screenshot 2026-04-23 at 12 56 45 PM" src="https://github.com/user-attachments/assets/ceef2aa4-0d7c-406b-b535-cf90f3469137" />


---

## Footer Row

### Recent Days Sparkline

The recent days sparkline shows a 7-day trend using daily aggregated averages. Each point represents the mean value for that calendar day, derived from recorder statistics when available and falling back to raw state history otherwise.

Missing days are handled gracefully: interior gaps skip the dot but the line connects across, while leading or trailing gaps simply shorten the visible trend. Day labels appear below with the current day highlighted in the accent color.

```yaml
type: custom:pulseline-card
entity: sensor.sleep_score
name: Sleep Score
icon: mdi:power-sleep
accent_color: "#8b5cf6"
display_style: score
score_max: 100
footer_row:
  type: recent_days_sparkline
```

<img width="247" height="141" alt="Screenshot 2026-04-23 at 12 58 08 PM" src="https://github.com/user-attachments/assets/2547458d-ce03-4cd0-a43c-eb61e60d1a1a" />


---

### Recent Values Sparkline

The recent values sparkline plots the last N distinct recorded values, ordered chronologically. The default is 7 values, configurable up to 14 via `x_values`.

Consecutive identical values are automatically deduplicated so repeated unchanged readings don't consume plot points. If the recent window doesn't contain enough distinct values, the card widens its lookback from 30 to 90 to 365 days, and falls back to daily statistics if raw history has been purged.

```yaml
type: custom:pulseline-card
entity: sensor.sleep_score
name: Sleep Score
icon: mdi:power-sleep
accent_color: "#8b5cf6"
display_style: score
score_max: 100
footer_row:
  type: recent_values_sparkline
  x_values: 10
```

<img width="250" height="132" alt="Screenshot 2026-04-23 at 12 58 29 PM" src="https://github.com/user-attachments/assets/f3c42af5-3e78-43a6-88cc-e7eeb6292da1" />


---

### Progress Bar (Score Mode Only)

The progress bar shows the current value as a proportion of `score_max`, rendered as a thin accent-colored bar. It is a snapshot of the current state, not a trend.

Only available when `display_style` is set to `score`. The fill is clamped between 0% and 100%.

```yaml
type: custom:pulseline-card
entity: sensor.sleep_score
name: Sleep Score
icon: mdi:power-sleep
accent_color: "#8b5cf6"
display_style: score
score_max: 100
footer_row:
  type: progress_bar
```

<img width="244" height="102" alt="Screenshot 2026-04-23 at 12 58 55 PM" src="https://github.com/user-attachments/assets/9051215c-0a6f-42a5-9a01-3bc0682de68a" />


---

## Dual Mode

Dual mode displays two entity values side by side in a fixed `value1 / value2` format. It is designed for naturally paired metrics like blood pressure (systolic/diastolic).

Only the first entity's unit of measurement is shown. Both values use the same `value_precision` setting.

If kudos is configured, rules are evaluated against the first entity's value only — no combined or averaged logic is applied. If either entity becomes unavailable, the entire value row falls back to `– / –`.

Dual mode does not support footer rows, delta, or score display style.

```yaml
type: custom:pulseline-card
card_mode: dual
entity: sensor.systolic
entity_2: sensor.diastolic
name: Blood Pressure
icon: mdi:arrow-expand-horizontal
accent_color: "#ff0000"
value_precision: 0
```

<img width="248" height="90" alt="Screenshot 2026-04-23 at 1 02 40 PM" src="https://github.com/user-attachments/assets/c61864ce-7f54-4e17-9f73-1fa0eebb4198" />

---

## Dual Mode with Kudos

```yaml
type: custom:pulseline-card
card_mode: dual
entity: sensor.systolic
entity_2: sensor.diastolic
icon: mdi:arrow-expand-horizontal
accent_color: "#ff0000"
value_precision: 0
supporting_row:
  type: kudos
  kudos_rules:
    - min: 0
      max: 120
      label: Normal
    - min: 121
      max: 139
      label: Elevated
    - min: 140
      label: High
```

<img width="244" height="112" alt="Screenshot 2026-04-23 at 1 02 03 PM" src="https://github.com/user-attachments/assets/3b417db2-f900-49cb-b334-f95a53f053b3" />

---

### Notes

- No footer supported  
- No delta supported  
- Score mode not supported  

---

## Behavior Details

### Precision

- `value_precision` controls both display and logic  
- Kudos evaluates using the same rounded value shown on screen  

---

### Unavailable Handling

- Displays `-` instead of "unavailable"  
- Dual mode shows `- / -`  
- Hides:
  - units  
  - kudos  
  - footer  

---

### History Behavior

- Progressive lookback (30 → 90 → 365 days)  
- Falls back to statistics when raw history is unavailable  
- Deduplicates repeated values  

---

### Click Behavior

- Clicking the card opens the Home Assistant **More Info** dialog for the primary entity  

---

## Layout Tips

### Use Grid Cards (Recommended)

PulseLine cards align much better when placed inside a grid card.

```yaml
type: grid
columns: 2
square: false
cards:
  - type: custom:pulseline-card
    entity: sensor.sleep_score
  - type: custom:pulseline-card
    entity: sensor.steps
```

<img width="1169" height="800" alt="layout" src="https://github.com/user-attachments/assets/e0fcee09-796e-40ca-a168-f3fa83e24038" />

---

## Design Notes

PulseLine is intentionally designed to be:

- Compact and information-dense  
- Visually balanced within Home Assistant sections  
- Consistent in typography and spacing  
- Accent-driven rather than color-coded by meaning  
- Graceful when data is missing or sparse  

---

## Known Limitations

- No visual card editor yet  
- Dual mode limited to two entities  
- No localization support  
- Mobile layout uses responsive scaling rather than full adaptive layout  

---

## Credits

- Created by Michael Whitley  
- Built with assistance from Claude Code (implementation and iteration) and Codex (planning, review, validation, and guardrails)
