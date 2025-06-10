const getId = () => {
    return new Date().getTime() + '-' + String(Math.random()).substring(2);
};

export class VeeraCookiePopup extends HTMLElement {
    static get observedAttributes() {
        return [
            'title',
            'body',
            'accept-label',
            'decline-label',
            'choose-label',
            'save-label',
            'necessary-label',
            'analytics-label',
            'marketing-label',
            'tooltip-label',
            'policy-label',
            'policy-link'
        ];
    }

    constructor() {
        super();
        this.title = 'Meie veebileht kasutab küpsiseid';
        this.body = 'Meie veebisait kasutab küpsiseid. Valides "Nõustun", annate nõusoleku kõikide küpsiste kasutamiseks.';
        this.acceptLabel = 'Nõustun';
        this.declineLabel = 'Ei nõustu';
        this.chooseLabel = 'Valin küpsised';
        this.saveLabel = 'Salvestan';
        this.necessaryLabel = 'Vajalikud küpsised';
        this.analyticsLabel = 'Analüütilised küpsised';
        this.marketingLabel = 'Sihtturunduse küpsised';
        this.tooltipLabel = 'Selgitus küpsiste kohta';
        this.policyLabel = 'Lugege rohkem meie küpsiste kasutamise põhimõtetest';
        this.policyLink = '#';
        this._expanded = false;
        this._id = getId();
    }

    render() {
        this.innerHTML = `
        <style>
        .v-button.expanded .material-icons {
            transform: rotateX(180deg);
        }
        </style>
        <div class="v-cookie-popup" role="region" aria-labelledby="cookie-popup-title">
            <h4 id="cookie-popup-title" class="v-cookie-popup__title">${this.title}</h4>
            <div class="v-cookie-popup__body">${this.body} <a class="v-link-sm" href="${this.policyLink}">${this.policyLabel}</a>.</div>
            <div>
            <div class="v-flex v-gap-5 v-flex-wrap v-flex-row-reverse v-justify-content-end">
                <div class="v-flex v-gap-5">
                <v-button variant="secondary" size="md" type="button" data-action="decline">${this.declineLabel}</v-button>
                <button type="button" class="v-button v-button--primary v-button--md" data-action="accept">${this.acceptLabel}</button>
                </div>
                <button type="button" id="v-cookie-popup-expand-button-${this._id}" class="v-button v-button--neutral v-button--md v-mr-auto${this._expanded ? ' expanded' : ''}" aria-expanded="${this._expanded}" data-action="choose">${this.chooseLabel}<span class="material-icons" aria-hidden="true">expand_more</span></button>
            </div>
            <div class="v-collapse${this._expanded ? ' v-collapse--expanded' : ''}" style="display: grid;">
                <div class="v-collapse__content v-flex v-flex-column v-gap-5">
                <div class="v-flex v-flex-column v-pl-5 v-gap-4 v-mt-4">
                    <div class="v-flex v-gap-3 v-align-items-center">
                    <div class="v-checkbox v-checkbox--sm">
                        <input type="checkbox" disabled class="v-checkbox v-checkbox--md" id="v-checkbox-label-${this._id}">
                        <label for="v-checkbox-label-${this._id}">${this.necessaryLabel}</label>
                    </div>
                    <button type="button" class="v-button v-button--neutral v-button--sm v-button--icon-only material-icons-outlined" aria-describedby="tooltip-${this._id}" data-tooltip="${this._id}">info</button>
                    <div class="v-tooltip" role="tooltip" id="tooltip-${this._id}" aria-hidden="true" style="position: absolute; left: 0px; top: 0px; margin: 0px;">${this.tooltipLabel}</div>
                    </div>
                    <div class="v-flex v-gap-3 v-align-items-center">
                    <div class="v-checkbox v-checkbox--sm">
                        <input type="checkbox" class="v-checkbox v-checkbox--md" id="v-checkbox-label-${this._id}">
                        <label for="v-checkbox-label-${this._id}">${this.analyticsLabel}</label>
                    </div>
                    <button type="button" class="v-button v-button--neutral v-button--sm v-button--icon-only material-icons-outlined" aria-describedby="tooltip-${this._id}" data-tooltip="${this._id}">info</button>
                    <div class="v-tooltip" role="tooltip" id="tooltip-${this._id}" aria-hidden="true" style="position: absolute; left: 0px; top: 0px; margin: 0px;">${this.tooltipLabel}</div>
                    </div>
                    <div class="v-flex v-gap-3 v-align-items-center">
                    <div class="v-checkbox v-checkbox--sm">
                        <input type="checkbox" class="v-checkbox v-checkbox--md" id="v-checkbox-label-${this._id}">
                        <label for="v-checkbox-label-${this._id}">${this.marketingLabel}</label>
                    </div>
                    <button type="button" class="v-button v-button--neutral v-button--sm v-button--icon-only material-icons-outlined" aria-describedby="tooltip-${this._id}" data-tooltip="${this._id}">info</button>
                    <div class="v-tooltip" role="tooltip" id="tooltip-${this._id}" aria-hidden="true" style="position: absolute; left: 0px; top: 0px; margin: 0px;">${this.tooltipLabel}</div>
                    </div>
                </div>
                <button type="button" class="v-button v-button--primary v-button--md v-mr-auto" data-action="save">${this.saveLabel}</button>
                </div>
            </div>
            </div>
        </div>
        `;

        this.collapseElement = this.querySelector('.v-collapse');
        this.expandButtonElement = this.querySelector('#v-cookie-popup-expand-button-' + this._id);
        this._attachEvents();
    }

    _attachEvents() {
        const chooseBtn = this.querySelector('[data-action="choose"]');
        if (chooseBtn) {
            chooseBtn.onclick = () => {
                this._expanded = !this._expanded;
                this.collapseElement.classList.toggle('v-collapse--expanded', this._expanded);
                this.expandButtonElement.classList.toggle('expanded', this._expanded);
                this.expandButtonElement.setAttribute('aria-expanded', this._expanded);
            };
        }
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;
        if (name === 'title') this.title = newValue;
        else if (name === 'body') this.body = newValue;
        else if (name === 'accept-label') this.acceptLabel = newValue;
        else if (name === 'decline-label') this.declineLabel = newValue;
        else if (name === 'choose-label') this.chooseLabel = newValue;
        else if (name === 'save-label') this.saveLabel = newValue;
        else if (name === 'necessary-label') this.necessaryLabel = newValue;
        else if (name === 'analytics-label') this.analyticsLabel = newValue;
        else if (name === 'marketing-label') this.marketingLabel = newValue;
        else if (name === 'tooltip-label') this.tooltipLabel = newValue;
        else if (name === 'policy-label') this.policyLabel = newValue;
        else if (name === 'policy-link') this.policyLink = newValue;
        this.render();
    }
}

customElements.define('v-cookie-popup', VeeraCookiePopup);
