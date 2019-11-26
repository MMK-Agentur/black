// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import BootstrapVue from 'bootstrap-vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueWindowSize from 'vue-window-size';
import cookieconsent from 'vue-cookieconsent-component';

require ('../static/assets/css/core.css');
require ('../static/assets/css/core-extended.css');

require('../static/assets/css/pagination.css');
require('../static/assets/css/app.css');
require('../static/assets/css/cookie.css');

config.autoAddCss = false;
library.add(fas);

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  head.meta.push({
    name: 'viewport',
    content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
  });


  Vue.component('Layout', DefaultLayout);
  Vue.component('font-awesome', FontAwesomeIcon);
  Vue.component('font-awesome-icon', FontAwesomeIcon);
  Vue.component('cookie-consent', cookieconsent)
  Vue.use(VueWindowSize);
  Vue.use(BootstrapVue);

}
