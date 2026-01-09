import './style.css'

import { defineComponent, type SetupContext } from 'vue'

import { $MLabel } from '../$label'

import { MButtonService } from './service'

import type { MButtonPropsType, MButtonEmitsType } from './types'

export default defineComponent((props: MButtonPropsType, ctx: SetupContext<MButtonEmitsType>) => {
  const useButtonService = new MButtonService(props, ctx)

  return () => (
    <>
      <button { ...ctx.attrs } class={useButtonService.clsx()} onClick={useButtonService.handleClick}>
        <$MLabel value={props.value} icons={props.icons}/>
      </button>
    </>
  )
}, {
  props: [
    'value',
    'severity',
    'size',
    'icons',
    'loading',
    'disabled',
  ],

  emits: [
    'click',
  ]
})
