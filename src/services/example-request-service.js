import { RequestHandler } from '_services/api'

const GITHUB_USER_INFO_URL = user => `users/${user}`

class ExampleRequestService {
  static instance

  constructor() {
    this.exampleUser = 'CheesecakeLabs'
  }

  static getInstance() {
    if (!(this.instance instanceof ExampleRequestService)) {
      this.instance = new ExampleRequestService()
    }
    return this.instance
  }

  getUserInfo(user) {
    if (user) {
      return RequestHandler.get(GITHUB_USER_INFO_URL(user))
    }
    return RequestHandler.get(GITHUB_USER_INFO_URL(this.exampleUser))
  }
}

export default ExampleRequestService.getInstance()
