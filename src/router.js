/*  @Todo
    - Update the routeObjects for the help and contact views
    - Fix the router gaurd function.
*/

import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

// Import all the view components
import About from './views/About.vue';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import Notes from './views/Notes.vue';
import Help from './views/Help.vue';
import Contact from './views/Contact.vue';
import Settings from './views/Settings.vue';

// Import the other components
import PublicNavbar from './components/NavBars/PublicNavbar.vue';
import NotesNavbar from './components/NavBars/NotesNavbar.vue';
// import Editor from './components/Editor.vue';
import AboutModal from './components/AboutModal.vue';
import HelpModal from './components/Modals/HelpModal.vue';
import All from './views/NoteViews/all.vue';


// Register the Router components for other components to use.
Vue.use(Router);


/*  Define an enum of authentication requirements types possible for the routes.
    When performing checks and running router gaurds, make sure to check against AuthType enum.

    Legend:
        public: User can access this route regardless of his/her current auth status.
        public_only: Only accessible if user is not logged in. Example would be the login route.
        private: Only accessible if user is currently authenticated.
*/
const AuthType = Object.freeze({
    "public": 1, "public_only": 2, "private": 3
});


const router = new Router({
    routes: [
        {
            // @TODO change redirect to a 404 page if user is not logged in.
            // @TODO change redirect to the All notes view if user is logged in
            // Redirect any unknown routes to the login view
            path: '*',
            redirect: '/about'
        },
        {
            // Set login view as the default view
            path: '/',
            redirect: '/about'
        },
        {
            path: '/notes',
            name: 'notes',
            components: {
                default: Notes,
                navbar: NotesNavbar
            },
            meta: {
                Auth_requirements: AuthType.private
            },
            // children: [ , {
            //     path: '/:id', component: Editor
            // }]
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
            }]
        },
        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // },
        {
            path: '/about',
            name: 'about',
            components: {
                default: About,
                navbar: PublicNavbar
            },
            meta: {
                Auth_requirements: AuthType.public_only
            }
        },
        {
            path: '/login',
            name: 'login',
            // component: Login
            components: {
                default: Login,
                navbar: PublicNavbar
            },
            meta: {
                Auth_requirements: AuthType.public_only
            }
        },
        {
            path: '/sign-up',
            name: 'signup',
            components: {
                default: Signup,
                navbar: PublicNavbar
            },
            meta: {
                Auth_requirements: AuthType.public_only
            }
        },
        {
            path: '/help',
            name: 'help',
            component: Help
        },
        {
            path: '/contact',
            name: 'contact',
            components: {
                default: Contact,
                navbar: PublicNavbar
            },
            meta: {
                Auth_requirements: AuthType.public_only
            }
        },
        {
            path: '/settings',
            name: 'settings',
            components: {
                default: Settings,
                navbar: NotesNavbar
            },
            meta: {
                Auth_requirements: AuthType.private
            }
        }
    ]
});


// Function that returns an object with bool values of auth status.
function auth(route) {
    // Get auth requirements from first route object that matches with route navigated to
    const { Auth_requirements } = route.matched[0].meta;

    return {
        public: Auth_requirements === AuthType.public,
        public_only: Auth_requirements === AuthType.public_only,
        private: Auth_requirements === AuthType.private
    };
}


// Checks if user's current auth status matches required auth status for the route being accessed
function AuthChecker(to, from, next) {
    // Get the current user from firebase
    const currentUser = firebase.auth().currentUser;

    // Get the AuthStatus required for accessing the route.
    const AuthType_required_is = auth(to);

    /* Call the next middleware provided by vue router with a route to go to. */
    // If the route is auth protected and user is not logged in, redirect to login page
    if (AuthType_required_is.private && !currentUser)
        next('login');
    // If route is public only and user is logged in, redirect to default private route
    else if (AuthType_required_is.public_only && currentUser)
        next('notes');
    // Else, just continue navigation as per user request.
    else
        next();
}


// Attach AuthChecker Middleware to run when navigation is made but before actual navigation.
router.beforeEach(AuthChecker);


export default router;