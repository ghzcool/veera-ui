export class VeeraCard extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'size', 'flat'];
  }

  constructor() {
    super();
    this.variant = 'primary';
    this.size = 'md';
    this.flat = false;
  }

  render(childNodes) {
    this.innerHTML = `
      <div class="v-card v-card--${this.size} v-card--${this.variant}${this.flat ? ' v-card--flat' : ''}"></div>
    `;
    this.cardElement = this.querySelector('.v-card');
    this.cardElement.append(...childNodes);
  }

  connectedCallback() {
    if (this.mutationObserver) return;
    
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
    if (this.mutationObserver) {
        this.mutationObserver.disconnect();
        this.mutationObserver = null;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;

    if (name === 'variant') {
      this.variant = newValue;
    } else if (name === 'size') {
      this.size = newValue || 'md';
    } else if (name === 'flat') {
      this.flat = newValue === 'true' || newValue === '';
    }

    if (!this.cardElement) return;

    this.cardElement.className = `v-card v-card--${this.size} v-card--${this.variant}${this.flat ? ' v-card--flat' : ''}`;
  }
}

customElements.define('v-card', VeeraCard);
