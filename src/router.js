import Vue from 'vue'
import Router from 'vue-router'
import VeeValidate from 'vee-validate'

import AppCars from './components/AppCars.vue';
import AddCar from './components/AddCar.vue';

Vue.use(Router);
Vue.use(VeeValidate);

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', redirect: 'cars'},
        {path: '/cars', component: AppCars},
        {path: '/add-car', component: AddCar, name: "add-car"},
        {path: '/edit/:id', component:AddCar, name: "edit-car"}
    ]
})
