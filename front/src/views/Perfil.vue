<template>
  <!-- <div>
     <v-btn @click="getIDUser()">
      <v-icon>mdi-home</v-icon>
    </v-btn>
  </div> -->

  <v-container fluid>
    <!-- // imagen de perfil ,nombre usuario -->
    <v-row>
      <v-col cols="12" lg="12">
        <v-card class="mx-auto" max-width="434" tile>
          <v-img
            height="230px"
            src="https://img.pixers.pics/pho(s3:700/PI/12/81/53/36/6/700_PI128153366_cfe7f3c0baa299e38f843df4ef584ad3_5b7abea34e466_.,700,462,jpg)/cortinas-transparentes-mosaico-azul-poligonal.jpg.jpg"
          >
            <v-row align="end" class="fill-height">
              <v-col align-self="start" class="pa-0" cols="12">
                <v-avatar class="profile" color="grey" size="164" tile>
                  <v-img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  ></v-img>
                </v-avatar>
              </v-col>
              <v-col class="py-0">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6">
                      {{name}}  {{lastname}}
                    </v-list-item-title>
                    <v-list-item-subtitle
                      >{{userType}}</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </v-col>

      <v-col cols="12" lg=12>
        <v-card class=" mx-auto d-flex  flex-wrap" max-width="230" elevation=4>

          <v-card-subtitle class="pb-0"> username</v-card-subtitle>
          <v-card-text class="text--primary pb-0">
                {{username}}
          </v-card-text>

          <v-card-subtitle class="pb-0"> password </v-card-subtitle>
          <v-card-text class="text--primary pb-0">
            {{password}}
          </v-card-text>

          
          <v-card-subtitle class="pb-0"> correo </v-card-subtitle>
          <v-card-text class="text--primary pb-0">
            {{email}}
          </v-card-text>

           <v-card-subtitle class="pb-0"> cellphone </v-card-subtitle>
          <v-card-text class="text--primary pb-0">
            {{cellphone}}
          </v-card-text>

        </v-card>

      </v-col>





    </v-row>
  </v-container>
</template>

<script>
import { getUser} from "../controllers/User.controller"

export default {
  data() {
    return {
      // datos perfil usario
      username:"",
      password:"",
      userType:"",
      name:"",
      lastname:"",
      email:"",
      cellphone:"",
      documento:"",
      registrationDate:""
    };
  },

   created() {
    const id = sessionStorage.getItem('idUser')
    if(id != undefined ) {
      getUser(id)
        .then( (response) => {
            const user = response.data;
            this.username = user.username,
            this.password = user.password ,
            this.userType = user.userType ,   
            this.name = user.name,
            this.lastname =  user.lastname ,
            this.email = user.email , 
            this.cellphone = user.cellphone ,
            this.documento = user.documento ,
            this.registrationDate = user.registrationDate
    
    
  
        } )
        .catch((err) => console.error(err));
    }
  } ,


  methods: {
    getIDUser() {
      console.log(sessionStorage.getItem("idUser"));
    },
  },
};
</script>

<style></style>
