<template>
    <main class="">
        <section class="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
            <h2 class="text-2xl">
                We are currently seeking ALL levels of Sponsorship
            </h2>

            <h3 class="xl">
                Please visit <a href="https://pif.cash" target="_blank" class="text-blue-500 font-medium hover:underline">PIF.cash</a> for more information on how you can support our Team.
            </h3>

        </section>
    </main>
</template>

<script>
export default {
    data: () => ({
        title: null,
        description: null,
    }),
    head: () => ({
        title: 'Sponsors — APECS Dev',
        meta: [
            {
                hid: 'description', // `vmid` for it as it will not work
                name: 'description',
                content: 'Meet our Sponsors.'
            }
        ]
    }),
    created: function () {
        /* Set page title. */
        this.title = `Frequently Asked Questions`

        /* Set page description. */
        this.description = `We know you have lots of questions, so we've collected <span class="text-gray-100 font-medium">TOP DEVS</span> from all over crypto to give you the right answers.`

    },
    mounted: function () {
        //
    },
}
</script>
