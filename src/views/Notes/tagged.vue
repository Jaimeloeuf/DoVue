/*  @Doc
    View component to display user's notes filtered a given tag in the "notes" router-view of Notes view
    View available at the path:
        "/notes/tags/:tag"

    @Todo
*/

<template>
  <div class="all-notes">
    <!-- @Todo What does @remove="removeTodo" event means? -->
    <ul v-if="notes && notes.length" class="notes">
      <note v-for="note of notes" v-bind:key="note.id" :note="note"/>
    </ul>

    <!-- @Todo create a Seperate component that is hot loaded only when its used -->
    <p v-else>Nothing left in the list. Add a new todo in the input above.</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import note from "@/components/Note.vue";

export default {
  name: "TaggedNotes",
  components: {
    note
  },
  props: {
    filter_tag: {
        type: String,
        required: true
    }
  },
  computed: mapState({
    notes: state =>
      state.notes.filter(note => note.tags.some(tag => tag === this.filter_tag))
  }),
  methods: {
    openNote() {}
  }
};
</script>

<style scoped>
.notes {
  /* Remove the right hand padding */
  padding-inline-start: 0em;
  /* Remove the top and bottom margin */
  margin-block-start: 0em;
  margin-block-end: 0em;
}
</style>
