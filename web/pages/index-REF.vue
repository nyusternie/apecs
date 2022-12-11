<template>
    <main class="relative h-screen flex bg-white overflow-y-hidden">
        <!-- <Menu class="hidden lg:block w-80" v-if="showMenu" /> -->

        <div class="bg-gray-100 w-full">
            <SiteHeader @toggleMenu="toggleMenu" />

            <!-- <router-view class="w-screen overflow-y-scroll" /> -->
            <!-- <router-view class="overflow-x-hidden overflow-y-scroll h-full" /> -->
            <router-view id="content-win" class="overflow-x-hidden overflow-y-scroll h-full" />
        </div>
    </main>
</template>

<script>
export default {
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
    mounted: function () {
        /* Handle keyboard shortcuts. */
        window.addEventListener('keydown', function (_event) {
            // console.log('EVENT', _event)

            /* Handle Ctrl-K (search shortcut). */
            if (_event.ctrlKey && _event.keyCode === 75) {
                /* Stop propagating. */
                _event.preventDefault()

                /* Set focus to "global" search bar. */
                document.getElementById('global-search').focus()
            }
        })

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

#content-win {
    height: calc(100% - 70px);
}
</style>
