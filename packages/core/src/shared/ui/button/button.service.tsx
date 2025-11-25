import type { SetupContext, VNode } from 'vue'

import type { ButtonPorpsType, ButtonEmitsType } from './button.types'

export const useButtonService = (props: ButtonPorpsType, ctx: SetupContext<ButtonEmitsType>) => ({
  clsx: () => ([
    'mui-button',
    'mui-button-' + (props.severity ?? 'primary'),
  ]).join(' ')
})
