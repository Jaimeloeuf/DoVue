/*  @Doc
    This is the User view, which is the one the user is presented with upon logging in.
    It is a enclosing view, meaning that it encloses other views that the user is able to access.

    @Todo
*/

<template>
  <div class="notes-view">
    <!-- Router view for displaying modals via Routes -->
    <router-view name="modal"/>

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
