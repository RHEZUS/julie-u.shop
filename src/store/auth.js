import axios from 'axios';

const state = {
  isAuthenticated: false,
  user: null,
};

const mutations = {
  SET_AUTHENTICATED(state, payload) {
    state.isAuthenticated = payload.isAuthenticated;
    state.user = payload.user || null;
  },
};

const actions = {
  async checkAuthentication({ commit }) {
    try {
      const response = await axios.get('/api/user');
      const user = response.data.user;
      commit('SET_AUTHENTICATED', { isAuthenticated: true, user });
    } catch (error) {
      commit('SET_AUTHENTICATED', { isAuthenticated: false });
    }
  },

  isloggedIn({ commit }, user) {
    commit('SET_AUTHENTICATED', { isAuthenticated: true, user });
  },

  isloggedOut({ commit }) {
    commit('SET_AUTHENTICATED', { isAuthenticated: false, user: null });
  }
};

const getters = {
  isAuthenticated: (state) => state.isAuthenticated,
  user: (state) => state.user,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
