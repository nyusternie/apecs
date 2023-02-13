<script setup lang="ts">
useHead({
    title: 'APECS — Crypto Creators HQ',
    meta: [
        { name: 'description', content: 'An uncensorable, multi-chain platform for P2P electronic cash Creators to do what they need to do.' }
    ],
    // ogTitle: 'APECS — Crypto Creators HQ',

    // description: 'An uncensorable, multi-chain platform for P2P electronic cash Creators to do what they need to do.',
    // ogDescription: 'An uncensorable, multi-chain platform for P2P electronic cash Creators to do what they need to do.',

    // ogImage: 'https://apecs.dev/poster.jpg',
    // twitterCard: 'summary_large_image',
})
</script>

<template>
    <main class="w-screen flex flex-row bg-pink-500">
        <Menu class="hidden lg:block w-80 h-screen flex-none overflow-x-hidden overflow-y-scroll" />

        <section class="w-full h-screen bg-gradient-to-r from-gray-50 to-gray-200 overflow-x-hidden">
            <SiteHeader />

            <div id="content-win">
                <slot />
            </div>
        </section>
    </main>
</template>

<style>
/* global window */
main::-webkit-scrollbar, section::-webkit-scrollbar {
    /* display: none; */
    width: 4px;
    height: 8px;
    background-color: #00A774; /* or add it to the track */
}
main::-webkit-scrollbar-thumb, section::-webkit-scrollbar-thumb {
    background: #8dc351;
}

#content-win {
    height: calc(100% - 70px);
}
</style>
