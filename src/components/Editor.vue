<template>
  <div class="editor">
    <input type="text" v-model="title" placeholder="Title">
    <br>
    <!-- @Todo Implement autofocus -->
    <input type="text" v-model="note" autofocus>
    <br>

    <!-- @Todo Create a new editor bar component -->
    <button @click="close">Close</button>

    <p>Hello</p>
  </div>
</template>

<script>
export default {
  name: "Editor",
//   props: {},
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
