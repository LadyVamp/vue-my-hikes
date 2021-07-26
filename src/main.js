import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueFriendlyIframe from 'vue-friendly-iframe';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueFriendlyIframe);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
