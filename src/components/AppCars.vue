<template>
  <div>
    <h2 style="text-align:center">App Cars</h2><br>
  <div class="list-group-item list-group-item" v-for="(car, key) in cars" :key="key" exact-active-class = "active">
    Brand: {{ car.brand }} <br>
    Model: {{ car.model }} <br>
    Year: {{ car.year }} <br>
    Max Speed {{ car.maxSpeed }} <br>
    Is Automatic {{ car.isAutomatic ? 'Automatic' : 'Manual' }} <br>
    Engine {{ car.engine }} <br>
    Numner of Doors: {{ car.numberOfDoors }} <br>
  
  <router-link :to="{ name: 'edit-car', params: { id: car.id } }" class="btn btn-default">
  <button><i class="fas fa-pencil-alt"></i></button></router-link>
  <button @click ="onDelete(car)"><i class="fas fa-trash-alt"></i></button>
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
       if(confirm('Are you sure you want to delete this car?'))
       {
         cars.delete(car.id)
         .then(response => {
          let carIndex = this.cars.findIndex(c => c.id === car.id)
          this.cars.splice(carIndex, 1)
        })
        .catch(err => console.log(err))
       }
     }
  }
}
</script>

<style>
 .list-group-item{
   width:20%;
   margin:0 auto;
    }
</style>
