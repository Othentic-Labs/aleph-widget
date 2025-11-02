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
import { AlephWidget } from "@aleph-fi/widget-react";

function App() {
  return (
    <div>
      <AlephWidget vaultId="your-vault-id" theme="light" autoResize />
    </div>
  );
}
```

## Props

| Prop         | Type                     | Required | Default   | Description                                              |
| ------------ | ------------------------ | -------- | --------- | -------------------------------------------------------- |
| `vaultId`    | `string`                 | Yes      | -         | Vault ID to display in the widget                        |
| `theme`      | `"light" \| "dark"`      | No       | `"light"` | Widget theme                                             |
| `height`     | `string \| number`       | No       | `400`     | Widget height (initial/minimum height)                   |
| `autoResize` | `boolean`                | No       | `false`   | Enable automatic height resizing based on widget content |
| `className`  | `string`                 | No       | `""`      | Additional className for the iframe container            |
| `style`      | `React.CSSProperties`    | No       | `{}`      | Additional inline styles for the iframe                  |
| `onReady`    | `() => void`             | No       | -         | Callback fired when widget is ready                      |
| `onError`    | `(error: Error) => void` | No       | -         | Callback fired when widget encounters an error           |

For more details, see the [React package documentation](./packages/react/README.md).

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

Proprietary - See [LICENSE](LICENSE) file for details
