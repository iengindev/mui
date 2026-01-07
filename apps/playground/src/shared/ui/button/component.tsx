import { defineComponent, type SetupContext } from 'vue'

import { MButtonService } from './service'

import type { MButtonPropsType, MButtonEmitsType } from './types'

export default defineComponent((props: MButtonPropsType, ctx: SetupContext<MButtonEmitsType>) => {
  const useMButtonService = new MButtonService(props, ctx)

  return () => (
    <>
      <button { ...ctx.attrs } class="mui-button">

      </button>
    </>
  )
}, {
  props: [
    'label',
    'severity',
  ],

  emits: [
    'click',
  ]
})
