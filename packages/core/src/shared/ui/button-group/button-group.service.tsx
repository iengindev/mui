import { renderSlot, type SetupContext } from 'vue'

export const useButtonGroupService = (_: Record<string, any>, ctx: SetupContext) => ({
  methods: {
    components: () => {
      return renderSlot(ctx.slots, 'default')
    },
  },
})
