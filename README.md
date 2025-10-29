# @aleph-fi/widget-react

Aleph Widget for React applications.

## Installation

```bash
npm install @aleph-fi/widget-react
# or
pnpm install @aleph-fi/widget-react
# or
yarn add @aleph-fi/widget-react
```

## Usage

```tsx
import { AlephWidget } from '@aleph-fi/widget-react';

function App() {
  return (
    <div>
      <AlephWidget 
        vaultId="your-vault-id"
        theme="light"
        width="424px"
      />
    </div>
  );
}
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `vaultId` | `string` | Yes | - | Vault ID to display in the widget |
| `theme` | `"light" \| "dark"` | No | `"light"` | Widget theme |
| `width` | `string \| number` | No | `"424px"` | Widget width |
| `className` | `string` | No | `""` | Additional className for the iframe container |
| `style` | `React.CSSProperties` | No | `{}` | Additional inline styles for the iframe |
| `onHeightChange` | `(height: number) => void` | No | - | Callback fired when widget height changes |
| `environment` | `"production"` | No | `"production"` | Widget environment |
| `onReady` | `() => void` | No | - | Callback fired when widget is ready |
| `onError` | `(error: Error) => void` | No | - | Callback fired when widget encounters an error |

## Development

### Prerequisites

- Node.js 18+
- npm 7+ (for workspaces support)

### Setup

```bash
# Install dependencies
npm install

# Build all packages
npm run build

# Development mode (watch)
npm run dev
```

### Scripts

- `npm run build` - Build all packages
- `npm run dev` - Run all packages in watch mode
- `npm run clean` - Clean all build artifacts and node_modules
- `npm run publish:packages` - Publish all packages to npm

## License

MIT