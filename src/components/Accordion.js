const getId = () => {
    return new Date().getTime() + '-' + String(Math.random()).substring(2);
};

class Accordion extends HTMLElement {
    static get observedAttributes() {
        return ['disabled', 'size', 'expanded', 'title', 'icon-align'];
    }

    constructor() {
        super();
        this._id = getId();
        this.expanded = false;
        this.size = 'sm';
        this.disabled = false;
        this.title = '';
        this.iconAlign = 'right';
    }

    render(childNodes) {
        const id = this._id;
        this.innerHTML = `
        <style>
            .v-accordion .v-accordion--align-left {
                flex-direction: row-reverse;
            }
            .v-accordion .v-accordion--align-left .v-accordion__title {
                margin-right: auto;
                margin-left: var(--v-spacing-baseline-05);
            }
            .v-accordion .v-accordion--align-left .material-icons {
                margin-left: 0;
            }
        </style>
        <div class="v-accordion v-accordion--${this.size}${this.expanded ? ' v-accordion--expanded' : ''}${this.disabled ? ' v-accordion--disabled' : ''}" id="accordion-${id}" role="button">
            <button class="v-accordion__header${this.iconAlign === 'left' ? ' v-accordion--align-left' : ''}" id="accordion-header-${id}" aria-expanded="${this.expanded ? 'true' : 'false'}" aria-controls="accordion-content-${id}"${this.disabled ? ' disabled="true"' : ''}>
                <h4 class="v-accordion__title">${this.title}</h4>
                <span class="material-icons v-accordion__expand-icon" aria-hidden="true">expand_more</span>
            </button>
            <div class="v-accordion__collapse" role="region" id="accordion-content-${id}" aria-labelledby="accordion-header-${id}">
                <div class="v-accordion__content"></div>
            </div>
        </div>
        `;
        this.accordionElement = this.querySelector('.v-accordion');
        this.headerElement = this.querySelector('.v-accordion__header');
        this.titleElement = this.querySelector('.v-accordion__title');
        this.contentElement = this.querySelector('.v-accordion__content');
        this.contentElement.append(...childNodes);

        this.headerElement.addEventListener('click', () => this.handleToggle());
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

        if (name === 'size') {
            this.size = newValue;
        } else if (name === 'disabled') {
            this.disabled = newValue;
        } else if (name === 'expanded') {
            this.expanded = newValue === 'true';
        } else if (name === 'title') {
            this.title = newValue;
        } else if (name === 'icon-align') {
            this.iconAlign = newValue;
        }

        if (!this.accordionElement) return;

        if (name === 'size' || name === 'expanded' || name === 'disabled') {
            this.accordionElement.className = `v-accordion v-accordion--${this.size}${this.expanded ? ' v-accordion--expanded' : ''}${this.disabled ? ' v-accordion--disabled' : ''}`;
            if (name === 'expanded') {
                this.headerElement.setAttribute('aria-expanded', this.expanded ? 'true' : 'false');
            } else if (name === 'disabled') {
                this.headerElement.setAttribute('disabled', this.disabled ? 'true' : 'false');
            }
        } else if (name === 'icon-align') {
            this.headerElement.className = `v-accordion__header${this.iconAlign === 'left' ? ' v-accordion--align-left' : ''}`;
        } else if (name === 'title') {
            this.titleElement.textContent = this.title;
        }
    }

    handleToggle() {
        if (this.disabled) return;
        this.expanded = !this.expanded;
        this.accordionElement.className = `v-accordion v-accordion--${this.size}${this.expanded ? ' v-accordion--expanded' : ''}`;
    }
}

customElements.define('v-accordion', Accordion);
