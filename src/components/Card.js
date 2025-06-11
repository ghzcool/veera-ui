import { LitElement, html } from 'lit';

export class VeeraCard extends LitElement {
  static properties = {
    variant: { type: String, reflect: true },
    size: { type: String, reflect: true },
    flat: { type: Boolean, reflect: true }
  };

  constructor() {
    super();
    this.variant = 'primary';
    this.size = 'md';
    this.flat = false;
  }

  firstUpdated() {
    const style = document.createElement('style');
    let cssText = '';
    for (const sheet of Array.from(document.styleSheets)) {
      try {
        for (const rule of Array.from(sheet.cssRules || [])) {
          if (rule.selectorText && rule.selectorText.includes('.v-card')) {
            cssText += rule.cssText + '\n';
          }
        }
      } catch (e) {
        console.error(e);
      }
    }
    style.textContent = cssText;
    this.shadowRoot.prepend(style);
  }

  getClassName() {
    return `v-card v-card--${this.size} v-card--${this.variant}${this.flat ? ' v-card--flat' : ''}`;
  }

  render() {
    return html`
      <div class="${this.getClassName()}">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('v-card', VeeraCard);
