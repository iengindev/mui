import { createRouter, createWebHistory } from 'vue-router'

import { default as ComponentsPage } from '@/pages/components'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...ComponentsPage,
  ],
})

export default router
