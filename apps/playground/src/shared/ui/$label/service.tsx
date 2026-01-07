import type { JSX } from 'vue/jsx-runtime'

import type { $MLabelPropsType } from './types'

export class $MLabelService {
  constructor (public props: $MLabelPropsType) {}

  clsx = (): string[] => {
    return [
      'mui-label'
    ]
  }

  label = (): JSX.Element => {
    return (
      <>
        <div class="row">
          {
            this.value()
          }
        </div>
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
