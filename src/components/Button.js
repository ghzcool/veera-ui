export class VeeraButton extends HTMLElement {

  static get observedAttributes() {
    return ['variant', 'size', 'disabled', 'icon-only', 'full-width', 'click'];
  }

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

  render(childNodes) {
    this.innerHTML = `
        <button type="button" class="${this.getClassName()}" ${this.disabled ? 'disabled="true"' : ''}></button>
    `;

    this.buttonElement = this.querySelector('.v-button');
    this.buttonElement.append(...childNodes);
  }

  connectedCallback() {
    this.render([...this.childNodes]);

    this.mutationObserver = new MutationObserver((list, observer) => {
      if (list.some(item => item.target === this)) {
        observer.disconnect();
        this.render([...list[0].addedNodes]);
        observer.observe(this, { childList: true, subtree: false });
      }
    });
    this.mutationObserver.observe(this, { childList: true, subtree: false });
  }

  disconnectedCallback() {
    this.mutationObserver.disconnect();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;

    if (name === 'variant') {
      this.variant = newValue;
    } else if (name === 'size') {
      this.size = newValue;
    } else if (name === 'disabled') {
      this.disabled = newValue === 'true' || newValue === '';
    } else if (name === 'icon-only') {
      this.iconOnly = newValue === 'true' || newValue === '';
    } else if (name === 'full-width') {
      this.fullWidth = newValue === 'true' || newValue === '';
    }

    if (!this.buttonElement) return;

    if (name === 'variant' || name === 'size' || name === 'icon-only' || name === 'full-width') {
      this.buttonElement.className = this.getClassName();
    } else if (name === 'disabled') {
      this.buttonElement.disabled = this.disabled;
    }
  }
}

customElements.define('v-button', VeeraButton);
