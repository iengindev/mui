export type ButtonSeverityType = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'help'

export interface ButtonPorpsType {
  severity?: ButtonSeverityType
}

export interface ButtonEmitsType {
  click: (event: Event) => void
}
