/*  @Doc
    This is the component for individual notes.
    It can be viewed as individual blocks that can be stacked together
    This will enclose the data in the notes and also the hold the link
    to open when the note is clicked.

    @Todo
    - Add a Make the notes-block to be fixed widths
        - It should have 2 fixed widths, depending on the width of the display.
    - Render new lines too! In the editor, the notes is shown as per normal, but in this component, the newlines becomes spaces.
*/

<template>
  <li class="note">
    <!-- Pass note.id to open up note in editor. Only the notes part is clickable. NoteBar is not included. -->
    <div class="clickable" @click="openNote(note.id)">
      <p class="note-title">{{ note.title }}</p>
      <div class="note-text">
        <!-- Splice the string if more than 100 characters -->
        <p>{{ (note.text.length > 100) ? `${note.text.substr(0, 100)} ...` : note.text }}</p>
      </div>
    </div>

    <tags :tags="note.tags"/>
    <NoteBar/>
  </li>
</template>

<script>
import NoteBar from "@/components/MenuBars/note_management.vue";
import tags from "@/components/MenuBars/tags.vue";

export default {
  name: "note",
  components: {
    NoteBar,
    tags
  },
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  methods: {
    openNote(id) {
      /* Method to open a note using the note's id */
      this.$router.push({ name: "note-editor", params: { id } });
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
  /* @Todo set the height of the component */
  width: 12em;
  text-align: left;

  /* @Todo build the hover effect in */
}

.clickable {
  cursor: default;
}

.note-title {
  font-size: 1.1em;
  font-weight: 600;
  color: #545456;

  padding: 0em;
  margin: 0em;
  margin-top: 0.4em;
}

.note-text {
}
</style>