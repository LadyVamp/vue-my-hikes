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
	/**
	 * Как добавить новый поход
	 * 1. отредактировать hikes-MM-DD.json в assets
	 * 2. открыть gist.github.com/LadyVamp и перезаписать secret gist с заменой названия
	 * 3. вставить в запрос Raw
	 */
    GET_HIKE: (context, payload) => {
      axios
        .get('https://gist.githubusercontent.com/LadyVamp/e5cba715273c26799cb3fad5ec656ba6/raw/6929de640c6a28b962274e3c8a876d10d47acedf/hikes-10-11.json')
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
