export const state = () => ({
  token: null,
  currentUser: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  },
  setUser(state, user) {
    state.currentUser = user
  },
  clearUser(state) {
    state.currentUser = null
  }
}

export const actions = {
  login({ commit }, user) {
    commit('setToken', true)
    commit('setUser', user)
  },
  logout({ commit }) {
    commit('clearToken')
    commit('clearUser')
  }
}

export const getters = {
  hasToken: state => state.token,
  currentUser: state => state.currentUser
}
