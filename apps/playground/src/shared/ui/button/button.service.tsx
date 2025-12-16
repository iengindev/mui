import type { SetupContext } from 'vue'
import type { JSX } from 'vue/jsx-runtime'

import type { ButtonPropsType, ButtonEmitsType } from './button.types'

export class ButtonService {
  constructor(public props: ButtonPropsType, public ctx: SetupContext<ButtonEmitsType>) {}

  clsx = (): (string | undefined)[] => {
    return [
      'mui-btn',
    ]
  }

  label = (): JSX.Element | null => {
    if (!this.props.label) {
      return null
    }

    return (
      <span class="label">
        {
          this.props.label
        }
      </span>
    )
  }

  handleClick = (event: Event): void => {
    this.ctx.emit('click', event)
  }
}
