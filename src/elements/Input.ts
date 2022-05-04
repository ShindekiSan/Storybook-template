import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('custom-input')
export class CustomInput extends LitElement {
  @property()
  placeholder: string;

  @property()
  borderColor: string = 'primary';

  render () {
    return html`<input class=${this.borderColor} placeholder="${this.placeholder}"/>`;
  }

  static get styles() {
    return css`
    input {
      border-radius: 4px;
      font-family: Arial;
      padding: 15px;
      border-radius: 30px;
      font-size: 24px;
      background: none;
    }

    .primary {
      border: 2px solid grey;
    }

    .error {
      border: 2px solid red;
    }

    .success {
      border: 2px solid green;
    }
    
    .warning {
      border: 2px solid orange;
    }
  `};
}
