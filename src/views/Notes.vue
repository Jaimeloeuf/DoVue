/*  @Doc
    Notes view that houses most of the components for showing all the notes and the note editor too.

    @Todo
    - Fixed the notes list v-for loop to change the binding key. Else turn off ESLint.
    - Include a check if there is any notes. If there is no notes yet include a tutorial thing to help user get started.
*/

<template>
  <div class="notes-view">
    <NotesNavbar/>
    <img alt="Vue logo" src="@/assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- @Todo Instead of using the Editor component here directly, maybe use a router-view instead -->
    <Editor/>

    <ul class="notes">
      <li class="note" v-for="note of notes" v-bind:key="note.text">{{ note.text }}</li>
    </ul>
  </div>
</template>

<script>
import NotesNavbar from "@/components/NotesNavbar.vue";
import Editor from "@/components/Editor.vue";

export default {
  name: "Notes",
  components: {
    NotesNavbar,
    Editor
  },
  data() {
    return {
      notes: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.notes-view {
  margin-top: 4em;
}
.notes {
}
.note {
}
</style>
