<template>
  <div>
    <h1>Catálogo</h1>

    <!-- botón de busqueda /filtro para el catálogo-->
    <v-text-field label="Busqueda" v-model="busqueda">
      <v-icon slot="append" color="red"> mdi-magnify </v-icon>
    </v-text-field>

    <!-- filtro con opciones -->


    <!-- fin inputs filtros -->



    <!-- inicio grid cards -->
    <v-container>
      <pre>{{ $busqueda }}</pre>
      <v-row>
        <v-col
          v-for="carro in filtrarCarros"
          :key="carro.id"
          sm="6"
          md="4"
          lg="3"
          xs="12"
        >
          <v-card min-height="350px">
            <!-- estilo de card -->
            <v-img class="blue--text align-end" height="150px" :src="carro.img">
            </v-img>

            <v-card-subtitle class="pb-0">
              <v-card-title>{{ carro.name }}</v-card-title>
              {{ carro.descripcion }}
            </v-card-subtitle>

            <v-card-actions class="d-flex justify-center my-3">
              <v-btn tile color="success">
                <v-icon left> mdi-note-search </v-icon>
                Reservar
              </v-btn>
            </v-card-actions>
            <!-- fin estilo card -->
          </v-card>
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
      active: true,
      carros: [
        {
          id: 1,
          name: "Renault Zoe",
          precio: "Premium",
          Fuente: "Eléctrica",
          descripcion:
            "el nuevo vehículo eléctrico perfecto para tu día a día.Un diseño moderno y dinámico, líneas fluidas… ¡Nuevo ZOE impone su estilo con más carácter que nunca!",
          img: "https://latam-editorial.pxcrush.net/chileautos/general/editorial/nissan-march.jpg?width=1024&height=683&pxc_method=crop",
        },
        {
          id: 2,
          name: "Suzuki Alto",
          precio: "Economico",
          Fuente: "Gasolina",
          descripcion:
            "el nuevo vehículo eléctrico perfecto para tu día a día.Un diseño moderno y dinámico, líneas fluidas… ¡Nuevo ZOE impone su estilo con más carácter que nunca!",
          img: "https://conceptodefinicion.de/wp-content/uploads/2015/10/Automovil.jpg",
        },
        {
          id: 2,
          name: "Suzuki Alto",
          precio: "Economico",
          Fuente: "Gasolina",
          descripcion:
            "el nuevo vehículo eléctrico perfecto para tu día a día.Un diseño moderno y dinámico, líneas fluidas… ¡Nuevo ZOE impone su estilo con más carácter que nunca!",
          img: "https://latam-editorial.pxcrush.net/chileautos/general/editorial/nissan-march.jpg?width=1024&height=683&pxc_method=crop",
        },
        {
          id: 2,
          name: "Suzuki Alto",
          precio: "Economico",
          Fuente: "Gasolina",
          descripcion:
            "el nuevo vehículo eléctrico perfecto para tu día a día.Un diseño moderno y dinámico, líneas fluidas… ¡Nuevo ZOE impone su estilo con más carácter que nunca!",
          img: "https://conceptodefinicion.de/wp-content/uploads/2015/10/Automovil.jpg",
        },
        {
          id: 2,
          name: "Suzuki Alto",
          precio: "Economico",
          Fuente: "Gasolina",
          descripcion:
            "el nuevo vehículo eléctrico perfecto para tu día a día.Un diseño moderno y dinámico, líneas fluidas… ¡Nuevo ZOE impone su estilo con más carácter que nunca!",
          img: "https://conceptodefinicion.de/wp-content/uploads/2015/10/Automovil.jpg",
        },
        {
          id: 2,
          name: "Suzuki Alto",
          precio: "Economico",
          Fuente: "Gasolina",
          descripcion:
            "el nuevo vehículo eléctrico perfecto para tu día a día.Un diseño moderno y dinámico, líneas fluidas… ¡Nuevo ZOE impone su estilo con más carácter que nunca!",
          img: "https://conceptodefinicion.de/wp-content/uploads/2015/10/Automovil.jpg",
        },
        {
          id: 2,
          name: "Suzuki Alto",
          precio: "Economico",
          Fuente: "Gasolina",
          descripcion:
            "el nuevo vehículo eléctrico perfecto para tu día a día.Un diseño moderno y dinámico, líneas fluidas… ¡Nuevo ZOE impone su estilo con más carácter que nunca!",
          img: "https://conceptodefinicion.de/wp-content/uploads/2015/10/Automovil.jpg",
        },
        /* la idea es traerlo del local store o despues de la base de datos */
      ],
    };
  },

  computed: {
    filtrarCarros() {
      return this.carros.filter((carro) => {
        return carro.name.toLowerCase().includes(this.busqueda);
      });
    },
  },
};
</script>

<style>
</style>