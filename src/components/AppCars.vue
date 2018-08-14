<template>
  <div>
  <h2>App Cars</h2>
   <div
   class="list-group-item list-group-item"
   v-for="(car, key) in cars" :key="key" 
   exact-active-class = "active">
   Brand: {{ car.brand }} <br>
   Model: {{ car.model }} <br>
   Year: {{ car.year }} <br>
    Max Speed {{ car.maxSpeed }} <br>
   Is Automatic {{ car.isAutomatic }} <br>
   Engine {{ car.engine }} <br>
  Number of doors: {{ car.numberOfDoors }} <br>
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
