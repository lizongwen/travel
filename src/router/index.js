import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  //订单完成
  {
    path: '/orderFeedback',
    name: 'orderFeedback',
    component: () => import(/* webpackChunkName: "orderFeedback" */ '../views/order/feedback.vue')
  },
  //城市定位
  {
    path: '/citylocation',
    name: 'citylocation',
    component: () => import(/* webpackChunkName: "cityloc" */ '../views/city/location.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
