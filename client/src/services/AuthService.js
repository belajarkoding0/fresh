import http from '../http'

class AuthService {
  login(data) {
    return http.post("auth/login", data)
  }
  dashboard() {
    return http.get("dashboard")
  }
  logout() {
    return http.post("auth/logout")
  }
}

export default new AuthService