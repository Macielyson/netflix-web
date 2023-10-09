import axios from "axios"

// criando uma nova instacia de axios.
const api = axios.create({
    baseURL: 'http://localhost:8000',
});

export default api;