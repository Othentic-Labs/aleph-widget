import React, { useEffect, useState } from "react";

const WIDGET_URL = "https://aleph-widget-dev.up.railway.app" as const;

export interface AlephWidgetProps {
  /**
   * Vault ID to display in the widget
   */
  vaultId: string;

  /**
   * Theme: 'light' or 'dark'
   * @default 'light'
   */
  theme?: "light" | "dark";

  /**
   * Widget height (initial/minimum height)
   * @default 400
   */
  height?: string | number;

  /**
   * Enable automatic height resizing based on widget content
   * @default false
   */
  autoResize?: boolean;

  /**
   * Additional className for the iframe container
   */
  className?: string;

  /**
   * Additional inline styles for the iframe
   */
  style?: React.CSSProperties;

  /**
   * Callback fired when widget is ready
   */
  onReady?: () => void;

  /**
   * Callback fired when widget encounters an error
   */
  onError?: (error: Error) => void;
}

export const AlephWidget = React.forwardRef<
  HTMLIFrameElement,
  AlephWidgetProps
>(
  (
    {
      vaultId,
      theme = "light",
      height: initialHeight = 400,
      autoResize = false,
      className = "",
      style = {},
      onReady,
      onError,
    },
    ref
  ) => {
    const [height, setHeight] = useState<string | number>(initialHeight);
    const [_, setIsReady] = useState(false);

    const iframeSrc = `${WIDGET_URL}?theme=${theme}&vaultId=${vaultId}`;

    useEffect(() => {
      const handleMessage = (event: MessageEvent) => {
        if (event.origin !== WIDGET_URL) {
          return;
        }

        switch (event.data.type) {
          case "resize":
            if (autoResize && typeof event.data.height === "number") {
              setHeight(event.data.height);
            }
            break;

          case "ready":
            setIsReady(true);
            onReady?.();
            break;

          case "error":
            onError?.(new Error(event.data.message || "Widget error"));
            break;
        }
      };

      window.addEventListener("message", handleMessage);

      return () => {
        window.removeEventListener("message", handleMessage);
      };
    }, [autoResize, onReady, onError]);

    const heightStyle = typeof height === "number" ? `${height}px` : height;

    return (
      <iframe
        ref={ref}
        src={iframeSrc}
        className={className}
        style={{
          height: heightStyle,
          display: "block",
          ...style,
        }}
        allow="camera; microphone; geolocation; fullscreen"
        title="Aleph Vault Widget"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
      />
    );
  }
);

AlephWidget.displayName = "AlephWidget";

export default AlephWidget;
