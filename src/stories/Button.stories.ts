import { html } from "lit";
import { Story } from "@storybook/web-components";

import '../elements/Button';

interface IButton {
  text: string
  primary: boolean,
}

export default {
  title: 'Button',
  component: 'custom-button',
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
}

const Template: Story<IButton> = (args: IButton) => html`<custom-button text=${args.text}></custom-button>`;

export const Default = Template.bind({});
Default.args = {
  text: 'Click me!',
  primary: true,
}
