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

  render() {
    return html`
    <style>
        .v-button { outline: none; display: inline-flex; justify-content: center; align-items: center; gap: 8px; border-width: 2px; border-style: solid; cursor: pointer; flex-shrink: 0; padding: var(--v-buttons-sizing-md-padding-y) var(--v-buttons-sizing-md-padding-x); border-radius: var(--v-buttons-sizing-md-corner-radius); }
        .v-button:disabled { pointer-events: none; }
        .v-button:focus { box-shadow: var(--v-box-shadow-focus-ring-outset); }
        .v-button.v-button--neutral { padding: var(--v-buttons-sizing-md-neutral-button-padding-y) var(--v-buttons-sizing-md-neutral-button-padding-x); border-radius: var(--v-buttons-sizing-md-neutral-button-corner-radius); }
        .v-button.v-button--icon-only { height: var(--v-buttons-sizing-md-icon-button-width-height); width: var(--v-buttons-sizing-md-icon-button-width-height); padding: var(--v-buttons-sizing-md-padding-icon-only); }
        .v-button:not(.v-button--icon-only) { font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; font-size: 1rem; font-weight: 700; text-decoration: none; line-height: 150%; }
        .v-button--primary { background: var(--v-buttons-theme-primary-background-default); border-color: var(--v-buttons-theme-primary-border-default); color: var(--v-buttons-theme-primary-text-default); }
        .v-button--primary:focus { background: var(--v-buttons-theme-primary-background-focus); border-color: var(--v-buttons-theme-primary-border-focus); color: var(--v-buttons-theme-primary-text-focus); }
        .v-button--primary:hover { background: var(--v-buttons-theme-primary-background-hover); border-color: var(--v-buttons-theme-primary-border-hover); color: var(--v-buttons-theme-primary-text-hover); }
        .v-button--primary:active { background: var(--v-buttons-theme-primary-background-active); border-color: var(--v-buttons-theme-primary-border-active); color: var(--v-buttons-theme-primary-text-active); }
        .v-button--primary:disabled { background: var(--v-buttons-theme-primary-background-disabled); border-color: var(--v-buttons-theme-primary-border-disabled); color: var(--v-buttons-theme-primary-text-disabled); }
        .v-button--secondary { background: var(--v-buttons-theme-secondary-background-default); border-color: var(--v-buttons-theme-secondary-border-default); color: var(--v-buttons-theme-secondary-text-default); }
        .v-button--secondary:focus { background: var(--v-buttons-theme-secondary-background-focus); border-color: var(--v-buttons-theme-secondary-border-focus); color: var(--v-buttons-theme-secondary-text-focus); }
        .v-button--secondary:hover { background: var(--v-buttons-theme-secondary-background-hover); border-color: var(--v-buttons-theme-secondary-border-hover); color: var(--v-buttons-theme-secondary-text-hover); }
        .v-button--secondary:active { background: var(--v-buttons-theme-secondary-background-active); border-color: var(--v-buttons-theme-secondary-border-active); color: var(--v-buttons-theme-secondary-text-active); }
        .v-button--secondary:disabled { background: var(--v-buttons-theme-secondary-background-disabled); border-color: var(--v-buttons-theme-secondary-border-disabled); color: var(--v-buttons-theme-secondary-text-disabled); }
        .v-button--neutral { background: var(--v-buttons-theme-neutral-background-default); border-color: var(--v-buttons-theme-neutral-border-default); color: var(--v-buttons-theme-neutral-text-default); }
        .v-button--neutral:focus { background: var(--v-buttons-theme-neutral-background-focus); border-color: var(--v-buttons-theme-neutral-border-focus); color: var(--v-buttons-theme-neutral-text-focus); }
        .v-button--neutral:hover { background: var(--v-buttons-theme-neutral-background-hover); border-color: var(--v-buttons-theme-neutral-border-hover); color: var(--v-buttons-theme-neutral-text-hover); }
        .v-button--neutral:active { background: var(--v-buttons-theme-neutral-background-active); border-color: var(--v-buttons-theme-neutral-border-active); color: var(--v-buttons-theme-neutral-text-active); }
        .v-button--neutral:disabled { background: var(--v-buttons-theme-neutral-background-disabled); border-color: var(--v-buttons-theme-neutral-border-disabled); color: var(--v-buttons-theme-neutral-text-disabled); }
        .v-button--success { background: var(--v-buttons-theme-success-background-default); border-color: var(--v-buttons-theme-success-border-default); color: var(--v-buttons-theme-success-text-default); }
        .v-button--success:focus { background: var(--v-buttons-theme-success-background-focus); border-color: var(--v-buttons-theme-success-border-focus); color: var(--v-buttons-theme-success-text-focus); }
        .v-button--success:hover { background: var(--v-buttons-theme-success-background-hover); border-color: var(--v-buttons-theme-success-border-hover); color: var(--v-buttons-theme-success-text-hover); }
        .v-button--success:active { background: var(--v-buttons-theme-success-background-active); border-color: var(--v-buttons-theme-success-border-active); color: var(--v-buttons-theme-success-text-active); }
        .v-button--success:disabled { background: var(--v-buttons-theme-success-background-disabled); border-color: var(--v-buttons-theme-success-border-disabled); color: var(--v-buttons-theme-success-text-disabled); }
        .v-button--danger { background: var(--v-buttons-theme-warning-background-default); border-color: var(--v-buttons-theme-warning-border-default); color: var(--v-buttons-theme-warning-text-default); }
        .v-button--danger:focus { background: var(--v-buttons-theme-warning-background-focus); border-color: var(--v-buttons-theme-warning-border-focus); color: var(--v-buttons-theme-warning-text-focus); }
        .v-button--danger:hover { background: var(--v-buttons-theme-warning-background-hover); border-color: var(--v-buttons-theme-warning-border-hover); color: var(--v-buttons-theme-warning-text-hover); }
        .v-button--danger:active { background: var(--v-buttons-theme-warning-background-active); border-color: var(--v-buttons-theme-warning-border-active); color: var(--v-buttons-theme-warning-text-active); }
        .v-button--danger:disabled { background: var(--v-buttons-theme-warning-background-disabled); border-color: var(--v-buttons-theme-warning-border-disabled); color: var(--v-buttons-theme-warning-text-disabled); }
        .v-button--sm { padding: var(--v-buttons-sizing-sm-padding-y) var(--v-buttons-sizing-sm-padding-x); border-radius: var(--v-buttons-sizing-sm-corner-radius); }
        .v-button--sm.v-button--neutral { padding: var(--v-buttons-sizing-sm-neutral-button-padding-y) var(--v-buttons-sizing-sm-neutral-button-padding-x); border-radius: var(--v-buttons-sizing-sm-neutral-button-corner-radius); }
        .v-button--sm.v-button--icon-only { height: var(--v-buttons-sizing-sm-icon-button-width-height); width: var(--v-buttons-sizing-sm-icon-button-width-height); padding: var(--v-buttons-sizing-sm-padding-icon-only); }
        .v-button--sm:not(.v-button--icon-only) { font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; font-size: 0.875rem; font-weight: 700; text-decoration: none; line-height: 171%; }
        .v-button--md { padding: var(--v-buttons-sizing-md-padding-y) var(--v-buttons-sizing-md-padding-x); border-radius: var(--v-buttons-sizing-md-corner-radius); }
        .v-button--md.v-button--neutral { padding: var(--v-buttons-sizing-md-neutral-button-padding-y) var(--v-buttons-sizing-md-neutral-button-padding-x); border-radius: var(--v-buttons-sizing-md-neutral-button-corner-radius); }
        .v-button--md.v-button--icon-only { height: var(--v-buttons-sizing-md-icon-button-width-height); width: var(--v-buttons-sizing-md-icon-button-width-height); padding: var(--v-buttons-sizing-md-padding-icon-only); }
        .v-button--md:not(.v-button--icon-only) { font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; font-size: 1rem; font-weight: 700; text-decoration: none; line-height: 150%; }
        .v-button--lg { padding: var(--v-buttons-sizing-lg-padding-y) var(--v-buttons-sizing-lg-padding-x); border-radius: var(--v-buttons-sizing-lg-corner-radius); }
        .v-button--lg.v-button--neutral { padding: var(--v-buttons-sizing-lg-neutral-button-padding-y) var(--v-buttons-sizing-lg-neutral-button-padding-x); border-radius: var(--v-buttons-sizing-lg-neutral-button-corner-radius); }
        .v-button--lg.v-button--icon-only { height: var(--v-buttons-sizing-lg-icon-button-width-height); width: var(--v-buttons-sizing-lg-icon-button-width-height); padding: var(--v-buttons-sizing-lg-padding-icon-only); }
        .v-button--lg:not(.v-button--icon-only) { font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; font-size: 1.125rem; font-weight: 700; text-decoration: none; line-height: 133%; }
        .v-button--floating { box-shadow: var(--v-box-shadow-elevation-02); }
        .v-button--full-width { width: 100%; }
      </style>
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
