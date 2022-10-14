import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'virtual:windi.css'
import { MotionPlugin } from '@vueuse/motion'

import './assets/main.css'
import Vant from './plugins/vant'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(MotionPlugin)
app.use(Vant)

app.config.errorHandler = (err) => {
  console.log(err, ' Error')
}
app.mount('#app')
