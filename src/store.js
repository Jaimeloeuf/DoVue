import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},
        notes: require('./mock_notes.json')
    },
    getters: {
        archivedNotes: (state) => state.notes.filter((note) => note.archived),
        deletedNotes: (state) => state.notes.filter((note) => note.deleted),
    },
    mutations: {

    },
    actions: {

    }
})
