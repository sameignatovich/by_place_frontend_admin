import { createApp } from 'vue';
import loader from 'vue-ui-preloader';
import Toaster from '@meforma/vue-toaster';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import './assets/styles/app.scss';

import 'bootstrap';

const token = localStorage.getItem('token');
if (token) {
  store.dispatch('user/autologin', token);
}

createApp(App)
  .use(store)
  .use(router)
  .use(Toaster)
  .use(loader)
  .mount('#app');
