import './style.css'

import { defineComponent, type SetupContext } from 'vue'

import { $MLabelService } from './service'

import type { $MLabelPropsType } from './types'

export default defineComponent((props: $MLabelPropsType, ctx: SetupContext) => {
  const useLabelService = new $MLabelService(props)

  return () => (
    <>
      <div { ...ctx.attrs } class={useLabelService.clsx()}>
        {
          useLabelService.label()
        }
      </div>
    </>
  )
}, {
  props: [
    'value',
    'icons',
  ],
})
