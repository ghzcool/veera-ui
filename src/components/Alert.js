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

  handleClose() {
    this._closed = true;
    this.requestUpdate();
  }

  render() {
    if( this._closed ) {
      return html``;
    }
    return html`
      <style>
        .v-close-button { color-scheme: unset; forced-color-adjust: unset; mask: unset; math-depth: unset; position: relative; position-anchor: unset; text-size-adjust: unset; appearance: unset; color: unset; font: unset; font-palette: unset; font-synthesis: unset; position-area: unset; text-orientation: unset; text-rendering: unset; text-spacing-trim: unset; -webkit-font-smoothing: unset; -webkit-locale: unset; -webkit-text-orientation: unset; -webkit-writing-mode: unset; writing-mode: unset; zoom: unset; accent-color: unset; align-content: unset; align-items: center; place-self: unset; alignment-baseline: unset; anchor-name: unset; anchor-scope: unset; animation-composition: unset; animation: unset; app-region: unset; aspect-ratio: unset; backdrop-filter: unset; backface-visibility: unset; background: var(--v-close-button-background-default); background-blend-mode: unset; baseline-shift: unset; baseline-source: unset; block-size: unset; border-block: unset; border: unset; border-radius: 100%; border-collapse: unset; border-end-end-radius: unset; border-end-start-radius: unset; border-inline: unset; border-start-end-radius: unset; border-start-start-radius: unset; inset: unset; box-decoration-break: unset; box-shadow: unset; box-sizing: unset; break-after: unset; break-before: unset; break-inside: unset; buffered-rendering: unset; caption-side: unset; caret-color: unset; clear: unset; clip: unset; clip-path: unset; clip-rule: unset; color-interpolation: unset; color-interpolation-filters: unset; color-rendering: unset; columns: unset; column-fill: unset; gap: unset; column-rule: unset; column-span: unset; contain: unset; contain-intrinsic-block-size: unset; contain-intrinsic-size: unset; contain-intrinsic-inline-size: unset; container: unset; content: unset; content-visibility: unset; counter-increment: unset; counter-reset: unset; counter-set: unset; cursor: pointer; cx: unset; cy: unset; d: unset; display: flex; dominant-baseline: unset; dynamic-range-limit: unset; empty-cells: unset; field-sizing: unset; fill: unset; fill-opacity: unset; fill-rule: unset; filter: unset; flex-basis: unset; flex-flow: unset; flex-grow: unset; flex-shrink: 0; float: unset; flood-color: unset; flood-opacity: unset; grid: unset; grid-area: unset; height: var(--v-close-button-sizing-md-width-height); hyphenate-character: unset; hyphenate-limit-chars: unset; hyphens: unset; image-orientation: unset; image-rendering: unset; initial-letter: unset; inline-size: unset; inset-block: unset; inset-inline: unset; interpolate-size: unset; isolation: unset; justify-content: center; justify-items: unset; letter-spacing: unset; lighting-color: unset; line-break: unset; list-style: unset; margin-block: unset; margin: unset; margin-inline: unset; marker: unset; mask-type: unset; math-shift: unset; math-style: unset; max-block-size: unset; max-height: unset; max-inline-size: unset; max-width: unset; min-block-size: unset; min-height: unset; min-inline-size: unset; min-width: unset; mix-blend-mode: unset; object-fit: unset; object-position: unset; object-view-box: unset; offset: unset; opacity: unset; order: unset; orphans: unset; outline: unset; outline-offset: unset; overflow-anchor: unset; overflow-block: unset; overflow-clip-margin: unset; overflow-inline: unset; overflow-wrap: unset; overflow: unset; overlay: unset; overscroll-behavior-block: unset; overscroll-behavior-inline: unset; overscroll-behavior: unset; padding-block: unset; padding: unset; padding-inline: unset; page: unset; page-orientation: unset; paint-order: unset; perspective: unset; perspective-origin: unset; pointer-events: unset; position-try: unset; position-visibility: unset; print-color-adjust: unset; quotes: unset; r: unset; reading-flow: unset; reading-order: unset; resize: unset; rotate: unset; ruby-align: unset; ruby-position: unset; rx: unset; ry: unset; scale: unset; scroll-behavior: unset; scroll-initial-target: unset; scroll-margin-block: unset; scroll-margin: unset; scroll-margin-inline: unset; scroll-marker-group: unset; scroll-padding-block: unset; scroll-padding: unset; scroll-padding-inline: unset; scroll-snap-align: unset; scroll-snap-stop: unset; scroll-snap-type: unset; scroll-timeline: unset; scrollbar-color: unset; scrollbar-gutter: unset; scrollbar-width: unset; shape-image-threshold: unset; shape-margin: unset; shape-outside: unset; shape-rendering: unset; size: unset; speak: unset; stop-color: unset; stop-opacity: unset; stroke: unset; stroke-dasharray: unset; stroke-dashoffset: unset; stroke-linecap: unset; stroke-linejoin: unset; stroke-miterlimit: unset; stroke-opacity: unset; stroke-width: unset; tab-size: unset; table-layout: unset; text-align: unset; text-align-last: unset; text-anchor: unset; text-box: unset; text-combine-upright: unset; text-decoration: unset; text-decoration-skip-ink: unset; text-emphasis: unset; text-emphasis-position: unset; text-indent: unset; text-overflow: unset; text-shadow: unset; text-transform: unset; text-underline-offset: unset; text-underline-position: unset; text-wrap: unset; timeline-scope: unset; touch-action: unset; transform: unset; transform-box: unset; transform-origin: unset; transform-style: unset; transition: unset; translate: unset; user-select: unset; vector-effect: unset; vertical-align: unset; view-timeline: unset; view-transition-class: unset; view-transition-name: unset; visibility: unset; border-spacing: unset; -webkit-box-align: unset; -webkit-box-decoration-break: unset; -webkit-box-direction: unset; -webkit-box-flex: unset; -webkit-box-ordinal-group: unset; -webkit-box-orient: unset; -webkit-box-pack: unset; -webkit-box-reflect: unset; -webkit-line-break: unset; -webkit-line-clamp: unset; -webkit-mask-box-image: unset; -webkit-rtl-ordering: unset; -webkit-ruby-position: unset; -webkit-tap-highlight-color: unset; -webkit-text-combine: unset; -webkit-text-decorations-in-effect: unset; -webkit-text-fill-color: unset; -webkit-text-security: unset; -webkit-text-stroke: unset; -webkit-user-drag: unset; white-space-collapse: unset; widows: unset; width: var(--v-close-button-sizing-md-width-height); will-change: unset; word-break: unset; word-spacing: unset; x: unset; y: unset; z-index: unset; }
        .v-close-button:focus { box-shadow: var(--v-box-shadow-focus-ring-outset); }
        .v-close-button::after { content: ""; height: 24px; width: 24px; mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='24' height='24' fill='black' fill-opacity='0.01'/%3E%3Cpath d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z' fill='%23131317'/%3E%3C/svg%3E"); position: absolute; display: block; background: var(--v-close-button-text-default); }
        .v-close-button:focus { background: var(--v-close-button-background-focus); }
        .v-close-button:focus::after { background: var(--v-close-button-text-focus); }
        .v-close-button:hover { background: var(--v-close-button-background-hover); }
        .v-close-button:hover::after { background: var(--v-close-button-text-hover); }
        .v-close-button:active { background: var(--v-close-button-background-active); }
        .v-close-button:active::after { background: var(--v-close-button-text-active); }
        .v-close-button:disabled { background: var(--v-close-button-background-disabled); pointer-events: none; }
        .v-close-button:disabled::after { background: var(--v-close-button-text-disabled); }
        .v-close-button--sm { height: var(--v-close-button-sizing-sm-width-height); width: var(--v-close-button-sizing-sm-width-height); }
        .v-close-button--sm::after { transform: scale(0.67); }
        .v-modal .v-close-button { position: absolute; top: 4px; right: 4px; }
        .v-alert { position: relative; display: flex; flex-direction: column; gap: var(--v-alerts-sizing-inner-spacing); padding: var(--v-alerts-sizing-padding-y) var(--v-alerts-sizing-padding-x); border-radius: var(--v-alerts-sizing-corner-radius); border-width: 1px; border-style: solid; background: var(--v-alerts-background-info); border-color: var(--v-alerts-border-info); color: var(--v-alerts-text-info); }
        .v-alert .v-close-button { position: absolute; top: 0px; right: 0px; }
        .v-alert__header { display: flex; align-items: flex-start; gap: var(--v-spacing-baseline-03); padding-right: 24px; }
        .v-alert__title { font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; font-size: 1.125rem; font-weight: 400; text-decoration: none; line-height: 133%; margin: 0px; }
        .v-alert__body { font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; font-size: 0.875rem; font-weight: 400; text-decoration: none; line-height: 171%; }
        .v-alert__body a { color: inherit; }
        .v-alert--info { background: var(--v-alerts-background-info); border-color: var(--v-alerts-border-info); color: var(--v-alerts-text-info); }
        .v-alert--success { background: var(--v-alerts-background-success); border-color: var(--v-alerts-border-success); color: var(--v-alerts-text-success); }
        .v-alert--warning { background: var(--v-alerts-background-warning); border-color: var(--v-alerts-border-warning); color: var(--v-alerts-text-warning); }
        .v-alert--error { background: var(--v-alerts-background-error); border-color: var(--v-alerts-border-error); color: var(--v-alerts-text-error); }
        .v-alert--global { border-radius: 0px; border-width: 0px 0px 1px; }
        .v-alert--floating { box-shadow: var(--v-box-shadow-elevation-02); max-width: var(--v-containers-02); }
        .v-badge__icon.material-icons, .v-badge__icon.material-icons-outlined { font-size: 16px; }
        .v-popover .v-close-button { position: absolute; top: 0px; right: 0px; }
        a.v-link--with-icon .material-icons, a.v-link--with-icon .material-icons-outlined, a.v-link--with-icon .v-link-icon, .v-link.v-link--with-icon .material-icons, .v-link.v-link--with-icon .material-icons-outlined, .v-link.v-link--with-icon .v-link-icon { font-size: inherit; overflow: hidden; }
        .v-autocomplete .v-close-button { position: absolute; top: 50%; right: 16px; transform: translateY(-50%); }
        .v-autocomplete--with-button .v-close-button { right: 40px; }
        .material-icons { font-family: "Material Icons"; font-weight: normal; font-style: normal; font-size: 24px; line-height: 1; letter-spacing: normal; text-transform: none; display: inline-block; white-space: nowrap; overflow-wrap: normal; direction: ltr; font-feature-settings: "liga"; -webkit-font-smoothing: antialiased; }
      </style>
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
