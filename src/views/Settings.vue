/*  @Doc
    View for user settings, accessible only when user is authenticated.

    Each section of settings is its own div.
    Browser hash location strategy


    Build like generic input components to use.
    So like a slider selector that has its value from props received.

    @Todo
    - Build a settings service, to retrieve settings on startup, and to push changes back to server
*/

<template>
  <div class="settings-view">
    <sideBar class="sideBar"/>


    <div class="settings">
      <li>Set username</li>
    </div>


    <div class="settings note">
      <li>Draggable window</li>
      <li>editor as modal or editor as a component?</li>
    </div>

    <div class="settings email">
      <li>Update email</li>
      <li>Add backup email</li>
    </div>

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

.settings {
    margin: 1em;
}
</style>
