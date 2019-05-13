// LogoutBtn.vue

<template>
  <button @click="logout">Logout</button>
</template>

<script>
export default {
  methods: {
    name: "LogoutBtn",
    logout: function() {
      // Signout the current user and redirect to login page afterwards.
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.replace("login"));
    }
  }
};
</script>

<style scoped>
</style>
