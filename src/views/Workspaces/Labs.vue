<template>
    <main class="flex justify-center">
        <!-- Page Section -->
        <section class="max-w-5xl grid grid-cols-5 gap-5">
            <Navbar class="col-span-5 mt-5" />

            <div class="col-span-3 grid grid-cols-3">

                <router-link to="/labs/auth" class="col-span-3 p-3 mb-5 bg-pink-300 border-4 border-pink-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Authentication
                    </h1>

                    <div class="">
                        Perform user / identity verification using one or more protocols.
                    </div>
                </router-link>

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
                <div class="col-span-1">
                    <router-link to="/labs/cashscript">
                        CashScript
                    </router-link>
                </div>
                <div class="col-span-2">
                    Experiment with Bitcoin Cash smart contracts.
                </div>

                <!-- CashShuffle -->
                <div class="col-span-1">
                    <router-link to="/labs/cashshuffle">
                        CashShuffle
                    </router-link>
                </div>
                <div class="col-span-2">
                    Perform coin anonymity experiments using the CashShuffle protocol.
                </div>
                <div class="col-span-3">
                    <small class="text-danger">Please be curtious of others when testing on Mainnet.</small>
                </div>

                <!-- Cryptography -->
                <div class="col-span-1">
                    <router-link to="/labs/crypto">
                        Cryptography
                    </router-link>
                </div>
                <div class="col-span-2">
                    Perform various cryptographic functions.
                </div>

                <!-- Decoders -->
                <div class="col-span-1">
                    <router-link to="/labs/decode">
                        Decoders
                    </router-link>
                </div>
                <div class="col-span-2">
                    Perform various decoding functions.
                </div>

                <!-- Events -->
                <div class="col-span-1">
                    <router-link to="/labs/events">
                        Events
                    </router-link>
                </div>
                <div class="col-span-2">
                    Connect with various events, from server-side to ???.
                </div>

                <!-- Hardware -->
                <div class="col-span-1">
                    <router-link to="/labs/hardware">
                        Hardware
                    </router-link>
                </div>
                <div class="col-span-2">
                    Experiment with blockchain hardware devices.
                </div>

                <!-- Hashing -->
                <div class="col-span-1">
                    <router-link to="/labs/hash">
                        Hashing
                    </router-link>
                </div>
                <div class="col-span-2">
                    Calculate a hash (aka message digest) of data.
                </div>

                <!-- Libp2p -->
                <div class="col-span-1">
                    <router-link to="/labs/libp2p">
                        Libp2p
                    </router-link>
                </div>
                <div class="col-span-2">
                    libp2p is an open source project from the IPFS community.
                </div>

                <!-- Messaging -->
                <div class="col-span-1">
                    <router-link to="/labs/msg">
                        Messaging
                    </router-link>
                </div>
                <div class="col-span-2">
                    Send and receive messages from one or more on-chain protocols.
                </div>

                <!-- Query -->
                <div class="col-span-1">
                    <router-link to="/labs/query">
                        Query
                    </router-link>
                </div>
                <div class="col-span-2">
                    Perform queries to the Bitcoin blockchain.
                </div>

                <!-- SmartBCH -->
                <div class="col-span-1">
                    <router-link to="/labs/smartbch">
                        SmartBCH
                    </router-link>
                </div>
                <div class="col-span-2">
                    Perform experiments on the Smart Bitcoin Cash chain.
                </div>

                <!-- Transaction -->
                <div class="col-span-1">
                    <router-link to="/labs/tx">
                        Transaction
                    </router-link>
                </div>
                <div class="col-span-2">
                    Perform experiments on Bitcoin Cash transactions.
                </div>

                <!-- Wallet -->
                <div class="col-span-1">
                    <router-link to="/labs/wallet">
                        Wallet
                    </router-link>
                </div>
                <div class="col-span-2">
                    Build and experiment with Bitcoin Cash wallets.
                </div>

            </div>

            <aside class="col-span-2 p-5 bg-pink-300 border-4 border-pink-500 rounded-xl">
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
            </aside>

        </section>
    </main>
</template>

<script>
/* Import components. */
import Navbar from './Labs/Navbar'

export default {
    components: {
        Navbar,
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
/*  */
</style>
