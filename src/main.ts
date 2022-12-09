import Vue from 'vue';
import Vuelidate from 'vuelidate';
import lodash from 'lodash';
import router from './router/router';
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify';
import App from './App.vue';
import store from './store/store';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(Vuelidate);

// this is massive on performance, I did this in order to
// support dynamic component load, may be optimized by loading 
// selected components that serves the form input only
Vue.use(Vuetify);

Vue.prototype.$_ = lodash;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
