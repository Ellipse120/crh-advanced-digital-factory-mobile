import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'virtual:windi.css'
import { MotionPlugin } from '@vueuse/motion'

import './assets/main.css'
import { Button, Toast, List, Cell } from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)

app.use(Button)
app.use(Toast)
app.use(List)
app.use(Cell)

app.use(createPinia())
app.use(router)
app.use(MotionPlugin)

app.config.errorHandler = (err) => {
  console.log(err, ' Error')
}
app.mount('#app')
