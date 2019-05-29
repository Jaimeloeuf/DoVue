/*

    @Todo
    - Instead of repeating myself so many times. Can I just specify the component
        for navbar router-view just once and then have vue leave it as it it?
*/

// Import all the view components
import About from '@/views/About.vue';
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';
import Help from '@/views/Help.vue';
import Contact from '@/views/Contact.vue';

import PublicNavbar from '@/components/NavBars/Public.vue';

// Import AuthType Enum
import AuthType from './AuthType';


// Export all the routes that are public
export default [{
    path: '/about',
    name: 'about',
    components: {
        navbar: PublicNavbar,
        default: About
    },
    meta: { Auth_requirements: AuthType.public_only }
},
{
    path: '/login',
    name: 'login',
    // component: Login
    components: {
        navbar: PublicNavbar,
        default: Login
    },
    meta: { Auth_requirements: AuthType.public_only }
},
{
    path: '/sign-up',
    name: 'signup',
    components: {
        navbar: PublicNavbar,
        default: Signup
    },
    meta: { Auth_requirements: AuthType.public_only }
},
{
    path: '/help',
    name: 'help',
    components: {
        navbar: PublicNavbar,
        default: Help
    },
    meta: { Auth_requirements: AuthType.public_only }
},
{
    path: '/contact',
    name: 'contact',
    components: {
        navbar: PublicNavbar,
        default: Contact
    },
    meta: { Auth_requirements: AuthType.public_only }
}];