import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isLogin: false,
      userId: ''
    };
  },
  mutations: {
    auth(state, user) {
      state.isLogin = true;
      state.userId = user;
    }
  },
  actions: {
    fetch({ commit }, user) {
      commit('auth', user);
    }
  },
  modules: {}
});

export default store;
