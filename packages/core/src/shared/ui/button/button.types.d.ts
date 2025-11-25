export type ButtonSeverityType = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'help'
export type ButtonVariantType = 'default' | 'text' | 'link' | 'outlined'
export type ButtonSizeType = 'small' | 'base' | 'large'

export interface ButtonPorpsType {
  label?:       string
  severity?:    ButtonSeverityType
  variant?:     ButtonVariantType
  size?:        ButtonSizeType
  badge?:       number
  rounded?:     boolean
  disabled?:    boolean
}

export interface ButtonEmitsType {
  click:        (event: Event) => void
}
