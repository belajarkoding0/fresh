import http from '../http'

class AuthService {
  login(data) {
    return http.post("auth/login", data)
  }
  dashboard(data) {
    return http.get("dashboard", data)
  }
}

export default new AuthService