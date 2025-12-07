import './button.style.css'

import { defineComponent, type SetupContext } from 'vue'

import { ButtonService } from './button.service'

import type { ButtonPorpsType, ButtonEmitsType } from './button.types'

export default defineComponent((props: ButtonPorpsType, ctx: SetupContext<ButtonEmitsType>) => {
  const useButtonService = new ButtonService(props, ctx)

  return () => (
    <>
      <button { ...ctx.attrs } class={useButtonService.methods().clsx()} onClick={useButtonService.actions().handleClick} disabled={props.disabled}>
        <span class="mui-btn-content">
          {
            useButtonService.methods().viewIcon('top', props.icon ? props.icon.some(item => item.position === 'top') : false)
          }

          <span class="mui-btn-row">
            {
              useButtonService.methods().viewIcon('left', props.icon ? props.icon.some(item => item.position === 'left') : false)
            }

            {
              useButtonService.methods().label()
            }

            {
              useButtonService.methods().badge()
            }

            {
              useButtonService.methods().viewIcon('right', props.icon ? props.icon.some(item => item.position === 'right') : false)
            }
          </span>

          {
            useButtonService.methods().viewIcon('bottom', props.icon ? props.icon.some(item => item.position === 'bottom') : false)
          }
        </span>
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
