import Home from './Pages/Home.vue';
import About from './Pages/About.vue';

export const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
]