import type { SetupContext } from 'vue'

import type { MButtonPropsType, MButtonEmitsType } from './types'

export class MButtonService {
  constructor(public props: MButtonPropsType, public ctx: SetupContext<MButtonEmitsType>) {}

  clsx = (): string[] => {
    const clsx = ['mui-button']

    return clsx
  }

  handleClick = (event: Event): void => {
    this.ctx.emit('click', event)
  }
}
