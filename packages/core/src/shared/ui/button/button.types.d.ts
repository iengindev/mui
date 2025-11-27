export type ButtonSeverityType = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'help'
export type ButtonVariantType = 'text' | 'link' | 'outlined'
export type ButtonSizeType = 'small' | 'large'

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
