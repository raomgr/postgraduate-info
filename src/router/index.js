import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/Layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/school',
    component: Layout,
    children: [
      {
        path: 'schoolInfo',
        name: 'school',
        component: () => import('../views/School.vue'),
        meta: {
          title: '学校信息'
        }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: 'examInfo',
    children: [
      {
        path: 'examInfo',
        name: 'school',
        component: () => import('../views/Exam.vue'),
        meta: {
          title: '报考信息'
        }
      }
    ]
  },
  {
    path: '/major',
    component: Layout,
    children: [
      {
        path: 'majorInfo',
        name: 'school',
        component: () => import('../views/Major.vue'),
        meta: {
          title: '专业信息'
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
