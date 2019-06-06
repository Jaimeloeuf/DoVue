/*  @Doc
    This is the text editor for the notes.

    @Todo
    - On click, trigger a function that will change the route to the route of the note, and show the EditorModal with the selected note in it using props passed into the editor component.
    - Add line numbers to the editor and allow the user to toggle it on and off
    - Add a little "last edited date" at the bottom right corner of the editor
*/

<template>
  <div class="editor">
    <!-- {{ id ? id : 'undefined!!' }} -->
    <textarea v-model="note.title" class="note-title" placeholder="Title"/>
    <br>
    <textarea v-autofocus v-model="note.text" class="note-text" placeholder="Take a note..."/>
    <br>
    <Tags/>
    <EditorBar class="editor-bar"/>
  </div>
</template>

<script>
import EditorBar from "@/components/MenuBars/EditorBar.vue";

export default {
  name: "Editor",
  components: {
    EditorBar
  },
  props: ["note"]
  /*@Notes
    Since Editor component is just a UI component now, the note it edits / opens is passed in as a prop instead.
    Instead of the old way of getting the id from the route to retrieve the note from the store.
    
    props: {
      id: {
        type: Number,
        required: true
      }
    },
    computed: {
      note() {
        const { id } = this.$props;
        return this.$store.getters.noteByID(id);
      }
    } */
};
</script>

<style scoped>
.editor {
  /* Max width for the editor because 80 character word wraps
    Make word wrap customisable? User can set wrap. */
  max-width: 80em;
}

.note-title {
  /* Prevent user from resizing the text input area */
  resize: none;
  /* Make the textarea stretch out to fit fully into the modal's space */
  width: 100%;

  /* @Todo how to make the box itself enlarge instead of scrolling? */

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
  /* Make the text "float" in the middle */
  margin: 0.5em 0.5em 1em 0.5em;
}

.editor-bar {
  position: absolute;
  bottom: 1em;
}
</style>+