/*  @Doc
    This is the bar at the bottom of a note to display the tags the particular note has.
    A list type of tags prop will be received to display

    @Todo
*/

<template>
  <div v-if="tags && tags.length">
    <!-- <router-link v-for="tag of tags" v-bind:key="tag.id" class="tag"></router-link> -->
    <p v-for="tag in tags" v-bind:key="tag.id" class="tag">{{ tag }}</p>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["tags"]
};
</script>

<style scoped>
.tag {
  display: inline;
  border: 1px solid grey;
  border-radius: 0.5em;

  padding: 0.2em 0.5em;
  margin-right: 0.5em;

  cursor: pointer;
}
</style>