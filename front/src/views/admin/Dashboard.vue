<template>
    <div class="dashboard">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
            <h3>Dashboard</h3>
            <v-btn color="success">
                View Orders
            </v-btn>
        </v-subheader>
        <br>
        <v-row>
            <v-col lg="8" cols="12">
                <v-alert dense text type="success">
                    Bienvenido <strong>{{ nombreCompletoAdmin }}</strong>
                </v-alert>
                <v-row>

                    <v-col lg="8" cols="12" >
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>Clientes registrados</strong> <br>

                                </div>
                                <v-avatar size="60" color="cyan lighten-3" style="border: 3px solid #444">
                                    <span style="color: white">{{ numClientes}} +</span>
                                </v-avatar>
                            </v-card-text>
                            <v-card-actions class="d-flex justify-space-between">

                            </v-card-actions>
                        </v-card>
                    </v-col>

                       <v-col lg="8" cols="12" >
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>Carros</strong> <br>

                                </div>
                                <v-avatar size="60" color="blue-grey darken-1" style="border: 3px solid #444">
                                    <span style="color: white">{{ numCarros}} +</span>
                                </v-avatar>
                                      <div>
                                    <strong>Alquilados</strong> <br>

                                </div>
                                  <v-avatar size="60" color="green darken-2" style="border: 3px solid #444">
                                    <span style="color: white">{{ numCarros}} +</span>
                                </v-avatar>
                                  <div>
                                    <strong>Agotados</strong> <br>

                                </div>
                                  <v-avatar size="60" color="red" style="border: 3px solid #444">
                                    <span style="color: white">{{ numCarrosAgotados}} +</span>
                                </v-avatar>
                            </v-card-text>
                            <v-card-actions class="d-flex justify-space-between">

                            </v-card-actions>
                        </v-card>
                    </v-col>

                       <v-col lg="8" cols="12" >
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>Recibos</strong> <br>

                                </div>
                                <v-avatar size="60" color="blue-grey darken-1" style="border: 3px solid #444">
                                    <span style="color: white">{{numRecibos}} +</span>
                                </v-avatar>
                                  <div>
                                    <strong>Cobrados</strong> <br>

                                </div>
                                <v-avatar size="60" color="green" style="border: 3px solid #444">
                                    <span style="color: white">{{  numRecibosCobrados}} +</span>
                                </v-avatar>
                                  <div>
                                    <strong>Pendientes</strong> <br>

                                </div>
                                <v-avatar size="60" color="red" style="border: 3px solid #444">
                                    <span style="color: white">{{ numRecibosPendientes}} +</span>
                                </v-avatar>
                                
                            </v-card-text>
                            <v-card-actions class="d-flex justify-space-between">

                            </v-card-actions>
                        </v-card>
                    </v-col>

                       <v-col lg="8" cols="12" >
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>CAJA</strong> <br>

                                </div>
        
                                <div > COP <strong>{{ DineroCobrado}} </strong></div>
                                
                            </v-card-text>
                            <v-card-actions class="d-flex justify-space-between">

                            </v-card-actions>
                        </v-card>
                    </v-col>

                </v-row>
            </v-col>

            <v-col cols="12" lg="5">
                <v-card>
                    <v-card-title>Activities</v-card-title>
                    <v-card-text class="py-0">
                        <v-timeline align-top dense>
                            <v-timeline-item color="indigo" small>
                                <strong>5 Minuts ago</strong>
                                <div class="text-caption">
                                   You have new order please check this out
                                </div>
                            </v-timeline-item>
                            <v-timeline-item color="green" small>
                                <strong>35 Minuts ago</strong>
                                <div class="text-caption mb-2">
                                    A Product has delivered!
                                </div>
                            </v-timeline-item>

                            <v-timeline-item color="indigo" small>
                                <strong>44 Minuts ago</strong>
                                <div class="text-caption">
                                    You have new order please check this out
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                </v-card>
            </v-col>

        
           
        </v-row>
    </div>
</template>

<script>
import { getAllUsers} from "../../controllers/User.controller"; // cargar de la biblioteca la función necesaria para pedir algo al backend.
import { getAllCars} from "../../controllers/Car.controller"; // cargar de la biblioteca la función necesaria para pedir algo al backend.   
import { getAllRecibos} from "../../controllers/Recibo.controller";   // cargar recibos
  
    export default {
        name: "Dashboard",
        data() {
            return {
                users:[],
                cars:[],
                recibos:[],
                   
              
            }
        },


         created() {

         getAllUsers () // llamar a la función
            .then((response) => {
                // cuando lleguen los prometo hacer:
                console.log(response.data); // qué llega ?
                console.log(response.data.length)
                this.users = response.data;
            })
            .catch((err) => console.error(err)); //manejar errores

         getAllCars () // llamar a la función
             getAllCars () // llamar a la función
            .then((response) => {
                // cuando lleguen los prometo hacer:
               
                this.cars = response.data;
            })
            .catch((err) => console.error(err)); //manejar errores

          getAllRecibos () // llamar a la función
             getAllRecibos () // llamar a la función
            .then((response) => {
                // cuando lleguen los prometo hacer:
               
                this.recibos = response.data;
            })
            .catch((err) => console.error(err)); //manejar errores
        
        },

       

         computed: {

            nombreCompletoAdmin() {
                return sessionStorage.getItem("nameCliente")+' '+sessionStorage.getItem("lastNameCliente");
            } ,

            numClientes() {
                return this.users.filter( user => user.userType === 'client' ).length ;
            } ,

             numCarros() {
                let conteo = 0;
                this.cars.forEach(car => {
                    conteo = conteo + car.stock;
                });
                return conteo;
            }  ,

            numCarrosAgotados() {
               return this.cars.filter(car => car.estado === 'agotado' ).length
            } ,

             numRecibos() {
               return this.recibos.length
            } ,

            numRecibosPendientes() {
                return this.recibos.filter( recibo => recibo.estado === 'pendiente' ).length ;
            },
            
            numRecibosCobrados() {
                return this.recibos.filter( recibo => recibo.estado === 'cobrado' ).length ;
            } ,

            DineroCobrado() {
                let caja = 0;
                this.recibos.forEach(recibo => {
                    if(recibo.estado === 'cobrado') {
                         caja += recibo.totalPagar
                    }
                   
                });
                return caja ;
            }



         },

        methods: {
            onButtonClick(item) {
                console.log('click on ' + item.no)
            } ,

           
        }
    

        }
    
</script>

<style scoped>
    .overlap-icon {
        position: absolute;
        top: -33px;
        text-align: center;
        padding-top: 12px;
    }
</style>
