import { defineComponent } from 'vue'

import { MButton } from '@mui/core'

export default defineComponent(() => {
  return () => (
    <>
      <MButton label='Submit' size='small'/>
      <MButton label='Submit'/>
      <MButton label='Submit' size='large'/>

      <MButton label='Submit' severity='secondary' size='small'/>
      <MButton label='Submit' severity='secondary'/>
      <MButton label='Submit' severity='secondary' size='large'/>

      <MButton label='Submit' severity='info' size='small'/>
      <MButton label='Submit' severity='info'/>
      <MButton label='Submit' severity='info' size='large'/>

      <MButton label='Submit' severity='success' size='small'/>
      <MButton label='Submit' severity='success'/>
      <MButton label='Submit' severity='success' size='large'/>

      <MButton label='Submit' severity='warning' size='small'/>
      <MButton label='Submit' severity='warning'/>
      <MButton label='Submit' severity='warning' size='large'/>

      <MButton label='Submit' severity='danger' size='small'/>
      <MButton label='Submit' severity='danger'/>
      <MButton label='Submit' severity='danger' size='large'/>

      <MButton label='Submit' severity='help' size='small'/>
      <MButton label='Submit' severity='help'/>
      <MButton label='Submit' severity='help' size='large'/>
    </>
  )
})
