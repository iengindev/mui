import { defineComponent, type SetupContext } from 'vue'

import { MIconService } from './service'

import type { MIconPropsType } from './types'

export default defineComponent((props: MIconPropsType, ctx: SetupContext) => {
  const useIconService = new MIconService(props)

  return () => (
    <>
      <svg { ...ctx.attrs } class={useIconService.clsx()} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {
          useIconService.path()
        }
      </svg>
    </>
  )
}, {
  props: [
    'icon',
  ],
})
