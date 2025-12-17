import './button.style.css'

import { defineComponent, type SetupContext } from 'vue'

import { ButtonService } from './button.service'

import type { ButtonPropsType, ButtonEmitsType } from './button.types'

export default defineComponent((props: ButtonPropsType, ctx: SetupContext<ButtonEmitsType>) => {
  const useButtonSerivce = new ButtonService(props, ctx)

  return () => (
    <>
      <button { ...ctx.attrs } class={useButtonSerivce.clsx()} onClick={useButtonSerivce.handleClick} disabled={props.disabled}>
        {
          useButtonSerivce.icon('top', props.icon ? props.icon.some((item) => item.position === 'top') : false)
        }

        <span class="mui-btn-row">
          {
            useButtonSerivce.icon('left', props.icon ? props.icon.some((item) => item.position === 'left') : false)
          }

          {
            useButtonSerivce.label()
          }

          {
            useButtonSerivce.badge()
          }

          {
            useButtonSerivce.icon('right', props.icon ? props.icon.some((item) => item.position === 'right') : false)
          }
        </span>

        {
          useButtonSerivce.icon('bottom', props.icon ? props.icon.some((item) => item.position === 'bottom') : false)
        }
      </button>
    </>
  )
}, {
  props: [
    'icon',
    'label',
    'severity',
    'variant',
    'size',
    'badge',
    'rounded',
    'disabled',
  ],

  emits: [
    'click',
  ],
})
