<template>
    <NuxtLayout name="sandbox">
        <template #intro>
            <main class="max-w-xl">
                <h2 class="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    Transaction
                </h2>

                <p class="mt-5 text-xl text-indigo-300">
                    Perform a comprehensive suite of <span class="text-gray-100 font-medium">automated audits</span> on your application's transactions.
                </p>
            </main>
        </template>

        <template #options>
            <main class="mt-10 w-full max-w-xs lg:mt-0">
                <label for="currency" class="block text-base font-medium text-indigo-300 uppercase">
                    Choose Your Platform
                </label>

                <div class="mt-1.5 relative">
                    <select id="currency" name="currency" class="block w-full bg-none bg-indigo-400 bg-opacity-25 border border-transparent text-white focus:ring-white focus:border-white rounded-md">
                        <option class="bg-gray-900">Binance Smart Chain (BSC)</option>
                        <option class="bg-gray-900">Ethereum (ETH)</option>
                        <option class="bg-gray-900" selected>Smart Bitcoin (sBCH)</option>
                    </select>

                    <div class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                        <!-- Heroicon name: solid/chevron-down -->
                        <svg class="h-4 w-4 text-indigo-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </main>
        </template>

        <!-- Page Section -->
        <template #main>
            <main class="p-3 flex grid grid-cols-5 gap-5">

                    <div class="col-span-5 relative z-0 inline-flex shadow-sm rounded-md">
                        <button
                            type="button"
                            class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <!-- Heroicon name: solid/bookmark -->
                            <svg class="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                            </svg>
                            ID
                        </button>

                        <button
                            type="button"
                            class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <!-- Heroicon name: solid/bookmark -->
                            <svg class="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                            </svg>
                            Raw
                        </button>

                        <button
                            type="button"
                            class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <!-- Heroicon name: solid/bookmark -->
                            <svg class="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                            </svg>
                            Advanced
                        </button>

                        <button
                            type="button"
                            class="-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            12k
                        </button>
                    </div>

                    <section class="col-span-3">
                        <button @click="withdraw" class="my-5 px-3 py-2 bg-yellow-200 border-2 border-yellow-400 rounded-lg">
                            Test Withdraw
                        </button>

                        <!-- <TxIdDetails /> -->

                        <DecodeRawTx />
                    </section>

                    <aside class="block col-span-2">
                        <div class="sticky p-5 top-10 bg-pink-300 border-4 border-pink-500 rounded-xl">
                            <div class="flex items-center">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-widivh="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <h1 class="text-2xl ml-2">Transaction Guide</h1>
                            </div>


                            <div class="">

                                <div class="row">

                                    <div class="col-md-6">

                                        <div class="card">
                                            <div class="card-header">
                                            </div>

                                            <div class="card-body">
                                                <dl class="row">
                                                    <dt class="col-sm-4">Description lists</dt>
                                                    <dd class="col-sm-8">A description list is perfect for defining terms.</dd>
                                                    <dt class="col-sm-4">Euismod</dt>
                                                    <dd class="col-sm-8">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                                                    <dd class="col-sm-8 offset-sm-4">Donec id elit non mi porta gravida at eget metus.</dd>
                                                    <dt class="col-sm-4">Malesuada porta</dt>
                                                    <dd class="col-sm-8">Etiam porta sem malesuada magna mollis euismod.</dd>
                                                    <dt class="col-sm-4">Felis euismod semper eget lacinia</dt>
                                                    <dd class="col-sm-8">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                                                        sit amet risus.
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </aside>

            </main>
        </template>
    </NuxtLayout>
</template>

<script>
/* Import modules. */
import { ethers } from 'ethers'

import {
    binToHex,
    CashAddressType,
    encodeCashAddress,
    encodePrivateKeyWif,
    hexToBin,
    instantiateSha256,
    instantiateSecp256k1,
    instantiateRipemd160,
} from '@bitauth/libauth'

import broadcast from '../../libs/broadcast'
import cashaddr from '../../libs/cashaddr'
import createBCHTransaction from '../../libs/createBCHTransaction'
import getUnspentOutputs from '../../libs/getUnspentOutputs'

import DecodeRawTx from './Transaction/DecodeRawTx'
import TxIdDetails from './Transaction/TxIdDetails'

