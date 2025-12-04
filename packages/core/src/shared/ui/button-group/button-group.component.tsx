import './button-group.style.css'

import { defineComponent, type SetupContext } from 'vue'

import { useButtonGroupService } from './button-group.service'

export default defineComponent((_, ctx: SetupContext) => {
  const { methods } = useButtonGroupService(_, ctx)

  return () => (
    <>
      <div class="mui-btn-group">
        {
          methods.components()
        }
      </div>
    </>
  )
})
