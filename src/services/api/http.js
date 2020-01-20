import axios from 'axios'

const createClient = () => {
  const configs = {
    baseURL: process.env.API_URL,
  }

  return axios.create(configs)
}

const instance = createClient()

export default instance
