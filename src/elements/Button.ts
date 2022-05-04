import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('my-button')
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

  @property({ type: String }) text: string;

  render () {
    return html`<button>${this.text}</button>`;
  }
}
