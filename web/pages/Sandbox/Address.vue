<script setup>
import { ref } from 'vue'

const cashAddress = ref(null)
const legacyAddress = ref(null)
const publicKey = ref(null)
const rawTxHex = ref(null)
const seed = ref(null)
const ccAddress = ref(null)
</script>

<template>
    <NuxtLayout name="sandbox">
        <template #intro>
            <div class="max-w-xl">
                <h2 class="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    Address
                </h2>

                <p class="mt-5 text-xl text-indigo-300">
                    Create addresses based on user-defined scripts.
                </p>
            </div>
        </template>

        <template #options>
            <div class="mt-10 w-full max-w-xs lg:mt-0">
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
            </div>
        </template>

        <!-- Page Section -->
        <template #main>
            <section class="p-3">

                <textarea
                    class="block border-4 border-indigo-500 rounded-lg"
                    rows="3"
                    placeholder="Paste raw hex code here"
                    v-model="rawTxHex"
                ></textarea>

                <section class="my-5 p-3 w-fit border-4 border-yellow-300 bg-yellow-100 rounded-lg shadow">
                    <h2 class="text-2xl font-medium">Private Seed Phrase</h2>

                    {{seed}}
                </section>

                <section class="my-5 p-3 w-fit border-4 border-yellow-300 bg-yellow-100 rounded-lg shadow">
                    <h2 class="text-2xl font-medium">Public Key</h2>

                    {{binToHex(publicKey)}}
                </section>

                <section class="my-5 p-3 w-fit border-4 border-yellow-300 bg-yellow-100 rounded-lg shadow">
                    <h2 class="text-2xl font-medium">Cash Address</h2>

                    {{cashAddress}}
                </section>

                <section class="my-5 p-3 w-fit border-4 border-yellow-300 bg-yellow-100 rounded-lg shadow">
                    <h2 class="text-2xl font-medium">Cross-chain Address</h2>

                    {{ccAddress}}
                </section>

                <section class="my-5 p-3 w-fit border-4 border-yellow-300 bg-yellow-100 rounded-lg shadow">
                    <h2 class="text-2xl font-medium">Legacy Address</h2>

                    {{legacyAddress}}
                </section>

                <div class="row">

                    <div class="col-md-6">

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-info-circle mr-1"></i>
                                    Address Help
                                </h3>
                            </div>

                            <div class="card-body">
                                <div class="mt-0 mb-3">
                                </div>

                                <dl class="row">
                                    <dt class="col-sm-4"># of Participants</dt>
                                    <dd class="col-sm-8">
                                        Minimum: <strong class="text-info">8</strong> <em>(can be as low as 6)</em>
                                        <br />Maximum: <strong class="text-info">25</strong> <em>(100 KiB tx limit)</em>
                                    </dd>

                                    <dt class="col-sm-4"># of Fusion Pools</dt>
                                    <dd class="col-sm-8">
                                        Up to <strong class="text-info">48</strong> per server
                                        <br />Lowest: <strong class="text-info">100.00 bits</strong> <small><strong class="text-danger">{{fiat(10000)}}</strong> USD</small>
                                        <br />Highest: <strong class="text-info">0.82 BCH</strong> <small><strong class="text-danger">{{fiat(82000000)}}</strong> USD</small>
                                    </dd>
                                    <!-- <dd class="col-sm-8 offset-sm-4">Donec id elit non mi porta gravida at eget metus.</dd> -->

                                    <dt class="col-sm-4">Avg Completion</dt>
                                    <dd class="col-sm-8">
                                        Minimum: <strong class="text-info">7min</strong> <em>(lower if tier is full)</em>
                                        <br />Maximum: <strong class="text-info">20min or more</strong>
                                    </dd>

                                    <dt class="col-sm-4">Felis euismod semper eget lacinia</dt>
                                    <dd class="col-sm-8">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                                        sit amet risus.
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>

        <!-- <section class="mt-5">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quasi magnam! Qui deleniti, nulla ipsam voluptatum, non quis ut libero at ipsum delectus, placeat perspiciatis. Atque repellat id earum dolorem?
            </p>
        </section> -->
    </NuxtLayout>
