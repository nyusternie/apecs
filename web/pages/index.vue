<template>
    <main class="p-3 grid grid-cols-1 lg:grid-cols-2 gap-4 bg-yellow-200">
        <DashboardCalendar class="p-3 border-4 border-yellow-400 bg-yellow-100 rounded-lg" />
        <DashboardFeatured class="p-3 border-4 border-yellow-400 bg-yellow-100 rounded-lg" />
        <DashboardFeeds class="p-3 border-4 border-yellow-400 bg-yellow-100 rounded-lg" />
        <DashboardGoals class="p-3 border-4 border-yellow-400 bg-yellow-100 rounded-lg" />
        <DashboardHighlights class="p-3 border-4 border-yellow-400 bg-yellow-100 rounded-lg" />
        <DashboardNewcomers class="p-3 border-4 border-yellow-400 bg-yellow-100 rounded-lg" />
        <DashboardTodo class="p-3 border-4 border-yellow-400 bg-yellow-100 rounded-lg" />
        <DashboardTrends class="p-3 border-4 border-yellow-400 bg-yellow-100 rounded-lg" />
        <DashboardUpdates class="p-3 border-4 border-yellow-400 bg-yellow-100 rounded-lg" />
    </main>
</template>

<script>
export default {
    data: () => {
        return {
            showMenu: null,
        }
    },
    head: () => ({
        title: 'APECS — HQ for Crypto Builders',
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
