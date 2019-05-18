/*  @Doc
    Navigation bar for when the user is unauthenticated.
*/

<template>
  <div id="nav">
    <a href="/#/about">
      <img src="@/assets/logo.png" alt="DoVue logo">
    </a>
    <router-link to="/about">About</router-link>&nbsp;|
    <router-link to="/login">Login</router-link>&nbsp;|
    <router-link to="/sign-up">Signup</router-link>
    <hr>
  </div>
</template>

<script>
export default {
  name: "PublicNavbar"
};
</script>

<style scoped>
#nav {
  margin: 1em;
  margin-top: 0em;
  text-align: left;
}

img {
  max-width: 0.9em;
  margin-right: 1em;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #018e2b;
}
</style>
