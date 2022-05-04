import { LitElement } from "lit";
declare type IButtonVariant = "contained" | "outlined" | "text";
export declare class CustomButton extends LitElement {
    static styles: import("lit").CSSResult;
    text: string;
    variant: IButtonVariant;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
