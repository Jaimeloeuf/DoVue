/*  @Doc
    This is the text editor for the notes.

    @Todo
    - Fix the width of the editor to making it changeable based on width of the viewport.
    - On click, trigger a function that will change the route to the route of the note, and show the EditorModal with the selected note in it using props passed into the editor component.
    - Add line numbers to the editor and allow the user to toggle it on and off
*/

<template>
  <modal
    name="editor-modal"
    :adaptive="true"
    draggable=".window-header"
    height="80%"
    width="60%"
    @before-close="closeModal"
  >
    <div class="window-header">
      {{ note.id }}
      <br>
      <br>
    </div>
    <div class="editor">
      <input type="text" v-model="title" class="note-title" placeholder="Title">
      <br>
      <textarea v-autofocus v-model="note" class="note-text" placeholder="Take a note..."/>
      <br>
      <EditorBar class="editor-bar"/>
    </div>
  </modal>
</template>

<script>
import EditorBar from "@/components/EditorBar";

export default {
  name: "Editor",
  components: {
    EditorBar
  },
  mounted() {
    //   Show the modal once it is mounted onto the app
    this.$modal.show("editor-modal");
  },
  methods: {
    closeModal() {
      // @Todo Add a check for history to make sure that the previous route is still from DoVue
      // Close modal and go back to previously show page
      if (window.history.length > 1) this.$router.go(-1);
      // Show the default notes/all page if there is no previous view.
      // Applies to situation where the URL is bookmarked and opened directly
      else this.$router.replace({ name: "all-notes" });
    },
    closeNsaveNote() {
      /* Function to call to save the note and close the modal */
      /*    Call function to save the note
            Close server connection
            ^ Probs handled by the notes or data service.
            close the editor modal
        */
    }
  },
  props: {
    // The note id which is in the note param will be received as a prop instead
  },
  data() {
    return {
      title: "",
      note: ""
    };
  }
};
</script>

<style scoped>
.window-header {
  border: 1px solid #edf3fc;
  border-style: none none solid none;
}

.editor {
  /* Max width for the editor because 80 character word wraps
    Make word wrap customisable? User can set wrap. */
  max-width: 80em;
}

.note-title {
  /* Make the title input's width 100% relative to the modal */
  width: 100%;
  /* Remove border and focus highlighting */
  outline: none;
  border: 0px none;
  /* Make the text "float" in the middle */
  margin: 0.5em 0.5em 1em 0.5em;

  /* Change the font used to make it like roboto */

  font-weight: 400;
  font-size: 1.2em;
}

.note-text {
  /* Prevent user from resizing the text input area */
  resize: none;
  /* Make the textarea stretch out to fit fully into the modal's space */
  width: 100%;
  height: 60em;
  /* Remove border and focus highlighting */
  outline: none;
  border: 0px none;

  margin: 0.5em 0.5em 1em 0.5em;
  /* padding: 0.5em 0em 0em 0.5em; */
}

.editor-bar {
  position: absolute;
  bottom: 1em;
}

.v-modal-overlay[data-modal="editor-modal"] {
}
</style>+