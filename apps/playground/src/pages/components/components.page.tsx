import { defineComponent, ref, type Ref } from 'vue'

import { MButton, MButtonGroup, MButtonSelect } from '@mui/core'

export default defineComponent(() => {
  const size: Ref<undefined | 'small' | 'large'> = ref<undefined | 'small' | 'large'>(undefined)

  return () => (
    <>
      <div class="flex flex-col gap-2">
        <MButtonSelect options={[{ id: 'submit-1', label: 'Submit 1' }, { id: 'submit-2', label: 'Submit 2' }, { id: 'submit-3', label: 'Submit 3' }]}/>
      </div>
    </>
  )
})
