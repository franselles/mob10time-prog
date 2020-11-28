import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import axios from 'axios';
import VueAxios from 'vue-axios';

import './../node_modules/bulma/css/bulma.min.css';

//const baseURL = 'http://localhost:8080/api/';
const baseURL = '/api/';

axios.defaults.baseURL = baseURL;
axios.defaults.json = true;
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
