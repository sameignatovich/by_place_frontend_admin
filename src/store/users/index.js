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
    DELETE_USER(state, userId) {
      state.users.splice(state.users.findIndex((i) => i.id === userId), 1);
    },
  },
  actions: {
    fetchUsers({ commit }) {
      return new Promise((resolve, reject) => {
        api.get('/users.json')
          .then((response) => {
            commit('SET_USERS', response.data.users);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    deleteUser({ commit }, userId) {
      return new Promise((resolve, reject) => {
        api.delete(`/users/${userId}.json`)
          .then((response) => {
            commit('DELETE_USER', userId);
            resolve(response);
          })
          .catch((error) => {
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
