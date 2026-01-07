import { defineComponent } from 'vue'

import { MButton } from '@/shared/ui'

export default defineComponent(() => {
  return () => (
    <>
      <MButton value='Submit' icons={[{ position: 'left', icon: 'account' }]}/>
    </>
  )
})
