# @aleph-fi/widget

Vanilla JavaScript library for Aleph Widget. This package provides a pure JavaScript implementation without any framework dependencies.

## Installation

```bash
npm install @aleph-fi/widget
```

## Usage

### ES Module

```javascript
import { AlephWidget } from '@aleph-fi/widget';

const widget = new AlephWidget({
  container: '#widget-container',
  className: 'my-custom-class',
  style: {
    backgroundColor: '#f0f0f0',
    padding: '20px'
  }
});
```

### HTML Script Tag

```html
<!DOCTYPE html>
<html>
<head>
  <title>Aleph Widget Demo</title>
</head>
<body>
  <div id="widget-container"></div>
  
  <script src="path/to/aleph-widget-core.js"></script>
  <script>
    const widget = new AlephWidget({
      container: '#widget-container'
    });
  </script>
</body>
</html>
```

## API

### Constructor Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `container` | `string \| HTMLElement` | Yes | Container element or CSS selector where widget will be mounted |
| `className` | `string` | No | Custom className for the widget |
| `style` | `Partial<CSSStyleDeclaration>` | No | Custom styles for the widget |

### Methods

#### `destroy()`
Removes the widget from the DOM.

```javascript
widget.destroy();
```

#### `update(options)`
Updates the widget with new options.

```javascript
widget.update({
  className: 'new-class',
  style: { color: 'blue' }
});
```

## License

MIT

