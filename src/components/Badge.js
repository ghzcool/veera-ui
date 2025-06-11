import { LitElement, html } from 'lit';

export class VeeraBadge extends LitElement {
  static properties = {
    variant: { type: String, reflect: true },
    hasIcon: { type: Boolean, attribute: 'has-icon', reflect: true }
  };

  static get variantIcons() {
    return {
      info: 'flag',
      success: 'check',
      warning: 'warning_amber',
      error: 'report',
      neutral: 'label',
    };
  }

  constructor() {
    super();
    this.variant = 'info';
    this.hasIcon = false;
  }

  firstUpdated() {
    const style = document.createElement('style');
    let cssText = '';
    for (const sheet of Array.from(document.styleSheets)) {
      try {
        for (const rule of Array.from(sheet.cssRules || [])) {
          if (
            rule.selectorText &&
            (rule.selectorText.includes('.v-badge') || rule.selectorText.includes('.material-icons'))
          ) {
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
    const icon = VeeraBadge.variantIcons[this.variant] || 'flag';
    return html`
      <div class="v-badge v-badge--${this.variant}">
        <span
          class="material-icons v-badge__icon"
          style="display: ${this.hasIcon ? 'block' : 'none'}"
          aria-hidden="true"
        >${icon}</span>
        <span><slot></slot></span>
      </div>
    `;
  }
}

customElements.define('v-badge', VeeraBadge);
