<template>
 <form @submit.prevent="login">
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" v-model="email" placeholder="Email" required><br>
    <input type="password" v-model="password" placeholder="Password" required><br>
     <div v-if="error.length">
      <div v-for="err in error" :key="err">
        <div>{{err}}</div>
      </div>
    </div>
    <div v-if="loadingMessage.length">
      <div v-for="loading in loadingMessage" :key="loading">
        <div>{{loading}}</div>
      </div>
    </div>
    <button type="submit">Connection</button>
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
      loadingMessage: [],
      error: []
    };
  },
  methods: {
    login() {
      this.loadingMessage = [],
      this.error = []
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(function() {
        this.loadingMessage.push('well done, you are connected!')
        setTimeout(function() {
          this.$router.replace('home')
        }.bind(this), 1000)
      }.bind(this))
      .catch(function(err) {
        this.error.push(err)
      }.bind(this)) 
    }
  }
}

</script>

<style scoped lang="scss">
.login {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
