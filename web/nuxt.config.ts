import pkg from './package.json'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    modules: [
        '@nuxtjs/tailwindcss',
    ],
    publicRuntimeConfig: {
        clientVersion: pkg.version,
    },
})
