<template>
  <v-container fluid>

    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="calories"
      class="elevation-1"
      :search="search"

      :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="respuesta"
      show-expand

    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Gestión de FAQ</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <!-- botón nuevo item y su ventana -->

          <v-dialog
          v-model="dialog"
          max-width="550px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
        </template>

        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>


          <v-switch
          v-model="singleExpand"
          label="Exp indiv"
          class="mt-2"
        ></v-switch>
        
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <!-- edición -->

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.pregunta"
                        label="Pregunta"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4" lg="12">
                      <v-text-field
                        v-model="editedItem.respuesta"
                        label="Respuesta"
                      ></v-text-field>
                    </v-col>
                   
                  </v-row>
                </v-container>
              </v-card-text>

               <!-- fin edicion -->

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="550px">
            <v-card>
              <v-card-title class="text-h5"
                >Estás seguro de querer borrar esta PQRS?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancelar</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >Sí</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>


      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Resetear </v-btn>
      </template>


       <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
        <strong>Respuesta: </strong> {{ item.respuesta}}
      </td>
    </template>
    </v-data-table>

    <!-- notificación  de borrado exitoso-->
    <template>
      <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ textSnackbar }}

        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
            Cerrar
          </v-btn>
        </template>
      </v-snackbar>
      <!-- fin de notificación -->
    </template>
    
  </v-container>
</template>
 


<script>
import { createFaq, getAllFaq , updateFaq ,  deleteFaq } from "../controllers/Faq.controller"; // cargar de la biblioteca la función necesaria para pedir algo al backend.

export default {
  data: () => ({
    //   datos para el  aviso que se despliega al guardar exitosamente.
    snackbar: false,
    textSnackbar: "",
    timeout: 3000,

    search: "",

    expanded: [],
    singleExpand: false,

    select: null,

    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "Pregunta", sortable: false, value: "pregunta" },
    

      // { text: "Descripción", sortable: false, value: "descripcion" },
      { text: '', value: 'data-table-expand' },

      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      pregunta: "",
      respuesta: "",
      
    },
    defaultItem: {
      pregunta: "",
      respuesta: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Editar FAQ";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  // avisar al backend que se quieren datos de algún lado(MongoDb)

  methods: {
    getColor (estado) {
        if (estado === 'NL') return 'red'
        else return 'green'
      },

    initialize() {
      // ------------------------------------  traer datos de MongoDB   -------------------------
      getAllFaq() // llamar a la función
        .then((response) => {
          // cuando lleguen los prometo hacer:
          // console.log(response.data); // qué llega ?
          this.desserts = response.data; // los datos se guardan como array en desserts
        })
        .catch((err) => console.error(err)); //manejar errores
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;

      // console.log(Object.assign({}, item))
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();

      // ------------ Eliminar de forma definitiva FAQ solo si es tipo cliente----------------------------
        let idFAQ= this.editedItem._id;
        deleteFaq(this.editedItem._id) // borrar definitamente de MongoDB :(
          .then(() => {
            this.textSnackbar = `FAQ con código ${idFAQ} ha sido eliminada.`;
            this.snackbar = true; // mostrar notificaicón
          })
          .catch((err) => console.error(err));
      
      // ------------ FIN Eliminar de forma definitiva ----------------------------
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        

        // ------------ Inicio Actualización permanente en MongoDB ----------------------
        updateFaq(this.editedItem._id, this.editedItem)
          .then(() => {
            // desplejar mensaje de notificación
            console.log("FAQ actualizada.");
          })
          .catch((err) => console.error(err));
        // ------------ FIN edición permanente en MongoDB ----------------------
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {

        // creación de nueva FAQ
           createFaq(this.editedItem)
            .then ( () => {

            // console.log("registrado con éxito en la abse de datos.ya puedes loguearte.")
              // this.textSnackbar =" Registro exitoso. Puedes Iniciar sesión."
              // this.snackbar = true;
             
               console.log("FAQ creado.");
                     
            } )
            .catch( ( err) => {
              console.error(err)
              //  this.textSnackbar = err;
              //  this.snackbar = true;
            } );


        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>