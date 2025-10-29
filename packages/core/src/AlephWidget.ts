export interface AlephWidgetOptions {
  /**
   * Container element or selector where widget will be mounted
   */
  container: string | HTMLElement;
  /**
   * Custom className for the widget
   */
  className?: string;
  /**
   * Custom styles for the widget
   */
  style?: Partial<CSSStyleDeclaration>;
}

/**
 * AlephWidget - Core JavaScript class for Aleph Widget
 */
export class AlephWidget {
  private container: HTMLElement;
  private widget: HTMLElement | null = null;
  private options: AlephWidgetOptions;

  constructor(options: AlephWidgetOptions) {
    this.options = options;
    
    // Get container element
    if (typeof options.container === 'string') {
      const element = document.querySelector(options.container);
      if (!element) {
        throw new Error(`Container element not found: ${options.container}`);
      }
      this.container = element as HTMLElement;
    } else {
      this.container = options.container;
    }

    this.render();
  }

  private render(): void {
    // Create widget element
    this.widget = document.createElement('div');
    this.widget.className = `aleph-widget ${this.options.className || ''}`.trim();

    // Apply custom styles
    if (this.options.style) {
      Object.assign(this.widget.style, this.options.style);
    }

    // Create widget content
    const content = document.createElement('div');
    content.className = 'aleph-widget-content';
    
    const heading = document.createElement('h3');
    heading.textContent = 'Aleph Widget';
    
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Widget content will be here';
    
    content.appendChild(heading);
    content.appendChild(paragraph);
    this.widget.appendChild(content);

    // Mount to container
    this.container.appendChild(this.widget);
  }

  /**
   * Destroy widget and remove from DOM
   */
  public destroy(): void {
    if (this.widget && this.widget.parentNode) {
      this.widget.parentNode.removeChild(this.widget);
      this.widget = null;
    }
  }

  /**
   * Update widget content
   */
  public update(options: Partial<AlephWidgetOptions>): void {
    this.destroy();
    this.options = { ...this.options, ...options };
    this.render();
  }
}

