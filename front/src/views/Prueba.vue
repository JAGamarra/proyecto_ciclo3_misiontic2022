<template>
  <v-row>   
    <v-col
      cols="12"
      sm="6"
      md="4"
    >
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="dateRangeText"
            label="Días de alquiler"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="dates"
          range
          :min = "new Date().toISOString().substr(0, 10)"
          :max = "endOfRange"
          locale = "es-co"
        ></v-date-picker>
      </v-menu>
      
    </v-col>

  </v-row>
</template>

<script>
  export default {
        
    data: () => ({

      dates: [],      
      menu: false,
      modal: false,
      menu2: false,
    }),
    computed: {      
      dateRangeText () {
        console.log(this.dates)
        return ('Desde el '+this.dates.join(' hasta el '))
      },
      tomorrow() {
        var hoy = new Date();
        hoy.setDate(hoy.getDate()+1);
        return hoy.toISOString().substr(0, 10)        
      },
      endOfRange() {
        var endRange = new Date();
        endRange.setMonth(endRange.getMonth()+6);        
        return endRange.toISOString().substr(0, 10)
      },
      
    },
    mounted () {
      this.dates = [new Date().toISOString().substr(0, 10), this.tomorrow];
    } 

  }
</script>

<style>

</style>