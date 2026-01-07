import type { RouteRecordRaw } from 'vue-router'

export default <RouteRecordRaw[]> [
  {
    path: 'button',
    component: () => import('./button.page'),
  },
]
