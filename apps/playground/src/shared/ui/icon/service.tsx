import type { JSX } from 'vue/jsx-runtime'

import icons from './icons'

import type { MIconPropsType } from './types'

export class MIconService {
  constructor(public props: MIconPropsType) {}

  clsx = (): string[] => {
    return [
      'mui-icon',
    ]
  }

  path = (): JSX.Element[] => {
    return icons[this.props.icon].map((item, i) => (
      <path key={i} d={item}/>
    ))
  }
}
