import type icons from './icons'

export type IconType = keyof typeof icons

export interface MIconPropsType {
  icon: IconType
}
