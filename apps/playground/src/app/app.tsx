import { defineComponent } from 'vue'

import { MButton } from '@mui/core'

export default defineComponent(() => {
  return () => (
    <>
      <MButton label='Primary' size='small'/>
      <MButton label='Primary'/>
      <MButton label='Primary' size='large'/>
    </>
  )
})
