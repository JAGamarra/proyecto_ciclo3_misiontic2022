import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  /*------------------------  todos los roles----------------------- */
  {
    path: "/registroPersona",
    name: "Registro",
    component: () => import("@/views/Registro.vue"),
  },

  {
    path: "/faq",
    name: "faq",
    component: () => import("../views/FAQ.vue"),
  },
  {
    path: "/pqrs",
    name: "pqrs",
    component: () => import("@/views/PQRS.vue"),
  },

  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },

  {
    path: "/equipo",
    name: "equipo",
    component: () => import("../views/Equipo.vue"),
  },

  {
    path: "/catalogo",
    name: "Catalogo",
    component: () => import("../views/Catalogo.vue"),
  },
  {
    path: "/alquiler",
    name: "Alquiler",
    component: () => import("../views/clients/Alquiler.vue"),
  },

  /* ----------------------administrador---------------------------- */
  {
    path: "/admin/gestioncatalogo",
    name: "Gestion del catalogo",
    component: () => import("../views/admin/GestionarCatalogo.vue"),
  },
  {
    path: "/admin/gestioncatalogo/agregarcarro",
    name: "Gestion del catalogo",
    component: () => import("../views/admin/AgregarCarro.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
