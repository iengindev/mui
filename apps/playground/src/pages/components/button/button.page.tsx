import { defineComponent } from 'vue'

import { MButton } from '@/shared/ui'

export default defineComponent(() => {
  return () => (
    <>
      <div class="flex flex-nowrap items-center gap-2">
        <MButton icons={[{ position: 'left', icon: 'account' }]}/>
        <MButton value='Submit' icons={[{ position: 'left', icon: 'account' }]}/>
      </div>

      <div class="flex flex-nowrap items-center gap-2">
        <MButton icons={[{ position: 'left', icon: 'account' }]} severity='secondary'/>
        <MButton value='Submit' icons={[{ position: 'left', icon: 'account' }]} severity='secondary'/>
      </div>

      <div class="flex flex-nowrap items-center gap-2">
        <MButton icons={[{ position: 'left', icon: 'account' }]} severity='success'/>
        <MButton value='Submit' icons={[{ position: 'left', icon: 'account' }]} severity='success'/>
      </div>

      <div class="flex flex-nowrap items-center gap-2">
        <MButton icons={[{ position: 'left', icon: 'account' }]} severity='warning'/>
        <MButton value='Submit' icons={[{ position: 'left', icon: 'account' }]} severity='warning'/>
      </div>
    </>
  )
})
