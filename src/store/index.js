import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

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
    GET_HIKE: (context, payload) => {
      axios
        .get('https://gist.githubusercontent.com/LadyVamp/e5cba715273c26799cb3fad5ec656ba6/raw/fd95834f3ee83d5c659699f024bef8c9d245d37d/hikes-08-25.json')
        .then(response => {
          // console.log(response);
          // добавляет к каждому объекту поле dates в формате DD.MM-DD.MM.YYYY
          response.data.hikes = response.data.hikes.map(obj => ({ ...obj, dates: obj.date_start.split('-').reverse().join('.').slice(0, 5) + '-' + obj.date_end.split('-').reverse().join('.') }));
          context.commit('SET_HIKE', response.data.hikes);
        }).catch(error => {
          console.error(error.message);
        });
    },
  },

});
