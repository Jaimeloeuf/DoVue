/*  @Doc
    This is the bar component displayed at the bottom of the Note component.
    This bar component holds the component for things like deleting the note and more

*/

<template>
  <!-- @Todo Create a new note option component. With things like delete note / pin note buttons -->
  <!-- Upon clicking x to delete the note, event will be emitted for notes service to catch -->
  <span @click="$emit('remove', note.id)">&times;</span>
</template>

<script>
export default {};
</script>

<style scoped>
</style>