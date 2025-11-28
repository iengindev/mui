import type { RouteRecordRaw } from 'vue-router'

export const ComponentsPageRoute: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./components.page')
  }
]
