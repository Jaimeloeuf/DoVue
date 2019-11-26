/*  @Doc
    Note objects are created from this factory function.
    Essentially this holds the definition/schema of the "note" data structure.

    @Todo
    - Create functions for things like exporting the note object to JSON and stuff
*/

// Factory function to create a new note
function Note({ type = "text", title = "", content = "" }) {
	/* Default values for the input are given above. A blank text note. */

	// Check if the given note-type is valid
	switch (type) {
	// Cascade/Fall-through for all the valid types to break
	case "text":
	case "md":
	case "markdown":
		break;

	default:
		throw Error("Invalid note type");
	}

	// Get the current timestamp once, as it will be used multiple times.
	const current_timestamp = Date.now();

	// Timestamp will be added on function call.
	// Timestamp should follow the user's locale.
	// created_at and modified_at will be the same time at the start
	const timestamp = {
		created_at: current_timestamp,
		modified_at: current_timestamp
	};

	// Use the current_timestamp as unique ID for the note
	let id = current_timestamp;

	// Check if id is unique against database/vuex store. If not unique, loop till a timestamp based unique ID is generated.
	while (hasID(id))
		id = Date.now();


	return {
		id, type, title, content, timestamp
	};
}

export default Note;