</template>

<script>
/* Import modules. */
import { ethers } from 'ethers'
import numeral from 'numeral'

import {
    binToHex,
    CashAddressType,
    encodeBase58Address,
    encodeCashAddress,
    hexToBin,
    instantiateSha256,
    instantiateSecp256k1,
    instantiateRipemd160,
} from '@bitauth/libauth'

export default {
    data: () => {
        return {
            // bitbox: null,
            usd: 0,
        }
    },
    computed: {
        //
    },
    methods: {
        /**
         * Update Price
         */
        async updatePrice() {
            try {
                // const current = await this.bitbox.Price.current('usd')
                // console.log('CURRENT PRICE', current)

                // this.usd = current
            } catch (err) {
                console.error(err)
            }
        },

        /**
         * Satoshis
         *
         * Formated with commas.
         */
        satoshis(_satoshis) {
            return numeral(_satoshis).format('0,0')
        },

        /**
         * Bitcoin Cash (BCH)
         *
         * Calculated from satoshis to BCH value.
         */
        bch(_satoshis) {
            /* Calculate BCH value. */
            const bchVal = parseFloat(_satoshis / 100000000.0)

            return numeral(bchVal).format('0,0.[0000]')
        },

        /**
         * Fiat
         *
         * Calculated from satoshis to fiat (USD) value.
         */
        fiat(_satoshis) {
            /* Validate USD price. */
            if (!this.usd) {
                return 0.00
            }

            /* Calculate BCH value. */
            const bchVal = parseFloat(_satoshis / 100000000.0)

            /* Calculate fiat value. */
            const fiat = bchVal * parseFloat(this.usd / 100.0)

            /* Return value. */
            return numeral(fiat).format('$0,0.00[00]')
        },

        async createAddress () {
            /* Instantiate Libauth crypto interfaces. */
            const secp256k1 = await instantiateSecp256k1()
            const sha256 = await instantiateSha256()
            const ripemd160 = await instantiateRipemd160()

            const wallet = ethers.Wallet.createRandom()
            this.seed = wallet.mnemonic.phrase
            // console.log('SEED', this.seed)

            this.ccAddress = wallet.address
            // console.log('0x address:', this.ccAddress)

            /* Generate signature hash and entropy. */
            const signatureHash = ethers.utils.id(this.seed)
            const signatureEntropy = ethers.BigNumber.from(signatureHash)

            /* Format the private key to binary. */
            // NOTE: Start at position 2 to omit the 0x prefix added by toHexString.
            const privateKey = hexToBin('0613f975dadcc86efd95c19311b12a812c4dd34bbec52b9ccf34967f7c326bb3')

            /* Derive the corresponding public key. */
            this.publicKey = secp256k1.derivePublicKeyCompressed(privateKey)
            // console.log('Public key', this.publicKey)
            // console.log('Public key (hex)', binToHex(this.publicKey))

            /* Hash the public key hash according to the P2PKH scheme. */
            const publicKeyHash = ripemd160.hash(sha256.hash(this.publicKey))

            /* Encode the public key hash into a P2PKH cash address. */
            this.cashAddress = encodeCashAddress(
                'bitcoincash', CashAddressType.P2PKH, publicKeyHash)
            // console.log('Cash address:', this.cashAddress)

            this.legacyAddress = encodeBase58Address(
                sha256, 'p2pkh', publicKeyHash)
            // console.log('Legacy address:', this.legacyAddress)

        },

    },
    created: async function () {
        /* Update USD. */
        // this.updatePrice()

        this.createAddress()
    },
    mounted: function () {
        //
    },
    beforeDestroy: function () {
        //
    },
}
</script>

<style scoped>
/*  */
</style>
