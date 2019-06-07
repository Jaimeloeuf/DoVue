/*  @Doc
    This is the component that allows user to write a new note
*/

<template>
  <div class="create" id="create" @keydown.esc="close">
    <!-- @Todo the editor comoponent is triggered by a key press.
    the editor component is not created by default, and is only created when activated with the keypress-->
    <Editor :note="note"/>
  </div>
</template>

<script>
import Editor from "@/components/Editor.vue";

export default {
  name: "CreateNote",
  components: {
    Editor
  },
  computed: {
    note() {
      return {
        title: "",
        text: ""
      };
    }
  },
  mounted() {
    // Created a new blank note!
  },
  methods: {
    close() {
      /*
        Maybe just don't use the editor component for CreateNote? Since it will complicate stuff esp with the
        empty note and all. But the other things like the EditorBar can and should be reused.
      */

      // If the note is not empty
      //   if (this.note.title || this.note.text) {
      // Create a new note in the store and save the data

      // Clear the note after the note is saved
      console.log(this.note.title, this.note.text);
      this.note.title = "";
      this.note.text = "";
      console.log(this.note.title, this.note.text);
      //   }

      // @Todo Remove the focus from the create note component.
      this.$refs.searchfield.blur();
    }
  }
};
</script>

<style scoped>
.create {
  border: 1px solid #e5e5e6;
}
</style>
