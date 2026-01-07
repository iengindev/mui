import type { JSX } from 'vue/jsx-runtime'

import { MIcon } from '../icon'

import type { $MLabelPropsType, IconPositionType } from './types'

export class $MLabelService {
  constructor(public props: $MLabelPropsType) {}

  clsx = (): string[] => {
    return [
      'mui-label',
    ]
  }

  icon = (position: IconPositionType['position']): JSX.Element[] | null => {
    if (!this.props.icons) {
      return null
    }

    return this.props.icons.filter(item => item.position === position).map((item, i) => (
      <MIcon key={i} icon={item.icon}/>
    ))
  }

  label = (): JSX.Element => {
    return (
      <>
        {
          this.icon('top')
        }

        <div class="row">
          {
            this.icon('left')
          }

          {
            this.value()
          }

          {
            this.icon('right')
          }
        </div>

        {
          this.icon('bottom')
        }
      </>
    )
  }

  value = (): JSX.Element | null => {
    if (!this.props.value) {
      return null
    }

    return (
      <>
        <span class="value">
          {
            this.props.value
          }
        </span>
      </>
    )
  }
}
