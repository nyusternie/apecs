import Vue from 'vue'
import VueRouter from 'vue-router'

/* Import views. */
import desktop from './desktop'
import profiles from './profiles'
import projects from './projects'
import status from './status'
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
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard'),
    },

    {
        path: '/admin',
        component: () => import(/* webpackChunkName: "admin" */ '@/views/Admin'),
    },

    {
        path: '/stats',
        component: () => import(/* webpackChunkName: "stats" */ '@/views/Stats'),
    },

    {
        path: '/ver',
        component: () => import(/* webpackChunkName: "ver" */ '@/views/Ver'),
    },

    {
        path: '/blockchains',
        component: () => import(/* webpackChunkName: "blockchains" */ '@/views/Blockchains'),
    },

    {
        path: '/bridges',
        component: () => import(/* webpackChunkName: "bridges" */ '@/views/Bridges'),
    },

    {
        path: '/discuss',
        component: () => import(/* webpackChunkName: "discuss" */ '@/views/Discus'),
    },

    {
        path: '/events',
        component: () => import(/* webpackChunkName: "events" */ '@/views/Events'),
    },

    {
        path: '/faucets',
        component: () => import(/* webpackChunkName: "faucets" */ '@/views/Faucets'),
    },

    {
        path: '/markets',
        component: () => import(/* webpackChunkName: "markets" */ '@/views/Markets'),
    },

    {
        path: '/privacy',
        component: () => import(/* webpackChunkName: "privacy" */ '@/views/Privacy'),
    },

    {
        path: '/news',
        component: () => import(/* webpackChunkName: "news" */ '@/views/News'),
    },

    {
        path: '/snippets',
        component: () => import(/* webpackChunkName: "news" */ '@/views/Snippets'),
    },
    {
        path: '/snippets/:type',
        component: () => import(/* webpackChunkName: "news" */ '@/views/Snippets'),
    },
    {
        path: '/snippets/:type/:slug',
        component: () => import(/* webpackChunkName: "news" */ '@/views/Snippets'),
    },

    {
        path: '/workspaces',
        component: () => import(/* webpackChunkName: "workspaces" */ '@/views/Workspaces'),
    },

    ...desktop,
    ...profiles,
    ...projects,
    ...status,
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
    linkActiveClass: 'active', // TODO: We should localize this to Navbar's scope.
    routes,
})
