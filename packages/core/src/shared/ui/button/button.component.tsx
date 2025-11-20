import './button.style.css'

import { defineComponent, type SetupContext } from 'vue'

import { useButtonService } from './button.service'

import type { ButtonPorpsType, ButtonEmitsType } from './button.types'

export default defineComponent((props: ButtonPorpsType, ctx: SetupContext<ButtonEmitsType>) => {
  const { } = useButtonService(props, ctx)

  return () => (
    <>
    </>
  )
})
