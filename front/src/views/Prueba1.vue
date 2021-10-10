<template>
  <v-row justify="center">
    <v-date-picker
      v-model="date"
      :allowed-dates="allowedDates"
      class="mt-4"
      min= "2021-10-09"
      max="2022-06-08"
    ></v-date-picker>
  </v-row>
</template>
  
  
<script>
  export default {
    data: () => ({
      date: "2021-10-09",
    }),   
  }
</script>

<style>

</style>