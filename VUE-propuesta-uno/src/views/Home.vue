<template>

     <v-container fluid>
        <v-row>
        <v-col cols="12" >
          <!--  Inicio formulario-->
                    <h2>FORMULARIO DE RESERVA</h2>
          <!--  fin formulario -->
        </v-col>
      </v-row>

        <!-- Inicio segunda sección home -->
      <v-row>
        
        <v-col cols="12" sm="6" >
          <!--  carrusel -->
                  <Carrusel/>
          <!--  fin carrusel -->
        </v-col>
        <v-col col="12" sm="6">
          <!--  tarjetas de opiniones-->
          
             <v-container fluid class="d-flex flex-sm-wrap">
               
                   <TarjetasOpiniones/>
                   <TarjetasOpiniones/>
              </v-container>
          <!--  fin de opiniones -->
        </v-col>
      </v-row>
      <!-- Fin segunda sección home -->
  </v-container>

</template>

<script>
import Carrusel from "../components/Carrusel.vue";
import TarjetasOpiniones from '../components/TarjetasOpiniones.vue';



  export default {
    name: 'Home',
    components:{
                Carrusel,
                TarjetasOpiniones},
  
  }
</script>
