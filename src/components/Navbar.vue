/*  @Doc
    Navigation bar. Bar's item changes according to the current view and user's auth status.

    @Todo
    - Wrap the router links in v-directives to make them seen and hidden depending on the data
    - Create a auth observer just like the one in App.vue to change the the logged_in bool
*/

<template>
  <div id="nav">
    <router-link to="/about">About</router-link>&nbsp;|
    <router-link to="/login">Login</router-link>&nbsp;|
    <router-link to="/sign-up">Signup</router-link>
  </div>
</template>

<script>
import LogoutBtn from "@/components/LogoutBtn.vue";

export default {
  name: "PublicNavbar",
  components: {
      LogoutBtn
  },
  data() {
      return {
          // Auth status is logged out by default
          logged_in: false
      }
  },
  methods: {
      auth_status: function() {
        
      }
  }
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
