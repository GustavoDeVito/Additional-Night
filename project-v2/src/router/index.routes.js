import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../components/views/Home.vue')
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import('../components/views/Calculator.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/views/About.vue')
  },
  // {
  //   path: '/profile',
  //   name: 'Profile',
  //   component: () => import('../components/views/profile.vue')
  // },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
