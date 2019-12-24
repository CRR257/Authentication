<template>
 <form @submit.prevent="signUp">
  <div class="sign-up">
     <h3>Sign Up!</h3>
    <input type="text" v-model="email" placeholder="Email" required><br>
    <input type="password" v-model="password" placeholder="Password" required><br>
    <input type="password" v-model="confirmPassword" placeholder="Confirm Password" required><br>
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
    <button type="submit">Sign Up</button>
    <span>or go back to <router-link to="/login">login</router-link></span>
  </div>
 </form>
</template>

 <script>
import firebase from 'firebase';

  export default {
    name: 'signUp',
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        error: [],
        loadingMessage: [],
      }
    },
    methods: {
      signUp() {
        this.error = [],
        this.loadingMessage = []
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(function(){
          if (this.password !== this.confirmPassword) {
            this.error.push('Passwords do not match');
          } else {
            this.loadingMessage.push('well done, you are connected!')
            setTimeout(function() {
              this.$router.replace('home')
            }.bind(this), 1000)
          }
        }.bind(this)) 
        .catch(function(err) {
          this.error.push(err.message)
        }.bind(this)) 
      }
    }
  }

</script>

 <style scoped>
  .sign-up {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }
</style>

