# PulseLine Card

A compact metric + trend card for Home Assistant.

> **Note:** This is a phase 0 scaffold. The card currently renders a placeholder UI only. Functionality (sparkline, metrics, deltas) will be added in future phases.

## Installation

### HACS (recommended)

1. Open HACS in Home Assistant
2. Go to **Frontend** > three-dot menu > **Custom repositories**
3. Add the repository URL with category **Dashboard**
4. Search for "pulseline-card" and install
5. Refresh your browser

### Manual

1. Download `pulseline-card.js` from the [latest release](../../releases/latest)
2. Copy it to your Home Assistant `config/www/` directory
3. Add the resource in **Settings > Dashboards > Resources**:
   - URL: `/local/pulseline-card.js`
   - Type: JavaScript Module

## Usage

```yaml
type: custom:pulseline-card
```

## Development

### Prerequisites

- Node.js (18+)
- npm

### Setup

```bash
npm install
```

### Build

```bash
npm run build
```

Output: `dist/pulseline-card.js`

### Watch mode

```bash
npm run dev
```

### Lint

```bash
npm run lint
```

### Local testing

1. Build the card: `npm run build`
2. Copy or symlink `dist/pulseline-card.js` to your Home Assistant `config/www/` directory
3. Add the resource in Home Assistant: `/local/pulseline-card.js` (JavaScript Module)
4. Add the card to a dashboard with `type: custom:pulseline-card`

## License

MIT
