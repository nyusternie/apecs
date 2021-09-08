<template>
    <main class="relative h-screen flex overflow-hidden bg-white">
        <Menu class="w-80" />

        <router-view class="w-screen overflow-y-scroll" />
    </main>
</template>

<script>
/* Import components. */
import Menu from '@/components/Menu.vue'
// import Footer from '@/components/Footer.vue'
// import Navbar from '@/components/Navbar.vue'
// import Sidebar from '@/components/Sidebar.vue'
// import Topbar from '@/components/Topbar.vue'

export default {
    components: {
        Menu,
        // Footer,
        // Navbar,
        // Sidebar,
        // Topbar,
    },
}
</script>

<style>
main::-webkit-scrollbar {
    /* display: none; */
    width: 4px;
    height: 8px;
    background-color: #00A774; /* or add it to the track */
}
main::-webkit-scrollbar-thumb {
    background: #8dc351;
}
</style>
