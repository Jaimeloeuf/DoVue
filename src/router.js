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

Vue.use(Router);

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
                // The notes app is only available after authentication
                requiresAuth: true
            }
        },
        {
            path: '/about',
            name: 'about',
            components: {
                default: About,
                navbar: PublicNavbar
            }
        },
        {
            path: '/login',
            name: 'login',
            // component: Login
            components: {
                default: Login,
                navbar: PublicNavbar
            }
        },
        {
            path: '/sign-up',
            name: 'signup',
            components: {
                default: Signup,
                navbar: PublicNavbar
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
    // Get the current user from firebase
    const currentUser = firebase.auth().currentUser;
    // Check if route being navigated to needs authentication
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    /* Call the next middleware provided by vue router with a route to go to. */

    // If the route is auth protected and user is not logged in, redirect to login page
    if (requiresAuth && !currentUser)
        next('login');
    // @TODO fix the below else if condition.
    // else if (!requiresAuth && currentUser)
    //     next('notes');
    // Else, just continue navigation as per user request.
    else
        next();
});


export default router;