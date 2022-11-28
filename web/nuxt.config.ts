import pkg from './package.json'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    publicRuntimeConfig: {
        clientVersion: pkg.version,
    },
})
