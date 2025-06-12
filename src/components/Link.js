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

  render() {
    return html`
      <style>
        .v-badge__icon.material-icons, .v-badge__icon.material-icons-outlined { font-size: 16px; }
        a, .v-link { font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; font-weight: 400; text-decoration: underline; line-height: 150%; outline: none; font-size: inherit; color: var(--v-colors-link-default); }
        a:focus, .v-link:focus { box-shadow: var(--v-box-shadow-focus-ring-outset); }
        a:hover, .v-link:hover { color: var(--v-colors-link-hover); }
        a:active, a:visited, .v-link:active, .v-link:visited { color: var(--v-colors-link-active); }
        a.v-link--md, .v-link.v-link--md { font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; font-size: 1rem; font-weight: 400; text-decoration: underline; line-height: 150%; }
        a.v-link--sm, .v-link.v-link--sm { font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; font-size: 0.875rem; font-weight: 400; text-decoration: underline; line-height: 171%; }
        a.v-link--xs, .v-link.v-link--xs { font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; font-size: 0.75rem; font-weight: 400; text-decoration: underline; line-height: 133%; }
        a.v-link--with-icon, .v-link.v-link--with-icon { display: inline-flex; align-items: center; gap: var(--v-links-sizing-inner-spacing); }
        a.v-link--with-icon .material-icons, a.v-link--with-icon .material-icons-outlined, a.v-link--with-icon .v-link-icon, .v-link.v-link--with-icon .material-icons, .v-link.v-link--with-icon .material-icons-outlined, .v-link.v-link--with-icon .v-link-icon { font-size: inherit; overflow: hidden; }
        .material-icons { font-family: "Material Icons"; font-weight: normal; font-style: normal; font-size: 24px; line-height: 1; letter-spacing: normal; text-transform: none; display: inline-block; white-space: nowrap; overflow-wrap: normal; direction: ltr; font-feature-settings: "liga"; -webkit-font-smoothing: antialiased; }
      </style>
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
