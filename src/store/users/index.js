import api from '@/config/axios';

const usersModule = {
  namespaced: true,

  state() {
    return {
      users: [],
    };
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
  },
  actions: {
    fetchUsers({ commit }) {
      commit('SET_LOADING', true, { root: true });

      return new Promise((resolve, reject) => {
        api.get('/users.json')
          .then((response) => {
            commit('SET_USERS', response.data.users);
            commit('SET_LOADING', false, { root: true });

            resolve(response);
          })
          .catch((error) => {
            commit('SET_LOADING', false, { root: true });

            reject(error);
          });
      });
    },
  },
  getters: {
    users: (state) => state.users,
  },
};

export default usersModule;
