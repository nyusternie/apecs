<template>
    <main class="flex flex-row">
        <section>
            what should be put here??
        </section>
    </main>
</template>

<script>
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
