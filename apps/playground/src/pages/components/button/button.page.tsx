import { defineComponent } from 'vue'

import { MButton } from '@/shared/ui'

export default defineComponent(() => {
  return () => (
    <>
      <div class="flex flex-nowrap items-center gap-2">
        <MButton icons={[{ position: 'left', icon: 'account' }]}/>
        <MButton value='Submit' icons={[{ position: 'left', icon: 'account' }]}/>
      </div>
    </>
  )
})
