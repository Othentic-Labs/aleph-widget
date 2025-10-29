import React, { useEffect, useRef, useState } from "react";

const WIDGET_URLS = {
  production: "https://aleph-widget-dev.up.railway.app",
} as const;

type Environment = keyof typeof WIDGET_URLS;

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
   * Widget width
   * @default '424px'
   */
  width?: string | number;

  /**
   * Additional className for the iframe container
   */
  className?: string;

  /**
   * Additional inline styles for the iframe
   */
  style?: React.CSSProperties;

  /**
   * Callback fired when widget height changes
   * @param height - New height in pixels
   */
  onHeightChange?: (height: number) => void;

  /**
   * Widget environment
   * Use 'staging' for testing, 'production' for live
   * @default 'production'
   */
  environment?: Environment;

  /**
   * Callback fired when widget is ready
   */
  onReady?: () => void;

  /**
   * Callback fired when widget encounters an error
   */
  onError?: (error: Error) => void;
}

export const AlephWidget: React.FC<AlephWidgetProps> = ({
  vaultId,
  theme = "light",
  width = "424px",
  className = "",
  style = {},
  onHeightChange,
  environment = "production",
  onReady,
  onError,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(600);
  const [isReady, setIsReady] = useState(false);

  const widgetUrl = WIDGET_URLS[environment];
  const iframeSrc = `${widgetUrl}?theme=${theme}&vaultId=${vaultId}`;

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const validOrigins = Object.values(WIDGET_URLS) as string[];
      if (!validOrigins.includes(event.origin)) {
        return;
      }

      switch (event.data.type) {
        case "resize":
          if (typeof event.data.height === "number") {
            setHeight(event.data.height);
            onHeightChange?.(event.data.height);
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
  }, [onHeightChange, onReady, onError]);

  const widthStyle = typeof width === "number" ? `${width}px` : width;

  return (
    <iframe
      ref={iframeRef}
      src={iframeSrc}
      className={className}
      style={{
        width: widthStyle,
        height: `${height}px`,
        border: "none",
        display: "block",
        ...style,
      }}
      allow="camera; microphone; geolocation; fullscreen"
      title="Aleph Vault Widget"
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
    />
  );
};

export default AlephWidget;
