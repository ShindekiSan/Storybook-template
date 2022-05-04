import { html } from "lit";
import { Story, Meta } from "@storybook/web-components";

import '../elements/Button';

interface IButton {
  text: string
  variant: string
}

export default {
  title: 'Button',
  component: 'custom-button',
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'radio' },
    },
  },
} as Meta

const Template: Story<IButton> = (args: IButton) => html`<custom-button variant=${args.variant} text=${args.text}></custom-button>`;

export const Default = Template.bind({});
Default.args = {
  text: 'Click me!',
  variant: 'contained',
}
