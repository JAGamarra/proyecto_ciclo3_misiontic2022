<template>
  <div id="root">
    <h2 class="title">Formulario de alquiler</h2>
    <form action="" class="form-alquiler">
      <v-row>
        <v-select
          :items="items"
          label="Lugar de recogida"
          v-model="lugarRecogida"
          dense
          outlined
          required
        ></v-select>
      </v-row>

      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="50"
            label="Fecha de recogida"
            append-icon="mdi-calendar"
            required
            type="date"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-select
          :items="items"
          label="Lugar de recogida"
          v-model="lugarRecogida"
          dense
          outlined
          required
        ></v-select>
      </v-row>

      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="50"
            label="Fecha de entrega"
            append-icon="mdi-calendar"
            required
            type="date"
          ></v-text-field>
        </v-col>
      </v-row>

      <div class="flex-boton">
        <div>
          <v-btn color="primary" depressed elevation="2" outlined rounded text
            >Volver</v-btn>
        </div>
        <div>
          <v-btn color="primary" depressed elevation="2" outlined rounded text
            >Siguiente</v-btn>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      items: [
        "Medellín - Terminal de Transportes",
        "Medellín - Aeropuerto Internacional",
        "Bogotá - Terminal de Transportes",
        "Bogotá - Aeropuerto Internacional El Dorado",
      ],
    };
  },
};
</script>

<style scoped>
#root {
  max-width: 900px;
  margin: 0 auto;
  margin-top: 40px;
}
.title {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 70px;
}
.form-alquiler {
  margin-top: 30px;
}
.flex-boton {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
</style>