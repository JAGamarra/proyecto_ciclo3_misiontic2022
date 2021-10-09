<template>
  <v-div>
      <h1>RECIBO</h1>
      <p>{{ nameCliente}}</p>
      <p>{{ lugarRecogida }}</p>
      <p>{{ fechaRecogida }}</p>
      <p>{{ lugarDevolucion }}</p>
      <p>{{ fechaEntrega }}</p>
      <p> Días alquier: {{ diasAlquiler }}</p>
      <p>Total a pagar : {{ totalPagar}}</p>
    
    <!-- botón para registrar recibo en base de datos -->
     <v-btn  @click="registrarReciboBaseDatos()" color="primary" depressed elevation="4" outlined rounded text
              >RESERVAR</v-btn >
    <v-btn  @click="cancelar()" color="primary" depressed elevation="4" outlined rounded text
              >CANCELAR</v-btn >
       
  </v-div>
</template>

<script>
import { createRecibo } from "../../controllers/Recibo.controller";  //  controlador para crear recibo.

export default {
    data() {
        return {
        
        // datos del cliente
        nameCliente:sessionStorage.getItem('nameCliente'),
        lastNameCliente:sessionStorage.getItem('lastNameCliente'),
        documento:sessionStorage.getItem('documento'),
        // datos de la reserva
        lugarRecogida:sessionStorage.getItem('lugarRecogida'),
        fechaRecogida:sessionStorage.getItem('fechaRecogida'),
        lugarDevolucion:sessionStorage.getItem('lugarDevolucion'),
        fechaEntrega:sessionStorage.getItem('fechaEntrega'),
        modeloCarro:sessionStorage.getItem('modeloCarro'),
        diasAlquiler:sessionStorage.getItem('diasAlquiler'),    
        totalPagar : sessionStorage.getItem('diasAlquiler') * sessionStorage.getItem('precioDiaCarro')
            
        }
    } ,

    // registrar en base de datos

     methods: {

      registrarReciboBaseDatos() {

         //-------*** Agregar a la base de datos ***-----------------------
          // crear molde/objeto a guardar.
          const recibo = {
            nameCliente: this.nameCliente,
            lastNameCliente: this.lastNameCliente,
            documento:this.documento,
            lugarRecogida:this.lugarRecogida,
            fechaRecogida:this.fechaRecogida,
            lugarDevolucion:this.lugarDevolucion,
            fechaEntrega:this.fechaEntrega,
            diasAlquiler:this.diasAlquiler,  
            modeloCarro:this.modeloCarro,
            totalPagar:this.totalPagar

          };

          // crear usuario si se puede de lo contrario:
          createRecibo(recibo)
            .then ( () => {
            console.log("Recibo creado con éxito en la abse de datos.")
                  
            } )
           .catch((err) => console.error(err));

        } 
    
  }
    
    
}

</script>



<style>

</style>