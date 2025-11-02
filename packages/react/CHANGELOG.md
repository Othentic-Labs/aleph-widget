# @aleph-fi/widget-react

## 1.0.0

### Major Changes

- Breaking changes to AlephWidget API:

  - Removed `width` prop (replaced with `height`)
  - Removed `onHeightChange` callback (replaced with `autoResize` boolean prop)
  - Changed component implementation to use `React.forwardRef` for ref forwarding support
  - Auto-resizing is now opt-in via `autoResize` prop (previously always enabled)
  - Removed default `border: "none"` style
  - Changed license from MIT to UNLICENSED

## 0.2.1

### Patch Changes

- Change information in documentation

## 0.2.0

### Minor Changes

- Enhanced widget functionality with improved callbacks and configuration options

  - Added onHeightChange callback for dynamic height updates
  - Added onReady callback for widget initialization
  - Added onError callback for error handling
  - Added theme configuration support (light/dark)
  - Improved iframe security with sandbox attributes
  - Updated widget URL to production endpoint
