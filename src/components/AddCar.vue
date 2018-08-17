<template>
  <div class="container mt-4">
  <h1 style="text-align:center">Add Car</h1><br>
   <form @submit.prevent="onSubmit" >
    <div class="form-group row">
      <label class="col-4 col-form-label" for="brand">Brand</label> 
      <div class="col-8">
        <input autofocus id="brand" name="brand" type="text" class="form-control here" 
          v-validate="'required|min:2'"  v-model="car.brand" >
        <div class="helo-block alert alert-danger"  v-show="errors.has('brand')">
          {{ errors.first('brand') }}
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="model" class="col-4 col-form-label">Model</label> 
      <div class="col-8">
        <input id="model" name="model" type="text" class="form-control here"
          v-validate="'required|min:2'" v-model="car.model">
        <div class="helo-block alert alert-danger"  v-show="errors.has('model')">
          {{ errors.first('model') }}
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="year" class="col-4 col-form-label">Year</label> 
      <div class="col-8">
        <select id="year" name="year" class="custom-select" v-validate="'required'"  v-model="car.year">
          <option v-for="year in years" :value="year" :key="year">{{ year }}</option>
        </select>
        <div class="helo-block alert alert-danger"  v-show="errors.has('year')">
          {{ errors.first('year') }}
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="speed" class="col-4 col-form-label">Maximum Speed</label> 
      <div class="col-8">
        <input id="speed" name="speed" type="number" class="form-control here" v-validate="'required'" v-model="car.maxSpeed">
         <div class="helo-block alert alert-danger"  v-show="errors.has('speed')">
          {{ errors.first('speed') }}
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="doors" class="col-4 col-form-label">Number of Doors</label> 
      <div class="col-8">
        <input id="doors" name="doors" type="number" class="form-control here" v-validate="'required'" v-model="car.numberOfDoors">
         <div class="helo-block alert alert-danger"  v-show="errors.has('doors')">
          {{ errors.first('doors') }}
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-4 col-form-label">Engine</label> 
      <div class="col-8">
        <div class="form-check">
          <label class="form-check-label">
            <input name="engine" type="radio" v-validate="'required'" class="form-check-input" value="electric" v-model="car.engine">
            Electric
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input name="engine" type="radio" v-validate="'required'" class="form-check-input" value="petrol" v-model="car.engine">
            Petrol
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input name="engine" type="radio" v-validate="'required'" class="form-check-input" value="hybrid" v-model="car.engine">
            Hybrid
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input name="engine" type="radio" v-validate="'required'" class="form-check-input" value="diesel" v-model="car.engine">
            Diesel
          </label>
           <div class="helo-block alert alert-danger"  v-show="errors.has('engine')">
            {{ errors.first('engine') }}
        </div>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <div class="col-4"></div> 
      <div class="col-8">
        <div class="form-check form-check-inline">
          <label class="form-check-label">
            <input name="automatic" type="checkbox" class="form-check-input" value="true" v-model="car.isAutomatic">
            Automatic
          </label>
        </div>
      </div>
    </div> 
    <div class="form-group row">
      <div class="offset-4 col-8">
        <button name="submit" type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
    <div class="form-group row">
      <div class="offset-4 col-8">
        <button  @click="reset "name="reset" type="reset" class="btn btn-primary">Reset</button>
      </div>
    </div>
    <div class="form-group row">
      <div class="offset-4 col-8">
        <button  @click="preview "name="preview" type="button" class="btn btn-primary">Preview</button>
      </div>
    </div>
  </form>
  </div>
</template>

<script>

import { cars } from '../services/Cars.js'

export default {
  name: 'AddCar', 

  data(){
    return{
      car:{
        isAutomatic:false,
      },
        years: Array(29)
        .fill(1990)
        .map((x,y) => x+y),
    }
  },
created(){
    if(this.$route.params.id){
      cars.get(this.$route.params.id)
      .then(response => (this.car = response.data))
      .catch(err => console.log(err))
    }
  },
 methods:{
       onSubmit(){
         this.$validator.validateAll()
         .then(response =>{
           this.$route.params.id ? this.editContact() : this.addContact()
         })
      },

     addContact(){
        cars.add(this.car)
        .then(response => {
        this.$router.push('/cars')
      })
       .catch(err => console.log(err))
    },

     editContact(){
      cars.edit(this.car)
      .then(response=> {
       this.$router.push('/cars')
      })
      .catch(err => console.log(err))
    },

    reset(car){
        this.car = {
          isAutomatic:false,
        }
    },
    preview(car){
        alert(`Model:${this.car.model}
                 Brand: ${this.car.brand}
                 Year:${this.car.year}
                 Maximum Speed: ${this.car.maxSpeed}
                 Engine: ${this.car.engine}
                 Is Automatic: ${this.car.isAutomatic}`);
     },
   }
}

</script>

<style>


</style>
