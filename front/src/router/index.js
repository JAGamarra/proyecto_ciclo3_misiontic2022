import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


// validación usuario
const routeGuard = (to, from, next) => {
  let isAuthenticated = false;
  if (sessionStorage.getItem("username")) {
    isAuthenticated = true;
  }

  if (isAuthenticated) {
    next();
  } else {
    next("/");
  }
};

// fin validación usuario

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

   /*------------------------  todos los roles----------------------- */
   {
    path: '/registroPersona',
    name: 'Registro',
    component: () => import('@/views/Registro.vue'),
  },
  
   {
    path: '/faq',
    name: 'faq',
     component: () => import('../views/FAQ.vue')
  } ,
  {
    path: '/pqrs',
    name: 'pqrs',
    component: () => import('@/views/PQRS.vue')
  },

  {
    path: '/login',
    name: 'login',
     component: () => import('../views/Login.vue')
  } ,

  {
    path: '/equipo',
    name: 'equipo',
     component: () => import('../views/Equipo.vue')
  } ,

  {
    path: '/catalogo',
    name: 'Catalogo',
    component: () => import('../views/Catalogo.vue'),

    },


  /* ----------------------administrador---------------------------- */
    {
      path: '/admin/gestioncatalogo',
      name: 'Gestion del catalogo',
      component: () => import('../views/admin/GestionarCatalogo.vue'),
      beforeEnter: routeGuard

      },
      
    {
      path: '/admin/gestioncatalogo/agregarcarro',
      name: 'Gestion del catalogo agregar',
      component: () => import('../views/admin/AgregarCarro.vue'),
      beforeEnter: routeGuard
  
    },
    {
        path: '/cars/:id',
        name: 'Gestion del catalogo editar',
        component: () => import('../views/admin/ActualizarCarro.vue'),
        beforeEnter: routeGuard
    
    },

      {
        path: '/admin/gestionusuarios',
        name: 'Gestion de usuarios',
        component: () => import('../views/admin/GestionUsuarios.vue'),
        beforeEnter: routeGuard
    
        },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
