import './style.css'

import { defineComponent, type SetupContext } from 'vue'

import { $MLabelService } from './service'

import type { $MLabelPropsType } from './types'

export default defineComponent((props: $MLabelPropsType, ctx: SetupContext) => {
  const use$MLabelService = new $MLabelService(props)

  return () => (
    <>
      <div { ...ctx.attrs } class={use$MLabelService.clsx()}>
        {
          use$MLabelService.label()
        }
      </div>
    </>
  )
}, {
  props: [
    'value',
  ],
})
