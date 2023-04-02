import { createApp } from 'vue'
import store from './store/index.js'

import '../public/css/main.css'
import App from './App.vue'

const app = createApp(App)
app.use(store)
app.mount('#app')
