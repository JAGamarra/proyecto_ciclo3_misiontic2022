<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app temporary>
      <MenuLateral :title="title" :isAdmin="true" />
    </v-navigation-drawer>

    <cabecera :title="title" @childToParent="ChangeDraw" />

    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
       <Footer /> 
    </v-footer>
  </v-app>
</template>

<script>
import MenuLateral from "./components/MenuLateral.vue";
import Cabecera from "./components/Cabecera.vue";
import Footer from "./components/Footer.vue"


/* import Footer from "./components/Footer.vue" */
export default {
  name: "App",
  components: {
    MenuLateral,
    Cabecera,
    Footer,
  },
  data() {
    return {
      title: "MINTICAR",
      drawer: false,
    };
  },
   methods:{
     ChangeDraw( NewValueDrawer ) /*  está pendiente de lo que envía el hijo */
    {
      this.drawer = NewValueDrawer;
    },
  },
};
</script>

<style>
</style>