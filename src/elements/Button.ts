import { LitElement, html, css } from "lit";

export class Button extends LitElement {
  static styles = css`
    button {
      border: 1px solid gray;
      border-radius: 4px;
      font-family: Arial;
      font-size: 24px;
      background: none;
    }
  `;

  static get properties() {
    return {
      text: { type: String }
    }
  }

  constructor() {
    super();
    this.text = this.getAttribute('text');
  }

  render () {
    return html`<button>${this.text}</button>`;
  }
}

customElements.define('my-button', Button);