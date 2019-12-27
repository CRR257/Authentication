<template>
  <div class="home">
    <p>Home</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'home',
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login');
      });
    }
  }
}
</script>
