<template>
  <div class="editor-bar">
    <span class="archive" @click="closeNsaveNote">Archive</span>&nbsp;
    <span class="delete" @click="closeNsaveNote">Delete</span>&nbsp;
    <span class="close" @click="closeNsaveNote">Close</span>
  </div>
</template>

<script>
export default {
  name: "editorbar"
};
</script>

<style scoped>
.editor-bar {
  margin: 1em;
}

.close {
}
</style>