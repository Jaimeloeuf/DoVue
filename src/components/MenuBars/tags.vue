/*  @Doc
    This is the bar at the bottom of a note to display the tags the particular note has.
    A list type of tags prop will be received to display.
    This component is used in both the Note component and the editor component.

    Make sure that each tag is unique, cannot have repeated ones

    @Todo
    - Make the note clickable to route user to the Notes view with the selected tag
*/

<template>
  <div v-if="tags && tags.length">
    <!-- <router-link v-for="tag of tags" v-bind:key="tag.id" class="tag"></router-link> -->

    <!-- Remove the "x" delete button when the mouse leaves the whole tag div. -->
    <div v-for="tag in tags" v-bind:key="tag" class="tag" @mouseleave="delete_tag[tag] = false">
      <!-- Show the "x" button on hover by setting the condition for showing "x" to be true -->
      <span @mouseover="delete_tag[tag] = true" @click="open(tag)" class="open_tag">
        <!-- When hovering over the tag, reduce the length of the tag displayed to show the "x" button -->
        {{ delete_tag[tag] ? tag.substr(0, tag.length - 2) : tag }}
      </span>

      <!-- &times; is the cross button for removing the tag from that note -->
      <span v-if="delete_tag[tag]" @click="deleteTag(tag)" class="delete_tag">&times;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tags_bar",
  props: ["tags"],
  data() {
    const delete_tag = {};
    this.$props.tags.forEach(tag => (delete_tag[tag] = false));
    return { delete_tag };
  },
  methods: {
    open(tag) {
      console.log("open", tag);
    },
    deleteTag(tag) {
      console.log("delete", tag);
    }
  }
};
</script>

<style scoped>
.tag {
  display: inline-block;
  border-radius: 1em;
  background-color: rgb(228, 228, 228);

  padding: 0.1em 0.2em;
  padding-top: 0em;
  margin: 0.2em;

  /* Remove the highlight on the text when clicking on it */
  user-select: none;
}

.open_tag {
  cursor: pointer;
  margin-right: 0.5em;
}

.delete_tag {
  display: inline-block;
  height: 1em;
  line-height: 1em;
  width: 1em;
  cursor: pointer;
}
</style>