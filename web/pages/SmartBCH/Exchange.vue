<template>
    <main class="p-10">
        <h1 class="text-3xl">Exchange BCH &lt;=&gt; SBCH</h1>

        <a
            class="block mt-5 hover:underline"
            href="https://www.hop.cash/"
            target="_blank"
        >
            <span class="block text-gray-800 text-xl font-bold">HOP.CASH</span>
            <span class="block text-blue-500 font-medium">anonymous</span>
        </a>

        <a
            class="block mt-5 hover:underline"
            href="https://wagon.cash/"
            target="_blank"
        >
            <span class="block text-gray-800 text-xl font-bold">WAGON.CASH</span>
            <span class="block text-blue-500 font-medium">anonymous</span>
        </a>

    </main>
</template>

<script>
export default {
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

<style scoped>
/*  */
</style>
