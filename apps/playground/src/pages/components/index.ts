import type { RouteRecordRaw } from 'vue-router'

import { default as ButtonComponentPage } from './button'

export default <RouteRecordRaw[]> [
  {
    path: '/components',
    children: [
      ...ButtonComponentPage,
    ],
  }
]
