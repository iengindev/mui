import { defineComponent, type SetupContext } from 'vue'

import { IconService } from './icon.service'

import type { IconPropsType } from './icon.types'

export default defineComponent((props: IconPropsType, ctx: SetupContext) => {
  const useIconService = new IconService(props)

  return () => (
    <>
      <svg { ...ctx.attrs } class="mui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {
          useIconService.icon()
        }
      </svg>
    </>
  )
}, {
  props: [
    'icon',
  ],
})
