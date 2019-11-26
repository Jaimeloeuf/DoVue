/*  @Doc
    This is the bar component at the bottom of the editor to allow user to manage the note.

    @Todo
    - Replace the words with icons instead.
        - Import the icons in one place and use the same one over and over again, instead of requesting from the server multiple times.
*/

<template>
  <div class="editor-bar">
    <span @click="archive_note">Archive</span>
    <span @click="delete_note">Delete</span>
    <span @click="close_note">Close</span>
  </div>
</template>

<script>
export default {
	name: "editorbar",
	props: ["note"],
	methods: {
		archive_note() {
			this.$props.note.archive = true;
		},
		delete_note() {},
		close_note() {}
	}
};
</script>

<style scoped>
.editor-bar {
  width: 100%;
  margin: 1em;
  margin-bottom: 0em;

  display: grid;
  /* grid-template-columns: repeat(3, auto); */
  grid-template-columns: auto auto auto;
  grid-template-rows: auto;

  /* grid-template-areas: "archive delete close"; */

  gap: 1em;
}

span {
  cursor: pointer;
}
</style>