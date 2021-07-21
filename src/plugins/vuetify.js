import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            // primary: '#3f51b5',
            // secondary: '#b0bec5',
            // accent: '#8c9eff',
            // error: '#b71c1c',

            // https://colorscheme.ru/#2P31ToblOw0w0
            primary: '#228B22',
            secondary: '#AE662B',
            accent: '#8B225E',
            error: '#b71c1c',
          },
        },
      },
});
