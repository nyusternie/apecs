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

<script defer data-domain="apecs.dev" src="https://plausible.io/js/script.js"></script>
