/*  @Doc
    Navigation bar when user is authenticated.
    Shown in the Notes view for now.
*/

<template>
  <div id="nav">
    <a href="/#/about">
      <img src="@/assets/logo.png" alt="DoVue logo">
    </a>
    <router-link to="/notes">Notes</router-link>&nbsp;|
    <SearchBox/>

    <div class="float-right">
      <LogoutBtn/>&nbsp;|
      <router-link to="/help">Help</router-link>&nbsp;|
      <router-link to="/about">About</router-link>&nbsp;|
    </div>
    <hr>
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

.float-right {
    display: inline;
    float: right;
}
</style>
