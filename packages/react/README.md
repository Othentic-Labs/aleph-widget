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
import { AlephWidget } from "@aleph-fi/widget-react";

function App() {
  return (
    <div>
      <AlephWidget
        vaultId="your-vault-id"
        theme="light"
        onReady={() => console.log("Widget is ready")}
        onError={(error) => console.error("Widget error:", error)}
        autoResize
      />
    </div>
  );
}
```

## Props

| Prop         | Type                     | Required | Default   | Description                                                  |
| ------------ | ------------------------ | -------- | --------- | ------------------------------------------------------------ |
| `vaultId`    | `string`                 | **Yes**  | -         | Vault ID to display in the widget                            |
| `theme`      | `"light" \| "dark"`      | No       | `"light"` | Widget theme                                                 |
| `height`     | `string \| number`       | No       | `400`     | Widget height (initial/minimum height, e.g., "400px" or 400) |
| `autoResize` | `boolean`                | No       | `false`   | Enable automatic height resizing based on widget content     |
| `className`  | `string`                 | No       | `""`      | Additional className for the iframe container                |
| `style`      | `React.CSSProperties`    | No       | `{}`      | Additional inline styles for the iframe                      |
| `onReady`    | `() => void`             | No       | -         | Callback fired when widget is ready                          |
| `onError`    | `(error: Error) => void` | No       | -         | Callback fired when widget encounters an error               |

## Example with all props

```tsx
import { AlephWidget } from "@aleph-fi/widget-react";
import { useRef } from "react";

function App() {
  const widgetRef = useRef<HTMLIFrameElement>(null);

  return (
    <AlephWidget
      ref={widgetRef}
      className="my-widget"
      vaultId="vault-id"
      theme="dark"
      onReady={() => console.log("Widget loaded")}
      onError={(error) => console.error("Error:", error)}
      autoResize
    />
  );
}
```

## TypeScript

This package includes TypeScript definitions. Import the types:

```tsx
import { AlephWidget, AlephWidgetProps } from "@aleph-fi/widget-react";
```

## License

UNLICENSED
