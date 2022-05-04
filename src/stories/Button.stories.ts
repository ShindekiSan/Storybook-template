import '../elements/Button';
import { html } from "lit";

export default {
  title: 'my-button',
  component: 'my-button',
}

export const Default = () => html`<my-button text="Click me!"></my-button>`;