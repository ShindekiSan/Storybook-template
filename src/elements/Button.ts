import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

type IButtonVariant = "contained" | "outlined" | "text";

@customElement('custom-button')
export class CustomButton extends LitElement {
  static styles = css`
    #contained {
      border: 2px solid #4e8bfc;
      background-color: #4e8bfc;
      border-radius: 4px;
      font-family: Arial;
      padding: 1rem;
      border-radius: 2em;
      font-size: 24px;
      color: #ffffff;
    }
    #outlined {
      border: 2px solid #4e8bfc;
      border-radius: 4px;
      font-family: Arial;
      padding: 1rem;
      border-radius: 2em;
      font-size: 24px;
      background: none;
      color: #4e8bfc;
    }
    #text {
      border: 2px solid #ffffff;
      font-family: Arial;
      padding: 1rem;
      border-radius: 2em;
      font-size: 24px;
      background: none;
      color: #4e8bfc;
    }
  `;

  @property()
  text: string;

  @property()
  variant: IButtonVariant;

  render () {
    return html`<button id=${this.variant}>${this.text}</button>`;
  }
}
