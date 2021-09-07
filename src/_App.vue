<template>
    <main class="relative h-screen flex overflow-hidden bg-white">
        <Menu />

        <router-view />
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
