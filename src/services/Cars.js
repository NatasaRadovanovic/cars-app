import axios from 'axios'

export default class Cars{
    constructor(){
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }

    getAll(){
        return axios.get('cars'); 
    }

    get(id){
        return axios.get(`cars/${id}`); 
    }

    add(car){
        return axios.post('cars', car); 
    }

    edit(car){
        return axios.put(`cars/${car.id}`,car);     
    }

    delete(id){
        return axios.delete(`cars/${id}`);
    }
}

export const cars = new Cars();