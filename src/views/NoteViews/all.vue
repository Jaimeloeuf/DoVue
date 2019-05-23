/*  @Doc
    View component to display all the user notes in the "notes" router-view of Notes view
    View available at the path:
        "/notes/all"

    @Todo
    - Create a tutorial like component that help user get started if there is no notes.
*/

<template>
  <div class="all-notes">
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
export default {
  name: "Notes",
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
.notes {
  list-style-type: none;
}
.notes li {
  cursor: pointer;
}
</style>
