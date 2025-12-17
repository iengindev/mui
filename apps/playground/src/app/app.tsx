import { defineComponent } from 'vue'

import { RouterView } from 'vue-router'

import { MButtonGroup } from '@/shared/ui'
import { MButton } from '@/shared/ui'

export default defineComponent(() => {
  return () => (
    <>
      <MButtonGroup>
        <MButton label='test 1'/>
        <MButton label='test 2'/>
        <MButton label='test 3'/>
        <MButton label='test 4'/>
      </MButtonGroup>
    </>
  )
})
