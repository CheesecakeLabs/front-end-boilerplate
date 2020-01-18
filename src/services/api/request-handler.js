import AxiosHandler from './axios-handler'

class RequestHandler extends AxiosHandler {
  static instance

  constructor() {
    const configs = {
      baseURL: process.env.API_URL,
    }
    super(configs)
  }

  static getInstance() {
    if (!(this.instance instanceof RequestHandler)) {
      this.instance = new RequestHandler()
    }
    return this.instance
  }
}

export default RequestHandler.getInstance()
