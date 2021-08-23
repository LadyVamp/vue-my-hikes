import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    hikes: null,
  },

  getters: {
    HIKES: state => {
      return state.hikes;
    },
  },

  mutations: {
    SET_HIKE: (state, payload) => {
      state.hikes = payload;
    },
  },

  actions: {
    GET_HIKE: async (context, payload) => {
      let { data } = await Axios.get('https://gist.githubusercontent.com/LadyVamp/90e12c5a4d20b251ba7f70fe2aeb405b/raw/05a22903ea49285e97ea0cc035759cecb7a3695c/hikes-08-23');
      context.commit('SET_HIKE', data.data);
    },
  },

});
