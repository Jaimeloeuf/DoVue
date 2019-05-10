<template>
  <div class="notes">
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase, { functions } from "firebase";

// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "notes",
  components: {
    HelloWorld
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
