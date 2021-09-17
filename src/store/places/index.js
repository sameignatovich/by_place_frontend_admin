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
    ADD_PLACE(state, place) {
      state.places.push(place);
    },
    DELETE_PLACE(state, placeId) {
      state.places.splice(state.places.findIndex((i) => i.id === placeId), 1);
    },
  },
  actions: {
    fetchPlaces({ commit }) {
      return new Promise((resolve, reject) => {
        api.get('/places.json')
          .then((response) => {
            commit('SET_PLACES', response.data.places);

            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    newPlace({ commit }, placeData) {
      return new Promise((resolve, reject) => {
        api.post('/places.json', placeData)
          .then((response) => {
            commit('ADD_PLACE', response.data.place);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    deletePlace({ commit }, placeId) {
      return new Promise((resolve, reject) => {
        api.delete(`/places/${placeId}.json`)
          .then((response) => {
            commit('DELETE_PLACE', placeId);
            resolve(response);
          })
          .catch((error) => {
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
