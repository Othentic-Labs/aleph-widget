import React from 'react';

export interface AlephWidgetProps {
  /**
   * Custom className for the widget container
   */
  className?: string;
  /**
   * Additional styles for the widget
   */
  style?: React.CSSProperties;
}

/**
 * AlephWidget - React component for Aleph Widget
 */
export const AlephWidget: React.FC<AlephWidgetProps> = ({ 
  className = '', 
  style 
}) => {
  return (
    <div 
      className={`aleph-widget ${className}`}
      style={style}
    >
      <div className="aleph-widget-content">
        <h3>Aleph Widget</h3>
        <p>Widget content will be here</p>
      </div>
    </div>
  );
};

