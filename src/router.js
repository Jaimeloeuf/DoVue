import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

import Notes from './views/Notes.vue';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import Help from './views/Help.vue';
import Contact from './views/Contact.vue';

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
            component: Notes,
            meta: {
                // The notes app is only available after authentication
                requiresAuth: true
            }
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/sign-up',
            name: 'signup',
            component: Signup
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