export type IButtonVariant = "contained" | "outlined" | "text";

export interface IButton {
  text: string
  variant: IButtonVariant
  disabled: boolean
}
