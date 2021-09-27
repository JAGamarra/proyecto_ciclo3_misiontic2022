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



  /* ----------------------administrador---------------------------- */
  {
    path: '/admin/gestioncatalogo',
    name: 'Gestion del catalogo',
    component: () => import('../views/admin/GestionarCatalogo.vue'),

    },
    {
      path: '/admin/gestioncatalogo/agregarcarro',
      name: 'Gestion del catalogo',
      component: () => import('../views/admin/AgregarCarro.vue'),
  
      },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
