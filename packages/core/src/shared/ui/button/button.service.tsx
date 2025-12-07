import { type SetupContext } from 'vue'

import type { ButtonPorpsType, ButtonEmitsType, IconPositionType } from './button.types'

import { MIcon } from '..'

export class ButtonService {
  constructor(
    public props: ButtonPorpsType,
    public ctx: SetupContext<ButtonEmitsType>
  ) {}

  methods() {
    return {
      clsx: () => {
        return [
          'mui-btn',
          this.props.severity ? `mui-btn-severity-${this.props.severity}` : undefined,
          this.props.variant ? `mui-btn-variant-${this.props.variant}` : undefined,
          this.props.size ? `mui-btn-size-${this.props.size}` : undefined,
          this.props.rounded ? `mui-btn-rounded` : undefined,
          this.props.icon ? `mui-btn-icon-only` : undefined,
        ].filter(clsx => clsx).join(' ')
      },

      viewIcon: (position: IconPositionType, isVisible: boolean) => {
        if (!isVisible || !this.props.icon) {
          return null
        }

        const icons = this.props.icon.filter(icon => icon.position === position) ?? []

        if (icons.length === 0) {
          return null
        }

        return (
          <span class={`mui-btn-icons-${position}`}>
            {
              icons.map((item, i) => (
                <MIcon key={i} icon={item.icon}/>
              ))
            }
          </span>
        )
      },

      label: () => {
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
      },

      badge: () => {
        if (!this.props.badge) {
          return null
        }

        return (
          <span class="badge">
            {
              this.props.badge
            }
          </span>
        )
      },
    }
  }

  actions() {
    return {
      handleClick: (event: Event) => {
        this.ctx.emit('click', event)
      }
    }
  }
}
