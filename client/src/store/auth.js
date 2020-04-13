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
      let result = await AuthService.login(credentials)
      return dispatch('attempt', result.data.token)
    },

    async attempt({ commit, state }, token) {
      if (token) {
        commit('set_token', token)
      }

      if (!state.token) {
        return
      }
      try {
        let respone = await AuthService.dashboard()
        commit('set_user', respone.data)
      } catch (error) {
        commit('set_token', null)
        commit('set_user', null)
      }
    }
  }
}