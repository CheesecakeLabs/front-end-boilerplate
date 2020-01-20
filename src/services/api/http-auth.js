import axios from 'axios'

import { requestAuthInterceptor } from './interceptors'

const createAuthClient = () => {
  const configs = {
    baseURL: process.env.API_URL,
  }

  const client = axios.create(configs)

  client.interceptors.request.use(requestAuthInterceptor, Promise.reject)

  return client
}

const instance = createAuthClient()

export default instance
