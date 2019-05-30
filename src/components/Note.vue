/*  @Doc
    This is the component for individual notes.
    It can be viewed as individual blocks that can be stacked together
    This will enclose the data in the notes and also the hold the link
    to open when the note is clicked.

    @Todo
    - Add a Make the notes-block to be fixed widths
        - It should have 2 fixed widths, depending on the width of the display.
    - Add a check, to only display e.g. up to 100 characters of each note, to prevent it from being too vertically long
*/

<template>
  <li>
      <!-- Display the text of the note -->
    {{ note.text }}

    <!-- @Todo Create a new note option component. With things like delete note / pin note buttons -->
    <!-- Upon clicking x to delete the note, event will be emitted for notes service to catch -->
    <button @click="$emit('remove', note.id)">X</button>
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