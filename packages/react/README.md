# @aleph-fi/widget-react

React component for Aleph Widget.

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
        onReady={() => console.log('Widget is ready')}
        onError={(error) => console.error('Widget error:', error)}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `vaultId` | `string` | **Yes** | - | Vault ID to display in the widget |
| `theme` | `"light" \| "dark"` | No | `"light"` | Widget theme |
| `width` | `string \| number` | No | `"424px"` | Widget width (e.g., "424px" or 424) |
| `className` | `string` | No | `""` | Additional className for the iframe container |
| `style` | `React.CSSProperties` | No | `{}` | Additional inline styles for the iframe |
| `onHeightChange` | `(height: number) => void` | No | - | Callback fired when widget height changes |
| `environment` | `"production"` | No | `"production"` | Widget environment |
| `onReady` | `() => void` | No | - | Callback fired when widget is ready |
| `onError` | `(error: Error) => void` | No | - | Callback fired when widget encounters an error |

## Example with all props

```tsx
import { AlephWidget } from '@aleph-fi/widget-react';

function App() {
  return (
    <AlephWidget 
      vaultId="abc123"
      theme="dark"
      width={500}
      className="my-widget"
      style={{ margin: '20px' }}
      onHeightChange={(height) => console.log('New height:', height)}
      onReady={() => console.log('Widget loaded')}
      onError={(error) => console.error('Error:', error)}
      environment="production"
    />
  );
}
```

## TypeScript

This package includes TypeScript definitions. Import the types:

```tsx
import { AlephWidget, AlephWidgetProps } from '@aleph-fi/widget-react';
```

## License

MIT