const TEST_ADDRESS = 'bitcoincash:qz4ae49sckad73mascc0vpmzh5tzdfg5sv7tcgqhkn'

export default {
    components: {
        DecodeRawTx,
        TxIdDetails,
    },
    data: () => ({
        //
    }),
    head: () => ({
        title: 'Transaction — Cash DevOps',
        meta: [
            {
                hid: 'description', // `vmid` for it as it will not work
                name: 'description',
                content: 'Perform various transaction operations.'
            }
        ]
    }),
    computed: {
        //
    },
    methods: {
        async withdraw () {
            /* Set (BIP39) seed phrase. */
            const seed = 'bacon mind chronic bean luxury endless ostrich festival bicycle dragon worth balcony' // FOR DEV PURPOSES ONLY

            /* Instantiate Libauth crypto interfaces. */
            const secp256k1 = await instantiateSecp256k1()
            const sha256 = await instantiateSha256()
            const ripemd160 = await instantiateRipemd160()

            /* Generate signature hash and entropy. */
            const signatureHash = ethers.utils.id(seed)
            // const signatureEntropy = ethers.BigNumber.from(signatureHash)

            /* Generate private key entropy using Hop Wallet Prime. */
            const privateKeyEntropy = ethers.BigNumber.from(signatureHash)
            // const privateKeyEntropy = signatureEntropy
            //     .mod(this.$store.state.HOP_WALLET_PRIME)

            /* Format the private key to binary. */
            // NOTE: Start at position 2 to omit the 0x prefix added by toHexString.
            const privateKey = hexToBin(
                privateKeyEntropy.toHexString().substring(2))
            console.log('PRIVATE KEY', privateKey)
            console.log('PRIVATE KEY (hex)', binToHex(privateKey))

            // Derive the corresponding public key.
            const publicKey = secp256k1.derivePublicKeyCompressed(privateKey)
            console.log('PUBLIC KEY', publicKey)
            console.log('PUBLIC KEY (hex)', binToHex(publicKey))

            /* Hash the public key hash according to the P2PKH scheme. */
            const publicKeyHash = ripemd160.hash(sha256.hash(publicKey))
            console.log('PUBLIC KEY HASH', publicKeyHash)

            /* Encode the public key hash into a P2PKH cash address. */
            const cashAddress = encodeCashAddress(
                'bitcoincash', CashAddressType.P2PKH, publicKeyHash)
            console.log('CASH ADDRESS', cashAddress)

            /* Encode the public key hash into a P2PKH nexa address. */
            const nexaAddress = cashaddr.encode('nexa', 'P2PKH', publicKeyHash)
            console.log('NEXA ADDRESS', nexaAddress)

            // Encode Private Key WIF.
            const privateKeyWIF = encodePrivateKeyWif(sha256, privateKey, 'mainnet')
            console.log('PRIVATE KEY (WIF):', privateKeyWIF)


            // Fetch all unspent transaction outputs for the temporary in-browser wallet.
            const unspentOutputs = await getUnspentOutputs(cashAddress)
            console.log('UNSPENT OUTPUTS', unspentOutputs)

            if (unspentOutputs.length === 0) {
                return console.error('There are NO unspent outputs available.')
            }

            // Create a bridge transaction without miner fee to determine the transaction size and therefor the miner fee.
            const transactionTemplate = await createBCHTransaction(
                privateKeyWIF,
                unspentOutputs,
                TEST_ADDRESS,
                0,
            )

            /* Set miner fee. */
            // NOTE: We used 1.1 (an extra 0.1) for added (fee) security.
            const minerFee = Math.floor(1.1 * transactionTemplate.byteLength)
            console.info(`Calculated mining fee: [ ${minerFee} ] sats`) // eslint-disable-line no-console

            // If there's funds and it matches our expectation, forward it to the bridge.
            const bridgeTransaction = await createBCHTransaction(
                privateKeyWIF,
                unspentOutputs,
                TEST_ADDRESS,
                minerFee,
            )
            console.log('TRANSACTION', bridgeTransaction)
            console.log('TRANSACTION (hex)', binToHex(bridgeTransaction))

            // Broadcast transaction
            // broadcast(binToHex(bridgeTransaction))
        },

    },
    created: async function () {
        //
    },
    mounted: function () {
        //
    },
}
</script>
