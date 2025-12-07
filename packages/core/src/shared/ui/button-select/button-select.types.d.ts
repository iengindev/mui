import { MIconPorpsType } from '..'

export type ButtonIconType = {
  position?:    'top' | 'left' | 'right' | 'bottom'
  icon:         MIconPorpsType['icon']
}

export type ButtonSelectOption = {
  id:           number | string
  icon?:        ButtonIconType[]
  label?:       string
  disabled?:    boolean
}

export interface ButtonSelectPorpsType {
  options:      ButtonSelectOption[]
  size?:        ButtonSizeType
}

export interface ButtonSelectEmitsType {
  select:       (event: Event) => void
}
