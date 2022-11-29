<template>
    <main class="flex flex-row">
        <section>
            what should be put here??
        </section>
    </main>
</template>

<script>
/* Import components. */
// import Header from '@/components/Header'

/* Import (local) components. */
// import Calendar from '@/components/dashboard/Calendar'
// import Featured from '@/components/dashboard/Featured'
// import Feeds from '@/components/dashboard/Feeds'
// import Goals from '@/components/dashboard/Goals'
// import Highlights from '@/components/dashboard/Highlights'
// import Newcomers from '@/components/dashboard/Newcomers'
// import Todo from '@/components/dashboard/Todo'
// import Trends from '@/components/dashboard/Trends'
// import Updates from '@/components/dashboard/Updates'

export default {
    components: {
        // Header,

        // Calendar,
        // Featured,
        // Feeds,
        // Goals,
        // Highlights,
        // Newcomers,
        // Todo,
        // Trends,
        // Updates,
    },
    data: () => {
        return {
            showMenu: null,
        }
    },
    head: () => ({
        title: 'Cash DevOps — HQ for Crypto Builders',
        meta: [
            {
                hid: 'description', // `vmid` for it as it will not work
                name: 'description',
                content: `A FOSS Development Operations Center for crypto's Cash builders.`
            }
        ]
    }),
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu
        },
    },
    created: function () {
        this.showMenu = true
    },
    mounted: function () {
        //
    }
}
</script>

<style scoped>
/*  */
</style>
