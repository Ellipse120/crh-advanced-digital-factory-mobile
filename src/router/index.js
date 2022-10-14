import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import Login from '../views/Login.vue'
import Layout from '../layouts/vant.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
})

export default router
