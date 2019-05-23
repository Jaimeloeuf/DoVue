/*  @Doc
    AllNotesComponent is whats shown on the router-view
    This view should be the all notes view. It should be available at the path:     "/notes/all"

    @Todo
    - Fixed the notes list v-for loop to change the binding key. Else turn off ESLint.
    - Include a check if there is any notes. If there is no notes yet include a tutorial thing to help user get started.
*/

<template>
  <div class="notes-view">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <router-view name="modal"/>

    <!-- Router view for Either All the notes or for Search results -->
    <!-- <router-view/> -->

    <!-- Maybe shouldnt do that. Notes view for all the notes.
        Then search view for all the search results
        
    Then the common nav bar will be in the app vue and will change based on auth status.-->

    <!-- Only display if there is more than one note -->
    <ul v-if="notes && notes.length" class="notes">
      <!-- <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" @remove="removeTodo"/> -->
      <li v-for="note of notes" v-bind:key="note.id" @click="openNote">{{ note.text }}</li>
    </ul>
    <!-- @Todo create a Seperate component that is hot loaded only when its used -->
    <p v-else>Nothing left in the list. Add a new todo in the input above.</p>
  </div>
</template>

<script>
// import Editor from "@/components/Editor.vue";

export default {
  name: "Notes",
  components: {
    // Editor
  },
  data() {
    return {
      notes: [
        { id: 1, title: "", text: "Learn JavaScript" },
        { id: 2, title: "", text: "Learn Vue" },
        { id: 3, title: "", text: "Build something awesome" }
      ]
    };
  },
  methods: {
    openNote() {}
  }
};
</script>

<style scoped>
.notes-view {
  margin-top: 4em;
}
.notes {
  list-style-type: none;
}
.notes li {
  cursor: pointer;
}
</style>
