import AxiosHandler from './axios-handler'
import { requestAuthInterceptor } from './interceptors'

class AuthRequestHandler extends AxiosHandler {
  static instance

  constructor() {
    const configs = {
      baseURL: process.env.API_URL,
    }
    super(configs)

    this.axiosInstance.interceptors.request.use(requestAuthInterceptor)
  }

  static getInstance() {
    if (!(this.instance instanceof AuthRequestHandler)) {
      this.instance = new AuthRequestHandler()
    }
    return this.instance
  }
}

export default AuthRequestHandler.getInstance()
