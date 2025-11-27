import { defineComponent } from 'vue'

import { MButton } from '@mui/core'

export default defineComponent(() => {
  return () => (
    <>
      <div>
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
      </div>

      <div>
        <MButton label='Submit' size='small' variant='text'/>
        <MButton label='Submit' variant='text'/>
        <MButton label='Submit' size='large' variant='text'/>

        <MButton label='Submit' severity='secondary' size='small' variant='text'/>
        <MButton label='Submit' severity='secondary' variant='text'/>
        <MButton label='Submit' severity='secondary' size='large' variant='text'/>

        <MButton label='Submit' severity='info' size='small' variant='text'/>
        <MButton label='Submit' severity='info' variant='text'/>
        <MButton label='Submit' severity='info' size='large' variant='text'/>

        <MButton label='Submit' severity='success' size='small' variant='text'/>
        <MButton label='Submit' severity='success' variant='text'/>
        <MButton label='Submit' severity='success' size='large' variant='text'/>

        <MButton label='Submit' severity='warning' size='small' variant='text'/>
        <MButton label='Submit' severity='warning' variant='text'/>
        <MButton label='Submit' severity='warning' size='large' variant='text'/>

        <MButton label='Submit' severity='danger' size='small' variant='text'/>
        <MButton label='Submit' severity='danger' variant='text'/>
        <MButton label='Submit' severity='danger' size='large' variant='text'/>

        <MButton label='Submit' severity='help' size='small' variant='text'/>
        <MButton label='Submit' severity='help' variant='text'/>
        <MButton label='Submit' severity='help' size='large' variant='text'/>
      </div>
    </>
  )
})
