import { html } from "lit";
import { Story, Meta } from "@storybook/web-components";

import '../elements/Button';

import { IButton } from "../types/Button";

export default {
  title: 'Design System/Components/Button',
  component: 'custom-button',
  parameters: {
    actions: {
      handles: ['click'],
    },
    componentSubtitle: 'Button is the primary component for user to interact with UI.',
  },
  argTypes: {
    variant: {
      description: 'Button styles preset',
      type: { name: 'string', required: true },
      options: ['contained', 'outlined', 'text'],
      control: { type: 'select' },
      table: {
        type: { summary: ['"contained"', '"outlined"', '"text"'] }
      },
      defaultValue: { summary: '"contained"' },
    },
    text: {
      description: 'Button text',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'string' }
      },
      defaultValue: { summary: '' },
    },
    disabled: {
      description: 'Disables button, so it is unavaliable for interacting',
      type: { name: 'boolean' },
      table: {
        type: { summary: 'boolean' }
      },
      defaultValue: { summary: 'false' },

    },
  },
} as Meta

const Template: Story<IButton> = (args: IButton) => {
  if (args.disabled) {
    return html`<custom-button variant=${args.variant} text=${args.text} disabled></custom-button>`
  }
  return html`<custom-button variant=${args.variant} text=${args.text}></custom-button>`
}

export const Contained = Template.bind({});
Contained.args = {
  text: 'Click me!',
  variant: 'contained',
  disabled: false,
}

export const Outlined = Template.bind({});
Outlined.args = {
  text: 'Click me!',
  variant: 'outlined',
  disabled: false,
}

export const Text = Template.bind({});
Text.args = {
  text: 'Click me!',
  variant: 'text',
  disabled: false,
}

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Click me!',
  variant: 'contained',
  disabled: true,
}
