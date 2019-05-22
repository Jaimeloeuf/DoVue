/*  @Doc
    View for user settings, accessible only when user is authenticated.

    @Todo
    - Perhaps build a settings service, to retrieve settings on startup, and to push changes back to server
*/

<template>
  <div class="settings-view">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view/>

    <!-- @Todo replace the way settings are displayed before. -->
    <!-- List all the individual settings -->
    <ul class="settings">
      <li v-for="setting of settings" v-bind:key="setting.id" @click="">{{ setting.description }}</li>
    </ul>

    <!-- @Todo Create a settings nav bar -->
    <!--Sections in the settings nav bar: 
        - General
        - Display
        - Feedback
     -->
  </div>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {};
  },
  methods: {
      save() {

      }
  }
};
</script>

<style scoped>
.settings-view {
  margin-top: 4em;
}
.settings {
  list-style-type: none;
}
.settings li {
  cursor: pointer;
}
</style>
