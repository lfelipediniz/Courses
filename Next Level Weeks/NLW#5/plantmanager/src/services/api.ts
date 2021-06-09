import axios from 'axios'

const api = axios.create({
    baseURL: 'http:your_ipv4_here:3333'
})

export default api
