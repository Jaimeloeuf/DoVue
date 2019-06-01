/*  @Doc
    View component to display all the user notes in the "notes" router-view of Notes view
    View available at the path:
        "/notes/all"

    @Todo
    - Create notes service to replace hard coded mock data
    - Create a tutorial like component that help user get started if there is no notes.
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
  name: "Notes",
  components: {
    note
  },
  computed: mapState({
    notes: state => state.notes
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
