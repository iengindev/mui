import type { RouteRecordRaw } from 'vue-router'

import ButtonComponentPage from './components/button'

export default <RouteRecordRaw[]> [
  {
    path: '/docs',
    children: [
      {
        path: '/',
        component: () => import('./docs.page'),
      },

      ...ButtonComponentPage
    ]
  }
]
