import './button.style.css'

import { defineComponent, type SetupContext } from 'vue'

import { ButtonService } from './button.service'

import type { ButtonPropsType, ButtonEmitsType } from './button.types'

export default defineComponent((props: ButtonPropsType, ctx: SetupContext<ButtonEmitsType>) => {
  const useButtonSerivce = new ButtonService(props, ctx)

  return () => (
    <>
      <button { ...ctx.attrs } class={useButtonSerivce.clsx()} onClick={useButtonSerivce.handleClick} disabled={props.disabled}>
        <span class="mui-btn-row">
          {
            useButtonSerivce.label()
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
