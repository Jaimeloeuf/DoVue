/*  @Doc
    Note objects are created from this factory function.
    Essentially this holds the definition/schema of the "note" data structure.

    @Todo
    - Create functions for things like exporting the note object to JSON and stuff
*/

function Note({ id, type, title, content, timestamps }) {
    return {
        id, type, title, content, timestamps
    }
}

export default Note;