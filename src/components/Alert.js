import { LitElement, html } from 'lit';

const variantIcons = {
  info: 'info_outline',
  warning: 'warning_amber',
  error: 'error_outline',
  success: 'check_circle_outline'
};

export class VeeraAlert extends LitElement {
  static properties = {
    closable: { type: Boolean, reflect: true },
    headerless: { type: Boolean, reflect: true },
    variant: { type: String, reflect: true },
    hasIcon: { type: Boolean, attribute: 'has-icon', reflect: true },
    global: { type: Boolean, reflect: true },
    floating: { type: Boolean, reflect: true },
    title: { type: String, reflect: true },
    buttonAriaLabel: { type: String, attribute: 'button-aria-label', reflect: true }
  };

  constructor() {
    super();
    this.closable = false;
    this.headerless = false;
    this.hasIcon = true;
    this.global = false;
    this.floating = false;
    this.variant = 'info';
    this.title = 'Teade';
    this.buttonAriaLabel = 'Sulge teade';
    this._closed = false;
  }

  firstUpdated() {
    const style = document.createElement('style');
    let cssText = '';
    for (const sheet of Array.from(document.styleSheets)) {
      try {
        for (const rule of Array.from(sheet.cssRules || [])) {
          if (
            rule.selectorText &&
            (rule.selectorText.includes('.v-alert') ||
              rule.selectorText.includes('.v-close-button') ||
              rule.selectorText.includes('.material-icons'))
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

  handleClose() {
    this._closed = true;
    this.requestUpdate();
  }

  render() {
    if( this._closed ) {
      return html``;
    }
    return html`
      <div class="v-alert v-alert--${this.variant}${this.global ? ' v-alert--global' : ''}${this.floating ? ' v-alert--floating' : ''}">
        <button
          class="v-close-button"
          aria-label="${this.buttonAriaLabel}"
          style="${this.closable ? '' : 'display: none;'}"
          @click="${this.handleClose}"
        ></button>
        <div class="v-alert__header" style="${this.headerless ? 'display: none;' : ''}">
          <span class="material-icons" aria-hidden="true" style="${this.hasIcon ? '' : 'display: none;'}">${variantIcons[this.variant]}</span>
          <h5 class="v-alert__title">${this.title}</h5>
        </div>
        <div class="v-alert__body"><slot></slot></div>
      </div>
    `;
  }
}

customElements.define('v-alert', VeeraAlert);
