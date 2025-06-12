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

  render() {
    const icon = VeeraBadge.variantIcons[this.variant] || 'flag';
    return html`
      <style>
        .v-badge { font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; font-size: 0.875rem; font-weight: 400; text-decoration: none; line-height: 171%; display: inline-flex; align-items: center; border: 2px solid var(--v-badges-border-neutral); border-radius: var(--v-badges-sizing-corner-radius); padding: var(--v-badges-sizing-padding-y) var(--v-badges-sizing-padding-x); color: var(--v-badges-text-neutral); background-color: var(--v-badges-background-neutral); gap: var(--v-badges-sizing-inner-spacing); white-space: nowrap; }
        .v-badge__icon { display: flex; align-items: center; justify-content: center; width: 16px; height: 16px; font-size: 16px; flex-shrink: 0; }
        .v-badge__icon.material-icons, .v-badge__icon.material-icons-outlined { font-size: 16px; }
        .v-badge--warning { background-color: var(--v-badges-background-warning); border-color: var(--v-badges-border-warning); color: var(--v-badges-text-warning); }
        .v-badge--error { background-color: var(--v-badges-background-error); border-color: var(--v-badges-border-error); color: var(--v-badges-text-error); }
        .v-badge--info { background-color: var(--v-badges-background-info); border-color: var(--v-badges-border-info); color: var(--v-badges-text-info); }
        .v-badge--success { background-color: var(--v-badges-background-success); border-color: var(--v-badges-border-success); color: var(--v-badges-text-success); }
        a.v-link--with-icon .material-icons, a.v-link--with-icon .material-icons-outlined, a.v-link--with-icon .v-link-icon, .v-link.v-link--with-icon .material-icons, .v-link.v-link--with-icon .material-icons-outlined, .v-link.v-link--with-icon .v-link-icon { font-size: inherit; overflow: hidden; }
        .material-icons { font-family: "Material Icons"; font-weight: normal; font-style: normal; font-size: 24px; line-height: 1; letter-spacing: normal; text-transform: none; display: inline-block; white-space: nowrap; overflow-wrap: normal; direction: ltr; font-feature-settings: "liga"; -webkit-font-smoothing: antialiased; }
      </style>
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
