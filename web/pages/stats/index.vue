<template>
    <main class="p-5 flex flex-col">

        <div class="bg-pink-500 rounded-xl p-5 border-4 border-pink-700">
            <h1 class="text-2xl text-gray-200">CHECK OUR API STATUS &amp; HISTORY</h1>

            <a class="text-2xl text-gray-200 font-bold" href="https://status.apecs.dev" target="_blank">
                https://status.apecs.dev
            </a>
        </div>

        <!-- Page Section -->
        <section class="grid grid-cols-3 gap-10 py-10">

            <div class="bg-rose-200 rounded-xl p-5 border-4 border-rose-400">
                <h1 class="text-2xl font-bold text-center text-rose-700">
                    FULCRUM<small>.apecs.dev</small>
                </h1>

                <div class="flex gap-2 items-center">
                    <span class="text-xs uppercase">Status</span>
                    <span class="text-sm font-medium text-gray-500">Disabled</span>
                </div>

                <div class="flex gap-2 items-center">
                    <span class="text-xs uppercase">Uptime</span>
                    <span class="text-sm font-medium text-gray-500">n/a</span>
                </div>
            </div>

            <div class="bg-rose-200 rounded-xl p-5 border-4 border-rose-400">
                <h1 class="text-2xl font-bold text-center text-rose-700">
                    ROSTRUM<small>.apecs.dev</small>
                </h1>

                <div class="flex gap-2 items-center">
                    <span class="text-xs uppercase">Status</span>
                    <span class="text-sm font-medium text-green-700">Synching</span>
                </div>

                <div class="flex gap-2 items-center">
                    <span class="text-xs uppercase">Uptime</span>
                    <span class="text-sm font-medium text-gray-500">n/a</span>
                </div>
            </div>

            <div class="bg-rose-200 rounded-xl p-5 border-4 border-rose-400">
                <h1 class="text-2xl font-bold text-center text-rose-700">
                    BITDB<small>.fountainhead.cash</small>
                </h1>

                <div class="flex gap-2 items-center">
                    <span class="text-xs uppercase">Status</span>
                    <span class="text-sm font-medium text-gray-500">Disabled</span>
                </div>

                <div class="flex gap-2 items-center">
                    <span class="text-xs uppercase">Uptime</span>
                    <span class="text-sm font-medium text-gray-500">n/a</span>
                </div>
            </div>

        </section>
    </main>
</template>

<script>
export default {
    data: () => {
        return {
            //
        }
    },
    head: () => ({
        title: 'Statistics — APECS Dev',
        meta: [
            {
                hid: 'description', // `vmid` for it as it will not work
                name: 'description',
                content: `Statistics`
            }
        ]
    }),
    created: async function () {
        /* Retrieve session. */
        // const session = await this.hasSession()
        //     .catch(err => console.error('Session Error:', err))

        /* Validate session. */
        // if (!session) {
        //     return
        // }
    },
    mounted: function () {
        //
    },
}
</script>
