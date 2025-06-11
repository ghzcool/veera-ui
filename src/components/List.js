export class List extends HTMLElement {
    static get observedAttributes() {
        return ['type', 'plain'];
    }

    constructor() {
        super();
        this.type = 'ul';
        this.plain = false;
    }

    render(childNodes) {
        this.innerHTML = `
            <${this.type} class="v-list${this.plain ? ' v-list--plain' : ''}"></${this.type}>
        `;
        this.listElement = this.querySelector(`.v-list`);
        this.listElement.append(...childNodes);
    }

    connectedCallback() {
        if (this.mutationObserver) return;
    
        this.render([...this.childNodes]);
        this.mutationObserver = new MutationObserver((mutations, observer) => {
            if (mutations.some(m => m.target === this)) {
                observer.disconnect();
                this.render([...this.childNodes]);
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

        if (name === 'type') {
            this.type = newValue;
        } else if (name === 'plain') {
            this.plain = newValue === 'true' || newValue === '';
        }

        if (!this.listElement) return;

        if (name === 'type') {
            this.render([...this.childNodes]);
        } else if (name === 'plain') {
            this.listElement.className = `v-list${this.plain ? ' v-list--plain' : ''}`;
        }
    }
}

customElements.define('v-list', List);
