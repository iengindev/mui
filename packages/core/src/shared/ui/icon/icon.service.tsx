import { type SetupContext } from 'vue'

import type { IconPorpsType } from './icon.types'

import icons from './icons'

export const useIconService = (props: IconPorpsType) => ({
  methods: {
    icon: () => icons[props.icon].map((d, i) => (
      <path key={i} d={d}/>
    ))
  }
})
