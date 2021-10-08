<template>
  <v-div>
      <h1>RECIBO</h1>
      <p>{{ lugarRecogida }}</p>
      <p>{{ fechaRecogida }}</p>
      <p>{{ lugarDevolucion }}</p>
      <p>{{ fechaEntrega }}</p>
      <p>{{ diasAlquiler }}</p>
      <p>{{ totalPagar}}</p>
       
  </v-div>
</template>

<script>

export default {
    data() {
        return {
        lugarRecogida:sessionStorage.getItem('lugarRecogida'),
        fechaRecogida:sessionStorage.getItem('fechaRecogida'),
        lugarDevolucion:sessionStorage.getItem('lugarDevolucion'),
        fechaEntrega:sessionStorage.getItem('fechaEntrega'),
        diasAlquiler:sessionStorage.getItem('diasAlquiler'),    
        totalPagar : sessionStorage.getItem('diasAlquiler') * sessionStorage.getItem('precioDiaCarro')
            
        }
    } ,
    
    
}

</script>



<style>

</style>