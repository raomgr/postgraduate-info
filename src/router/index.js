import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta: {
          title: 'userCenter'
        }
      }
    ]
  },
  {
    path: '/school',
    component: Layout,
    redirect: 'schoolInfo',
    children: [
      {
        path: '/schoolInfo',
        name: 'school',
        component: () => import('../views/School.vue'),
        meta: {
          title: 'school'
        }
      }
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
