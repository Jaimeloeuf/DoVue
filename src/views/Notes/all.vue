/*  @Doc
    View component to display notes that are filtered based on route parameters, which are passed in as props.

    Different props explained:
        Filter will be a complex object with all the kv pairs.
        Below is an example of the filter object.
        {
            tags: [],
            archived: false,
            deleted: false
        }

        Sort prop is also a complex object, but this is optional.
        This object specifies how to sort the list of notes.
        {
            date_asc: false,
            date_desc: true,
        }
    

    @Todo
    - What is the difference between using mapState from vuex and using computed note value? Perfomance benefits?
    - Change this view to be the "Notes" view, where the list of notes are always displayed through this view, and filtered in this view too. The filters can be passed in via route param props making them bookmarkable.
    - Write the props from route code.
    - Create function to filter notes by the given props.
    - [See how to modify the array of notes](https://vuejs.org/v2/guide/list.html#Mutation-Methods)
    - Create notes service to replace hard coded mock data
    - Create a tutorial like component that help user get started if there is no notes.
*/

<template>
  <div class="notes">
    <CreateNote/>

    <!-- <label>{{ filter.tags ? filter.tags : filter.type }}</label> -->

    <ul v-if="notes && notes.length" class="notes">
      <note v-for="note of notes" v-bind:key="note.id" :note="note"/>
    </ul>

    <!-- @Todo create a Seperate component that is hot loaded only when its used -->
    <p v-else>Nothing left in the list. Add a new todo in the input above.</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CreateNote from "@/components/CreateNote.vue";
import note from "@/components/Note.vue";

export default {
  name: "Notes",
  components: {
    CreateNote,
    note
  },
  props: {
    filter: {
      type: Object
      // Filter off nothing by default making this view display all notes by default.
    },
    sort: {
      type: Object,
      default: undefined
    }
  },
  computed: {
    notes() {
      // console.log(this.$props); // Print out the received props object
      return this.$store.state.notes;
    }
  },
  //   computed: mapState({
  //     notes: state => state.notes
  //   }),
  methods: {
    openNote() {}
  }
};
</script>

<style scoped>
.notes {
  /* display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(auto, auto); */

  /* Remove the right hand padding */
  padding-inline-start: 0em;
  /* Remove the top and bottom margin */
  margin-block-start: 0em;
  margin-block-end: 0em;
}
</style>