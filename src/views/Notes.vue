/*

    @Todo
    - Include a check if there is any notes. If there is no notes yet include a tutorial thing to help user get started.
*/

<template>
  <div class="notes">
    <img alt="Vue logo" src="@/assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <button @click="logout">Logout</button>

    <ul>
      <li v-for="note of notes" v-bind:key="note.text">{{ note.text }}</li>
    </ul>
  </div>
</template>

<script>
import firebase, { functions } from "firebase";

import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "notes",
  //   components: {
  //     HelloWorld
  //   },
  data() {
    return {
      notes: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" }
      ]
    };
  },
  methods: {
    logout: function() {
      // Signout the current user and redirect to login page afterwards.
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.replace("login"));
    }
  }
};
</script>

<style scoped>
</style>
