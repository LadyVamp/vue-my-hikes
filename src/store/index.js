import Vue from 'vue';
import Vuex from 'vuex';
import hikeModule from '@/store/hikeModule';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    hikeModule,
  },
});
