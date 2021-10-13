<template>
    <main class="flex justify-center">
        <!-- Page Section -->
        <section class="max-w-5xl grid grid-cols-5 gap-5 py-10">
            <!-- <Navbar class="hidden col-span-5 mt-5" /> -->

            <div class="col-span-3 grid grid-cols-3 pb-10">

                <!-- Authentication -->
                <router-link to="/labs/auth" class="col-span-3 p-3 mb-5 bg-pink-300 border-4 border-pink-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Authentication
                    </h1>

                    <div class="">
                        Perform user / identity verification using one or more protocols.
                    </div>
                </router-link>

                <!-- CashFusion -->
                <router-link to="/labs/cashfusion" class="col-span-3 p-3 mb-5 bg-pink-300 border-4 border-pink-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        CashFusion
                    </h1>

                    <div class="">
                        Perform coin anonymity experiments using the CashFusion protocol.
                    </div>

                    <div class="">
                        <small class="text-danger">Please be curtious of others when testing on Mainnet.</small>
                    </div>
                </router-link>

                <!-- CashScript -->
                <router-link to="/labs/cashscript" class="col-span-3 p-3 mb-5 bg-pink-300 border-4 border-pink-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        CashScript
                    </h1>

                    <div class="">
                        Experiment with Bitcoin Cash smart contracts.
                    </div>
                </router-link>

                <!-- CashFusion -->
                <router-link to="/labs/cashshuffle" class="col-span-3 p-3 mb-5 bg-pink-300 border-4 border-pink-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        CashShuffle
                    </h1>

                    <div class="">
                        Perform coin anonymity experiments using the CashShuffle protocol.
                    </div>

                    <div class="">
                        <small class="text-danger">Please be curtious of others when testing on Mainnet.</small>
                    </div>
                </router-link>

                <!-- Cryptography -->
                <router-link to="/labs/crypto" class="col-span-3 p-3 mb-5 bg-pink-300 border-4 border-pink-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Cryptography
                    </h1>

                    <div class="">
                        Perform various cryptographic functions.
                    </div>
                </router-link>

                <!-- Decode -->
                <router-link to="/labs/decode" class="col-span-3 p-3 mb-5 bg-pink-300 border-4 border-pink-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Decode
                    </h1>

                    <div class="">
                        Perform various decoding functions.
                    </div>
                </router-link>

                <!-- Events -->
                <router-link to="/labs/events" class="col-span-3 p-3 mb-5 bg-pink-300 border-4 border-pink-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Events
                    </h1>

                    <div class="">
                        Connect with various events, from server-side to ???.
                    </div>
                </router-link>

                <!-- Hardware -->
                <router-link to="/labs/hardware" class="col-span-3 p-3 mb-5 bg-pink-300 border-4 border-pink-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Hardware
                    </h1>

                    <div class="">
                        Experiment with blockchain hardware devices.
                    </div>
                </router-link>

                <!-- Hashing -->
                <router-link to="/labs/hashing" class="col-span-3 p-3 mb-5 bg-pink-300 border-4 border-pink-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Hashing
                    </h1>

                    <div class="">
                        Calculate a hash (aka message digest) of data.
                    </div>
                </router-link>

                <!-- Libp2p -->
                <router-link to="/labs/libp2p" class="col-span-3 p-3 mb-5 bg-pink-300 border-4 border-pink-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Libp2p
                    </h1>

                    <div class="">
                        libp2p is an open source project from the IPFS community.
                    </div>
                </router-link>

                <!-- Messaging -->
                <router-link to="/labs/messaging" class="col-span-3 p-3 mb-5 bg-pink-300 border-4 border-pink-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Messaging
                    </h1>

                    <div class="">
                        Send and receive messages from one or more on-chain protocols.
                    </div>
                </router-link>

                <!-- Query -->
                <router-link to="/labs/query" class="col-span-3 p-3 mb-5 bg-pink-300 border-4 border-pink-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Query
                    </h1>

                    <div class="">
                        Perform queries to the Bitcoin blockchain.
                    </div>
                </router-link>

                <!-- Transaction -->
                <router-link to="/labs/tx" class="col-span-3 p-3 mb-5 bg-pink-300 border-4 border-pink-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Transaction
                    </h1>

                    <div class="">
                        Perform experiments on Bitcoin Cash transactions.
                    </div>
                </router-link>

                <!-- Wallet -->
                <router-link to="/labs/wallet" class="col-span-3 p-3 mb-5 bg-pink-300 border-4 border-pink-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Wallet
                    </h1>

                    <div class="">
                        Build and experiment with Bitcoin Cash wallets.
                    </div>
                </router-link>

            </div>

            <aside class="block col-span-2">
                <div class="sticky p-5 top-10 bg-pink-300 border-4 border-pink-500 rounded-xl">
                    <div class="flex items-center">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-widivh="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <h1 class="text-2xl ml-2">Lab Experiments Guide</h1>
                    </div>

                    <div class="mt-3">
                        <div class="mb-0">
                            Lab Experiments is a workspace for developers to safely build and test their latest blockchain ideas.
                        </div>

                        <div class="mt-0 mb-3">
                            <small class="text-red-500">
                                <strong>Ready to go LIVE?</strong> Switch from Testnet to Mainnet and go for it!
                            </small>
                        </div>

                        <div class="grid grid-cols-3">
                            <div class="col-span-1">Prototype</div>
                            <div class="col-span-2">
                                Build new functions and test your ideas.
                            </div>

                            <div class="col-span-1">Collaborate</div>
                            <div class="col-span-2">
                                Send your experiments to other developers to critique and comment.
                            </div>

                            <div class="col-span-1">Deploy</div>
                            <div class="col-span-2">
                                When you're ready to deploy your experiemnt.
                                Integration with GitHub and GitLab makes it a sinch.
                            </div>

                        </div>
                    </div>
                </div>
            </aside>

        </section>

    </main>
</template>

<script>
/* Import components. */
// import Navbar from './Labs/Navbar'

export default {
    components: {
        // Navbar,
    },
    data: () => {
        return {
            //
        }
    },
    computed: {
        //
    },
    methods: {
        //
    },
    created: async function () {
        //
    },
    mounted: function () {

    },
}
</script>

<style scoped>
aside {
    /* height: 500px; */
}
</style>
