export const state = () => ({
  currentUser: null,
});

export const mutations = {
  setUser(state, user) {
    this.$cookies.set('user', user);
  },
  clearUser() {
    this.$cookies.remove('user');
  }
};

export const actions = {
  login({ commit }, user) {
    commit('setUser', user);
  },
  logout({ commit }) {
    commit('clearUser');
  }
};
