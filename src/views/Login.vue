<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" placeholder="Email">
    <br>
    <input type="password" placeholder="Password">
    <br>
    <button>Login!</button>
    <!-- @Todo fix the create new account link -->
    <p>
      Don't have an account yet? Create
      <a href="#">here</a> now!
    </p>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
</style>
