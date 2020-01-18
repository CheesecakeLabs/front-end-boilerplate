import axios from 'axios'

class AxiosHandler {
  constructor(configs) {
    if (this.target === AxiosHandler) {
      throw new Error('Cannot instantiate this AxiosHandler. This is an abstract class')
    }

    this.axiosInstance = axios.create({
      ...configs,
    })
  }

  get(url, params, options) {
    return this.axiosInstance.get(url, params, options)
  }

  post(url, params, options) {
    return this.axiosInstance.post(url, params, options)
  }

  patch(url, params, options) {
    return this.axiosInstance.patch(url, params, options)
  }

  put(url, params, options) {
    return this.axiosInstance.put(url, params, options)
  }
}

export default AxiosHandler
