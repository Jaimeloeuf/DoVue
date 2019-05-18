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

// Import the other components
import PublicNavbar from './components/PublicNavbar.vue';
import NotesNavbar from './components/NotesNavbar.vue';
import Editor from './components/Editor.vue';


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
            }
        },
        {
            path: '/about',
            name: 'about',
            components: {
                default: About,
                navbar: PublicNavbar
            },
            meta: {
                Auth_requirements: AuthType.public
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
            component: Contact
        }
    ]
});

// Middleware that runs when a navigation is made and before the actual navigation.
router.beforeEach((to, from, next) => {
    // // Get the current user from firebase
    // const currentUser = firebase.auth().currentUser;
    // // Check if route being navigated to needs authentication
    // const Auth_requirements = to.matched.some(record => record.meta.Auth_requirements);

    // /* Call the next middleware provided by vue router with a route to go to. */

    // // If the route is auth protected and user is not logged in, redirect to login page
    // if (Auth_requirements && !currentUser)
    //     next('login');
    // // @TODO fix the below else if condition.
    // // else if (!requiresAuth && currentUser)
    // //     next('notes');
    // // Else, just continue navigation as per user request.
    // else
    //     next();


    // Get the current user from firebase
    const currentUser = firebase.auth().currentUser;

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



    /* Call the next middleware provided by vue router with a route to go to. */

    const AuthType_required_is = auth(to);

    // If the route is auth protected and user is not logged in, redirect to login page
    if (AuthType_required_is.private && !currentUser)
        next('login');
    // If route is public only and user is logged in, redirect to default private route
    else if (AuthType_required_is.public_only && currentUser)
        next('notes');
    // Else, just continue navigation as per user request.
    else
        next();
});


export default router;