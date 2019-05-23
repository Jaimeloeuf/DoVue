/*  @Doc
    Navigation bar when user is authenticated.
    Shown in the Notes view for now.

    @Todo
    - Finish building the modal componanent and put it into an individual component.
*/

<template>
  <div id="nav">
    <a href="/#/notes">
      <img src="@/assets/logo.png" alt="DoVue logo">
    </a>
    <router-link :to="{name: 'all-notes'}">Notes</router-link>&nbsp;|
    <SearchBox/>

    <div class="float-right">
      <router-link :to="{name: 'help-modal'}">Help</router-link>&nbsp;|
      <router-link :to="{name: 'about-modal'}">About</router-link>&nbsp;|
      <router-link :to="{name: 'contact-modal'}">Contact Us</router-link>&nbsp;|
      <LogoutBtn/>
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
    SearchBox,
    LogoutBtn
  }
};
</script>

<style scoped>
#nav {
  text-align: left;
}

img {
  max-width: 0.9em;
  margin-right: 1em;
}

a {
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
