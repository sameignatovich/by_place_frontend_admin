import api from '@/config/axios';

const authorizationModule = {
  namespaced: true,

  state() {
    return {
      token: null,
      user: {},
    };
  },
  mutations: {
    SET_TOKEN(state, token) {
      localStorage.setItem('token', token);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      state.token = token;
    },
    UNSET_TOKEN(state) {
      localStorage.removeItem('token');
      api.defaults.headers.common.Authorization = null;
      state.token = null;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    UNSET_USER(state) {
      state.user = null;
    },
    SET_AVATAR(state, avatar) {
      state.user.avatar = avatar;
    },
  },
  actions: {
    autologin({ commit }, token) {
      commit('SET_LOADING', true, { root: true });
      commit('SET_TOKEN', token);

      return new Promise((resolve, reject) => {
        api.post('/autologin.json')
          .then((response) => {
            commit('SET_USER', response.data.user);
            commit('SET_LOADING', false, { root: true });
            resolve(response);
          })
          .catch((error) => {
            const { status } = error.response;
            if (status === 404 || status === 403) {
              commit('UNSET_TOKEN');
            }

            commit('SET_LOADING', false, { root: true });
            reject(error);
          });
      });
    },
    signin({ commit }, userData) {
      commit('SET_LOADING', true, { root: true });

      return new Promise((resolve, reject) => {
        api.post('/signin.json', userData)
          .then((response) => {
            commit('SET_TOKEN', response.data.token);
            commit('SET_USER', response.data.user);

            commit('SET_LOADING', false, { root: true });
            resolve(response);
          })
          .catch((error) => {
            commit('SET_LOADING', false, { root: true });
            reject(error);
          });
      });
    },
    signout({ commit }) {
      return new Promise((resolve, reject) => {
        api.delete('/signout.json')
          .then((response) => {
            if (response.data.signout) {
              commit('UNSET_TOKEN');
              commit('UNSET_USER');

              resolve(response);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    changeAvatar({ commit }, formData) {
      return new Promise((resolve, reject) => {
        api.put('/profile/update/avatar.json', formData)
          .then((response) => {
            commit('SET_AVATAR', response.data.avatar);

            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    changeMainInfo({ commit }, mainData) {
      return new Promise((resolve, reject) => {
        api.put('/profile/update/main.json', mainData)
          .then((response) => {
            commit('SET_USER', response.data.user);

            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    changePassword(password) {
      return new Promise((resolve, reject) => {
        api.put('/profile/update/password.json', password)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  getters: {
    token: (state) => state.token,
    user: (state) => state.user,
    isAuthorized: (state) => !!state.token,
  },
};

export default authorizationModule;
