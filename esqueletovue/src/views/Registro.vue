<template>
  <v-app class="container">
    <v-icon x-large color="blue">mdi-account-circle</v-icon>
    <h1 class="form-title">Registro</h1>
    <v-form v-model="valid">
      <v-container>
        <!-- ~ CAMPOS NOMBRE Y APELLIDOS -->
        <v-row class="v-row">
          <v-col cols="12" md="6">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="50"
              label="Nombres"
              required
              append-icon="mdi-account-settings"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="50"
              label="Apellidos"
              append-icon="mdi-account-settings"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- ~ CAMPOS USUARIO Y CONTRASEÑA -->
        <v-row class="v-row">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="username"
              :rules="usernameRules"
              :counter="10"
              label="Nombre de usuario"
              required
              append-icon="mdi-form-textbox"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              :counter="12"
              label="Contraseña"
              required
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="repeatPassword"
              :rules="[
                passwordRules,
                password === repeatPassword || 'Password must match',
              ]"
              :counter="12"
              label="Repetir Contraseña"
              required
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- ~ CAMPO CORREO Y TELEFONO -->
        <v-row class="v-row">
          <v-col cols="12" md="6">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
              append-icon="mdi-email"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model.number="cellphone"
              :rules="numberRules"
              label="Número de teléfono"
              required
              append-icon="mdi-cellphone"
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- ~ CAMPO TIPO DOCUMENTO Y DOCUMENTO -->
        <v-row class="v-row">
          <v-col class="d-flex" cols="12" sm="6">
            <v-select
              :items="items"
              label="Tipo de documento"
              v-model="tipoDocumento"
              dense
              outlined
              required
            ></v-select>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model.number="numeroDocumento"
              :rules="numberRules"
              :counter="14"
              label="Número de documento"
              required
              append-icon="mdi-card-account-details"
            ></v-text-field>
          </v-col>
        </v-row>

        <div class="flex-boton">
          <div>
            <v-btn color="primary" depressed elevation="2" outlined rounded text
              >Registrar</v-btn
            >
          </div>
          <div>
            <v-btn color="primary" depressed elevation="2" outlined rounded text
                    to="/login"
              >¿Tienes cuenta? Inicia sesión</v-btn
            >
          </div>
        </div>
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    repeatPassword: "",
    showPassword: false,
    email: "",
    cellphone: "",
    tipoDocumento: "",
    numeroDocumento: "",
    items: ["C.C", "C.E", "Pasaporte"],
    nameRules: [
      (v) => !!v || "Required",
      (v) => v.length <= 50 || "Name must be less than 10 characters",
      (v) => /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(v) || "Name/Lastname is incorrect",
    ],
    usernameRules: [
      (v) => !!v || "Required.",
      (v) => /^[a-zA-Z0-9]{4,16}$/.test(v),
    ],
    passwordRules: [
      (v) => !!v || "Required",
      (v) => v.length >= 6 || "Password must be greater than 6 characters",
    ],
    emailRules: [
      (v) => !!v || "Required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    numberRules: [
      (v) => !!v || "Required",
      (v) => /^\d{1,16}$/.test(v) || "Only numbers",
    ],
  }),
};
</script>

<style scoped>
.container {
  max-width: 900px;
}
.form-title {
  text-align: center;
}
.flex-boton {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-top: 50px;
}
.v-row {
  margin: 10px 0;
}
</style>