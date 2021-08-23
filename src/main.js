import { createApp } from 'vue';
import loader from 'vue-ui-preloader';
import Toaster from '@meforma/vue-toaster';
import VueAxios from 'vue-axios';
import api from '@/config/axios';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import './assets/styles/app.scss';

import 'bootstrap';

const token = localStorage.getItem('token');
if (token) {
  store.dispatch('authorization/autologin', token);
}

createApp(App)
  .use(store)
  .use(router)
  .use(Toaster, {
    duration: 7000,
  })
  .use(loader)
  .use(VueAxios, api)
  .mount('#app');
