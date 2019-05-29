/*  @Doc
    This is the text editor for the notes.

    @Todo
    - Make all the li items for individaul notes work the same way as a button
    - On click, trigger a function that will change the route to the route of the note, and show the EditorModal with the selected note in it using props passed into the editor component.
*/

<template>
  <modal
    name="editor-modal"
    :adaptive="true"
    height="auto"
    width="60%"
    :scrollable="true"
    @before-close="beforeclose"
  >
    <div class="editor">
      <input type="text" v-model="title" placeholder="Title">
      <br>
      <textarea v-autofocus v-model="note" placeholder="Take a note here..." cols="30" rows="10"/>
      <br>

      <p>no</p>

      <!-- @Todo Create a new editor bar component -->
      <button @click="closeNsaveNote">Close</button>
    </div>
  </modal>
</template>

<script>
export default {
  name: "Editor",

  mounted() {
    //   Show the modal once it is mounted onto the app
    this.$modal.show("editor-modal");
  },
  methods: {
    beforeclose() {
      // @Todo Add a check for history to make sure that the previous route is still from DoVue
      // Close modal and go back to previously show page
      if (window.history.length > 1) this.$router.go(-1);
      // Show the default notes/all page if there is no previous view.
      // Applies to situation where the URL is bookmarked and opened directly
      else this.$router.replace({ name: "all-notes" });
    },
    closeNsaveNote() {
      // Close the connection and close the editor
    }
  },
  //   props: {},
  data() {
    return {
      title: "test",
      note: "test"
    };
  }
};
</script>

<style>
</style>
