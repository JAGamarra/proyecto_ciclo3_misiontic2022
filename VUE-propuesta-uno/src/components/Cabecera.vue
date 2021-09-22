<template>
  <v-app-bar color="indigo darken-2" dark app m-y="1">
    <v-app-bar-nav-icon @click="changeDrawer"></v-app-bar-nav-icon>

    <v-app-bar-title>{{ title }}</v-app-bar-title>
    <v-spacer></v-spacer>

    <!-- ----Botones - -->
    <v-row align="center" justify="space-around" v-if="$vuetify.breakpoint.mdAndUp">  <!-- la media query es para que solo se muestren los enalces en la barra superior para pantallas medianas o más grandes. -->
      <v-btn depressed color="primary" to="/"> Inicio </v-btn>
      <v-btn depressed color="primary" to='/clients/catalogo'> Catálogo </v-btn>
      <v-btn depressed color="primary" to='/clients/faq'> FAQs </v-btn>
      <v-btn depressed color="primary" to='/clients/equipo'> Equipo </v-btn>
      <v-btn depressed color="primary"> Reserva </v-btn>
    </v-row>
    <!-- ---------------- -->

    <v-btn icon>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-exit-to-app</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Cabecera",
  props: ["drawer", "title"],
  data() {
    return {};
  },
  methods: {
    changeDrawer() {
      this.drawer = !this.drawer;
      this.$emit(
        "childToParent",
        this.drawer
      ); /* this$emit(nombreEvento, datos reales para enviar a componente padre)*/
    },
  },
};
</script>

<style>
</style>