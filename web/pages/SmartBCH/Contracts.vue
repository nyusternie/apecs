<template>
    <main class="p-10">
        <h1 class="text-3xl">Notable Contracts</h1>

        <a
            class="block mt-5 hover:underline"
            href="https://www.smartscan.cash/address/0x3743ec0673453e5009310c727ba4eaf7b3a1cc04"
            target="_blank"
        >
            <span class="block text-gray-800 text-xl font-bold">SEP-20 Wrapped BCH</span>
            <span class="block text-blue-500 font-medium">0x3743eC0673453E5009310C727Ba4eaF7b3a1cc04</span>
        </a>
    </main>
</template>

<script>
/* Import components. */
// import Header from '@/components/Header'
// import UnderConstruction from '@/components/UnderConstruction'

export default {
    components: {
        // Header,
        // UnderConstruction,
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

<style scoped>
/*  */
</style>
