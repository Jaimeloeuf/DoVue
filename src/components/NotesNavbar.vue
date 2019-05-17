/*  @Doc
    Navigation bar when user is authenticated.
    Shown in the Notes view for now.
*/

<template>
  <div id="nav">
    <!-- @Todo Make the logo smaller -->
    <img alt="Vue logo" src="@/assets/logo.png">
    <router-link to="/about">About</router-link>&nbsp;|
    <router-link to="/help">Help</router-link>&nbsp;|
    <LogoutBtn/>
    <SearchBox/>
  </div>
</template>

<script>
import LogoutBtn from "@/components/LogoutBtn.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "NotesNavbar",
  components: {
    LogoutBtn,
    SearchBox
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
