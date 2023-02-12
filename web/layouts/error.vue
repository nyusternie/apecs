<script setup lang="ts">
useHead({
    title: 'Oops! An error has been detected — APECS Dev',
    ogTitle: 'Oops! An error has been detected — APECS Dev',

    description: 'An uncensorable, multi-chain platform for P2P electronic cash Creators to do what they need to do.',
    ogDescription: 'An uncensorable, multi-chain platform for P2P electronic cash Creators to do what they need to do.',

    ogImage: 'https://apecs.dev/poster.jpg',
    twitterCard: 'summary_large_image',
})
</script>

<template>
    <main>
        <h1 v-if="error.statusCode === 404">Page not found</h1>
        <h1 v-else>An error occurred</h1>

        <NuxtLink to="/">Home page</NuxtLink>
    </main>
</template>

<script>
export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
}
</script>
