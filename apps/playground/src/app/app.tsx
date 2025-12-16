import { defineComponent } from 'vue'

import { RouterView } from 'vue-router'

import { MButton } from '@/shared/ui'

export default defineComponent(() => {
  return () => (
    <MButton onClick={console.log}/>
  )
})
