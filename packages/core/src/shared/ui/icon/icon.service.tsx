import { type SetupContext } from 'vue'

import type { IconPorpsType, IconEmitsType } from './icon.types'

import icons from './icons'

export const useIconService = (props: IconPorpsType, ctx: SetupContext<IconEmitsType>) => ({
  methods: {
    icon: () => icons[props.icon].map((d, i) => (
      <path key={i} d={d}/>
    ))
  }
})
