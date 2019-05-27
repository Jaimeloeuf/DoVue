/*

    @Todo
*/

import PrivateNavbar from '@/components/NavBars/Private.vue';

import User from '@/views/User.vue';
import Editor from '@/components/Editor.vue';
import Contact from '@/views/Contact.vue';
import All from '@/views/NoteViews/all.vue';
import Settings from '@/views/Settings.vue';

// Import AuthType Enum
import AuthType from './AuthType';

const notesRoutes = [{
    path: '/',
    name: 'user',
    redirect: 'all'
}, {
    path: 'all',
    name: 'all-notes',
    component: All // View component for all notes
}, {
    path: ':id', component: Editor
}];


const otherRoutes = [
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
        path: 'settings',
        name: 'settings',
        components: {
            default: Settings,
            navbar: PrivateNavbar
        },
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
    meta: {
        Auth_requirements: AuthType.private
    },
    children: [
        ...otherRoutes,
        ...notesRoutes]
}];