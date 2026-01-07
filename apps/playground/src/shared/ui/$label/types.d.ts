import type { MIconPropsType } from '../'

export type IconPositionType = {
  position: 'top' | 'left' | 'right' | 'bottom'
  icon: MIconPropsType['icon']
}

export interface $MLabelPropsType {
  value?: srting
  icons?: IconPositionType[]
}
