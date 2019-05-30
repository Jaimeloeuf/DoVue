/*  @Doc
    Enclosing view for all views that filter notes.
    This is also the default view upon logging in.

    @Todo
*/

<template>
  <div class="notes-view">
    <router-view name="editor"/>

    <!-- Default Router view for notes -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Notes"
};
</script>

<style scoped>
.notes-view {
  margin-top: 4em;
}
</style>
