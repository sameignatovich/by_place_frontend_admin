import { createStore } from 'vuex';
import userModule from './user';

export default createStore({
  strict: process.env.NODE_ENV !== 'production',

  state: {
    loading: false,
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    loading: (state) => state.loading,
  },
  modules: {
    user: userModule,
  },
});
