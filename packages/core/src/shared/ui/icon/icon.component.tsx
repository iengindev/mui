import './icon.style.css'

import { defineComponent, type SetupContext } from 'vue'

import { useIconService } from './icon.service'

import type { IconPorpsType, IconEmitsType } from './icon.types'

export default defineComponent((props: IconPorpsType, ctx: SetupContext<IconEmitsType>) => {
  const { methods } = useIconService(props, ctx)

  return () => (
    <>
    </>
  )
}, {
  props: [],
})
