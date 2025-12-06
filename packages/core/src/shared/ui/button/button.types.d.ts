import { MIconPorpsType } from '..'

export type ButtonSeverityType = 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'help'
export type ButtonVariantType = 'text' | 'link' | 'outlined'
export type ButtonSizeType = 'small' | 'large'

export type ButtonIconType = {
  position?:    'top' | 'left' | 'right' | 'bottom'
  icon:         MIconPorpsType['icon']
}

export interface ButtonPorpsType {
  icon?:        ButtonIconType[]
  label?:       string
  severity?:    ButtonSeverityType
  variant?:     ButtonVariantType
  size?:        ButtonSizeType
  badge?:       string
  rounded?:     boolean
  disabled?:    boolean
}

export interface ButtonEmitsType {
  click:        (event: Event) => void
}
