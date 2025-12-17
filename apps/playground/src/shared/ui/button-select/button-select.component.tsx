import './button-select.style.css'

import { defineComponent, type SetupContext } from 'vue'

import { ButtonSelectService } from './button-select.service'

import type { ButtonSelectPropsType, ButtonSelectEmitsType } from './button-select.types'

export default defineComponent((props: ButtonSelectPropsType, ctx: SetupContext<ButtonSelectEmitsType>) => {
  const useButtonSelectService = new ButtonSelectService(props, ctx)

  return () => (
    <>
    </>
  )
})
