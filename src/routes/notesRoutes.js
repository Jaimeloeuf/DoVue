import NotesNavbar from '@/components/NavBars/NotesNavbar.vue';

import Notes from '@/views/Notes.vue';
import Editor from '@/components/Editor.vue';
import HelpModal from '@/components/Modals/HelpModal.vue';
import AboutModal from '@/components/AboutModal.vue';
import ContactModal from '@/components/ContactModal.vue';
import All from '@/views/NoteViews/all.vue';
import Settings from '@/views/Settings.vue';

// Import AuthType Enum
import AuthType from './AuthType';


// "/notes" routes and its child routes
export default [{
    path: '/notes',
    name: 'notes',
    components: {
        default: Notes,
        navbar: NotesNavbar
    },
    meta: {
        Auth_requirements: AuthType.private
    },
    children: [{
        path: '',
        redirect: 'all'
    }, {
        path: 'all',
        name: 'all-notes',
        component: All // View component for all notes
    }, {
        path: 'about',
        name: 'about-modal',
        components: {
            modal: AboutModal
        }
    }, {
        path: 'help',
        name: 'help-modal',
        components: {
            modal: HelpModal
        }
    }, {
        path: 'contact',
        name: 'contact-modal',
        components: {
            modal: ContactModal
        }
    }, {
        path: ':id', component: Editor
    }]
}, {
    path: '/settings',
    name: 'settings',
    components: {
        default: Settings,
        navbar: NotesNavbar
    },
    meta: {
        Auth_requirements: AuthType.private
    }
}];