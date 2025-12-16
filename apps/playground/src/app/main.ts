import './assets/styles/main.style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import app from './app'
import router from './router'

const main = createApp(app)

main.use(createPinia())
main.use(router)

main.mount('#app')
