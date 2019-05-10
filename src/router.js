import Vue from 'vue';
import Router from 'vue-router';

import Notes from './views/Notes.vue';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            // Redirect any unknown routes to the login view
            path: '*',
            redirect: '/login'
        },
        {
            // Set login view as the default view
            path: '/',
            redirect: '/login'
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
        }
    ]
});
