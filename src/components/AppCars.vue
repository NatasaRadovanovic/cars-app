<template>
  <div>
  <h2>App Cars</h2>
   <div
   class="list-group-item list-group-item"
   v-for="(car, key) in cars" :key="key" 
   exact-active-class = "active">
   {{ car.brand }} <br>
    {{ car.model }} <br>
    {{ car.year }} <br>
    {{ car.maxSpeed }} <br>
    {{ car.isAutomatic }} <br>
    {{ car.engine }} <br>
    {{ car.numberOfDoors }} <br>
   </div> 
  </div>
</template>

<script>

import { cars } from '../services/Cars.js'

export default {
  name: 'AppCars',

  data(){
      return{
          cars:[]
      }
  },    
    beforeRouteEnter (to, from, next) { 
      cars.getAll()
      .then(response =>{
       next(vm => {
         vm.cars = response.data
       }) 
      })
      .catch(err => console.log(err))
    },
}
</script>

<style>

</style>
