/* Import package info. */
import pkg from './package.json'

export default defineNuxtConfig({
    /* Application Settings */
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'initial-scale=1',
            title: 'APECS — Crypto Creators HQ',
            meta: [
                { name: 'description', content: 'An uncensorable, multi-chain platform for P2P electronic cash Creators to do what they need to do.' }
            ],
        }
    },

    /* Style Sheets */
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],

    /* Modules */
    modules: [
        '@nuxtjs/plausible',
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
    ],

    /* Pinia Storage */
    piniaPersistedstate: {
        storage: 'localStorage', // NOTE: Default is cookies.
    },

    /* Runtime Configuration */
    runtimeConfig: {
        // NOTE: The private keys which are only available within server-side.
        secrets: {},

        // NOTE: Keys within public, will be also exposed to the client-side
        public: {
            clientVersion: pkg.version,
        },
    },

    /* Routing Rules */
    routeRules: {
        // Static page generated on-demand, revalidates in background
        // '/blog/**': { swr: true },

        // Static page generated on-demand once
        '/guides/**': { static: true },

        // Set custom headers matching paths
        // '/_nuxt/**': { headers: { 'cache-control': 's-maxage=0' } },

        // Render these routes with SPA
        '/admin/**': { ssr: false },
        // '/bch/**': { ssr: false },
        // '/nexa/**': { ssr: true },

        // Add cors headers
        // '/api/v1/**': { cors: true },

        // Add redirect headers
        // '/old-page': { redirect: '/new-page' },
        // '/old-page2': { redirect: { to: '/new-page', statusCode: 302 } }
    },

    /* Vite Configuration */
    vite: {
        server: {
            fs: {
                strict: false, // NOTE: This allows for `npm/yarn link` library support.
            },
        },
    },
})
