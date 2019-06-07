/*  @Doc
    This is the modal wrapper over the text editor to show it in a modal

    @Todo
    - Make the width of the modal adaptive to the viewport of the device
*/

<template>
  <modal
    name="editor-modal"
    :adaptive="true"
    draggable=".window-header"
    height="80%"
    width="60%"
    @before-close="closeModal"
  >
    <div class="window-header">
      <!-- {{ id ? id : 'undefined!!' }} -->

      <!-- Display the name of the note if there is one. -->
      <!-- {{ note.name ? note.name : note.id }} -->
      <br>
      <br>
    </div>
    <Editor :note="note"/>
  </modal>
</template>

<script>
import Editor from "@/components/Editor.vue";

export default {
  name: "EditorModal",
  components: {
    Editor
  },
  props: {
    // The note id which is in the note param will be received as a prop instead
    id: {
      type: Number,
      required: true
    }
  },
  mounted() {
    //   Show the modal once it is mounted onto the app
    this.$modal.show("editor-modal");
  },
  computed: {
    note() {
      // return this.$route.params.id;
      // const { id } = this.$props;
      const { id } = this.$route.params;
      return this.$store.getters.noteByID(id);
    }
  },
  methods: {
    closeModal() {
      // @Todo Add a check for history to make sure that the previous route is still from DoVue
      // @Todo Fix the bug where if I am on say note 1 and I use URL to go note 2, and I close modal, then it will navigate backwards to the previous note. But it will not trigger the mounted lifecycle hook, which cause the URL to be of note 1, but shows the notes view instead!!
      // Close modal and go back to previously show page
      if (window.history.length > 1) this.$router.go(-1);
      // Show the default notes/all page if there is no previous view.
      // Applies to situation where the URL is bookmarked and opened directly
      else this.$router.replace({ name: "all-notes" });
    },
    closeNsaveNote() {
      /* Function to call to save the note and close the modal */
      /*    Call function to save the note
            Close server connection
            ^ Probs handled by the notes or data service.
            close the editor modal
        */
    }
  }
};
</script>

<style scoped>
.window-header {
  border: 1px solid #edf3fc;
  border-style: none none solid none;
}
</style>