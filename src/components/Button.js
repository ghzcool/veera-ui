import { LitElement, html } from 'lit';

export class VeeraButton extends LitElement {
  static properties = {
    variant: { type: String, reflect: true },
    size: { type: String, reflect: true },
    disabled: { type: Boolean, reflect: true },
    iconOnly: { type: Boolean, attribute: 'icon-only', reflect: true },
    fullWidth: { type: Boolean, attribute: 'full-width', reflect: true }
  };

  constructor() {
    super();
    this.variant = 'primary';
    this.size = 'md';
    this.disabled = false;
    this.iconOnly = false;
    this.fullWidth = false;
  }

  getClassName() {
    return `v-button v-button--${this.variant} v-button--${this.size}${this.iconOnly ? ' v-button--icon-only material-icons' : ''}${this.fullWidth ? ' v-button--full-width' : ''}`;
  }

  firstUpdated() {
    const style = document.createElement('style');
    let cssText = '';
    for (const sheet of Array.from(document.styleSheets)) {
      try {
        for (const rule of Array.from(sheet.cssRules || [])) {
          if (rule.selectorText && rule.selectorText.includes('.v-button')) {
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

  render() {
    return html`
      <button
        type="button"
        class="${this.getClassName()}"
        ?disabled="${this.disabled}"
      >
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('v-button', VeeraButton);
