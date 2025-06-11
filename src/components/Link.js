export class VeeraLink extends HTMLElement {
  static get observedAttributes() {
    return ['size', 'has-icon', 'href', 'icon', 'icon-aria-label', 'target'];
  }

  constructor() {
    super();
    this.size = 'md';
    this.hasIcon = false;
    this.href = '#';
    this.icon = 'open_in_new';
    this.iconAriaLabel = 'Avaneb uuel vahelehel';
    this.target = '';
  }

  render(childNodes) {
    this.innerHTML = `
      <a class="v-link v-link--${this.size}${this.hasIcon ? ' v-link--with-icon' : ''}" href="${this.href}"${this.target ? ' target="' + this.target + '"' : ''}>
        <span class="v-link__label"></span>
        <span class="material-icons" aria-label="${this.iconAriaLabel}" style="${this.hasIcon ? '' : 'display: none'}">${this.icon}</span>
      </a>
    `;
    this.linkElement = this.querySelector('a.v-link');
    this.labelElement = this.querySelector('.v-link > .v-link__label');
    this.iconElement = this.querySelector('.v-link > .material-icons');
    this.labelElement.append(...childNodes);
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

    if (name === 'size') {
        this.size = newValue;
    } else if (name === 'has-icon') {
        this.hasIcon = newValue === 'true' || newValue === '';
    } else if (name === 'href') {
        this.href = newValue;
    } else if (name === 'icon') {
        this.icon = newValue;
    } else if (name === 'icon-aria-label') {
        this.iconAriaLabel = newValue;
    } else if (name === 'target') {
        this.target = newValue;
    }

    if (!this.linkElement) return;

    if (name === 'size' || name === 'has-icon' || name === 'href' || name === 'target') {
        this.linkElement.className = `v-link v-link--${this.size}${this.hasIcon ? ' v-link--with-icon' : ''}`;
        if (name === 'href') {
            this.linkElement.setAttribute('href', this.href);
        }
        if (name === 'target') {
            if (this.target) {
                this.linkElement.setAttribute('target', this.target);
            } else {
                this.linkElement.removeAttribute('target');
            }
        }
        if (name === 'has-icon') {
            this.iconElement.style.display = this.hasIcon ? '' : 'none';
        }
    } else if (name === 'icon') {
        this.iconElement.textContent = this.icon;
    } else if (name === 'icon-aria-label') {
        this.iconElement.setAttribute('aria-label', this.iconAriaLabel);
    }
  }
}

customElements.define('v-link', VeeraLink);
