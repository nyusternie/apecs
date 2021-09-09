<template>
    <main class="py-8 overflow-x-hidden">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <header class="px-10 mt-5 w-full">
                <h1 class="text-4xl font-bold text-purple-700">Testnet Faucet</h1>
            </header>

            <!-- Page Section -->
            <section class="px-10 mt-10">
                <div class="grid grid-cols-3">
                    <button>Bitcoin Cash (tBCH)</button>

                    <button>SmartBCH (sBCH)</button>

                    <button>Ethereum (tETH)</button>
                </div>
            </section>

            <section class="px-10 mt-10">
                <div>
                    BCH Testnet Address:
                </div>

                <div>
                    bchtest:qq3goi409u454iwht3jhuidy78yausdifhr2
                </div>

                <button>Get TBCH!</button>

                <div>
                    Please send tBCH back to this faucet at this address:
                    qq3goi409u454iwht3jhuidy78yausdifhr2
                </div>

                <div>
                    Current Balance: 162.58239475 tBCH
                </div>
            </section>
        </div>
    </main>
</template>

<script>
/* Import components. */
// import Header from '@/components/Header.vue'

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

<style scoped>
/*  */
</style>
