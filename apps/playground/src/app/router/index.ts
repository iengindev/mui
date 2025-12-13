import { createRouter, createWebHistory } from 'vue-router'

import DocsPageRoute from '@/pages/docs'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...DocsPageRoute,
  ],
})

export default router
