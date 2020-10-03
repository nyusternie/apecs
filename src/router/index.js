import Vue from 'vue'
import VueRouter from 'vue-router'

/* Import views. */
import Dashboard from '@/views/Dashboard'
import Stats from '@/views/Stats'
import Status from '@/views/Status'

/* Import views. */
import community from './community'
import desktop from './desktop'
import profiles from './profiles'
import projects from './projects'
import support from './support'
import workspaces from './workspaces'

/* Initialize Vue Router. */
Vue.use(VueRouter)

/**
 * Initialize Routes
 */
const routes = [
    {
        path: '/',
        component: Dashboard
    },
    {
        path: '/stats',
        component: Stats
    },
    {
        path: '/status',
        component: Status
    },
    // {
    //   path: '/dashboard',
    //   name: 'Dashboard',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '@/views/Dashboard.vue')
    //   component: () => import('@/views/Dashboard'), <-- this is less efficient
    // },
    ...community,
    ...desktop,
    ...profiles,
    ...projects,
    ...support,
    ...workspaces,
]

/* Export Vue Router. */
// NOTE: We're using "hash" mode in development due to problems
//       resolving "dynamic" routes.
export default new VueRouter({
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    mode: process.env.BASE_URL === '/' ? 'history': 'hash',
    // mode: 'hash',
    // mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active', // TODO: We should localize this to Navbar.vue's scope.
    routes,
})
