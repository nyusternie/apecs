<template>
    <main class="flex justify-center">
        <!-- Page Section -->
        <section class="max-w-5xl grid grid-cols-5 gap-5 py-10">
            <!-- <Navbar class="hidden col-span-5 mt-5" /> -->

            <div class="col-span-3 grid grid-cols-3 pb-10">

                <NuxtLink to="/sandbox/address" class="col-span-3 p-3 mb-5 bg-indigo-300 border-4 border-indigo-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Address
                    </h1>

                    <div class="">
                        Create addresses from user-defined scripts.
                    </div>
                </NuxtLink>

                <NuxtLink to="/sandbox/auth" class="col-span-3 p-3 mb-5 bg-indigo-300 border-4 border-indigo-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Authentication
                    </h1>

                    <div class="">
                        Perform user / identity verification using one or more protocols.
                    </div>
                </NuxtLink>

                <NuxtLink to="/sandbox/bitdb" class="col-span-3 p-3 mb-5 bg-indigo-300 border-4 border-indigo-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        BitDB
                    </h1>

                    <div class="">
                        Bitcoin is the most secure hard disk that will ever exist.
                        BitDB is the memory that lets you make the most out of it.
                    </div>
                </NuxtLink>

                <NuxtLink to="/sandbox/cashfusion" class="col-span-3 p-3 mb-5 bg-indigo-300 border-4 border-indigo-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        CashFusion
                    </h1>

                    <div class="">
                        Perform coin anonymity experiments using the CashFusion protocol.
                    </div>

                    <div class="">
                        <small class="text-danger">Please be curtious of others when testing on Mainnet.</small>
                    </div>
                </NuxtLink>

                <NuxtLink to="/sandbox/cashscript" class="col-span-3 p-3 mb-5 bg-indigo-300 border-4 border-indigo-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        CashScript
                    </h1>

                    <div class="">
                        Experiment with Bitcoin Cash smart contracts.
                    </div>
                </NuxtLink>

                <NuxtLink to="/sandbox/cashshuffle" class="col-span-3 p-3 mb-5 bg-indigo-300 border-4 border-indigo-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        CashShuffle
                    </h1>

                    <div class="">
                        Perform coin anonymity experiments using the CashShuffle protocol.
                    </div>

                    <div class="">
                        <small class="text-danger">Please be curtious of others when testing on Mainnet.</small>
                    </div>
                </NuxtLink>

                <NuxtLink to="/sandbox/couchdb" class="col-span-3 p-3 mb-5 bg-indigo-300 border-4 border-indigo-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        CouchDB
                    </h1>

                    <div class="">
                        Perform various CouchDB functions.
                    </div>
                </NuxtLink>

                <NuxtLink to="/sandbox/crypto" class="col-span-3 p-3 mb-5 bg-indigo-300 border-4 border-indigo-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Cryptography
                    </h1>

                    <div class="">
                        Perform various cryptographic functions.
                    </div>
                </NuxtLink>

                <NuxtLink to="/sandbox/decode" class="col-span-3 p-3 mb-5 bg-indigo-300 border-4 border-indigo-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Decode
                    </h1>

                    <div class="">
                        Perform various decoding functions.
                    </div>
                </NuxtLink>

                <NuxtLink to="/sandbox/elasticsearch" class="col-span-3 p-3 mb-5 bg-indigo-300 border-4 border-indigo-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Elasticsearch
                    </h1>

                    <div class="">
                        Perform various Elasticsearch functions.
                    </div>
                </NuxtLink>

                <NuxtLink to="/sandbox/events" class="col-span-3 p-3 mb-5 bg-indigo-300 border-4 border-indigo-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Events
                    </h1>

                    <div class="">
                        Connect with various events, from server-side to ???.
                    </div>
                </NuxtLink>

                <NuxtLink to="/sandbox/hardware" class="col-span-3 p-3 mb-5 bg-indigo-300 border-4 border-indigo-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Hardware
                    </h1>

                    <div class="">
                        Experiment with blockchain hardware devices.
                    </div>
                </NuxtLink>

                <NuxtLink to="/sandbox/hashing" class="col-span-3 p-3 mb-5 bg-indigo-300 border-4 border-indigo-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Hashing
                    </h1>

                    <div class="">
                        Calculate a hash (aka message digest) of data.
                    </div>
                </NuxtLink>

                <NuxtLink to="/sandbox/libp2p" class="col-span-3 p-3 mb-5 bg-indigo-300 border-4 border-indigo-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Libp2p
                    </h1>

                    <div class="">
                        libp2p is an open source project from the IPFS community.
                    </div>
                </NuxtLink>

                <NuxtLink to="/sandbox/messaging" class="col-span-3 p-3 mb-5 bg-indigo-300 border-4 border-indigo-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Messaging
                    </h1>

                    <div class="">
                        Send and receive messages from one or more on-chain protocols.
                    </div>
                </NuxtLink>

                <NuxtLink to="/sandbox/nexad" class="col-span-3 p-3 mb-5 bg-indigo-300 border-4 border-indigo-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Nexa Daemon
                    </h1>

                    <div class="">
                        Issue commands to your local `nexad` instance using JSON-RPC.
                    </div>
                </NuxtLink>

                <NuxtLink to="/sandbox/query" class="col-span-3 p-3 mb-5 bg-indigo-300 border-4 border-indigo-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Query
                    </h1>

                    <div class="">
                        Perform queries to the Bitcoin blockchain.
                    </div>
                </NuxtLink>

                <NuxtLink to="/sandbox/slpdb" class="col-span-3 p-3 mb-5 bg-indigo-300 border-4 border-indigo-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        SLPDB
                    </h1>

                    <div class="">
                        The simplest, fastest, and most liberating token system in existence.
                        SLP tokens can easily be created, traded, and managed on the Bitcoin Cash blockchain within seconds; costing the user only fractions of a penny for each transaction.
                    </div>
                </NuxtLink>

                <NuxtLink to="/sandbox/transaction" class="col-span-3 p-3 mb-5 bg-indigo-300 border-4 border-indigo-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Transaction
                    </h1>

                    <div class="">
                        Perform experiments on Bitcoin Cash transactions.
                    </div>
                </NuxtLink>

                <NuxtLink to="/sandbox/u2f" class="col-span-3 p-3 mb-5 bg-indigo-300 border-4 border-indigo-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Universal 2-Factor Authentication
                    </h1>

                    <div class="">
                        Build and experiment with U2F.
                    </div>
                </NuxtLink>

                <NuxtLink to="/sandbox/wallet" class="col-span-3 p-3 mb-5 bg-indigo-300 border-4 border-indigo-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Wallet
                    </h1>

                    <div class="">
                        Build and experiment with Bitcoin Cash wallets.
                    </div>
                </NuxtLink>

            </div>

            <aside class="block col-span-2">
                <div class="sticky p-5 top-10 bg-indigo-300 border-4 border-indigo-500 rounded-xl">
                    <div class="flex items-center">
                        <svg class="w-8 h-8 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
                        <h1 class="ml-2 text-3xl text-gray-100 font-medium">
                            Sandbox
                        </h1>
                    </div>

                    <div class="mt-3">
                        <p class="text-indigo-900">
                            Sandbox is a "safe" workspace for developers to Plan, Build and Test their newest Crypto ideas.
                        </p>

                        <button class="my-2 py-1 px-3 flex w-full justify-center bg-indigo-600 border-2 border-indigo-800 rounded-lg shadow hover:bg-indigo-700">
                            <small class="text-gray-100">
                                <span class="block font-bold">Ready to go LIVE?</span>
                                Switch from Testnet to Mainnet and go for it!
                            </small>
                        </button>

                        <div class="mt-7 grid grid-cols-3 gap-5">
                            <div class="col-span-1 text-gray-100 font-medium">
                                Prototype
                            </div>

                            <div class="col-span-2 text-indigo-900 text-sm">
                                Build new functions and test your ideas.
                            </div>

                            <div class="col-span-1 text-gray-100 font-medium">
                                Collaborate
                            </div>

                            <div class="col-span-2 text-indigo-900 text-sm">
                                Share your experiments with other developers to review and comment.
                            </div>

                            <div class="col-span-1 text-gray-100 font-medium">
                                Deploy
                            </div>

                            <div class="col-span-2 text-indigo-900 text-sm">
                                After you've completed your experiment; our integrations with GitHub and GitLab will make publishing quick and easy.
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
    head: () => ({
        title: 'Sandbox — APECS Dev',
        meta: [
            {
                hid: 'description', // `vmid` for it as it will not work
                name: 'description',
                content: `Sandbox`
            }
        ]
    }),
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
