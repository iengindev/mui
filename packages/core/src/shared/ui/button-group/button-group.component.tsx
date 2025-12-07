import './button-group.style.css'

import { defineComponent, type SetupContext } from 'vue'

import { ButtonGroupService } from './button-group.service'

export default defineComponent((_, ctx: SetupContext) => {
  const useButtonGroupService = new ButtonGroupService(ctx)

  return () => (
    <>
      <div class="mui-btn-group">
        {
          useButtonGroupService.methods().components()
        }
      </div>
    </>
  )
})
