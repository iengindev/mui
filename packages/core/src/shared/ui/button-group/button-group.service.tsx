import { renderSlot, type SetupContext } from 'vue'

export class ButtonGroupService {
  constructor(
    public ctx: SetupContext
  ) {}

  methods() {
    return {
      components: () => {
        return renderSlot(this.ctx.slots, 'default')
      }
    }
  }
}
