/*  @Doc
    This is the text editor for the notes.

    @Todo
    - Make this into a modal component like keep

    - Make all the li items for individaul notes work the same way as a button
    - On click, trigger a function that will change the route to the route of the note,
    - and show the EditorModal with the selected note in it using props passed into the editor component.
*/

<template>
  <modal name="foo" height="auto" :scrollable="true">
    <div class="editor">
      <input type="text" v-model="title" placeholder="Title">
      <br>
      <textarea v-autofocus v-model="note" placeholder="Write your note here" cols="30" rows="10"/>
      <br>

      <p>no</p>

      <!-- @Todo Create a new editor bar component -->
      <button @click="close">Close</button>
    </div>
  </modal>
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
