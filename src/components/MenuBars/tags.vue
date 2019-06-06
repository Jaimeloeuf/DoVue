/*  @Doc
    This is the bar at the bottom of a note to display the tags the particular note has.
    A list type of tags prop will be received to display.
    This component is used in both the Note component and the editor component.

    @Todo
    - Make the note clickable to route user to the Notes view with the selected tag
*/

<template>
  <div v-if="tags && tags.length">
    <!-- <router-link v-for="tag of tags" v-bind:key="tag.id" class="tag"></router-link> -->
    <div v-for="tag in tags" v-bind:key="tag" class="tag">
      <span>{{ tag }}</span>
      <!-- &times; is the cross button for removing the tag from that note -->
      <span>&times;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tags_bar",
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