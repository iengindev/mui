import { defineComponent, type SetupContext } from 'vue'

import { useIconService } from './icon.service'

import type { IconPorpsType, IconEmitsType } from './icon.types'

export default defineComponent((props: IconPorpsType, ctx: SetupContext<IconEmitsType>) => {
  const { methods } = useIconService(props, ctx)

  return () => (
    <>
      <svg { ...ctx.attrs } class="mui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {
          methods.icon()
        }
      </svg>
    </>
  )
}, {
  props: [
    'icon',
  ],
})
