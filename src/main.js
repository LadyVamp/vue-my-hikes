import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueMeta from 'vue-meta';
import { store } from './store';
import VueYandexMetrika from 'vue-yandex-metrika';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueMeta);
Vue.use(VueYandexMetrika, {
	id: 84106609,
	router: router,
	env: process.env.NODE_ENV,
	clickmap: true,
	trackLinks: true,
	accurateTrackBounce: true,
	webvisor: true
})

new Vue({
	store,
	router,
	vuetify,
	render: (h) => h(App),
}).$mount('#app');
