<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6">
        <!--  Inicio tarjetas de equipo-->
        <div>
          <!-- <h2>EQUIPO</h2> -->

          <!-- inicio grid cards -->
          <v-container>
            <v-row>
              <v-col v-for="persona in equipo" :key="persona.id" sm="6" xs="12">
                <v-card>
                  <!-- estilo de card -->
                  <v-card class="mx-auto" outlined>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="text-overline mb-4">
                          <v-list-item-avatar color="grey darken-3">
                            <v-img
                              class="elevation-6"
                              alt="img perfil"
                              :src="persona.icono"
                            ></v-img>
                          </v-list-item-avatar>
                          {{ persona.name }}
                        </div>

                        <v-list-item-title class="text-h5 mb-1">
                          {{ persona.puesto }}
                        </v-list-item-title>
                        <v-list-item-subtitle>{{
                          persona.descripcion
                        }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>

                    <v-card-actions class="justify-end">
                      <v-btn outlined rounded text>
                        <a :href="abrirCorreo" style="text-decoration: none"
                          >Contácto
                        </a>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                  <!-- fin estilo card -->
                </v-card>
              </v-col>
            </v-row>
          </v-container>
          <!-- fin  grid cards -->
        </div>

        <!--  fin formulario -->
      </v-col>

      <v-col cols="12" md="6">
        <!--  Inicio hsitoria de la empresa-->
        <h2>Un corto recorrido</h2>
        <v-timeline>
          <v-timeline-item
            v-for="(year, i) in years"
            :key="i"
            :color="year.color"
            small
          >
            <template v-slot:opposite>
              <span
                :class="`headline font-weight-bold ${year.color}--text`"
                v-text="year.year"
              ></span>
            </template>
            <div class="py-4">
              <h2
                :class="`headline font-weight-light mb-4 ${year.color}--text`"
              >
                {{year.titulo}}
              </h2>
              <div>
                {{year.historia}}
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
        <!--  fin historia de la empresa -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      years: [
        {
          color: "green",
          year: "2005",
          titulo:"Inicios",
          historia:"Iniciamos en Medellín este camino."
        },
        {
          color: "pink",
          year: "2015",
           titulo:"Consolidación",
          historia:"Nos convertimos en un referente en Medellín."
        },
        {
          color: "amber",
          year: "2019",
          titulo:"Expansión",
          historia:"Abrimos oficina en Bogotá."
        },
      ],
      equipo: [
        {
          id: 1,
          name: "Daniela Andrade",
          puesto: "Gerente",
          descripcion: "Greyhound divisely hello coldly fonwderfully",
          icono: "https://avataaars.io/?",
          correo: "daniel@gmail.com",
        },
        {
          id: 2,
          name: "Sara Castro",
          puesto: "Administradora",
          descripcion: "Greyhound divisely hello coldly fonwderfully",
          icono: "https://avataaars.io/?",
          correo: "daniel@gmail.com",
        },
        {
          id: 2,
          name: "Pedro Maldonado",
          puesto: "Atención al cliente",
          descripcion: "Greyhound divisely hello coldly fonwderfully",
          icono: "https://avataaars.io/?",
          correo: "daniel@gmail.com",
        },
        {
          id: 2,
          name: "Jeśus Ríos",
          puesto: "Publicista",
          descripcion: "Greyhound divisely hello coldly fonwderfully",
          icono: "https://avataaars.io/?",
          correo: "daniel@gmail.com",
        },
      ],
    };
  },
  computed: {
    abrirCorreo() {
      return "mailto:" + this.correo;
    },
  },
};
</script>

<style>
</style>
