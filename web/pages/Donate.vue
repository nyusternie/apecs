<template>
    <main class="min-h-full">
        <SiteHeaderView />

        <section class="mt-8 pb-8">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 class="sr-only">
                    Donate
                </h1>

                <!-- Main 3 column grid -->
                <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                    <section class="p-5 flex flex-col col-span-2 space-y-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg shadow">
                        <h1 class="text-4xl font-bold text-yellow-900">
                            Donate
                        </h1>

                        <div class="px-32">
                            <h3 class="px-5 py-2 text-xl text-yellow-700 font-medium uppercase text-center bg-yellow-400 border-2 border-yellow-600 rounded-lg">
                                APECS will forever remain
                                <span class="block text-3xl">100% payment free</span>
                                - and -
                                <span class="block text-3xl">100% open source</span>
                            </h3>
                        </div>

                        <p class="text-yellow-900">
                            Your financial contributions help maintain this platform and its continued research &amp; development.
                        </p>

                        <hr />

                        <h3 class="text-4xl text-yellow-700 font-bold">
                            $5.00 / month
                        </h3>

                        <ol class="list-disc pl-10 text-yellow-900">
                            <li>Premium Profile Page</li>
                        </ol>
                    </section>

                    <!-- Right column -->
                    <div class="grid grid-cols-1 gap-4">
                        <PayoutsBlock />

                        <BlockRewardsPanel />
                    </div>
                </div>
            </div>
        </section>

        <FooterView />
    </main>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
    // middleware: 'magic.auth',
    data: () => ({
        //
    }),
    head: () => ({
        title: 'Blank — APECS Dev',
        meta: [
            {
                hid: 'description', // `vmid` for it as it will not work
                name: 'description',
                content: 'TBD..'
            }
        ]
    }),
    computed: {
        // ...mapGetters({
        //     // panelIsShowing: 'system/getPanelState'
        // })
    },
    created: function () {
        //
    },
    mounted: function () {
        //
    },
    methods: {
        //
    }
}
</script>
