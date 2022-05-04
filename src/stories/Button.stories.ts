import { html } from "lit";
import { Story, Meta } from "@storybook/web-components";

import '../elements/Button';

interface IButton {
  text: string
  variant: string
}

export default {
  title: 'Components/Button',
  component: 'custom-button',
  parameters: {
    docs: {
      inlineStories: false,
    },
    actions: {
      handles: ['click'],
    },
    componentSubtitle: 'Button is the primary component for user to interact with UI.',
  },
  argTypes: {
    variant: {
      description: 'Button styles preset',
      options: ['contained', 'outlined', 'text'],
      control: { type: 'select', defaultValue: 'contained' },
      table: {
        type: { summary: 'string' }
      },
      defaultValue: { summary: 'contained' },
    },
    text: {
      description: 'Button text',
      table: {
        type: { summary: 'string' }
      },
      defaultValue: { summary: '' },
    },
  },
} as Meta

const Template: Story<IButton> = (args: IButton) => html`<custom-button variant=${args.variant} text=${args.text}></custom-button>`;

export const Contained = Template.bind({});
Contained.args = {
  text: 'Click me!',
  variant: 'contained',
}

export const Outlined = Template.bind({});
Outlined.args = {
  text: 'Click me!',
  variant: 'outlined',
}

export const Text = Template.bind({});
Text.args = {
  text: 'Click me!',
  variant: 'text',
}
