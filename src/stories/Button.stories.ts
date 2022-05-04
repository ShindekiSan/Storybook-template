import { html } from "lit";
import { Story } from "@storybook/web-components"

import '../elements/Button';

export default {
  title: 'Button',
  component: 'my-button',
}

interface IButton {
  text: string
}

const Tamplate: Story<IButton> = (args: IButton) => html`<my-button text=${args.text}></my-button>`

export const Default = Tamplate.bind({});
Default.args = {
  text: "some"
}
