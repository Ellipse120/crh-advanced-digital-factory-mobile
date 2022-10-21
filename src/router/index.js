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
    path: '/kaigongzhunbei',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Kaigongzhunbei',
        component: () => import('../views/Kaigongzhunbei.vue'),
        meta: {
          title: '开工准备'
        }
      }
    ]
  },
  {
    path: '/shengchanguocheng',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Shengchanguocheng',
        component: () => import('../views/Shengchanguocheng.vue'),
        meta: {
          title: '生产过程'
        }
      }
    ]
  },
  {
    path: '/wangongqingdian',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Wangongqingdian',
        component: () => import('../views/Wangongqingdian.vue'),
        meta: {
          title: '完工清点'
        }
      }
    ]
  },
  {
    path: '/me',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Me',
        component: () => import('../views/Me.vue'),
        meta: {
          title: '我的'
        }
      }
    ]
  },
  {
    path: '/sign-in-out',
    component: Layout,
    children: [
      {
        path: '',
        name: 'SignInOut',
        component: () => import('../views/SignInOut.vue'),
        meta: {
          title: '打卡'
        }
      }
    ]
  },
  {
    path: '/plan-detail',
    component: Layout,
    children: [
      {
        path: '',
        name: 'PlanDetail',
        component: () => import('../views/PlanDetail.vue'),
        meta: {
          title: '计划详情'
        }
      }
    ]
  },
  {
    path: '/report-error',
    component: Layout,
    children: [
      {
        path: '',
        name: 'ReportError',
        component: () => import('../views/ReportError.vue'),
        meta: {
          title: '异常填报'
        }
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

    if (!userInfo.value?.username) {
      const { data } = await useRequest('user-info')

      setUserInfo(data)
    }
  } else {
    if (to.name !== 'Login' && !userInfo.value?.username) {
      done()
      return '/login'
    }
  }

  done()
})

export default router
