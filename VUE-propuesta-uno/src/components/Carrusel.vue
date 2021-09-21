<template>
   <v-carousel height="400px">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://www.motor.com.co/files/article_multimedia/uploads/2021/04/06/606c8e38316be.jpeg',
          },
          {
            src: 'https://www.valoraanalitik.com/wp-content/uploads/2021/07/aeropuerto-pexels-696x406.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>

<style>
</style>