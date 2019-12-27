<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/sign-up">Sign up</router-link>
    </nav>
  </header>
</template>

<script>
import Firebase from "firebase";

export default {
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    signOut: function() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.$router.replace('login');
        });
    }
  }
};
</script>

<style lang="scss">
nav {
  padding: 70px 0 20px 0;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
header {
  border-bottom: 1px solid black;
  display: flex;
}
</style>