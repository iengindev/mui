import './button-group.style.css'

import { defineComponent, type SetupContext } from 'vue'

import { ButtonGroupSerivce } from './button-group.service'

export default defineComponent((_, ctx: SetupContext) => {
  const useButtonGroupSerivce = new ButtonGroupSerivce(ctx)

  return () => (
    <>
      <div class="mui-btn-group">
        {
          useButtonGroupSerivce.buttons()
        }
      </div>
    </>
  )
})
