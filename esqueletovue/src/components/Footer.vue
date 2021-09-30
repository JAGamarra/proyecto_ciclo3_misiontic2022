<template>
  <v-footer dark  padless shaped absolute app>
    <v-card
      flat
      tile
      class="indigo white--text text-center flex align-start"
      height="5x"
    >
      <v-card color="indigo">
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="15px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card>

      <v-card-text class="indigo py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>MINTICAR</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
     icons: ["mdi-facebook", "mdi-twitter", "mdi-whatsapp", "mdi-gmail"],
  }),
};
</script>

<style>
</style>