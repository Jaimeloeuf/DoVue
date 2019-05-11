/*  @Doc
    Navigation bar for when the user is unauthenticated.
*/

<template>
  <div id="nav">
    <router-link to="/about">About</router-link>&nbsp;|
    <router-link to="/login">Login</router-link>&nbsp;|
    <router-link to="/sign-up">Signup</router-link>
  </div>
</template>

<script>
export default {
  name: "PublicNavbar"
};
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
