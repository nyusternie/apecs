<script setup lang="ts">
import { useSystemStore } from '@/stores/system'

/* Initialize System store. */
const System = useSystemStore()

const init = async () => {
    let body
    let response

    response = await fetch('https://api.telr.io/v1/ticker/quote/BCH')
    // console.log('STATUS RESPONSE', response)

    body = await response.json()
    // console.log('BODY', body)

    /* Verify body (price) results. */
    if (body && body.price) {
        /* Set Bitcoin Cash quote. */
        System.quotes.BCH = body
    }

    // FIXME FOR DEV PURPOSES ONLY
    System.quotes.NEXA = { price: 0.00001 }
}

onMounted(() => {
    init()
})

// onBeforeUnmount(() => {
//     console.log('Before Unmount!')
//     // Now is the time to perform all cleanup operations.
// })
</script>

<template>
    <!--
    When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars

    Menu open: "fixed inset-0 z-40 overflow-y-auto", Menu closed: ""
  -->
    <main class="bg-white shadow-sm lg:static lg:overflow-y-visible">
        <div class="w-full px-4 sm:px-6 lg:px-8">
            <div class="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">

                <div class="hidden lg:flex">
                    <div class="flex-shrink-0 flex items-center cursor-pointer px-5" @click="toggleMenu">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </div>
                </div>

                <div class="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                    <div class="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                        <div class="w-full">
                            <label for="search" class="sr-only">Search</label>

                            <div class="relative">
                                <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <!-- Heroicon name: solid/search -->
                                    <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                    </svg>
                                </div>

                                <input
                                    id="global-search"
                                    class="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                                    placeholder="What can I find for you Dev?    ( use shortcut: Ctrl + K )"
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                    <!-- Mobile menu button -->
                    <button
                        type="button"
                        class="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Open menu</span>
                        <!--
              Icon when menu is closed.

              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
                        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <!--
              Icon when menu is open.

              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
                        <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div class="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                    <button class="text-2xl font-bold text-gray-400 text-center group" @click="openNetworkMenu">
                        <span class="group-hover:text-indigo-400">
                            {{displayPrice}}
                        </span>

                        <span class="block text-sm text-gray-300 group-hover:text-gray-400">
                            BCH/USD
                        </span>
                    </button>

                    <button class="ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
                        <span class="sr-only">View notifications</span>
                        <!-- Heroicon name: outline/bell -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                    </button>

                    <!-- Profile dropdown -->
                    <div class="flex-shrink-0 relative ml-5">
                        <div>
                            <button type="button" class="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                <span class="sr-only">Open user menu</span>
                                <img class="h-8 w-8 rounded-full" src="@/assets/img/cyber-hacker-icon.jpg" alt="" />
                            </button>
                        </div>

                        <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
                        <div
                            class="hidden origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-menu-button"
                            tabindex="-1"
                        >
                            <!-- Active: "bg-gray-100", Not Active: "" -->
                            <a href="javascript://" class="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>

                            <a href="javascript://" class="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>

                            <a href="javascript://" class="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                        </div>
                    </div>

                    <button
                        class="flex-none ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 uppercase"
                        @click="connect"
                    >
                        Get Connected
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <nav v-if="showMobileMenu" class="lg:hidden" aria-label="Global">
            <div class="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                <!-- Current: "bg-gray-100 text-gray-900", Default: "hover:bg-gray-50" -->
                <a href="javascript://" aria-current="page" class="bg-gray-100 text-gray-900 block rounded-md py-2 px-3 text-base font-medium text-gray-900">
                    Home
                </a>

                <a href="javascript://" class="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium text-gray-900">
                    Popular
                </a>

                <a href="javascript://" class="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium text-gray-900">
                    Communities
                </a>

                <a href="javascript://" class="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium text-gray-900">
                    Trending
                </a>
            </div>

            <div class="border-t border-gray-200 pt-4">
                <div class="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                    <div class="flex-shrink-0">
                        <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </div>

                    <div class="ml-3">
                        <div class="text-base font-medium text-gray-800">Chelsea Hagon</div>
                        <div class="text-sm font-medium text-gray-500">chelseahagon@example.com</div>
                    </div>

                    <button type="button" class="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
                        <span class="sr-only">View notifications</span>
                        <!-- Heroicon name: outline/bell -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                    </button>
                </div>

                <div class="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
                    <a href="javascript://" class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Your Profile</a>

                    <a href="javascript://" class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Settings</a>

                    <a href="javascript://" class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">Sign out</a>
                </div>
            </div>

            <div class="mt-6 max-w-3xl mx-auto px-4 sm:px-6">
                <a href="javascript://" class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700">
                    New Post
                </a>

                <div class="mt-6 flex justify-center">
                    <a href="javascript://" class="text-base font-medium text-gray-900 hover:underline">
                        Go Premium
                    </a>
                </div>
            </div>
        </nav>
    </main>
