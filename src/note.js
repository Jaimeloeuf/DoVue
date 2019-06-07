/*
    Note objects are created from this factory function.
*/

function Note({ id, type, title, content, timestamps }) {
    return {
        id, type, title, content, timestamps
    }
}

export default Note;