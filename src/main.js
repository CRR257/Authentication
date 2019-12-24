import Vue from 'vue';
import App from './App.vue';
import router from './router';
import * as firebase from 'firebase';
import { firebaseConfig } from './services/firebase.js';

// https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c
Vue.config.productionTip = false

let app = '';
firebase.default.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});
