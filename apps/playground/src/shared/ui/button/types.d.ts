export type MButtonSeverityType = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'help'
export type MButtonSizeType = 'small' | 'base' | 'large'

export interface MButtonPropsType {
  value?:         string
  severity?:      MButtonSeverityType
  size?:          MButtonSizeType
}

export interface MButtonEmitsType {
  click:          (event: Event) => void
}
