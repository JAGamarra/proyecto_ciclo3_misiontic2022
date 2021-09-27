<template>


  <v-container fluid>

      <!-- INICIO botón flotante para regresar a gestión de catálogo -->
       <v-btn elevation="2" bottom right fixed fab to='/admin/gestioncatalogo'>
      <v-icon>mdi-arrow-left-bold</v-icon>
      </v-btn> 
      <!-- FIN botón flotante para regresar a gestión de catálogo -->

    <!--INICIO FORMULARIO PARA AGREGAR CARRO-->
    <v-form ref="form">
      <!-- marca  -->
      <v-row>
        <!--  título del formulario -->
        <v-col cols="12">
          <h1>Nuevo producto</h1>
        </v-col>

        <!-- agregar imagen -->
        <v-col cols="12">
          <v-img max-height="300" :src="img"></v-img>
          <v-text-field
            placeholder="URL de la imagen"
            :rules="rulesimg"
            v-model="img"
          >
            <v-icon slot="prepend"> mdi-image </v-icon>
          </v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex" cols="12" sm="6">
          <v-icon class="mx-1">mdi-car</v-icon>
          <v-text-field
            v-model="name"
            :rules="rulesName"
            label="Modelo"
          ></v-text-field>
        </v-col>

        <!--  precio por día -->
        <v-col class="d-flex" cols="12" sm="6">
          <v-icon class="mx-1">mdi-currency-usd</v-icon>
          <v-text-field
            v-model="price"
            :rules="rulesPrice"
            label="Precio por dia"
            step="10000"
          ></v-text-field>
        </v-col>
      </v-row>

      <!-- detalles del carro -->
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-icon class="mx-1">mdi-briefcase</v-icon>
          <v-text-field
            v-model="numeroMaletas"
            label="Número de maletas ?"
            :rules="rulesMaletas"
          ></v-text-field>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-icon left> mdi-account-settings </v-icon>
          <v-text-field
            v-model="numeroPersonas"
            label="Número de personas ?"
            :rules="rulesPersonas"
          ></v-text-field>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-icon class="mx-1"> mdi-engine</v-icon>
          <v-select
            v-model="tipo"
            :items="opcionesTipos"
            label="Es mecánico o automático?"
            :rules="rulesTipo"
          ></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-icon left> mdi-air-conditioner </v-icon>
          <v-select
            v-model="aire"
            :items="opcionesAire"
            label="Tiene aire acondicionado ?"
            :rules="rulesAire"
          ></v-select>
        </v-col>
      </v-row>

      <!-- INICIO botones para enviar y limpiar campos -->
      <div class="d-flex justify-center mt-3">
        <!-- botòn para guardar y despliegue de aviso -->
        <div class="text-center">
          <v-btn color="success" class="mr-4" @click="guardar()">
            Guardar
          </v-btn>

          <v-snackbar v-model="snackbar" :timeout="timeout">
            {{ text }}

            <template v-slot:action="{ attrs }">
              <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
                Cerrar
              </v-btn>
            </template>
          </v-snackbar>
        </div>

        <!-- fin boton para guardar y despliegue de aviso -->

        <!-- <v-btn @click="guardar" color="success" class="mr-4"> Guardar </v-btn> -->
        <v-btn @click="limpiar" color="error"> Limpiar </v-btn>
      </div>

      <!-- FIN botones para enviar y limpiar campos -->
    </v-form>
  </v-container>
</template>
 

<script>
export default {
  data() {
    return {
      /* DATOS */
      img: "",
      name: "",
      price: "",
      numeroMaletas: "",
      numeroPersonas: "",
      tipo: "",
      aire: "",
      showInfo: false,  //bandera para ocultar datos en tarjeta del carro

      select: null,
      opcionesTipos: ["Mecánico", "Automático"],
      opcionesAire: ["Sí", "No"],

      /* REGLAS */

      rulesimg: [(value) => !!value || "Requerido"],
      rulesName: [
        (value) => !!value || "Requerido",
        (v) =>  (v && v.length <= 9) || "El nombre debe tener menos de 10 letras",
      ],
      rulesPrice: [
        (value) => !!value || "Requerido",
        (v) => Number.isInteger(Math.floor(Number(v))) || "Debe ingresar un nùmero",
        (v) =>  (v && v.length <= 9) || "El precio debe tener menos de 10 digitos",
      ],
      rulesTipo: [(value) => !!value || "Requerido"],
      rulesMaletas: [
        (value) => !!value || "Requerido",
        (v) => Number.isInteger(Number(v)) || "Debe ingresar un número entero",
        (va) =>  (va && va.length < 2) || "Número máximo de maletas: 9",
      
      ],
      rulesPersonas: [ 
        (value) => !!value || "Requerido",
         (v) => Number.isInteger(Number(v)) || "Debe ingresar un número entero",
        (v) =>  (v && v.length < 2) || "Número máximo de personas: 9",
      ],
      rulesAire: [(value) => !!value || "Requerido"],

      //   datos para el  aviso que se despliega al guardar exitosamente.
      snackbar: false,
      text: "Producto Agregado con éxito.",
      timeout: 1500,
    };
  },

  methods: {
    limpiar() {
      this.$refs.form.reset();
    },

    guardar() {
      // validar formulario

      if (this.$refs.form.validate()) {
        this.snackbar = true; //para desplegar aviso de que se agrego el producto al catàlogo.

        //-------*** agregar al local store ***-----------------------

          //Agregar producto al localstorage
          let id = localStorage.idCar;
          if (id === undefined || id == "") {
            id = 1;
          } else {
            id = parseInt(id) + 1;
          }
          const carro = {
            id: id,
            name: this.name,
            img: this.img,
            price: this.price,
            numeroMaletas: this.numeroMaletas ,
            numeroPersonas:this.numeroPersonas,
            tipo: this.tipo ,
            aire: this.aire,
            showInfo: this.showInfo,
          };
          //Obtener lista de productos del localstorage
          let carros = localStorage.cars; 
          // verificar si hay datos o no
          if (carros === undefined || carros == "") {
            // si no tiene datos iniciar la variable con lista vacía
            carros = [];
          } else {
            // de lo contrario convertir la cadena con el JSON a una lista de objetos
            carros = JSON.parse(carros);
          }
          //Agregar el nuevo objeto
          carros.push(carro);

          this.$refs.form.reset(); // limpiar campos de formulario

          localStorage.idcar = id; //actualizar id del producto
          localStorage.cars = JSON.stringify(carros); // actualizar la lista de productos.

        // ----- FIN proceso par agregar al local store
      }
    },

    // agregar el product al local store
  },
};
</script>

<style>
</style>