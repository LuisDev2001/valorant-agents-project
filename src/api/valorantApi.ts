import axios from 'axios'

const valorantApi = axios.create({
  baseURL: 'https://valorant-api.com/v1',
})

export default valorantApi