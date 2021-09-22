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
  
  //-----------------Administrador---------------------------
  {
    path: '/admin/catalogo',
    name: 'gestion de catalogo',
    component: () => import('../views/admin/GestionCatalogo.vue')
  },
  
   //-----------------Clientes---------------------------
   {
    path: '/clients/equipo',
    name: 'Equipo clientes',
    component: () => import('../views/clients/EquipoC.vue')
  } ,
  {
    path: '/clients/pqrs',
    name: 'Equipo clientes',
    component: () => import('../views/clients/PQRS.vue')
  } , 
  {
    path: '/clients/faq',
    name: 'FAQs',
    component: () => import('../views/clients/FAQ.vue')
  } ,
  {
    path: '/clients/catalogo',
    name: 'Catalogo clientes',
    component: () => import('../views/clients/CatalogoC.vue')
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
