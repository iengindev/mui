import { defineComponent, ref, type Ref } from 'vue'

import { MButton, MButtonGroup } from '@mui/core'

export default defineComponent(() => {
  const size: Ref<undefined | 'small' | 'large'> = ref<undefined | 'small' | 'large'>(undefined)

  return () => (
    <>
      <div class="flex flex-col gap-2">
        <h1 class="text-xl font-bold">
          Button Component
        </h1>

        <div class="flex flex-nowrap items-center gap-2">
          <MButtonGroup>
            <MButton label='Small' severity='secondary' size='small' onClick={() => size.value = 'small'}/>
            <MButton label='Base' severity='secondary' size='small' onClick={() => size.value = undefined}/>
            <MButton label='Large' severity='secondary' size='small' onClick={() => size.value = 'large'}/>
          </MButtonGroup>
        </div>

        <h1 class="text-sm font-medium">
          Buttons:
        </h1>

        <div class="flex flex-nowrap items-center gap-2">
          <MButton label='Submit' size={size.value}/>
          <MButton label='Submit' severity='secondary' size={size.value}/>
          <MButton label='Submit' severity='info' size={size.value}/>
          <MButton label='Submit' severity='success' size={size.value}/>
          <MButton label='Submit' severity='warning' size={size.value}/>
          <MButton label='Submit' severity='danger' size={size.value}/>
          <MButton label='Submit' severity='help' size={size.value}/>
        </div>

        <h1 class="text-sm font-medium">
          Buttons rounded:
        </h1>

        <div class="flex flex-nowrap items-center gap-2">
          <MButton label='Submit' size={size.value} rounded/>
          <MButton label='Submit' severity='secondary' size={size.value} rounded/>
          <MButton label='Submit' severity='info' size={size.value} rounded/>
          <MButton label='Submit' severity='success' size={size.value} rounded/>
          <MButton label='Submit' severity='warning' size={size.value} rounded/>
          <MButton label='Submit' severity='danger' size={size.value} rounded/>
          <MButton label='Submit' severity='help' size={size.value} rounded/>
        </div>

        <h1 class="text-sm font-medium">
          Buttons badge:
        </h1>

        <div class="flex flex-nowrap items-center gap-2">
          <MButton label='Submit' size={size.value} badge='2'/>
          <MButton label='Submit' severity='secondary' size={size.value} badge='2'/>
          <MButton label='Submit' severity='info' size={size.value} badge='2'/>
          <MButton label='Submit' severity='success' size={size.value} badge='2'/>
          <MButton label='Submit' severity='warning' size={size.value} badge='2'/>
          <MButton label='Submit' severity='danger' size={size.value} badge='2'/>
          <MButton label='Submit' severity='help' size={size.value} badge='2'/>
        </div>

        <h1 class="text-sm font-medium">
          Buttons disabled:
        </h1>

        <div class="flex flex-nowrap items-center gap-2">
          <MButton label='Submit' size={size.value} disabled/>
          <MButton label='Submit' severity='secondary' size={size.value} disabled/>
          <MButton label='Submit' severity='info' size={size.value} disabled/>
          <MButton label='Submit' severity='success' size={size.value} disabled/>
          <MButton label='Submit' severity='warning' size={size.value} disabled/>
          <MButton label='Submit' severity='danger' size={size.value} disabled/>
          <MButton label='Submit' severity='help' size={size.value} disabled/>
        </div>

        <h1 class="text-sm font-medium">
          Buttons variant text:
        </h1>

        <div class="flex flex-nowrap items-center gap-2">
          <MButton label='Submit' size={size.value} variant='text'/>
          <MButton label='Submit' severity='secondary' size={size.value} variant='text'/>
          <MButton label='Submit' severity='info' size={size.value} variant='text'/>
          <MButton label='Submit' severity='success' size={size.value} variant='text'/>
          <MButton label='Submit' severity='warning' size={size.value} variant='text'/>
          <MButton label='Submit' severity='danger' size={size.value} variant='text'/>
          <MButton label='Submit' severity='help' size={size.value} variant='text'/>
        </div>

        <h1 class="text-sm font-medium">
          Buttons variant outlined:
        </h1>

        <div class="flex flex-nowrap items-center gap-2">
          <MButton label='Submit' size={size.value} variant='outlined'/>
          <MButton label='Submit' severity='secondary' size={size.value} variant='outlined'/>
          <MButton label='Submit' severity='info' size={size.value} variant='outlined'/>
          <MButton label='Submit' severity='success' size={size.value} variant='outlined'/>
          <MButton label='Submit' severity='warning' size={size.value} variant='outlined'/>
          <MButton label='Submit' severity='danger' size={size.value} variant='outlined'/>
          <MButton label='Submit' severity='help' size={size.value} variant='outlined'/>
        </div>

        <h1 class="text-sm font-medium">
          Buttons only icon:
        </h1>

        <div class="flex flex-nowrap items-center gap-2">
          <MButton size={size.value} icon={[{ icon: 'alert-circle-outline' }]}/>
          <MButton severity='secondary' size={size.value} icon={[{ icon: 'alert-circle-outline' }]}/>
          <MButton severity='info' size={size.value} icon={[{ icon: 'alert-circle-outline' }]}/>
          <MButton severity='success' size={size.value} icon={[{ icon: 'alert-circle-outline' }]}/>
          <MButton severity='warning' size={size.value} icon={[{ icon: 'alert-circle-outline' }]}/>
          <MButton severity='danger' size={size.value} icon={[{ icon: 'alert-circle-outline' }]}/>
          <MButton severity='help' size={size.value} icon={[{ icon: 'alert-circle-outline' }]}/>
        </div>

        <h1 class="text-sm font-medium">
          Buttons + top icon:
        </h1>

        <div class="flex flex-nowrap items-center gap-2">
          <MButton label='Submit' size={size.value} icon={[{ position: 'top', icon: 'alert-circle-outline' }]}/>
          <MButton label='Submit' severity='secondary' size={size.value} icon={[{ position: 'top', icon: 'alert-circle-outline' }]}/>
          <MButton label='Submit' severity='info' size={size.value} icon={[{ position: 'top', icon: 'alert-circle-outline' }]}/>
          <MButton label='Submit' severity='success' size={size.value} icon={[{ position: 'top', icon: 'alert-circle-outline' }]}/>
          <MButton label='Submit' severity='warning' size={size.value} icon={[{ position: 'top', icon: 'alert-circle-outline' }]}/>
          <MButton label='Submit' severity='danger' size={size.value} icon={[{ position: 'top', icon: 'alert-circle-outline' }]}/>
          <MButton label='Submit' severity='help' size={size.value} icon={[{ position: 'top', icon: 'alert-circle-outline' }]}/>
        </div>

        <h1 class="text-sm font-medium">
          Buttons + left icon:
        </h1>

        <div class="flex flex-nowrap items-center gap-2">
          <MButton label='Submit' size={size.value} icon={[{ position: 'left', icon: 'alert-circle-outline' }]}/>
          <MButton label='Submit' severity='secondary' size={size.value} icon={[{ position: 'left', icon: 'alert-circle-outline' }]}/>
          <MButton label='Submit' severity='info' size={size.value} icon={[{ position: 'left', icon: 'alert-circle-outline' }]}/>
          <MButton label='Submit' severity='success' size={size.value} icon={[{ position: 'left', icon: 'alert-circle-outline' }]}/>
          <MButton label='Submit' severity='warning' size={size.value} icon={[{ position: 'left', icon: 'alert-circle-outline' }]}/>
          <MButton label='Submit' severity='danger' size={size.value} icon={[{ position: 'left', icon: 'alert-circle-outline' }]}/>
          <MButton label='Submit' severity='help' size={size.value} icon={[{ position: 'left', icon: 'alert-circle-outline' }]}/>
        </div>

        <h1 class="text-sm font-medium">
          Buttons groups:
        </h1>

        <div class="flex flex-nowrap items-center gap-2">
          <MButtonGroup>
            <MButton label='Submit' size={size.value} icon={[{ position: 'left', icon: 'alert-circle-outline' }]}/>
            <MButton label='Submit' size={size.value} icon={[{ position: 'left', icon: 'alert-circle-outline' }]}/>
            <MButton label='Submit' size={size.value} icon={[{ position: 'left', icon: 'alert-circle-outline' }]}/>
          </MButtonGroup>
        </div>
      </div>
    </>
  )
})
