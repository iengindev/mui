import type { SetupContext } from 'vue'
import type { JSX } from 'vue/jsx-runtime'

import type { MButtonPropsType, MButtonEmitsType } from './types'

export class MButtonService {
  constructor(public props: MButtonPropsType, public ctx: SetupContext<MButtonEmitsType>) {}

  clsx = (): string[] => {
    return [
      'mui-button'
    ]
  }

  handleClick = (event: Event): void => {
    this.ctx.emit('click', event)
  }
}
