import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.headers.common = { Accept: 'application/json' }
export default axios.defaults.baseURL = 'http://localhost:3021'
