
<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> {{ title }} </v-list-item-title>
        <v-list-item-subtitle> {{ subtitle }} </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <!-- foto de perfil y nombre -->
    <v-list-item two-line>
      <v-list-item-avatar>
        <img src="https://randomuser.me/api/portraits/women/81.jpg" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>Administrador</v-list-item-title>
        <v-list-item-subtitle>Logged on</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <!-- opciones únicas del administrador -->
    <v-list dense nav v-if="isAdmin">
      <v-list-item
        v-for="item in adminItems"
        :key="item.title"
        link
        :to="item.path"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <!-- Opciones de todos los roles de usuario-->
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.path">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <!-- botón para cerrar sesión -->
    <div class="pa-6">
      <v-btn block> Cerrar sesión </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: [
    "title",
    "isAdmin",
  ] /* lo que le envía el padre a sus componentes hijos.*/,
  data() {
    return {
      /* Datos iniciales */
      subtitle: "a tu servicio",

      /* navegación para el administrador */
      adminItems: [
        {
          title: "Gestión de Catálogo",
          icon: "mdi-car-wrench",
          path: "/catalog",
        },
        {
          title: "Gestión de Clientes",
          icon: "mdi-account-circle",
          path: "/client",
        },
      ],

      /* navegación para todos los roles */
      items: [
        { title: "Inicio", icon: "mdi-home", path: "/" },
        { title: "Catálogo", icon: "mdi-help-box", path: "" },
        { title: "Reserva", icon: "mdi-help-box", path: "" },
        { title: "Equipo", icon: "mdi-help-box", path: "" },
        { title: "FAQ", icon: "mdi-help-box", path: "" },
        { title: "PQRS", icon: "mdi-help-box", path: "" },
        { title: "Registro", icon: "mdi-help-box", path: "/registroPersona" },
      ],
      /* right: null, */
    };
  },
};
</script>

<style>
</style>