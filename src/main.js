// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import BootstrapVue from 'bootstrap-vue';

require ('bootstrap/dist/css/bootstrap.css');
import 'bootstrap-vue/dist/bootstrap-vue.css';
require ('../static/assets/css/core.css');
require ('../static/assets/css/core-extended.css');

require('../static/assets/css/pagination.css');
require('../static/assets/css/app.css');
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(BootstrapVue);

}
