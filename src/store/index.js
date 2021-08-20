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
      // let { data } = await Axios.get('https://gist.githubusercontent.com/LadyVamp/c2c7f218a07c7a457fb5f56dc922e24f/raw/dd187968dc1197db2a1df46bc1071c32adfe4929/my-hikes-08-21');
      let { data } = await Axios.get('https://gist.githubusercontent.com/LadyVamp/90e12c5a4d20b251ba7f70fe2aeb405b/raw/602b8c25810875886367968acd677432404f453d/my-hikes-08-21-v2');
      context.commit('SET_HIKE', data.data);
    },
  },

});
