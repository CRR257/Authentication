import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import router from '../router/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
    error: null,
    loading: false,
    // admin: false
  },
  getters: {},
  mutations: {
    setUser (state, payload) {
      state.user = payload;
    },
    setError (state, payload) {
      state.error = payload;
    },
    setLoading (state, payload) {
      state.loading = payload;
    },
    // setAdmin (state, payload) {
    //   state.admin = payload;
    // },
  },
  actions: {
    userSignUp ({commit}, payload) {
       commit('setLoading', true);
       firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
       .then(firebaseUser => {
        
        commit('setUser', {email: firebaseUser.user.email});
        commit('setLoading', false);
        router.push('/home');
       })
       .catch(error => {
        commit('setError', error.message);
        commit('setLoading', false);
       })
     },
     userSignIn ({commit}, payload) {
      commit('setLoading', true)
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(firebaseUser => {
        commit('setUser', {email: firebaseUser.user.email});
        commit('setLoading', false);
        commit('setError', null);
        // if(firebaseUser.user.email === 'admin@gmail.com') {
        //   commit('setAdmin', true)
        //   router.push('/admin')
        // }
        router.push('/home')
      })
      .catch(error => {
        commit('setError', error.message);
        commit('setLoading', false);
      })
    }
   },
});