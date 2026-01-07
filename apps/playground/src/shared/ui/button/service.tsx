import type { SetupContext } from 'vue'

import type { MButtonPropsType, MButtonEmitsType } from './types'

export class MButtonService {
  constructor(public props: MButtonPropsType, public ctx: SetupContext<MButtonEmitsType>) {}
}
