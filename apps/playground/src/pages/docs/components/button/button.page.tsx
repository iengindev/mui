import { defineComponent, ref } from 'vue'

import { MButtonSelect, type MButtonSelectPorpsType } from '@mui/core'

export default defineComponent(() => {
  const size_options = ref<MButtonSelectPorpsType['options']>([
    {
      id: 'size-small',
      label: 'Small'
    },
    {
      id: 'size-base',
      label: 'Base'
    },
    {
      id: 'size-large',
      label: 'Large'
    }
  ])

  return () => (
    <>
      <div class="flex flex-col gap-2">
        <MButtonSelect options={size_options.value}/>
      </div>
    </>
  )
})
