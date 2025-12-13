import type { RouteRecordRaw } from 'vue-router'

import ButtonComponentPage from './components/button'

export default <RouteRecordRaw[]> [
  {
    path: '/docs',
    component: () => import('./docs.page'),
    children: [
      ...ButtonComponentPage,
    ]
  }
]
