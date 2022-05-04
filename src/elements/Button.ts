import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('my-button')
export class Button extends LitElement {
  static styles = css`
    button {
      border: 2px solid gray;
      border-radius: 4px;
      font-family: Arial;
      padding: 15px;
      border-radius: 30px;
      font-size: 24px;
      background: none;
    }
  `;

  @property()
  text: string;

  render () {
    return html`<button>${this.text}</button>`;
  }
}
