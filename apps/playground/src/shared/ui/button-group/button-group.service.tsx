import { renderSlot, type SetupContext, type VNode } from 'vue'

export class ButtonGroupSerivce {
  constructor(public ctx: SetupContext) {}

  buttons = (): VNode => {
    return renderSlot(this.ctx.slots, 'default')
  }
}
