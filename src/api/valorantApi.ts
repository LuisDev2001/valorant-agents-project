import axios from 'axios'
import type {AxiosInstance} from 'axios'

const valorantApi: AxiosInstance = axios.create({
  baseURL: 'https://valorant-api.com/v1',
})

export default valorantApi