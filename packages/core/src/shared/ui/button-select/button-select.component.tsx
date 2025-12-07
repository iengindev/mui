import './button-select.style.css'

import { defineComponent, type SetupContext } from 'vue'

import type { ButtonSelectPorpsType, ButtonSelectEmitsType } from './button-select.types'

export default defineComponent((props: ButtonSelectPorpsType, ctx: SetupContext<ButtonSelectEmitsType>) => {

  return () => (
    <>
    </>
  )
}, {
  props: [
    'options',
    'size',
  ],

  emits: [
    'select',
  ],
})
