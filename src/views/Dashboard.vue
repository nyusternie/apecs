<template>
    <main class="pt-3 pb-24 mt-2">
    <!-- <div class="py-10 overflow-y-scroll"> -->
        <div class="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
            <main class="lg:col-span-12 xl:col-span-8">
                <div class="px-4 sm:px-0">
                    <div class="sm:hidden">
                        <label for="question-tabs" class="sr-only">Select a tab</label>

                        <select id="question-tabs" class="block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-rose-500 focus:ring-rose-500">
                            <option selected>Recent</option>

                            <option>Most Liked</option>

                            <option>Most Answers</option>
                        </select>
                    </div>

                    <div class="hidden sm:block">
                        <nav class="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
                            <!-- Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" -->
                            <a href="javascript://" aria-current="page" class="text-gray-900 rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
                                <span>Recent</span>
                                <span aria-hidden="true" class="bg-rose-500 absolute inset-x-0 bottom-0 h-0.5"></span>
                            </a>

                            <a href="javascript://" class="text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
                                <span>Most Liked</span>
                                <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
                            </a>

                            <a href="javascript://" class="text-gray-500 hover:text-gray-700 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
                                <span>Most Answers</span>
                                <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
                            </a>
                        </nav>
                    </div>
                </div>

                <div class="mt-5">
                    <h1 class="sr-only">Recent questions</h1>

                    <Card
                        v-for="entry in feed"
                        :key="entry.id"
                        class="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg mb-5"
                        :id="entry.id"
                        :title="entry.title"
                        :description="entry.description"
                        :url="entry.url"
                        :firstPost="entry.firstPost"
                        :posted="entry.posted"
                        :poster="entry.poster"
                        :posterAvatar="entry.posterAvatar"
                        :numViews="entry.numViews"
                        :numReplies="entry.numReplies"
                    />
                </div>
            </main>

            <aside class="hidden xl:block xl:col-span-4">
                <div class="mt-16">
                    <section aria-labelledby="who-to-follow-heading">
                        <div class="bg-white rounded-lg shadow">
                            <div class="p-6">
                                <h2 id="who-to-follow-heading" class="text-base font-medium text-gray-900">
                                    Who to follow
                                </h2>

                                <div class="mt-6 flow-root">
                                    <ul role="list" class="-my-4 divide-y divide-gray-200">
                                        <li class="flex items-center py-4 space-x-3">
                                            <div class="flex-shrink-0">
                                                <img
                                                    class="h-8 w-8 rounded-full"
                                                    src="https://i.imgur.com/TEZi1ru.png"
                                                    alt=""
                                                />
                                            </div>

                                            <div class="min-w-0 flex-1">
                                                <p class="text-sm font-medium text-gray-900">
                                                    <a href="javascript://">Anonymous</a>
                                                </p>

                                                <p class="text-sm text-gray-500">
                                                    <a href="javascript://">@libertarian0x0</a>
                                                </p>
                                            </div>

                                            <div class="flex-shrink-0">
                                                <button type="button" class="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100">
                                                    <!-- Heroicon name: solid/plus-sm -->
                                                    <svg class="-ml-1 mr-0.5 h-5 w-5 text-rose-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                                                    </svg>
                                                    <span>
                                                        Follow
                                                    </span>
                                                </button>
                                            </div>
                                        </li>

                                        <!-- More people... -->
                                    </ul>
                                </div>

                                <div class="mt-6">
                                    <a href="javascript://" class="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                        View all
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="mt-5" aria-labelledby="trending-heading">
                        <div class="bg-white rounded-lg shadow">
                            <div class="p-6">
                                <h2 id="trending-heading" class="text-base font-medium text-gray-900">
                                    Trending
                                </h2>

                                <img
                                    @click="openTrending"
                                    class="w-full mt-3 rounded-xl border-2 border-gray-500 p-1 cursor-pointer"
                                    src="https://i.imgur.com/PyHMIrZ.png"
                                    alt="What's Next for Bitcoin Cash?"
                                />

                                <div class="mt-3 flow-root">
                                    <ul role="list" class="-my-4 divide-y divide-gray-200">
                                        <li class="flex py-4 space-x-3">
                                            <div class="min-w-0 flex-1">
                                                <p class="text-sm text-gray-800">
                                                    Here is yesterday's "What's next for BCH" Twitter Spaces convo that 50+ people attended
                                                </p>

                                                <div class="mt-2 flex">
                                                    <span class="inline-flex items-center text-sm">
                                                        <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                                            <!-- Heroicon name: solid/chat-alt -->
                                                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                                                            </svg>
                                                            <span class="font-medium text-gray-900">291</span>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>

                                        <!-- More posts... -->
                                    </ul>
                                </div>
                                <div class="mt-6">
                                    <a href="javascript://" class="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                        View all
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </aside>
        </div>
    </main>
