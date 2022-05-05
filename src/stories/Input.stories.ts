import { html } from "lit";
import { Story } from "@storybook/web-components";

import '../elements/Input';

interface IInput {
  placeholder: string
  borderColor: string
}

export default {
  title: 'Design System/Components/Input',
  component: 'custom-input',
  parameters: {
    componentSubtitle:
      'The Input element is used to create interactive controls for web-based forms in order to accept data from the user.',
  },
  argTypes: {
    placeholder: {
      description: "Background text",
      type: { name: 'string', required: true },
      table: {
        type: {summary: 'string'}
      },
      defaultValue: { summary: '' },
    },
    borderColor: {
      description: "The color of input borders",
      defaultValue: { summary: 'primary' },
      options: ['primary', 'error', 'success', 'warning'],
      control: { type: 'select' },
      default: 'primary',
      table: {
        type: { summary: ['primary', 'error', 'success', 'warning'] }
      },
    },
  }
}

const Template: Story<IInput> = (args: IInput) => html`<custom-input placeholder=${args.placeholder} borderColor=${args.borderColor}></custom-input>`;

export const Input = Template.bind({});
Input.args = {
  placeholder: 'Text something...',
  borderColor: 'primary'
}
