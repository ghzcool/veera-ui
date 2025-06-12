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

  getClassName() {
    return `v-card v-card--${this.size} v-card--${this.variant}${this.flat ? ' v-card--flat' : ''}`;
  }

  render() {
    return html`
      <style>
        .v-card { padding: var(--v-cards-sizing-padding-medium); border-radius: var(--v-cards-sizing-radius-medium); background: var(--v-cards-background-primary); box-shadow: var(--v-box-shadow-elevation-01); }
        .v-card--primary { background: var(--v-cards-background-primary); }
        .v-card--secondary { background: var(--v-cards-background-secondary); }
        .v-card--tertiary { background: var(--v-cards-background-tertiary); }
        .v-card--sm { padding: var(--v-cards-sizing-padding-small); border-radius: var(--v-cards-sizing-radius-small); }
        .v-card--md { padding: var(--v-cards-sizing-padding-medium); border-radius: var(--v-cards-sizing-radius-medium); }
        .v-card--flat { box-shadow: none; }
      </style>
      <div class="${this.getClassName()}">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('v-card', VeeraCard);
