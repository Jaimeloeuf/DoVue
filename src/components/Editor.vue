<template>
  <div class="editor">
    <input type="text" v-model="title" placeholder="Title">
    <br>
    <input v-autofocus type="text" v-model="note">
    <br>

    <!-- @Todo Create a new editor bar component -->
    <button @click="close">Close</button>
  </div>
</template>

<script>
export default {
  name: "Editor",
//   props: {},

/*
    Look at the router file.
    Open the note based on the note id in the route params
*/

  data() {
    return {
      title: "test",
      note: "test"
    };
  },
  methods: {
    close: function() {
      // Close the connection and close the editor
    }
  }
};
</script>

<style>
</style>
