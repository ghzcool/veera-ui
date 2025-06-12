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

  handleToggle() {
    if (this.disabled) return;
    this.expanded = !this.expanded;
    this.requestUpdate();
  }

  render() {
    const id = this._id;
    return html`
      <style>
        .v-accordion { display: grid; grid-template-rows: max-content 0fr; transition: grid-template-rows 0.3s; border: 1px solid var(--v-accordion-border-default); border-radius: var(--v-accordion-sizing-corner-radius); background: var(--v-accordion-background-default); }
        .v-accordion--expanded { grid-template-rows: max-content 1fr; background: var(--v-accordion-background-selected); }
        .v-accordion--expanded > .v-accordion__collapse { animation: 0.3s ease-in-out 0s 1 normal forwards running overflow-transition; }
        .v-accordion--expanded > .v-accordion__header { color: var(--v-accordion-text-selected); }
        .v-accordion--expanded > .v-accordion__header .v-accordion__expand-icon { transform: rotateX(180deg); }
        .v-accordion--disabled { pointer-events: none; background: var(--v-accordion-background-disabled); }
        .v-accordion--disabled .v-accordion__header { color: var(--v-accordion-text-disabled); }
        .v-accordion--lg .v-accordion__header { padding: var(--v-accordion-sizing-padding-y-large) var(--v-accordion-sizing-padding-x); }
        .v-accordion--lg .v-accordion__title { font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; font-size: 1.25rem; font-weight: 400; text-decoration: none; line-height: 120%; }
        .v-accordion__header {     position: relative;    color: var(--v-accordion-text-default);                align-items: center;           background: transparent;      border: none; border-radius: var(--v-accordion-sizing-corner-radius);                                       cursor: pointer;    display: flex;                                  margin: -1px;                      outline: none;             padding: var(--v-accordion-sizing-padding-y) var(--v-accordion-sizing-padding-x);                                                                                                                    z-index: 1; }
        .v-accordion__header:focus { box-shadow: var(--v-box-shadow-focus-ring-outset); }
        .v-accordion__header:focus { color: var(--v-accordion-text-focus); }
        .v-accordion__header:focus::before { z-index: -1; content: ""; position: absolute; display: block; inset: 1px; background-color: var(--v-accordion-background-focus); border-radius: var(--v-accordion-sizing-corner-radius); }
        .v-accordion__header:hover { color: var(--v-accordion-text-hover); }
        .v-accordion__header:hover::before { z-index: -1; content: ""; position: absolute; display: block; inset: 1px; background-color: var(--v-accordion-background-hover); border-radius: var(--v-accordion-sizing-corner-radius); }
        .v-accordion__header:active { color: var(--v-accordion-text-active); }
        .v-accordion__header:active::before { z-index: -1; content: ""; position: absolute; display: block; inset: 1px; background-color: var(--v-accordion-background-active); border-radius: var(--v-accordion-sizing-corner-radius); }
        .v-accordion__expand-icon { margin-left: auto; transition: transform 0.3s; }
        .v-accordion__title { font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; font-size: 1rem; font-weight: 700; text-decoration: none; line-height: 150%; margin: 0px; }
        .v-accordion__collapse { overflow: hidden; }
        .v-accordion__content { padding: var(--v-accordion-content-padding-y) var(--v-accordion-content-padding-x); }
        .v-badge__icon.material-icons, .v-badge__icon.material-icons-outlined { font-size: 16px; }
        a.v-link--with-icon .material-icons, a.v-link--with-icon .material-icons-outlined, a.v-link--with-icon .v-link-icon, .v-link.v-link--with-icon .material-icons, .v-link.v-link--with-icon .material-icons-outlined, .v-link.v-link--with-icon .v-link-icon { font-size: inherit; overflow: hidden; }
        .material-icons { font-family: "Material Icons"; font-weight: normal; font-style: normal; font-size: 24px; line-height: 1; letter-spacing: normal; text-transform: none; display: inline-block; white-space: nowrap; overflow-wrap: normal; direction: ltr; font-feature-settings: "liga"; -webkit-font-smoothing: antialiased; }

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
