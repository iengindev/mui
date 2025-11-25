import './button.style.css'

import { defineComponent, type SetupContext } from 'vue'

import { useButtonService } from './button.service'

import type { ButtonPorpsType, ButtonEmitsType } from './button.types'

export default defineComponent((props: ButtonPorpsType, ctx: SetupContext<ButtonEmitsType>) => {
  const { methods, actions } = useButtonService(props, ctx)

  return () => (
    <>
      <button { ...ctx.attrs } class={methods.clsx} onClick={actions.handleClick} disabled={props.disabled}>
        {
          methods.label()
        }
      </button>
    </>
  )
}, {
  props: [
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
