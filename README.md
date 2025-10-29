# @aleph-fi/widget

Monorepo for Aleph Widget packages.

## Packages

This repository is organized as a monorepo containing the following packages:

- [`@aleph-fi/widget-react`](./packages/react) - React component for Aleph Widget
- [`@aleph-fi/widget`](./packages/core) - Vanilla JavaScript library for Aleph Widget

## Installation

### React Component

```bash
npm install @aleph-fi/widget-react
```

### Vanilla JavaScript

```bash
npm install @aleph-fi/widget
```

## Usage

### React

```tsx
import { AlephWidget } from '@aleph-fi/widget-react';

function App() {
  return (
    <div>
      <AlephWidget />
    </div>
  );
}
```

### Vanilla JavaScript

```javascript
import { AlephWidget } from '@aleph-fi/widget';

const widget = new AlephWidget({
  container: '#widget-container'
});
```

## Development

### Prerequisites

- Node.js 18+
- npm 7+ (для поддержки workspaces)

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