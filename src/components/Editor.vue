/*  @Doc
    This is the text editor for the notes.

    @Todo
    - On click, trigger a function that will change the route to the route of the note, and show the EditorModal with the selected note in it using props passed into the editor component.
    - Add line numbers to the editor and allow the user to toggle it on and off
    - Add a little "last edited date" at the bottom right corner of the editor
    - How to move user's cursor / text position programmatically? E.g. I want the cursor to be at the top of the note.
*/

<template>
  <div class="editor">
    <!-- {{ id ? id : 'undefined!!' }} -->
    <textarea-autosize
      placeholder="Title"
      v-model="note.title"
      class="note-title"
      :max-height="100"
      ref="noteTitle"
      @blur.native="onBlurTextarea"
    ></textarea-autosize>
    <br>
    <textarea-autosize
      v-autofocus
      placeholder="Take a note..."
      v-model="note.text"
      class="note-text"
      ref="noteText"
      :max-height="400"
      @blur.native="onBlurTextarea"
    ></textarea-autosize>
    <br>
    <!-- Pass the array of tags as props, else an empty array if it there is none -->
    <!-- <Tags :tags="note.tags ? note.tags : []"/> -->
    <!-- Technically all notes should have an array of tags, even if it is an empty array -->
    <Tags :tags="note.tags"/>

    <!-- Pass the note to the editor bar so it can modify the note -->
    <EditorBar :note="note" class="editor-bar"/>
  </div>
</template>

<script>
import Tags from "@/components/MenuBars/tags.vue";
import EditorBar from "@/components/MenuBars/EditorBar.vue";

export default {
	name: "Editor",
	components: {
		Tags,
		EditorBar
	},
	props: {
		note: {
			type: Object,
			required: true
		},
		// @Todo Integrate this autofocus prop to control the v-autofocus directive
		autofocus: {
			type: Boolean,
			default: true
		}
	},
	methods: {
		onBlurTextarea() {}
	}
	/*@Notes
    Since Editor component is just a UI component now, the note it edits / opens is passed in as a prop instead.
    Instead of the old way of getting the id from the route to retrieve the note from the store.
    
    props: {
      id: {
        type: Number,
        required: true
      }
    },
    computed: {
      note() {
        const { id } = this.$props;
        return this.$store.getters.noteByID(id);
      }
    } */
};
</script>

<style scoped>
.editor {
  /* Max width for the editor because 80 character word wraps
    Make word wrap customisable? User can set wrap. */
  max-width: 80em;

  /* Center align so that the input/note appears to float in the middle */
  text-align: center;
}

.note-title {
  /* Prevent user from resizing the text input area */
  resize: none;
  /* Make textarea stretch to almost fully fit the modal with a little space to look like its floating in the middle */
  width: 95%;

  /* Remove border and focus highlighting */
  outline: none;
  border: 0px none;

  /* Change the font used to make it like roboto */

  font-weight: 400;
  font-size: 1.2em;
}

.note-text {
  /* Prevent user from resizing the text input area */
  resize: none;
  /* Make textarea stretch to almost fully fit the modal with a little space to look like its floating in the middle */
  width: 95%;

  /* Remove border and focus highlighting */
  outline: none;
  border: 0px none;
}
</style>