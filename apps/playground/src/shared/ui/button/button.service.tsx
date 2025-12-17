import type { SetupContext } from 'vue'
import type { JSX } from 'vue/jsx-runtime'

import { MIcon } from '..'

import type { ButtonPropsType, ButtonEmitsType, IconPositionType } from './button.types'

export class ButtonService {
  constructor(public props: ButtonPropsType, public ctx: SetupContext<ButtonEmitsType>) {}

  clsx = (): string => {
    const clsx = ['mui-btn']

    if (this.props.severity) {
      clsx.push(`mui-btn-severity-${this.props.severity}`)
    }

    if (this.props.variant) {
      clsx.push(`mui-btn-variant-${this.props.variant}`)
    }

    if (this.props.size) {
      clsx.push(`mui-btn-size-${this.props.size}`)
    }

    if (this.props.rounded) {
      clsx.push(`mui-btn-rounded`)
    }

    if (this.props.icon && !this.props.label) {
      clsx.push(`mui-btn-icon-only`)
    }

    return clsx.filter((item) => item).join(' ')
  }

  icon = (position: IconPositionType, isVisible: boolean): JSX.Element | null => {
    if (!isVisible || !this.props.icon) {
      return null
    }

    const icons = this.props.icon.filter((item) => item.position === position) ?? []

    if (!(icons.length > 0)) {
      return null
    }

    return (
      <span class={`mui-btn-icon-${position}`}>
        {
          icons.map((item, i) => (
            <MIcon key={i} icon={item.icon}/>
          ))
        }
      </span>
    )
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

  badge = (): JSX.Element | null => {
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
  }

  handleClick = (event: Event): void => {
    this.ctx.emit('click', event)
  }
}
