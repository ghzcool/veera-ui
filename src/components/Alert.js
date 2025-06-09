const variantIcons = {
      info: 'info_outline',
      warning: 'warning_amber',
      error: 'error_outline',
      success: 'check_circle_outline'
    };

export class VeeraAlert extends HTMLElement {

  static get observedAttributes() {
    return ['closable', 'headerless', 'variant', 'has-icon', 'global', 'floating', 'title', 'button-aria-label'];
  }

  constructor() {
    super();
    this.closable = false;
    this.headerless = false;
    this.hasIcon = true;
    this.global = false;
    this.floating = false;
    this.variant = 'info';
    this.titleText = 'Teade';
    this.buttonAriaLabel = 'Sulge teade';
  }

  render(childNodes) {
    this.innerHTML = `
    <div class="v-alert v-alert--${this.variant}${this.global ? ' v-alert--global' : ''}${this.floating ? ' v-alert--floating' : ''}">
      <button class="v-close-button" aria-label="${this.buttonAriaLabel}" style="${this.closable ? '' : 'display: none;'}"></button>
      <div class="v-alert__header" style="${this.headerless ? 'display: none;' : ''}">
        <span class="material-icons" aria-hidden="true" style="${this.hasIcon ? '' : 'display: none;'}">${variantIcons[this.variant]}</span>
        <h5 class="v-alert__title">${this.titleText}</h5>
      </div>
      <div class="v-alert__body"></div>
    </div>
    `;

    this.alertElement = this.querySelector('.v-alert');
    this.iconElement = this.querySelector('.material-icons');
    this.titleElement = this.querySelector('.v-alert__title');
    this.closeButton = this.querySelector('.v-close-button');
    this.headerElement = this.querySelector('.v-alert__header');
    this.bodyElement = this.querySelector('.v-alert__body');

    this.bodyElement.append(...childNodes);

    this.closeButton.addEventListener('click', () => this.handleClose());
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
    if (this.closeButton) {
      this.closeButton.removeEventListener('click', () => this.handleClose());
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;

    if (name === 'variant') {
      this.variant = newValue;
    } else if (name === 'title') {
      this.titleText = newValue;
    } else if (name === 'button-aria-label') {
      this.buttonAriaLabel = newValue;
    } else if (name === 'closable') {
      this.closable = newValue === 'true' || newValue === '';
    } else if (name === 'headerless') {
      this.headerless = newValue === 'true' || newValue === '';
    } else if (name === 'has-icon') {
      this.hasIcon = newValue === 'true' || newValue === '';
    } else if (name === 'global') {
      this.global = newValue === 'true' || newValue === '';
    } else if (name === 'floating') {
      this.floating = newValue === 'true' || newValue === '';
    }

    if (!this.alertElement) return;

    if (name === 'variant') {
      this.alertElement.className = `v-alert v-alert--${this.variant}`;
      this.iconElement.textContent = variantIcons[this.variant];
    } else if (name === 'title') {
      this.titleElement.textContent = this.titleText;
    } else if (name === 'button-aria-label') {
      this.closeButton.setAttribute('aria-label', this.buttonAriaLabel);
    } else if (name === 'closable') {
      this.closeButton.style.display = this.closable ? 'block' : 'none';
    } else if (name === 'headerless') {
      this.headerElement.style.display = this.headerless ? 'none' : '';
    } else if (name === 'has-icon') {
      this.iconElement.style.display = this.hasIcon ? '' : 'none';
    } else if (name === 'global') {
      this.alertElement.classList.toggle('v-alert--global', this.global);
    } else if (name === 'floating') {
      this.alertElement.classList.toggle('v-alert--floating', this.floating);
    }
  }

  handleClose() {
    this.mutationObserver.disconnect();
    this.innerHTML = '';
  }
}

customElements.define('v-alert', VeeraAlert);
