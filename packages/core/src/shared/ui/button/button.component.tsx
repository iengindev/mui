import './button.style.css'

import { defineComponent, type SetupContext } from 'vue'

import { useButtonService } from './button.service'

import type { ButtonPorpsType, ButtonEmitsType } from './button.types'

export default defineComponent((props: ButtonPorpsType, ctx: SetupContext<ButtonEmitsType>) => {
  const { methods, actions } = useButtonService(props, ctx)

  return () => (
    <>
      <button { ...ctx.attrs } class={methods.clsx()} onClick={actions.handleClick} disabled={props.disabled}>
        <span class="mui-btn-content">
          {
            methods.topIcons()
          }

          <span class="mui-btn-row">
            {
              methods.leftIcons()
            }

            {
              methods.label()
            }

            {
              methods.badge()
            }

            {
              methods.rightIcons()
            }
          </span>

          {
            methods.bottomIcons()
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
