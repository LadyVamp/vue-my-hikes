import axios from 'axios';

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
    /**
     * Как добавить новый поход
     * 1. отредактировать hikes-MM-DD.json в assets
     * 2. открыть gist.github.com/LadyVamp и перезаписать secret gist с заменой названия
     * 3. вставить в запрос Raw
     */
    fetchHikes(context, hikeId) {
      axios
        .get(
          'https://gist.githubusercontent.com/LadyVamp/e5cba715273c26799cb3fad5ec656ba6/raw/f5b91071933270e09bc0efcfda55e82db7e88113/hikes-2022-07-16.json',
        )
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
