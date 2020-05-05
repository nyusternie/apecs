<template>
    <main>
        <!-- Header -->
        <Header pageId="labs" />

        <!-- Page Section -->
        <section class="content">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-md-6">
                        <Navbar />

                        <div class="card">
                            <div class="card-body">

                                <dl class="row" v-if="stats">
                                    <dt class="col-sm-4 text-right">Server</dt>
                                    <dd class="col-sm-8 mb-0">
                                        <a :href="serverUri" target="_blank">
                                            <strong class="text-info">{{serverUri}}</strong>
                                        </a>
                                    </dd>
                                    <dd class="col-sm-8 offset-sm-4 mt-0">
                                        <small class="text-danger">
                                            <strong>
                                            This is a public server operated by ...
                                            </strong>
                                        </small>
                                    </dd>

                                    <dt class="col-sm-4 text-right">Shuffle Port</dt>
                                    <dd class="col-sm-8">
                                        <strong class="text-info">{{stats.shufflePort}}</strong>
                                    </dd>

                                    <dt class="col-sm-4 text-right">Websocket Port</dt>
                                    <dd class="col-sm-8">
                                        <strong class="text-info">{{stats.shuffleWebSocketPort}}</strong>
                                    </dd>

                                    <dt class="col-sm-4 text-right">Ban Score</dt>
                                    <dd class="col-sm-8">
                                        <strong class="text-info">{{stats.banScore}}</strong>
                                    </dd>

                                    <dt class="col-sm-4 text-right">Banned</dt>
                                    <dd class="col-sm-8">
                                        <strong class="text-info">{{stats.banned}}</strong>
                                    </dd>

                                    <dt class="col-sm-4 text-right">Connections</dt>
                                    <dd class="col-sm-8">
                                        <strong class="text-info">{{stats.connections}}</strong>
                                    </dd>

                                    <dt class="col-sm-4 text-right">Pool Size</dt>
                                    <dd class="col-sm-8">
                                        <strong class="text-info">{{stats.poolSize}}</strong>
                                    </dd>
                                </dl>

                                <hr />

                                <dl class="row" v-for="pool of pools(network)" :key="pool.version + '.' + pool.amount">
                                    <dt class="col-sm-4 text-right">Members</dt>
                                    <dd class="col-sm-8">
                                        <strong class="text-info">{{pool.members}}</strong>
                                    </dd>

                                    <dt class="col-sm-4 text-right">Amount</dt>
                                    <dd class="col-sm-8 mb-0">
                                        <strong class="text-info">{{satoshis(pool.amount)}}</strong> satoshis
                                    </dd>
                                    <dd class="col-sm-8 offset-sm-4 mt-0">
                                        <small><strong class="text-danger">{{bch(pool.amount)}}</strong> BCH</small> |
                                        <small><strong class="text-danger">{{fiat(pool.amount)}}</strong> USD</small>
                                    </dd>

                                    <dt class="col-sm-4 text-right">Type</dt>
                                    <dd class="col-sm-8">
                                        <strong class="text-info">{{pool.type}}</strong>
                                    </dd>

                                    <dt class="col-sm-4 text-right">Full</dt>
                                    <dd class="col-sm-8">
                                        <strong class="text-info">{{pool.full}}</strong>
                                    </dd>

                                    <dt class="col-sm-4 text-right">Version</dt>
                                    <dd class="col-sm-8">
                                        <strong class="text-info">{{pool.version}}</strong>
                                    </dd>
                                </dl>

                                <!-- <pre v-if="stats">
                                    <code>
                                        {{stats}}
                                    </code>
                                </pre> -->

                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-info-circle mr-1"></i>
                                    CashShuffle Guide
                                </h3>
                            </div>

                            <div class="card-body">
                                <div class="mb-0">
                                    CashShuffle is an anonymity protocol designed to shuffle <em>(using the CoinJoin spec)</em> a coin input with 4 other random participants, each with an equal output.
                                </div>

                                <div class="mt-0 mb-3">
                                    <small class="text-danger"><strong>NOTE:</strong> Shuffled outputs <strong>MUST</strong> be handled with care to prevent privacy leaks.</small>
                                </div>

                                <dl class="row">
                                    <dt class="col-sm-4"># of Participants</dt>
                                    <dd class="col-sm-8">
                                        <strong class="text-info">5</strong> per pool
                                    </dd>

                                    <dt class="col-sm-4"># of Shuffle Pools</dt>
                                    <dd class="col-sm-8">
                                        Up to <strong class="text-info">8</strong> per server
                                        <br />Lowest: <strong class="text-info">100 bits</strong> <small><strong class="text-danger">{{fiat(10000)}}</strong> USD</small>
                                        <br />Highest: <strong class="text-info">1,000 BCH</strong> <small><strong class="text-danger">{{fiat(100000000000)}}</strong> USD</small>
                                    </dd>
                                    <!-- <dd class="col-sm-8 offset-sm-4">Donec id elit non mi porta gravida at eget metus.</dd> -->

                                    <dt class="col-sm-4">Avg Completion</dt>
                                    <dd class="col-sm-8">
                                        Minimum: <strong class="text-info">less than 1min</strong>
                                        <br />Maximum: <strong class="text-info">n/a</strong>
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

            </div>
        </section>
    </main>
</template>

<script>
/* Import modules. */
import { BITBOX } from 'bitbox-sdk'
import numeral from 'numeral'
import superagent from 'superagent'

/* Import components. */
import Header from '@/components/Header.vue'
import Navbar from './Navbar.vue'

export default {
    components: {
        Header,
        Navbar,
    },
    data: () => {
        return {
            bitbox: null,
            usd: 0,

            serverUri: null,
            stats: null,
        }
    },
    computed: {
        //
    },
    methods: {
        /**
         * Initialize BITBOX
         */
        initBitbox() {
            console.info('Initializing BITBOX..')

            try {
                /* Initialize BITBOX. */
                this.bitbox = new BITBOX()
            } catch (err) {
                console.error(err)
            }
        },

        /**
         * Update Price
         */
        async updatePrice() {
            try {
                const current = await this.bitbox.Price.current('usd')
                console.log('CURRENT PRICE', current)

                this.usd = current
            } catch (err) {
                console.error(err)
            }
        },

        /**
         * Pools
         *
         * Filters the available pools (based on network type).
         */
        pools(_network) {
            if (!this.stats || !this.stats.pools) {
                return []
            }

            if (_network === 'mainnet') {
                /* Filter pools. */
                const filtered = this.stats.pools.filter(pool => pool.version === 300)

                /* Sort pools. */
                const sorted = filtered.sort((a, b) => {
                    return a.amount - b.amount
                })

                /* Return pools. */
                return sorted
            } else {
                /* Filter pools. */
                const filtered = this.stats.pools.filter(pool => pool.version === 301)

                /* Sort pools. */
                const sorted = filtered.sort((a, b) => {
                    return a.amount - b.amount
                })

                /* Return pools. */
                return sorted
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

    },
    created: async function () {
        /* Initialize BITBOX. */
        this.initBitbox()

        /* Update USD. */
        this.updatePrice()

        /* Set server URI. */
        this.serverUri = 'https://shuffle.servo.cash:8080/stats'

        superagent
            .get(this.serverUri)
            .set('accept', 'json')
            .end((err, res) => {
                if (err) {
                    return console.error('API ERROR:', err)
                }

                console.log('API RESPONSE', res)

                /* Set statistics. */
                const stats = res.body
                console.log('STATISTICS', stats)

                /* Set statistics. */
                this.stats = stats
            })

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
