import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

import ru from 'vuetify/lib/locale/ru';

export default new Vuetify({
  theme: {
    themes: {
      // https://colorscheme.ru/#2P31ToblOw0w0
      light: {
        primary: '#228B22',
        secondary: '#AE662B',
        accent: '#8B225E',
        error: '#b71c1c',
      },
    },
  },
  lang: {
    locales: { ru },
    current: 'ru',
  },
});
