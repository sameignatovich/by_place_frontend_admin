import api from '@/config/axios';

const placesModule = {
  namespaced: true,

  state() {
    return {
      places: [],
    };
  },
  mutations: {
    SET_PLACES(state, places) {
      state.places = places;
    },
  },
  actions: {
    fetchPlaces({ commit }) {
      commit('SET_LOADING', true, { root: true });

      return new Promise((resolve, reject) => {
        api.get('/places.json')
          .then((response) => {
            commit('SET_PLACES', response.data.places);
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
    places: (state) => state.places,
  },
};

export default placesModule;
