<template>
  <div>
  <h2 style="text-align:center">App Cars</h2>
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
  Numner of Doors: {{ car.numberOfDoors }} <br>
  <router-link :to="{ name: 'edit-car', params: { id: car.id } }" class="btn btn-default">
  <button>Edit</button></router-link>
  <button @click ="onDelete(car)">Delete</button>
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

    methods:{
     onDelete (car) {
      cars.delete(car.id)
        .then((success) => {
          let carIndex = this.cars.findIndex(c => c.id === car.id)
          this.cars.splice(carIndex, 1)
        })
    }
  }
}
</script>

<style>

</style>
