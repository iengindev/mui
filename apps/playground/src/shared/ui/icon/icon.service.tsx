import type { JSX } from 'vue/jsx-runtime'

import icons from './icons'

import type { IconPropsType } from './icon.types'

export class IconService {
  constructor(public props: IconPropsType) {}

  icon = (): JSX.Element[] => {
    return icons[this.props.icon].map((item, i) => (
      <path key={i} d={item}/>
    ))
  }
}
