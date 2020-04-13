import http from '../http'

class AuthService {
  login(data) {
    return http.post("auth/login", data)
  }
  dashboard() {
    return http.get("dashboard")
  }
}

export default new AuthService