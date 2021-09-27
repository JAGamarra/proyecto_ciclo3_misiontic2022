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

   /*------------------------  todos los roles----------------------- */
   {
    path: '/faq',
    name: 'faq',
     component: () => import('../views/FAQ.vue')
  } ,

  {
    path: '/login',
    name: 'login',
     component: () => import('../views/Login.vue')
  } ,


  /* ----------------------administrador---------------------------- */
  {
    path: '/gestioncarros',
    name: 'Gestion de catalogo carros',
    /* component: () => import('../views/About.vue') */
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
