/*

    @Todo
    - Update the components properties of the child routes for modals to automatically
        include All or the last seen component as the default component.
*/

import PrivateNavbar from '@/components/NavBars/Private.vue';

import User from '@/views/User.vue';
import Editor from '@/components/Editor.vue';
import Contact from '@/views/Contact.vue';
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
        path: 'contact',
        name: 'contact',
        components: {
            default: Contact,
            navbar: PrivateNavbar
        },
        meta: {
            Auth_requirements: AuthType.private
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