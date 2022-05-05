import { Story, Meta } from "@storybook/web-components";
import '../elements/Button';
interface IButton {
    text: string;
    variant: string;
}
declare const _default: Meta<import("@storybook/web-components").Args>;
export default _default;
export declare const Contained: Story<IButton>;
export declare const Outlined: Story<IButton>;
export declare const Text: Story<IButton>;
