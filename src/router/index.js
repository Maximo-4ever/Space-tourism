import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/destination',
    name: 'Destination',
    component: () => import(/* webpackChunkName: "about" */ '../views/Destination.vue')
  },
  {
    path: '/crew',
    name: 'Crew',
    component: () => import(/* webpackChunkName: "about" */ '../views/Crew.vue')
  },
  {
    path: '/technology',
    name: 'Technology',
    component: () => import(/* webpackChunkName: "about" */ '../views/Technology.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
