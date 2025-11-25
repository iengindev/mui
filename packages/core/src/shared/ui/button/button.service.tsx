import type { SetupContext } from 'vue'

import type { ButtonPorpsType, ButtonEmitsType } from './button.types'

export const useButtonService = (props: ButtonPorpsType, ctx: SetupContext<ButtonEmitsType>) => ({
  clsx: () => ([
    'mui-button',
    'mui-button-severity-' + (props.severity ?? 'primary'),
  ]).join(' '),

  actions: {
    handleClick: (event: Event) => {
      ctx.emit('click', event)
    }
  }
})
