import http from '../http'

class AuthService {
  login(data) {
    return http.post("auth/login", data)
  }
}

export default new AuthService