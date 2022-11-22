import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/views/main'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/home'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/loan',
        component: () => import('@/views/loan'),
        meta: {
          title: '贷款'
        }
      },
      {
        path: '/conduct',
        component: () => import('@/views/conduct'),
        meta: {
          isAuthenticated: true,
          title: '理财'
        }
      },
      {
        path: '/my',
        component: () => import('@/views/my'),
        meta: {
          isAuthenticated: true,
          title: '我的'
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
