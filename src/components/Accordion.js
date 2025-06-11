import { LitElement, html } from 'lit';

const getId = () => {
  return new Date().getTime() + '-' + String(Math.random()).substring(2);
};

export class VeeraAccordion extends LitElement {
  static properties = {
    disabled: { type: Boolean, reflect: true },
    size: { type: String, reflect: true },
    expanded: { type: Boolean, reflect: true },
    title: { type: String, reflect: true },
    iconAlign: { type: String, attribute: 'icon-align', reflect: true }
  };

  constructor() {
    super();
    this._id = getId();
    this.expanded = false;
    this.size = 'sm';
    this.disabled = false;
    this.title = '';
    this.iconAlign = 'right';
  }

  firstUpdated() {
    const style = document.createElement('style');
    let cssText = '';
    for (const sheet of Array.from(document.styleSheets)) {
      try {
        for (const rule of Array.from(sheet.cssRules || [])) {
          let css = rule.cssText || '';
          if (css?.includes('forced-color-adjust: unset;')) {
            css = css.replace(/[\w-]+:\s*unset;/g, '').trim();
          }
          if (rule.selectorText?.includes('.v-accordion') || rule.selectorText?.includes('.material-icons')) {
            cssText += css + '\n';
          }
        }
      } catch (e) {
        console.error(e);
      }
    }
    style.textContent = cssText;
    this.shadowRoot.prepend(style);
  }

  handleToggle() {
    if (this.disabled) return;
    this.expanded = !this.expanded;
    this.requestUpdate();
  }

  render() {
    const id = this._id;
    return html`
      <style>
        .v-accordion .v-accordion--align-left {
          flex-direction: row-reverse;
        }
        .v-accordion .v-accordion--align-left .v-accordion__title {
          margin-right: auto;
          margin-left: var(--v-spacing-baseline-05);
        }
        .v-accordion .v-accordion--align-left .material-icons {
          margin-left: 0;
        }
      </style>
      <div class="v-accordion v-accordion--${this.size}${this.expanded ? ' v-accordion--expanded' : ''}${this.disabled ? ' v-accordion--disabled' : ''}" id="accordion-${id}" role="button">
        <button
          class="v-accordion__header${this.iconAlign === 'left' ? ' v-accordion--align-left' : ''}"
          id="accordion-header-${id}"
          aria-expanded="${this.expanded ? 'true' : 'false'}"
          aria-controls="accordion-content-${id}"
          ?disabled="${this.disabled}"
          @click="${this.handleToggle}"
        >
          <h4 class="v-accordion__title">${this.title}</h4>
          <span class="material-icons v-accordion__expand-icon" aria-hidden="true">expand_more</span>
        </button>
        <div class="v-accordion__collapse" role="region" id="accordion-content-${id}" aria-labelledby="accordion-header-${id}">
          <div class="v-accordion__content"><slot></slot></div>
        </div>
      </div>
    `;
  }
}

customElements.define('v-accordion', VeeraAccordion);
