<template>
  <div>
    <h1>PQRS</h1>
    <!-- información personal -->
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>


    <!-- input asunto  -->
    <v-text-field
      label="Asunto"
      :rules="nameRules"
      hide-details="auto"
      v-model="name"
    >
      <v-icon slot="prepend" color="orange"> mdi-car </v-icon>
    </v-text-field>

    <!-- input texto largo -->
    <v-textarea
      name="input-7-1"
      label="Descripción"
      v-model="description"
    >
      <v-icon slot="prepend" color="orange"> mdi-text </v-icon>
    </v-textarea>

    <!-- botón para guardar edición de producto  -->
    <div class="boton-guardar">
      <v-btn tile color="primary" @click="guardar()">
        <v-icon left> mdi-save</v-icon>
        Enviar
      </v-btn>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: "",
      description: "",
      img: "",
      /* reglas para llenado de formulario */
      imgRules: [(value) => !!value || "Required."],
      nameRules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
    };
  },

};
</script>

<style>

</style>