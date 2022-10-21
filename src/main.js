import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'

import Vant from './plugins/vant'

import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/zh-CN'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import './assets/main.css'
import 'virtual:windi.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(MotionPlugin)
app.use(Vant)
app.use(Quasar, {
  plugins: {},
  lang: quasarLang
})

app.config.errorHandler = (err) => {
  console.log(err, ' Error')
}
app.mount('#app')
