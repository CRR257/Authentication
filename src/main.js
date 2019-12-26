import Vue from 'vue';
import App from './App.vue';
import router from './router';
import * as firebase from 'firebase';
import { firebaseConfig } from './services/firebase.js';
import VueRouter from 'vue-router';
import { store } from './store/store.js';

Vue.config.productionTip = false;
Vue.use(VueRouter);

let app = '';
firebase.default.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});

