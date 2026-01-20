import type { $MLabelPropsType } from '../$label'

export type MButtonSeverityType = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'help'
export type MButtonSizeType = 'small' | 'base' | 'large'

export interface MButtonPropsType extends $MLabelPropsType {
  severity?: MButtonSeverityType
  size?: MButtonSizeType
  loading?: boolean
  disabled?: boolean
}

export interface MButtonEmitsType {
  click: (event: Event) => void
}
