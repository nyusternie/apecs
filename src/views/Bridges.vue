<template>
    <main class="py-8 overflow-x-hidden">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <header class="px-2 lg:px-10 mt-5 w-full">
                <h1 class="text-4xl font-bold text-gray-500">Testnet Bridges</h1>

                <p class="max-w-lg text-gray-500 p-2 mt-5">
                    Simply select your preferred crypto from the available faucets below, enter your <strong>"Testnet" Account / Address</strong> and click send.

                    <span class="block text-xl font-bold mt-1">
                        SIMPLE!
                    </span>
                </p>
            </header>

            <!-- Page Section -->
            <section class="px-2 lg:px-10 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
                <button
                    class="p-5 bg-green-700 rounded-xl border-4 border-green-500 text-xl text-gray-100 font-bold"
                    @click="loadBitcoinCash"
                >
                    <h1 class="text-4xl">SBCH &lt;=&gt; ETH</h1>

                    <div class="grid grid-cols-2 text-sm mt-2 flex items-center">
                        <span class="text-right text-green-300 text-xs mt-1 mr-2">NAME</span>
                        <span class="text-left mt-1 ml-2 text-base">
                            Testnet3
                            <svg @click.stop="toggleBCH" class="w-4 h-4 inline ml-0 hover:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
                        </span>

                        <span class="text-right text-green-300 text-xs mt-1 mr-2">SYMBOL</span>
                        <span class="text-left mt-1 ml-2 text-base">tBCH</span>
                    </div>
                </button>

                <button
                    class="p-5 bg-yellow-600 rounded-xl border-4 border-yellow-400 text-xl text-gray-100 font-bold"
                    @click="loadSmartBCH"
                >
                    <h1 class="text-4xl">SBCH &lt;=&gt; BSC</h1>

                    <div class="grid grid-cols-2 text-sm mt-2 flex items-center">
                        <span class="text-right text-yellow-200 text-xs mt-1 mr-2">NAME</span>
                        <span class="text-left mt-1 ml-2 text-base">
                            Amber
                        </span>

                        <span class="text-right text-yellow-200 text-xs mt-1 mr-2">SYMBOL</span>
                        <span class="text-left mt-1 ml-2 text-base">tSBCH</span>
                    </div>
                </button>

                <button
                    class="hidden p-5 bg-gray-500 rounded-xl border-4 border-gray-300 text-xl text-gray-100 font-bold"
                    @click="loadEthereum"
                >
                    <h1 class="text-4xl">Ethereum</h1>

                    <div class="grid grid-cols-2 text-sm mt-2 flex items-center">
                        <span class="text-right text-purple-200 text-xs mt-1 mr-2">NAME</span>
                        <span class="text-left mt-1 ml-2 text-base">
                            Ropsten
                            <svg @click.stop="toggleETH" class="w-4 h-4 inline ml-0 hover:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
                        </span>

                        <span class="text-right text-purple-200 text-xs mt-1 mr-2">SYMBOL</span>
                        <span class="text-left mt-1 ml-2 text-base">tETH</span>
                    </div>
                </button>

                <button
                    class="hidden p-5 bg-yellow-500 rounded-xl border-4 border-yellow-300 text-xl text-yellow-100 font-bold"
                    @click="loadBinance"
                >
                    <h1 class="text-4xl">Binance</h1>

                    <div class="grid grid-cols-2 text-sm mt-2 flex items-center">
                        <span class="text-right text-purple-200 text-xs mt-1 mr-2">NAME</span>
                        <span class="text-left mt-1 ml-2 text-base">
                            SmartChain
                        </span>

                        <span class="text-right text-purple-200 text-xs mt-1 mr-2">SYMBOL</span>
                        <span class="text-left mt-1 ml-2 text-base">tBSC</span>
                    </div>
                </button>
            </section>

            <section class="p-3 lg:p-10">
                Our faucets drip every 10 seconds.
                You can register your account in our queue.
                Max queue size is currently 50.
                Serving from account 0xcDA0D6...43FE7C (balance 515 tBCH).
            </section>

        </div>
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
    methods: {
        loadBitcoinCash() {
            window.open('https://tbch.googol.cash/')
        },

        loadSmartBCH() {
            window.open('http://34.92.246.27:8080/faucet')
        },

        loadEthereum() {
            window.open('https://faucet.dimensions.network/') // Ropsten

            // window.open('https://ethdrop.dev/') // Kovan
        },

        loadBinance() {
            window.open('https://testnet.binance.org/faucet-smart')
        },

        toggleBCH() {
            alert('Testnet4 is coming soon..')
        },

        toggleETH() {
            alert('Kovan is coming soon..')
        },

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