</template>

<script>
/* Import components. */
import Card from '@/components/Dashboard/Card'

/* Import (local) components. */
// import { Calendar } from '@/components/Dashboard'
// import { Featured } from '@/components/Dashboard'
// import { Feeds } from '@/components/Dashboard'
// import { Goals } from '@/components/Dashboard'
// import { Highlights } from '@/components/Dashboard'
// import { Newcomers } from '@/components/Dashboard'
// import { Todo } from '@/components/Dashboard'
// import { Trends } from '@/components/Dashboard'
// import { Updates } from '@/components/Dashboard'

export default {
    components: {
        Card,

        // Calendar,
        // Featured,
        // Feeds,
        // Goals,
        // Highlights,
        // Newcomers,
        // Todo,
        // Trends,
        // Updates,
    },
    data: () => {
        return {
            feed: null,
            // showFeedMenu: null,
        }
    },
    methods: {
        openTrending() {
            window.open('https://www.reddit.com/r/btc/comments/qdqa9a/here_is_yesterdays_whats_next_for_bch_twitter/')
        },

    },
    created: function () {
        this.feed = []

        this.feed.push({
            id: 'b2cdc3c4-8cff-4f5d-9ca2-284bfcf334e7',
            title: `Why some services can not adopt 0-confirmation transactions`,
            description: `If a service accepts 0-confirmation deposits and they let users withdraw their Bitcoin Cash, then that service is at high risk for exploitation. Below describes how this attack works.`,
            url: 'https://bitcoincashresearch.org/t/why-some-services-can-not-adopt-0-confirmation-transactions/592',
            firstPost: 1633392000,
            posted: 1633640820,
            poster: `ShadowOfHarbringer`,
            posterAvatar: 'https://i.imgur.com/j78dPFQ.png',
            numViews: 111,
            numReplies: 11,
        })

        this.feed.push({
            id: 'b90c9393-e767-42f6-be89-7162904a7b17',
            title: `Significance of the Issues in theCurrent Slp System`,
            description: `I’ve wrote an article about my observation of the issues with current SLP system.

Business and users are having troubles using it and IMHO a higher priority should be given to fix the current system. Problems that hinder adoption should be addressed if we want to keep our stockholders and invite more usage.

If any of the proposals or a better one cant make it in May 2022 maybe we should delay upgrade instead of having to wait 20 months till May 2023 to get the issue fixed.`,
            url: 'https://bitcoincashresearch.org/t/significance-of-the-issues-in-thecurrent-slp-system/577',
            firstPost: 1631592480,
            posted: 1633352820,
            poster: `bitcoincashautist`,
            posterAvatar: 'https://i.imgur.com/YVx2zmd.png',
            numViews: 375,
            numReplies: 6,
        })

        this.feed.push({
            id: 'aa7b4216-efb8-41e3-b90d-23cdca55f8fe',
            title: `BCH Testnet faucet`,
            description: `Greetings to all! I am working on a wallet and would like to test my transaction code with some testnet coins. I’ve tried:

faucet fullstack cash - even though I’ve never used it, here is the error:
Error: This BCH address has been used before, or you need to wait 24 hours to request from this IP address.

developer bitcoin com/faucet/ (under maintenance)
testnet-faucet electroncash de (site seems to be down)
coinfaucet eu/en/bch-testnet (goes to ABC’s new coin)
(took out the periods so the bot does not recognize the links)`,
            url: 'https://bitcoincashresearch.org/t/bch-testnet-faucet/535',
            firstPost: 1629247440,
            posted: 1631160060,
            poster: `freetrader`,
            posterAvatar: 'https://i.imgur.com/89eQPB9.png',
            numViews: 255,
            numReplies: 2,
        })

        this.feed.push({
            id: '1f663d41-c196-4cc6-b712-16f83bfa3207',
            title: `Is there interest in a Red Team analysis of CashFusion?`,
            description: `CashFusion’s transaction privacy protocol is one of BCH’s crown jewels. What if it could be made even more robust through a Red Team analysis? Red Team analysis is a concept from the fields of cybersecurity and military planning that involves investigating the strength of security measures by simulating attacks on the defenses and then developing improvements to those security measures.`,
            url: 'https://bitcoincashresearch.org/t/is-there-interest-in-a-red-team-analysis-of-cashfusion/525',
            firstPost: 1633626429,
            posted: 1629360420,
            poster: `bitjson`,
            posterAvatar: 'https://i.imgur.com/jiVG9ya.png',
            numViews: 251,
            numReplies: 5,
        })

        // this.feed.push({
        //     id: '',
        //     title: ``,
        //     description: ``,
        //     url: '',
        // })

    },
    mounted: function () {
        //
    },
}
</script>
