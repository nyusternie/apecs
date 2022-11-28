<template>
    <main class="flex justify-center">
        <!-- Page Section -->
        <section class="max-w-5xl grid grid-cols-3 gap-5 py-10">

            <div class="bg-pink-500 rounded-xl p-5 border-4 border-pink-700">
                <h1 class="text-3xl font-bold text-center text-gray-200">
                    FULCRUM<small>.devops.cash</small>
                </h1>

                <div class="color-palette-set">
                    <span class="block">#6610f2</span>
                    <span class="block">Disabled</span>
                </div>
            </div>

            <div class="bg-pink-500 rounded-xl p-5 border-4 border-pink-700">
                <h1 class="text-3xl font-bold text-center text-gray-200">
                    BITDB<small>.devops.cash</small>
                </h1>

                <div class="color-palette-set">
                    <span class="block">#e83e8c</span>
                    <span class="block">Synching</span>
                </div>
            </div>

            <div class="bg-pink-500 rounded-xl p-5 border-4 border-pink-700">
                <h1 class="text-center bg-olive">
                    SLPDB<small>.fountainhead.cash</small>
                </h1>

                <div class="color-palette-set">
                    <div class="bg-olive color-palette"><span>#3d9970</span></div>
                    <div class="bg-olive disabled color-palette"><span>Disabled</span></div>
                </div>
            </div>

        </section>
    </main>
</template>

<script>
/* Import components. */
// import Header from '@/components/Header'

export default {
    components: {
        // Header,
    },
    data: () => {
        return {
            //
        }
    },
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
