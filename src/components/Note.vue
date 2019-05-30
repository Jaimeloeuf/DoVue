/*  @Doc
    This is the component for individual notes.
    It can be viewed as individual blocks that can be stacked together
    This will enclose the data in the notes and also the hold the link
    to open when the note is clicked.

    @Todo
    - Add a Make the notes-block to be fixed widths
        - It should have 2 fixed widths, depending on the width of the display.
*/

<template>
  <li class="note">
    <p class="note-title">{{ note.title }}</p>
    <div class="note-text">
      <!-- Splice the string if more than 100 characters -->
      <p>{{ (note.text.length > 100) ? `${note.text.substr(0, 100)} ...` : note.text }}</p>
    </div>

    <!-- @Todo Create a new note option component. With things like delete note / pin note buttons -->
    <!-- Upon clicking x to delete the note, event will be emitted for notes service to catch -->
    <span @click="$emit('remove', note.id)">&times;</span>
  </li>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.note {
  /* @Todo This can be dynamically changed just like in keep where users can choose to view in blocks or list */
  display: inline-block;
  border: 1px solid #d7dee8;
  border-radius: 0.8em;
  padding: 0.5em;
  margin: 0.5em;
  width: 12em;
  cursor: default;
  /* @Todo build the hover effect in */
}

.note-title {
  font-size: 1.1em;
  font-weight: 500;
  color: #545456;
  text-align: left;
  padding: 0em;
  margin: 0em;
  margin-top: 0.4em;
}

.note-text {
}
</style>