<template>
  <div>
    <h1>Catálogo de carros</h1>
    <!-- botón flotante -->
    <v-btn elevation="2" bottom right fixed fab to="/catalog/new">
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <!-- botón de busqueda /filtro para el catálogo-->
    <v-text-field label="Busqueda">
      <v-icon slot="append" color="red"> mdi-magnify </v-icon>
    </v-text-field>

    <!-- inicio grid cards -->
    <v-container>
      <v-row>
        <v-col
          v-for="product in products"
          :key="product.id"
          sm="6"
          md="4"
          lg="3"
          xs="12"
        >
          <v-card min-height="350px">
            <!-- estilo de card -->
           <v-img
              class="white--text align-end"
              height="150px"
              :src="product.img"
            >
              <v-card-title>{{ product.name }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              {{ product.descripcion }}
            </v-card-subtitle> 

            <v-card-actions>
              <v-btn tile color="success">
                <v-icon left> mdi-pencil </v-icon>
                Editar
              </v-btn>

              <v-btn tile color="red" dark>
                <v-icon left> mdi-delete </v-icon>
                Eliminar
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
      active:true,
      products: [
        {
          id: 1,
          name: "Renault Zoe",
          Precio:"Premium",
          Fuente:'Eléctrica',
          descripcion: "el nuevo vehículo eléctrico perfecto para tu día a día.Un diseño moderno y dinámico, líneas fluidas… ¡Nuevo ZOE impone su estilo con más carácter que nunca!",
          img: "https://picsum.photos/200/200",
        },
         {
          id: 2,
          name: "Suzuki Alto",
          Precio:"Economico",
          Fuente:'Gasolina',
          descripcion: "el nuevo vehículo eléctrico perfecto para tu día a día.Un diseño moderno y dinámico, líneas fluidas… ¡Nuevo ZOE impone su estilo con más carácter que nunca!",
          img: "https://picsum.photos/200/200",
        },
         {
          id: 2,
          name: "Suzuki Alto",
          Precio:"Economico",
          Fuente:'Gasolina',
          descripcion: "el nuevo vehículo eléctrico perfecto para tu día a día.Un diseño moderno y dinámico, líneas fluidas… ¡Nuevo ZOE impone su estilo con más carácter que nunca!",
          img: "https://picsum.photos/200/200",
        },
         {
          id: 2,
          name: "Suzuki Alto",
          Precio:"Economico",
          Fuente:'Gasolina',
          descripcion: "el nuevo vehículo eléctrico perfecto para tu día a día.Un diseño moderno y dinámico, líneas fluidas… ¡Nuevo ZOE impone su estilo con más carácter que nunca!",
          img: "https://picsum.photos/200/200",
        },
         {
          id: 2,
          name: "Suzuki Alto",
          Precio:"Economico",
          Fuente:'Gasolina',
          descripcion: "el nuevo vehículo eléctrico perfecto para tu día a día.Un diseño moderno y dinámico, líneas fluidas… ¡Nuevo ZOE impone su estilo con más carácter que nunca!",
          img: "https://picsum.photos/200/200",
        },
         {
          id: 2,
          name: "Suzuki Alto",
          Precio:"Economico",
          Fuente:'Gasolina',
          descripcion: "el nuevo vehículo eléctrico perfecto para tu día a día.Un diseño moderno y dinámico, líneas fluidas… ¡Nuevo ZOE impone su estilo con más carácter que nunca!",
          img: "https://picsum.photos/200/200",
        },
         {
          id: 2,
          name: "Suzuki Alto",
          Precio:"Economico",
          Fuente:'Gasolina',
          descripcion: "el nuevo vehículo eléctrico perfecto para tu día a día.Un diseño moderno y dinámico, líneas fluidas… ¡Nuevo ZOE impone su estilo con más carácter que nunca!",
          img: "https://picsum.photos/200/200",
        }
        /* la idea es traerlo del local store o despues de la base de datos */
      ],
    };
  },
  mounted() {
    let productos = localStorage.products;
    if (productos !== undefined && productos !== "") {
      this.products = JSON.parse(productos);
    }
  },
};
</script>

<style>
</style>