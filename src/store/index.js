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
      let { data } = await Axios.get('https://gist.githubusercontent.com/LadyVamp/e5cba715273c26799cb3fad5ec656ba6/raw/a9c19c9892c7d665e07704bbfa9c710a6171ce49/hikes-08-25.json');
      context.commit('SET_HIKE', data.data);
    },
  },

});
