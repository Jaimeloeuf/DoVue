<template>
  <button @click="logout">Logout</button>
</template>

<script>
import firebase from "firebase";

export default {
  name: "LogoutBtn",
  methods: {
    logout: function() {
      // Signout the current user and redirect to login page afterwards.
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.replace({ name: "login" }));
    }
  }
};
</script>

<style scoped>
button {
  /* Style it to look like a button to undo the styles from private navbar */
  border: 1px solid grey;
  border-radius: 0.5em;
  padding-top: 0em;
}
</style>
