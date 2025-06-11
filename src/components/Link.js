import { LitElement, html } from 'lit';

export class VeeraLink extends LitElement {
  static properties = {
    size: { type: String, reflect: true },
    hasIcon: { type: Boolean, attribute: 'has-icon', reflect: true },
    href: { type: String, reflect: true },
    icon: { type: String, reflect: true },
    iconAriaLabel: { type: String, attribute: 'icon-aria-label', reflect: true },
    target: { type: String, reflect: true }
  };

  constructor() {
    super();
    this.size = 'md';
    this.hasIcon = false;
    this.href = '#';
    this.icon = 'open_in_new';
    this.iconAriaLabel = 'Avaneb uuel vahelehel';
    this.target = '';
  }

  getClassName() {
    return `v-link v-link--${this.size}${this.hasIcon ? ' v-link--with-icon' : ''}`;
  }

  firstUpdated() {
    const style = document.createElement('style');
    let cssText = '';
    for (const sheet of Array.from(document.styleSheets)) {
      try {
        for (const rule of Array.from(sheet.cssRules || [])) {
          if (rule.selectorText?.includes('.v-link') || rule.selectorText?.includes('.material-icons')) {
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
      <a
        class="${this.getClassName()}"
        href="${this.href}"
        ?target="${this.target}"
        target="${this.target || undefined}"
      >
        <slot></slot>
        <span
          class="material-icons"
          aria-label="${this.iconAriaLabel}"
          style="${this.hasIcon ? '' : 'display: none'}"
        >${this.icon}</span>
      </a>
    `;
  }
}

customElements.define('v-link', VeeraLink);
