import './style.css'

import { defineComponent, type SetupContext } from 'vue'

import { MButtonService } from './service'

import type { MButtonPropsType, MButtonEmitsType } from './types'

export default defineComponent((props: MButtonPropsType, ctx: SetupContext<MButtonEmitsType>) => {
  const useMButtonService = new MButtonService(props, ctx)

  return () => (
    <>
      <button { ...ctx.attrs } class={useMButtonService.clsx()} onClick={useMButtonService.handleClick}>
      </button>
    </>
  )
}, {
  props: [
    'value',
    'severity',
    'size',
  ],

  emits: [
    'click',
  ]
})
