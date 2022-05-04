import { Story } from "@storybook/web-components";
import '../elements/Input';
interface IInput {
    placeholder: string;
    borderColor: string;
}
declare const _default: {
    title: string;
    component: string;
    parameters: {
        componentSubtitle: string;
    };
    argTypes: {
        placeholder: {
            description: string;
            type: {
                name: string;
                required: boolean;
            };
            table: {
                type: {
                    summary: string;
                };
            };
            defaultValue: {
                summary: string;
            };
        };
        borderColor: {
            description: string;
            defaultValue: {
                summary: string;
            };
            options: string[];
            control: {
                type: string;
            };
            default: string;
            table: {
                type: {
                    summary: string[];
                };
            };
        };
    };
};
export default _default;
export declare const Default: Story<IInput>;
