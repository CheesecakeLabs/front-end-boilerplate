import axios from 'axios'

const createClient = () => {
  const configs = {
    baseURL: process.env.API_URL,
  }

  return axios.create(configs)
}

const requestAuthInterceptor = config => {
  const { headers: originalHeaders } = config
  // place your auth token from your store here
  const token = ''

  const headers = {
    ...originalHeaders,
    Authorization: token,
  }

  return { ...config, headers }
}

export const http = createClient()
http.interceptors.request.use(requestAuthInterceptor, Promise.reject)

// For most of our cases the below will only use a few bytes of extra memory
// because we'll simply use `http`
// export const publicHttp = createClient()
