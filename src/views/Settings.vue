/*  @Doc
    View for user settings, accessible only when user is authenticated.

    @Todo
    - Build a settings service, to retrieve settings on startup, and to push changes back to server
*/

<template>
  <div class="settings-view">
    <sideBar class="sideBar"/>

    <!-- @Todo replace the way settings are displayed before. -->
    <!-- List all the individual settings -->
    <ul class="settings">
      <li v-for="setting of settings" v-bind:key="setting.id" @click>{{ setting.description }}</li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
import sideBar from "@/components/NavBars/Settings.vue";

export default {
  name: "Settings",
  components: {
    sideBar
  },
  data() {
    return {};
  },
  methods: {
    save() {}
  }
};
</script>

<style scoped>
.settings-view {
  margin-top: 4em;
}

.sideBar {
    float: left;
}
</style>
