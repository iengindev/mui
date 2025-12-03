import { type SetupContext } from 'vue'

import type { ButtonPorpsType, ButtonEmitsType } from './button.types'

import { MIcon } from '..'

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
          return 'mui-btn-rounded'
        }

        return null
      }

      const iconOnly = () => {
        if (props.icon) {
          return 'mui-btn-icon-only'
        }

        return null
      }

      return ['mui-btn', severity(), variant(), size(), rounded(), iconOnly()].filter(clsx => clsx).join(' ')
    },

    topIcons: () => {
      if (!props.icon) {
        return null
      }

      const icons = props.icon.filter(icon => icon.position === 'top') ?? []

      if (icons.length === 0) {
        return null
      }

      return (
        <span class="mui-btn-icons-top">
          {
            icons.map((item, i) => <MIcon key={i} icon={item.icon}/>)
          }
        </span>
      )
    },

    leftIcons: () => {
      if (!props.icon) {
        return null
      }

      const icons = props.icon.filter(icon => icon.position === undefined || icon.position === 'left') ?? []

      if (icons.length === 0) {
        return null
      }

      return (
        <span class="mui-btn-icons-left">
          {
            icons.map((item, i) => <MIcon key={i} icon={item.icon}/>)
          }
        </span>
      )
    },

    rightIcons: () => {
      if (!props.icon) {
        return null
      }

      const icons = props.icon.filter(icon => icon.position === 'right') ?? []

      if (icons.length === 0) {
        return null
      }

      return (
        <span class="mui-btn-icons-right">
          {
            icons.map((item, i) => <MIcon key={i} icon={item.icon}/>)
          }
        </span>
      )
    },

    bottomIcons: () => {
      if (!props.icon) {
        return null
      }

      const icons = props.icon.filter(icon => icon.position === 'bottom') ?? []

      if (icons.length === 0) {
        return null
      }

      return (
        <span class="mui-btn-icons-bottom">
          {
            icons.map((item, i) => <MIcon key={i} icon={item.icon}/>)
          }
        </span>
      )
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
