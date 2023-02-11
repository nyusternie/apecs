import pkg from './package.json'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    modules: [
        '@nuxtjs/plausible',
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
    ],
    piniaPersistedstate: {
        storage: 'localStorage',
    },
    runtimeConfig: {
        // NOTE: The private keys which are only available within server-side.
        secrets: {},

        // NOTE: Keys within public, will be also exposed to the client-side
        public: {
            clientVersion: pkg.version,
        }
    },
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
    vite: {
        server: {
            fs: {
                strict: false, // NOTE: This allows for `npm/yarn link` library support.
            },
        },
    },
})
