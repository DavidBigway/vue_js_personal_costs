import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/cost',
    name: 'cost',
    component: function () {
      return import('../pages/CostPage.vue')
    },
  },
  {
    path: '/add/payment/:position?',
    name: 'add',
    component: function () {
      return import('../pages/AddPaymentPage.vue')
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
