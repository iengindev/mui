import { createRouter, createWebHistory } from 'vue-router'

import { ComponentsPageRoute } from '@/pages/components'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...ComponentsPageRoute
  ],
})

export default router
