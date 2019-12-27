<template>
 <form @submit.prevent="userSignIn">
  <div class="container">
    <h3>Sign In</h3>
    <input type="text" v-model="email" placeholder="Email" required><br>
    <input type="password" v-model="password" placeholder="Password" required><br>
    <v-alert type="error" class="error" dismissible v-model="alert" v-if="alert">
      {{ error }}
    </v-alert>
    <button type="submit">Submit</button>
    <p>You don't have an account? You can <router-link to="/sign-up">
      create one</router-link></p>
  </div>
 </form>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      alert: false,
    };
  },
  methods: {
    userSignIn () {
      this.$store.dispatch('userSignIn', { email: this.email, password: this.password })
    }
  },
  computed: {
    error () {
      return this.$store.state.error
    },
    loading () {
      return this.$store.state.loading
    }
  },
  watch: {
    error (value) {
      if (value) {
        this.alert = true
      }
    },
    alert (value) {
      if (!value) {
        this.$store.commit('setError', null)
      }
    }
  }
}

</script>

<style scoped lang="scss">

@import "../styles/_variables.scss";

</style>
