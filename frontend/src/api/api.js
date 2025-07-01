import axios from 'axios'

const api = axios.create({
    baseURL: '/',
    headers: {
        "Content-Type": 'application/json'
    },
    validateStatus: (status) => {
        return status >= 200 && status < 400
    }
})

export default api