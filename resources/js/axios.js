import axios from "axios";
 
const instance = axios.create({
    baseURL: "https://vue-laravel-crud.test"
})

export default instance;