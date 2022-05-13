import Vue from 'vue';
import Vuelidate from 'vuelidate';
import lodash from 'lodash';
import router from './router/router';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import store from './store/store';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(Vuelidate);

Vue.prototype.$_ = lodash;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
