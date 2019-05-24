<template>
  <button @click="logout">Logout</button>
</template>

<script>
import firebase, { functions } from "firebase";

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
</style>
