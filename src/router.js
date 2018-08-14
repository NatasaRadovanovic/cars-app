import Vue from 'vue'
import Router from 'vue-router';

import AppCars from './components/AppCars.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', redirect: 'cars'},
        {path: '/cars', component: AppCars},
      ]
})
