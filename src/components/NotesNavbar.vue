/*  @Doc
    Navigation bar when user is authenticated.
    Shown in the Notes view for now.
*/

<template>
  <div id="nav">
    <router-link to="/about">About</router-link>&nbsp;|
    <router-link to="/help">Help</router-link>&nbsp;|
    <LogoutBtn/>
  </div>
</template>

<script>
import LogoutBtn from "@/components/LogoutBtn.vue";

export default {
  name: "NotesNavbar",
  components: {
      LogoutBtn
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
