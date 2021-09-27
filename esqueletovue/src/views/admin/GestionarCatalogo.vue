<template>
  <div>
    <h1>Catálogo</h1>

    <!-- botón de busqueda /filtro para el catálogo-->
    <v-text-field label="Busqueda" v-model="busqueda">
      <v-icon slot="append" color="red"> mdi-magnify </v-icon>
    </v-text-field>

    <!-- filtro con opciones -->

    <!-- fin filtro con filtros -->

    <!-- inicio grid cards -->
    <v-container>
    
      <v-btn elevation="2" bottom right fixed fab to='/admin/gestioncatalogo/agregarcarro'>
      <v-icon>mdi-plus</v-icon>
      </v-btn> <!-- botón flotante para agregar  -->

      
      <v-row>
        <v-col
          v-for="car in filtrarCarros"
          :key="car.id"
          sm="6"
          md="4"
          lg="3"
          xs="12"
        >
          <!-- -----------------TARJETA CARRO ---------------------------------------->
          <v-card :loading="loading" class="mx-auto my-12" max-width="400px">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img
              class="blue--text align-end"
              height="150px"
              :src="car.img"
            ></v-img>

            <v-card-title class="d-flex justify-center">{{car.name}}</v-card-title>
            <v-card-text class="d-flex justify-center">
              <v-chip class="ma-2" color="orange" text-color="white">
                $  {{ car.price }} POR DIA
              </v-chip>

              <!-- <div class="my-2 text-subtitle-1">$ • CADA DIA</div> -->

              <!-- <div>
                Small plates, salads & sandwiches - an intimate setting with 12
                indoor seats plus patio seating.
              </div> -->
            </v-card-text>

            <v-divider class="mx-4"></v-divider>
            <!-- <v-card-title>Tonight's availability</v-card-title> -->

            <!-- ocultar/mostrar -->
            <v-card-actions>
              <v-btn color="orange lighten-2" text> Explorar </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="car.showInfo = !car.showInfo">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="car.showInfo">
                <v-divider></v-divider>

                <v-card-text>
                  <v-chip class="mr-2 mb-2" @click="alarm">
                    <v-icon left> mdi-engine </v-icon>
                    {{car.tipo}}
                  </v-chip>
                  <v-chip class="mr-2 mb-2" @click="blinds">
                    <v-icon left> mdi-briefcase </v-icon>
                    Maletas:  {{car.numeroMaletas}}
                  </v-chip>
                  <v-chip class="mr-2 mb-2" @click="blinds">
                    <v-icon left> mdi-account-settings </v-icon>
                    Personas: {{car.numeroPersonas}}
                  </v-chip>
                  <v-chip class="mr-2 mb-2" @click="lights">
                    <v-icon left> mdi-air-conditioner </v-icon>
                    Aire : {{car.aire}}
                  </v-chip>
                </v-card-text>
              </div>
            </v-expand-transition>

            <!-- fin ocultar -->
              <v-card-actions>
              <v-btn tile color="success" dark>
                <v-icon left> mdi-pencil </v-icon>
                Editar
              </v-btn>
        
              <v-btn tile color="red" dark>
                <v-icon left> mdi-delete </v-icon>
                Eliminar
              </v-btn>
            </v-card-actions>
          </v-card>

          <!-- fin otro estilo -->
          <!--   </v-card> -->
        </v-col>
      </v-row>
    </v-container>
    <!-- fin  grid cards -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      busqueda: "",
      /* active: true, */
      cars: [
        // {
        //   id: 1,
        //   showInfo: false,
        //   name: "nisaN Alto",
        //   price: "96000",
        //   tipo: "Mecánico",
        //   numeroMaletas: "5",
        //   numeroPersonas: "3",
        //   aire: "sí",
        //   img: "https://conceptodefinicion.de/wp-content/uploads/2015/10/Automovil.jpg",
        // },
      ],
    };
  },

  /* la idea es traerlo del local store o despues de la base de datos */
    mounted() {
    let carros = localStorage.cars;
    if (carros !== undefined && carros !== "") {
      this.cars = JSON.parse(carros);
    } 
    },

  
  // filtro
  computed: {
    filtrarCarros() {
      return this.cars.filter((car) => {
        return car.name.toLowerCase().includes(this.busqueda);
      });
    },
  },
};
</script>

<style>
</style>