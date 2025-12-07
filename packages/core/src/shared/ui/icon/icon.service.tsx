import type { IconPorpsType } from './icon.types'

import icons from './icons'

export class IconService {
  constructor(
    public props: IconPorpsType
  ) {}

  methods() {
    return {
      icon: () => {
        return icons[this.props.icon].map((item, i) => {
          return (
            <path key={i} d={item}/>
          )
        })
      }
    }
  }
}
