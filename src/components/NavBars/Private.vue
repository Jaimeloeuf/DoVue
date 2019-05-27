/*  @Doc
    Navigation bar when user is authenticated.
    Shown in the Notes view for now.
*/

<template>
  <div id="nav">
    <a href="/#/notes">
      <img src="@/assets/logo.png" alt="DoVue logo">
    </a>
    <router-link :to="{name: 'all-notes'}">Notes</router-link>&nbsp;|
    <SearchBox/>

    <div class="float-right">
      <button @click="$modal.show('HelpModal')">Help</button>&nbsp;|
      <button @click="$modal.show('AboutModal')">About</button>&nbsp;|
      <button>Contact Us</button>&nbsp;|
      <LogoutBtn/>
    </div>
    <hr>
    <!-- Below are all the modals that the user can select -->
    <AboutModal/>
    <HelpModal/>
  </div>
</template>

<script>
import AboutModal from "@/components/Modals/AboutModal.vue";
import HelpModal from "@/components/Modals/HelpModal.vue";
import LogoutBtn from "@/components/LogoutBtn.vue";
import SearchBox from "@/components/SearchBox.vue";

export default {
  name: "NotesNavbar",
  components: {
    SearchBox,
    LogoutBtn,
    AboutModal,
    HelpModal
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
