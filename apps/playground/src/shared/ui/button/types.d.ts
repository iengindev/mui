import type { $MLabelPropsType } from '../$label'

export type MButtonSeverityType = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'help'
export type MButtonSizeType = 'small' | 'base' | 'large'

export interface MButtonPropsType {
  value?: string
  severity?: MButtonSeverityType
  size?: MButtonSizeType
  icons?: $MLabelPropsType['icons']
}

export interface MButtonEmitsType {
  click: (event: Event) => void
}
