/*  @Doc
    Navigation bar when user is authenticated.

    @Todo
    - Make the design of the button for help and about modal consistent with the other router-links
        - Give the active CSS class to the buttons when they are clicked too.
    - Implement the contact us view.
*/

<template>
  <div id="nav">
    <router-link :to="{name: 'user-home'}">
      <img src="@/assets/logo.png" alt="DoVue logo">
    </router-link>
    <router-link :to="{name: 'all-notes'}">Notes</router-link>&nbsp;|
    <SearchBox/>

    <div class="float-right">
      <router-link :to="{name: 'settings'}">Settings</router-link>&nbsp;|
      <button @click="$modal.show('HelpModal')">Help</button>&nbsp;|
      <button @click="$modal.show('AboutModal')">About</button>&nbsp;|
      <router-link :to="{name: 'contact-private'}">Contact Us</router-link>&nbsp;|
      <LogoutBtn/>
    </div>
    <hr>
    <!-- Below are all modals the user can open -->
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
  },
  beforeCreate() {
    // @Todo Debug statement to prevent navbar from being always re-rendered
    console.log("navbar created");
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

/* The links and buttons share the same styles for consistency */
a,
button {
  font-weight: bold;
  color: #33506d;
  text-decoration: none;
}

/* Same active color for both the buttons and links */
#nav a.router-link-exact-active,
button:focus {
  color: #018e2b;
}

button {
  /* Style the buttons to look like <a> tags to make navbar consistent */
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1em;

  /* Remove outline when button is clicked */
  outline: none;
}

.float-right {
  display: inline;
  float: right;
}
</style>
