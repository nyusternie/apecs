<script setup>
import { storeToRefs } from 'pinia'

import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()

const {
    count: myCount,
    doubleCount: nextCounter
} = storeToRefs(store)

const tryCounter = () => {
    console.log('increment')
    store.increment()
}
</script>

<template>
    <!-- <main class="relative min-h-screen bg-gray-100"> -->
    <main class="py-8 overflow-x-hidden overflow-y-hidden bg-green-400">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 class="sr-only">Profile</h1>
            <!-- Main 3 column grid -->
            <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                <!-- Left column -->
                <div class="grid grid-cols-1 gap-4 lg:col-span-2">
                    <!-- Welcome panel -->
                    <section aria-labelledby="profile-overview-title">
                        <div class="rounded-lg bg-white overflow-hidden shadow">
                            <h2 class="sr-only" id="profile-overview-title">Profile Overview</h2>
                            <div class="bg-white p-6">
                                <div class="sm:flex sm:items-center sm:justify-between">
                                    <div class="sm:flex sm:space-x-5">
                                        <div class="flex-shrink-0">
                                            <img
                                                class="mx-auto h-20 w-20 rounded-full"
                                                src="~/assets/img/logos/smartbch.png"
                                                alt=""
                                            />
                                        </div>
                                        <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                                            <p class="text-sm font-medium text-gray-600">
                                                Connected to Mainnet
                                            </p>

                                            <p class="text-xl font-bold text-gray-900 sm:text-2xl">
                                                Bitcoin Cash
                                            </p>

                                            <p class="text-sm font-medium text-gray-600">
                                                {{account}}
                                            </p>
                                        </div>
                                    </div>

                                    <div class="mt-5 flex justify-center sm:mt-0">
                                        <a @click="testMetaMask" href="javascript://" class="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                            Test MetaMask
                                        </a>

                                        <a @click="tryCounter" href="javascript://" class="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                            Try Counter
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                                <div class="px-6 py-5 text-sm font-medium text-center">
                                    <span class="block text-gray-600">Latest Block Height</span>
                                    <span class="block text-gray-900">{{displayBlockHeight}}</span>
                                </div>

                                <div class="px-6 py-5 text-sm font-medium text-center">
                                    <span class="block text-gray-600">Last Block Validator</span>
                                    <span class="block text-gray-900">{{myCount}}</span>
                                </div>

                                <div class="px-6 py-5 text-sm font-medium text-center">
                                    <span class="block text-gray-600">Next Difficulty Adjustment</span>
                                    <span class="block text-gray-900">{{nextCounter}}</span>
                                </div>
                            </div>

                        </div>
                    </section>

                    <!-- Actions panel -->
                    <section aria-labelledby="quick-links-title">
                        <div class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
                            <h2 class="sr-only" id="quick-links-title">Quick links</h2>

                            <div class="rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                                <div>
                                    <span class="rounded-lg inline-flex p-3 bg-teal-50 text-teal-700 ring-4 ring-white">
                                        <!-- Heroicon name: outline/clock -->
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                </div>
                                <div class="mt-8">
                                    <h3 class="text-lg font-medium">
                                        <a href="javascript://" class="focus:outline-none">
                                            <!-- Extend touch target to entire panel -->
                                            <span class="absolute inset-0" aria-hidden="true"></span>
                                            Getting Started
                                        </a>
                                    </h3>
                                    <p class="mt-2 text-sm text-gray-500">
                                        Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                                    </p>
                                </div>
                                <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
                                        />
                                    </svg>
                                </span>
                            </div>

                            <div class="sm:rounded-tr-lg relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                                <div>
                                    <span class="rounded-lg inline-flex p-3 bg-purple-50 text-purple-700 ring-4 ring-white">
                                        <!-- Heroicon name: outline/badge-check -->
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <div class="mt-8">
                                    <h3 class="text-lg font-medium">
                                        <NuxtLink to="/smartbch/contracts" class="focus:outline-none">
                                            <!-- Extend touch target to entire panel -->
                                            <span class="absolute inset-0" aria-hidden="true"></span>
                                            Notable Contracts
                                        </NuxtLink>
                                    </h3>

                                    <p class="mt-2 text-sm text-gray-500">
                                        Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                                    </p>
                                </div>
                                <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
                                        />
                                    </svg>
                                </span>
                            </div>

                            <div class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                                <div>
                                    <span class="rounded-lg inline-flex p-3 bg-sky-50 text-sky-700 ring-4 ring-white">
                                        <!-- Heroicon name: outline/users -->
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </span>
                                </div>
                                <div class="mt-8">
                                    <h3 class="text-lg font-medium">
                                        <NuxtLink to="/snippets/sol" class="focus:outline-none">
                                            <!-- Extend touch target to entire panel -->
                                            <span class="absolute inset-0" aria-hidden="true"></span>
                                            Solidity Code Snippets
                                        </NuxtLink>
                                    </h3>
                                    <p class="mt-2 text-sm text-gray-500">
                                        Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                                    </p>
                                </div>
                                <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
                                        />
                                    </svg>
                                </span>
                            </div>

                            <div class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                                <div>
                                    <span class="rounded-lg inline-flex p-3 bg-yellow-50 text-yellow-700 ring-4 ring-white">
                                        <!-- Heroicon name: outline/cash -->
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <div class="mt-8">
                                    <h3 class="text-lg font-medium">
                                        <NuxtLink to="/smartbch/exchange" class="focus:outline-none">
                                            <!-- Extend touch target to entire panel -->
                                            <span class="absolute inset-0" aria-hidden="true"></span>
                                            Exchange
                                        </NuxtLink>
                                    </h3>
                                    <p class="mt-2 text-sm text-gray-500">
                                        Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                                    </p>
                                </div>
                                <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
                                        />
                                    </svg>
                                </span>
                            </div>

                            <div class="sm:rounded-bl-lg relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                                <div>
                                    <span class="rounded-lg inline-flex p-3 bg-rose-50 text-rose-700 ring-4 ring-white">
                                        <!-- Heroicon name: outline/receipt-refund -->
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                                        </svg>
                                    </span>
                                </div>
                                <div class="mt-8">
                                    <h3 class="text-lg font-medium">
                                        <NuxtLink to="/smartbch/verify" class="focus:outline-none">
                                            <!-- Extend touch target to entire panel -->
                                            <span class="absolute inset-0" aria-hidden="true"></span>
                                            Contract Verification
                                        </NuxtLink>
                                    </h3>
                                    <p class="mt-2 text-sm text-gray-500">
                                        Quickly and easily verify your smart contracts are deployed with the proper bytecode.
                                    </p>
                                </div>
                                <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
                                        />
                                    </svg>
                                </span>
                            </div>

                            <div class="rounded-bl-lg rounded-br-lg sm:rounded-bl-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                                <div>
                                    <span class="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                                        <!-- Heroicon name: outline/academic-cap -->
                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <div class="mt-8">
                                    <h3 class="text-lg font-medium">
                                        <a href="javascript://" class="focus:outline-none">
                                            <!-- Extend touch target to entire panel -->
                                            <span class="absolute inset-0" aria-hidden="true"></span>
                                            Hire A Developer
                                        </a>
                                    </h3>
                                    <p class="mt-2 text-sm text-gray-500">
                                        Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                                    </p>
                                </div>
                                <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </section>
                </div>

                <!-- Right column -->
                <div class="grid grid-cols-1 gap-4">
                    <Blocks :blockHeight="blockHeight" />

                    <Txs />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
