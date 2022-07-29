import { getAllHikes } from '../api/api';

export default {
  state: {
    hikes: [],
    currentHike: null,
  },
  mutations: {
    setHikes: (state, payload) => {
      state.hikes = payload;
    },
    setCurrentHike(state, payload) {
      state.currentHike = payload;
    },
  },
  getters: {
    getAllHikes: (state) => {
      return state.hikes;
    },
    getCurrentHike(state) {
      return state.currentHike;
    },
  },
  actions: {
    fetchHikes(context, hikeId) {
        getAllHikes()
        .then((response) => {
          // console.log(response);
          // добавляет к каждому объекту поле dates в формате DD.MM-DD.MM.YYYY
          const hikes = response.data.hikes.map((obj) => ({
            ...obj,
            dates:
              obj.date_start
                .split('-')
                .reverse()
                .join('.')
                .slice(0, 5) +
              '-' +
              obj.date_end
                .split('-')
                .reverse()
                .join('.'),
          }));
          context.commit('setHikes', hikes);
          if (hikeId) {
            context.commit(
              'setCurrentHike',
              hikes.find((item) => item.id === hikeId),
            );
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
  },
};
