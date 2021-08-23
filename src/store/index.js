import { createStore } from 'vuex';
import authorizationModule from './authorization';
import usersModule from './users';
import placesModule from './places';

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
  getters: {
    loading: (state) => state.loading,
  },
  actions: {
  },
  modules: {
    authorization: authorizationModule,
    users: usersModule,
    places: placesModule,
  },
});
