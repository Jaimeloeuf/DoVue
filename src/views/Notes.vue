/*  @Doc

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
