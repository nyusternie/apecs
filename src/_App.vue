<template>
    <main class="relative h-screen flex bg-white overflow-y-hidden">
        <Menu class="hidden lg:block w-80" v-if="showMenu" />

        <div class="bg-gray-100 w-full">
            <Header @toggleMenu="toggleMenu" />

            <!-- <router-view class="w-screen overflow-y-scroll" /> -->
            <router-view class="overflow-x-hidden overflow-y-scroll h-full" />
        </div>
    </main>
</template>

<script>
/* Import components. */
import Menu from '@/components/Menu'
import Header from '@/components/Header'
// import Navbar from '@/components/Navbar'
// import Sidebar from '@/components/Sidebar'
// import Topbar from '@/components/Topbar'

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
main::-webkit-scrollbar, section::-webkit-scrollbar {
    /* display: none; */
    width: 4px;
    height: 8px;
    background-color: #00A774; /* or add it to the track */
}
main::-webkit-scrollbar-thumb, section::-webkit-scrollbar-thumb {
    background: #8dc351;
}
</style>
