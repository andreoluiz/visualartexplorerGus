import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Importe o Vuex Store
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { router } from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/main.css';
library.add(faSearch);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(store) // Adicione o Vuex Store
  .mount('#app');

