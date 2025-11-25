import type { SetupContext } from 'vue'

import type { ButtonPorpsType, ButtonEmitsType } from './button.types'

export const useButtonService = (props: ButtonPorpsType, ctx: SetupContext<ButtonEmitsType>) => ({
  methods: {
    clsx: [
      'mui-button',
      'mui-button-severity-' + (props.severity ?? 'primary') + '-' + (props.variant ?? 'default'),
      'mui-button-size-' + (props.size ?? 'base'),
    ].join(' '),
  },

  actions: {
    handleClick: (event: Event) => {
      ctx.emit('click', event)
    }
  }
})
