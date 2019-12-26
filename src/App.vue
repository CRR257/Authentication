<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/sign-up">Sign up</router-link>
    </div>
    <router-view/>
  </div> -->
  <main id="app">
    <div class="container">
      <nav-main></nav-main>
      <router-view></router-view>
    </div>
  </main>
</template>

<script>

import Header from './components/Header.vue';

export default {
  components: {
    navMain: Header
  },
  methods: {
    setUser: function() {
      this.$store.dispatch('setUser');
    }
  },
  created() {
    /* when the app is created run the set user method
    this uses Vuex to check if a user is signed in
    check out mutations in the store.js file */
    this.setUser();
  }
};
</script>



<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  max-width: 80%;
  margin: 0 auto;
}

</style>
