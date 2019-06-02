import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},
        notes: require('./mock_notes.json')
    },
    mutations: {

    },
    actions: {

    }
})
