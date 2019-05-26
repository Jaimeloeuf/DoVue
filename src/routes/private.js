/*

    @Todo
    - Update the components properties of the child routes for modals to automatically
        include All or the last seen component as the default component.
*/

import PrivateNavbar from '@/components/NavBars/Private.vue';

import User from '@/views/User.vue';
import Editor from '@/components/Editor.vue';
import HelpModal from '@/components/Modals/HelpModal.vue';
import AboutModal from '@/components/AboutModal.vue';
import ContactModal from '@/components/ContactModal.vue';
import All from '@/views/NoteViews/all.vue';
import Settings from '@/views/Settings.vue';

// Import AuthType Enum
import AuthType from './AuthType';

const notesRoutes = {
    path: '/:user',
    components: {
        default: User,
        navbar: PrivateNavbar
    },
    meta: {
        Auth_requirements: AuthType.private
    },
    children: [{
        path: '/',
        name: 'user',
        redirect: 'all'
    }, {
        path: 'all',
        name: 'all-notes',
        component: All // View component for all notes
    }, {
        path: ':id', component: Editor
    }]
};


// "/user" routes and its child routes
export default [
    notesRoutes,
    {
        path: 'about',
        name: 'about-modal',
        components: {
            default: All,
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
        path: '/settings',
        name: 'settings',
        components: {
            default: Settings,
            navbar: PrivateNavbar
        },
        meta: {
            Auth_requirements: AuthType.private
        }
    }];