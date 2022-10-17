import { createRouter, createWebHistory } from 'vue-router'
import { useNProgress } from '@vueuse/integrations/useNProgress'
import { useCookies } from '@vueuse/integrations/useCookies'

import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import Login from '../views/Login.vue'
import Layout from '../layouts/vant.vue'
import { useUserInfoStore } from '../stores/user'
import { useRequest } from '../composables/useRequest'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeView,
        meta: {
          title: '首页1'
        }
      }
    ]
  },
  {
    path: '/navigator',
    component: Layout,
    children: [
      {
        path: '',
        name: 'NavigatorView',
        component: () => import('../views/NavigatorView.vue'),
        meta: {
          title: '首页2'
        }
      }
    ]
  },
  {
    path: '/about',
    component: Layout,
    children: [
      {
        path: '',
        name: 'About',
        component:  () => import('../views/AboutView.vue')
      }
    ]
  },

  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

const { start, done } =  useNProgress()
const cookies = useCookies()

router.beforeEach(async (to) => {
  const { userInfo, setUserInfo } = useUserInfoStore()

  start()
  // ✅ This will work because the router starts its navigation after
  // the router is installed and pinia will be installed too
 
  const token = cookies.get('token')

  if (token) {
    if (to.name === 'Login') {
      done()
      return '/'
    }

    if (!userInfo.userId) {
      const { data: userInfo } = await useRequest('user-info').finally(() => { 
        done()
      })
      setUserInfo(userInfo.value)
    }
  } else {
    if (to.name !== 'Login' && !userInfo?.username) {
      done()
      return '/login'
    }
  }

  done()
})

export default router
