import AuthService from "../services/AuthService";

export default {
  namespaced: true,
  state: {
    token: null,
    user: null
  },

  getters: {
    authenticated(state) {
      return state.token && state.user
    },
    user(state) {
      return state.user
    }
  },

  mutations: {
    set_token(state, token) {
      state.token = token
    },
    set_user(state, data) {
      state.user = data
    }
  },

  actions: {
    async signIn({ dispatch }, credentials) {
      let result = AuthService.login(credentials)
      dispatch('attempt', (await result).data.token)
    },

    async attempt({ commit }, token) {
      commit('set_token', token)

      try {
        let respone = await AuthService.dashboard({
          headers: {
            "Authorization": 'Bearer ' + token
          }
        })
        commit('set_user', respone.data)
      } catch (error) {
        commit('set_token', null)
        commit('set_user', null)
      }
    }
  }
}