import axios from "axios";


const ecomApi = axios.create({
    baseURL: 'http://localhost:3000/api'
});

export default ecomApi

// ecomApi.get('/products')