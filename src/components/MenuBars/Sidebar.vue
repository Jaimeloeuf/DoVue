/*  @Doc
    This sidebar component is for use in the notes view.
    This sidebar will hold display all the different tags and archived + trash
*/

<template>
  <div></div>
</template>

<script>
export default {
	name: "sidebar",
	computed: {
		// Get the list of tags from Store?
		// Create a init function that runs at the start of the program to populate vuex store after app is initialized
		tags() {
			this.$store.tags;
		}
	}
};
</script>

<style scoped>
</style>