</template>

<script lang="ts">
/* Import modules. */
import numeral from 'numeral'

export default {
    props: {
        pageId: String
    },
    data: () => {
        return {
            usd: null,

            showMobileMenu: null,
        }
    },
    computed: {
        displayPrice: function () {
            if (!this.usd) return '$0.00'

            return numeral(this.usd).format('$0.00')
        },

        title: function () {
            switch(this.pageId) {
            case 'dashboard':
                return 'Dashboard'
            case 'stats':
                return 'Bitcoin Statistics'
            case 'status':
                return 'Community & Network Status'
            case 'ver':
                return 'Ver: Node Virtual Assistant'

            case 'blockchains':
                return 'Blockchain Insights'
            case 'discuss':
                return 'Discuss'
            case 'events':
                return 'Event Calendar'
            case 'markets':
                return 'Market Insights'
            case 'privacy':
                return 'Privacy Insights'
            case 'news':
                return 'Headline News'

            /* Desktop */
            case 'file-mgr':
                return 'File Manager'
            case 'notebook':
                return 'Notebook'

            /* Profiles */
            case 'contributors':
                return 'Contributors'
            case 'profile':
                return 'Profile'

            /* Projects */
            case 'projects':
            case 'project-detail':
                return 'Projects'

            /* Workspaces */
            case 'code-editor':
                return 'Code Editor'
            case 'graphics-studio':
                return 'Graphics Studio'
            case 'sandbox':
                return 'Sandbox'

            /* Support */
            case 'buidling':
                return 'BUIDLing 101'
            case 'faq':
                return 'FAQ'
            case 'guides':
                return 'Guides & Tutorials'
            case 'matrix':
                return 'Matrix'
            case 'slack':
                return 'Slack'
            case 'tickets':
                return 'Support Tickets'

            default:
                return 'Unknown Page'
            }
        },

    },
    methods: {
        async init() {
            let body
            let response

            response = await fetch('https://api.telr.io/v1/ticker/quote/BCH')
            // console.log('STATUS RESPONSE', response)

            body = await response.json()
            // console.log('BODY', body)

            if (body.price) {
                this.usd = body.price
            }
        },

        /**
         * Go To
         *
         * Navigates to a page location (in the router).
         */
        goTo(_location) {
            this.$router.push(_location)
        },

        toggleMenu() {
            console.log('TOGGLE MENU')
            this.$emit('toggleMenu')
        },

        openNetworkMenu() {
            alert(`Choose a supported network:
    - Bitcoin Cash (BCH)
    - Bitcoin Lightning (BTC)
    - Dash (DASH)
    - eCash (XEC)
    - Ethereum (ETH)
    - Litecoin (LTC)
    - Monero (XMR)
    - Nexa (NEX)
    - Polygon (MATIC)
    - Tron (TRX)
    - Zcash (ZEC)
`)
        },

        connect() {
            alert(`Choose a blockchain to manage your on-chain data:
    1. Avalanche
    2. Binance
    3. Ethereum
    4. Nexaverse
    5. Polygon
    6. Smart Bitcoin
    7. Tron`)
        }

    },
    created: function () {
        this.usd = 0

        this.showMobileMenu = false

        /* Update USD. */
        this.init()
    },
    mounted: function () {
        //
    },
}
</script>
