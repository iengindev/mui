import { type SetupContext } from 'vue'

import type { ButtonPorpsType, ButtonEmitsType } from './button.types'

export const useButtonService = (props: ButtonPorpsType, ctx: SetupContext<ButtonEmitsType>) => ({
  methods: {
    clsx: [
      'mui-btn',
      props.size === 'small' ? 'mui-btn-sm' : null,
      props.size === 'large' ? 'mui-btn-lg' : null,
    ].filter(clsx => clsx).join(' '),

    label: () => {
      if (!props.label) {
        return null
      }

      return (
        <span class="label">
          {
            props.label
          }
        </span>
      )
    }
  },

  actions: {
    handleClick: (event: Event) => {
      ctx.emit('click', event)
    }
  },
})
