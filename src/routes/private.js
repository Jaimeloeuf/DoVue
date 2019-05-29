/*

    @Todo
*/

import PrivateNavbar from '@/components/NavBars/Private.vue';

import User from '@/views/User.vue';
import Notes from '@/views/NoteViews/Notes.vue';
import Editor from '@/components/Editor.vue';
import Contact from '@/views/Contact.vue';
import All from '@/views/NoteViews/all.vue';
import Settings from '@/views/Settings.vue';

// Import AuthType Enum
import AuthType from './AuthType';

const notesRoutes = [{
    path: 'all',
    name: 'all-notes',
    component: All, // View component for all notes
    meta: {
        Auth_requirements: AuthType.private
    }
}, {
    path: ':id',
    components: {
        default: All,
        editor: Editor
    },
    meta: {
        Auth_requirements: AuthType.private
    }
}];


const otherRoutes = [
    {
        path: 'contact',
        name: 'contact-private',
        component: Contact,
        meta: {
            Auth_requirements: AuthType.private
        }
    }, {
        path: 'settings',
        name: 'settings',
        component: Settings,
        meta: {
            Auth_requirements: AuthType.private
        }
    }];


// "/user" routes and its child routes
export default [{
    path: '/:user',
    components: {
        default: User,
        navbar: PrivateNavbar
    },
    // The default /:userID/ route should redirect to notes/all
    redirect: { name: 'all-notes' },
    meta: {
        Auth_requirements: AuthType.private
    },
    children: [...otherRoutes]
},
{
    path: '/:user/notes',
    name: 'user-home',
    components: {
        default: Notes,
        navbar: PrivateNavbar
    },
    // The default /:userID/notes route should redirect to notes/all
    redirect: { name: 'all-notes' },
    meta: {
        Auth_requirements: AuthType.private
    },
    children: [...notesRoutes]
}];