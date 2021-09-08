<template>
    <main class="relative h-screen flex overflow-hidden bg-white">
        <Menu class="hidden lg:flex w-80" v-if="showMenu" />

        <div class="relative min-h-screen bg-gray-100">
            <Header @toggleMenu="toggleMenu" />

            <!-- <router-view class="w-screen overflow-y-scroll" /> -->
            <router-view class="" />
        </div>
    </main>
</template>

<script>
/* Import components. */
import Menu from '@/components/Menu.vue'
import Header from '@/components/Header.vue'
// import Navbar from '@/components/Navbar.vue'
// import Sidebar from '@/components/Sidebar.vue'
// import Topbar from '@/components/Topbar.vue'

export default {
    components: {
        Menu,
        Header,
        // Navbar,
        // Sidebar,
        // Topbar,
    },
    data: () => {
        return {
            showMenu: null,
        }
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu
        },
    },
    created: function () {
        this.showMenu = true
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
