import { LitElement, html } from 'lit';

export class VeeraLoader extends LitElement {
  constructor() {
    super();
  }

  getClassName() {
    return `v-loader`;
  }

  render() {
    return html`
        <style>
            @keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
            .v-loader {
                --v-spin-animation-duration: 1s;
                box-sizing: border-box;
                display: inline-block;
                width: 44px;
                height: 44px;
                border: 4px solid var(--v-loader-background-circular);
                border-bottom-color: transparent;
                border-radius: 50%;
                animation: spin var(--v-spin-animation-duration) linear infinite;
            }
        </style>
        <div class="${this.getClassName()}"></div>
    `;
  }
}

customElements.define('v-loader', VeeraLoader);
