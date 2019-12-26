<template>
  <div class="home">
    <p>Admin</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'admin',
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        localStorage.clear();
        this.$router.replace('login');
      });
    }
  }
}
</script>
