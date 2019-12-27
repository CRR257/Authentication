<template>
 <form @submit.prevent="userSignUp">
  <div class="container">
     <h3>Sign Up!</h3>
    <input type="text" v-model="name" placeholder="Name" required><br>
    <input type="text" v-model="email" placeholder="Email" required><br>
    <input type="password" v-model="password" placeholder="Password" required><br>
    <input type="password" v-model="passwordConfirm" :rules="[comparePasswords]" placeholder="Confirm Password" required><br>
    <v-alert type="error" class="error" dismissible v-model="alert" v-if="alert">
      {{ error }}
    </v-alert>
    <button type="submit" :disabled="loading">Submit</button>
    <p>or go back to <router-link to="/login">login</router-link></p>
  </div>
 </form>
</template>

 <script>
import firebase from 'firebase';

  export default {
    name: 'signUp',
    data() {
      return {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        alert: false,
      }
    },
    methods: {
      userSignUp() {
        if (this.comparePasswords !== true) {
          // just stop execution of the function by calling return
          return
        }
        this.$store.dispatch('userSignUp', { email: this.email, password: this.password })
      }
    },
    computed: {
      comparePasswords () {
        return this.password === this.passwordConfirm ? true : 'Passwords don\'t match'
      },
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

