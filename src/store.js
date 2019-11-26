/*
    @Todo
    - Fix the issue of importing JSON to string, so that the === can work in noteByID method
    - Change the way notes are stored so that the I can access the notes using notes ID at O(1)
    speed without needing to filtering the whole array to search for the one with the correct ID
        - Can be done by changing the json doc to 1 big object, with note ID as keys and the
          note object itself as the value.
    
    - But doing the above may impact the performance when searching for things like archived notes
    and tag based searching. Beacuse the loop gets more complicated? Perhaps I should uda

    @Todo
    - Create a count method, to count the different type of notes.
        - Given an array of notes, it will count it.
        - Do function chaining. So that using 1 getter method to get the array of notes,
        - Pass into the count method, to return the length of the given array.
        - Or should the lenght prototype be used.
*/

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		user: {},
		notes: require("./mock_notes.json")
	},
	getters: {
		get: (state) => (id) => state.notes.filter((note) => note.id == id)[0],
		noteByID: (state) => (id) => state.notes.filter((note) => note.id == id)[0],
		tagged: (state) => (filter_tag) => state.notes.filter(note => note.tags.some(tag => tag === filter_tag)),
		archivedNotes: (state) => state.notes.filter((note) => note.archived),
		deletedNotes: (state) => state.notes.filter((note) => note.deleted),
	},
	mutations: {

	},
	actions: {

	}
});
