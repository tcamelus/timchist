import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/planned',
    name: 'Planned-experience',
    component: () => import(/* webpackChunkName: "Planned" */ '../views/Planned.vue')
  },
  {
    path: '/single_detail/:current',
    name: 'Single Detail',
    component: () => import(/* webpackChunkName: "single_detail" */ '../views/single_detail.vue')
  }, {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "single_detail" */ '../views/login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
