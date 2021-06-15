import axios from 'axios'

const api = axios.create({
    baseURL: 'http://youripv4:3333'
})

export default api
