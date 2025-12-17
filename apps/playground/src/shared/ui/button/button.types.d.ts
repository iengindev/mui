import { MIconPropsType } from '..'

export type ButtonSeverityType = 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'help'
export type ButtonVariantType = 'text' | 'link' | 'outlined'
export type ButtonSizeType = 'small' | 'large'

export type IconPositionType = 'top' | 'left' | 'right' | 'bottom'

export type ButtonIconType = {
  position?:    IconPositionType
  icon:         MIconPropsType['icon']
}

export interface ButtonPropsType {
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
  click: (event: Event) => void
}
