<template>
  <v-card>
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title>User Profile</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        <v-icon left> mdi-account </v-icon>
        Datos Perfil
      </v-tab>
      <v-tab>
        <v-icon left> mdi-door </v-icon>
        Cerrar cuenta
      </v-tab>
      <v-tab>
        <v-icon left> mdi-lock </v-icon>
        Password
      </v-tab>

      <v-tab-item>
        <!-- formulario para editar perfil -->
        <EditorPerfil />

      </v-tab-item>

      <v-tab-item>
      
        <v-card color="white" class="mx-10 d-flex flex-column align-item">
          <v-card-title class="hidden-sm-and-down mx-10 text-h5 "> Cerrar tu cuenta </v-card-title>

          <v-card-subtitle class="hidden-sm-and-down text-h5 mx-10 ">Cierra tu cuenta permanentemente.</v-card-subtitle>

          <v-card-actions class="text-h5 mx-5">
          
            <v-btn class="mx-10" x-large color="black" dark @click.stop="dialog=true">
                  <v-icon left> mdi-delete </v-icon>
                  Cerrar cuenta
                </v-btn>

                <v-dialog v-model="dialog" max-width="250">
                  <v-card class="r">
                    <v-card-title class="text-h5">
                      Estás segur@ ? 
                    </v-card-title>

                    <v-card-actions >
                      <v-spacer></v-spacer>
          
                      <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false"
                      >
                        Cancelar
                      </v-btn>

                      <v-btn
                        color="green darken-1"
                        text
                        @click="cerrarCuenta()"
                      >
                        Eliminar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>


            <!-- --------------------fin cerrar cuenta ------------ -->
          </v-card-actions>

        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis.
              Nam eget dui. Proin viverra, ligula sit amet ultrices semper,
              ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In
              dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>

            <p class="mb-0">
              Cras sagittis. Phasellus nec sem in justo pellentesque facilisis.
              Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec
              quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam
              at tortor in tellus interdum sagittis.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import { getUser , deleteUser} from "../controllers/User.controller";

import EditorPerfil from "../components/EditorPerfil.vue";

export default {
  name: "perfil",
  components: { EditorPerfil },

  data() {
    return {
      dialog:false,
      // datos perfil usario
      username: "",
      password: "",
      userType: "",
      name: "",
      lastname: "",
      email: "",
      cellphone: "",
      documento: "",
      registrationDate: "",
    };
  },

  created() {
    const id = sessionStorage.getItem("idUser");
    if (id != undefined) {
      getUser(id)
        .then((response) => {
          const user = response.data;
          (this.username = user.username),
            (this.password = user.password),
            (this.userType = user.userType),
            (this.name = user.name),
            (this.lastname = user.lastname),
            (this.email = user.email),
            (this.cellphone = user.cellphone),
            (this.documento = user.documento),
            (this.registrationDate = user.registrationDate);
        })
        .catch((err) => console.error(err));
    }
  },

  methods: {

    cerrarCuenta() {

      deleteUser( sessionStorage.getItem("idUser") ) // borrar definitamente usuario de MongoDB :(
          .then(() => {
            console.log("Eliminado de forma definitivamente.");

            // cerrar sesión y recargar página
            sessionStorage.clear()   // limpiar "historial" cierra permisos a ciertas páginas.
            this.$router.push("/");  // ir a página d einicio
            window.location.reload();  // recargar página

          })
          .catch((err) => console.error(err));
    }


  },
};
</script>

<style></style>