/* Import modules. */
import { ethers } from 'ethers'
import numeral from 'numeral'

/* Import components. */
import Blocks from './Blocks'
import Txs from './Txs'

export default {
    components: {
        Blocks,
        Txs,
    },
    head: () => ({
        title: 'Bitcoin Cash — APECS Dev',
        meta: [
            {
                hid: 'description', // `vmid` for it as it will not work
                name: 'description',
                content: `Bitcoin Cash`
            }
        ]
    }),
    data: () => {
        return {
            account: null,
            blockHeight: null,
            blocks: null,
        }
    },
    computed: {
        displayBlockHeight() {
            if (!this.blockHeight) {
                return 0
            }

            return numeral(Number(this.blockHeight)).format('0,0')
        }
    },
    methods: {
        async init() {

            setInterval(() => {
                this.refresh()
            }, 1000)
        },

        async testMetaMask() {
            console.log('STARTING METAMASK TEST..')

            /* Validate embedded Web3 objects. */
            if (!window.ethereum && !window.bitcoin) {
                /* Validate embedded ethereum object. */
                if (window.bitcoin) {
                    console.info('Found Bitcoin provider.')
                } else if (window.ethereum) {
                    console.info('Found Ethereum provider.')
                } else {
                    return console.error('No Web3 provider found.')
                }
            }

            /* Initialize provider. */
            const provider = new ethers
                .providers
                .Web3Provider(window.ethereum, 'any')

            /* Prompt user for account connections. */
            await provider
                .send('eth_requestAccounts', [])
                .catch(err => console.error(err))

            // await provider.send('wallet_watchAsset', {
            //     type: 'ERC20',
            //     options: {
            //         address: '0x0',
            //         symbol: 'NAME',
            //         decimals: 18,
            //         image: 'https://url.here',
            //     },
            // })
            // .catch(err => console.error(err))

            /* Set signer. */
            const signer = provider.getSigner()

            /* Request account. */
            this.account = await signer.getAddress()
            console.log('Account:', this.account)

            // const encryptedMessage = '0x94dac27aa0a733b6561bcf39ca05299595f3eba5f47c93b733c0b4f4674d022f3de31d024c0d427cac86465a565929f340cde5693547ad560000845787ba86be1b'
            const encryptedMessage = '0x8996f12a91473c48f0c1df0534d7319def26f0fe756428ec2af08794125477ba6703242c211d858241c47a3c7ba1925dbb2baf9fdb42c71f08cd738139a86f211b'

            const msg = await provider
                .send('eth_decrypt', [ encryptedMessage, this.account ])
                .catch(err => console.error(err))
            console.log('DECRYPTED MESSAGE', msg)

            // const encryptionKey = await provider
            //     .send('eth_getEncryptionPublicKey', [ this.account ])
            //     .catch(err => console.error(err))
            // console.log('ENCRYPTION KEY', encryptionKey)

        },

        async testSigning() {
            console.log('STARTING SIGNING TEST..')

            /* Validate embedded Web3 objects. */
            if (!window.ethereum && !window.bitcoin) {
                /* Validate embedded ethereum object. */
                if (window.bitcoin) {
                    console.info('Found Bitcoin provider.')
                } else if (window.ethereum) {
                    console.info('Found Ethereum provider.')
                } else {
                    return console.error('No Web3 provider found.')
                }
            }

            /* Initialize provider. */
            const provider = new ethers
                .providers
                .Web3Provider(window.ethereum, 'any')

            /* Set signer. */
            const signer = provider.getSigner()

            /* Request account. */
            this.account = await signer.getAddress()
            console.log('Account:', this.account)

            // All properties on a domain are optional
            // const domain = {
            //     name: 'APECS',
            //     version: '1',
            //     chainId: 0x2711,
            //     // verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC'
            // }

            // The named list of all type definitions
            // const types = {
            //     Person: [
            //         { name: 'name', type: 'string' },
            //         { name: 'wallet', type: 'address' }
            //     ],
            //     Mail: [
            //         { name: 'from', type: 'Person' },
            //         { name: 'to', type: 'Person' },
            //         { name: 'contents', type: 'string' }
            //     ],
            // }

            // The data to sign
            // const value = {
            //     from: {
            //         name: 'Cow',
            //         wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826'
            //     },
            //     to: {
            //         name: 'Bob',
            //         wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB'
            //     },
            //     contents: 'Hello, Bob!'
            // }

            // const signature = await signer
            //     ._signTypedData(domain, types, value)
            //     .catch(err => console.error(err))
            // console.log('SIGNATURE', signature)

            const plaintext = 'hi there everyone!'

            const signature = await signer
                .signMessage(plaintext)
                .catch(err => console.error(err))
            console.log('SIGNATURE', signature)


        },

        smartBCHProvider: function () {
            return {
                chainId: "0x2710",
                rpcUrls: [
                    "https://smartbch.greyh.at",
                    "https://smartbch.fountainhead.cash/mainnet",
                ],
                chainName: "smartBCH",
                nativeCurrency: {
                    name: "Bitcoin Cash",
                    symbol: "BCH",
                    decimals: 18,
                },
                blockExplorerUrls: ["https://smartscan.cash"],
                iconUrls: ["https://smartmask.cash/img/smartbch_logo.png"],
            }
        },

        attemptMetaMaskProviderRegistration: async function () {
            try {
                await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0x2710" }],
                })
                return true
            } catch (switchError) {
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    try {
                        await window.ethereum.request({
                            method: "wallet_addEthereumChain",
                            params: [this.smartBCHProvider()],
                        });

                        return true;
                    } catch (addError) {
                        return false;
                    }
                }

                return false
            }
        },

        async refresh() {
            /* Build request. */
            const request = {
                id: 0,
                jsonrpc: '2.0',
                method: 'eth_blockNumber',
            }

            /* Make RPC request. */
            const response = await fetch
                // .post('https://smartbch.apecs.dev/mainnet')
                .post('https://smartbch.fountainhead.cash/mainnet')
                .set('Content-Type', 'application/json')
                .send(request)
                .catch(err => console.error(err))
            // console.log('STATUS RESPONSE', response)

            /* Validate response. */
            if (!response) {
                throw new Error('Request failed to SmartBCH node.')
            }

            /* Set body. */
            const body = response.body
            // console.log('BODY (getHeight)', body)

            /* Validate body result. */
            if (body && body.result) {
                this.blockHeight = body.result
            }

        },

    },
    created: async function () {
        /* Initialize block height. */
        // NOTE: Use hex format.
        this.blockHeight = '0x0'

        /* Initialize (connected) account. */
        this.account = 'no account connected'

        /* Start initialization. */
        // this.init()
    },
    mounted: function () {
        //
    },
}
</script>
