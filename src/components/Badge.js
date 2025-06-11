class Badge extends HTMLElement {
    static get observedAttributes() {
        return ['variant', 'has-icon'];
    }

    constructor() {
        super();
        this.variant = 'info';
        this.hasIcon = false;
    }

    static get variantIcons() {
        return {
            info: 'flag',
            success: 'check',
            warning: 'warning_amber',
            error: 'report',
            neutral: 'label',
        };
    }

    render(childNodes) {
        const icon = Badge.variantIcons[this.variant] || 'flag';
        this.innerHTML = `
            <div class="v-badge v-badge--${this.variant}">
                <span class="material-icons v-badge__icon" style="display: ${this.hasIcon ? 'block' : 'none'}" aria-hidden="true">${icon}</span>
                <span></span>
            </div>
        `;

        this.badgeElement = this.querySelector('.v-badge');
        this.iconElement = this.querySelector('.v-badge > .v-badge__icon');
        this.contentElement = this.querySelector('.v-badge > span:last-child');
        this.contentElement.append(...childNodes);
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
        } else if (name === 'has-icon') {
            this.hasIcon = newValue === 'true' || newValue === '';
        }

        if (!this.badgeElement) return;

        if (name === 'variant') {
            this.badgeElement.className = `v-badge v-badge--${this.variant}`;
            const icon = Badge.variantIcons[this.variant] || 'flag';
            this.iconElement.textContent = icon;
        } else if (name === 'has-icon') {
            this.iconElement.style.display = this.hasIcon ? 'block' : 'none';
        }
    }
}

customElements.define('v-badge', Badge);
