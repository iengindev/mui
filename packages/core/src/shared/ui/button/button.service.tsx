import { type SetupContext } from 'vue'

import type { ButtonPorpsType, ButtonEmitsType } from './button.types'

export const useButtonService = (props: ButtonPorpsType, ctx: SetupContext<ButtonEmitsType>) => ({
  methods: {
    clsx: () => {
      const severity = () => {
        if (props.severity) {
          return `mui-btn-severity-${props.severity}`
        }

        return null
      }

      const variant = () => {
        if (props.variant) {
          return `mui-btn-variant-${props.variant}`
        }

        return null
      }

      const size = () => {
        if (props.size) {
          return `mui-btn-size-${props.size}`
        }

        return null
      }

      const rounded = () => {
        if (props.rounded) {
          return 'rounded'
        }

        return null
      }

      return ['mui-btn', severity(), variant(), size(), rounded()].filter(clsx => clsx).join(' ')
    },

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
    },

    badge: () => {
      if (!props.badge) {
        return null
      }

      return (
        <span class="badge">
          {
            props.badge
          }
        </span>
      )
    },
  },

  actions: {
    handleClick: (event: Event) => {
      ctx.emit('click', event)
    },
  },
})
