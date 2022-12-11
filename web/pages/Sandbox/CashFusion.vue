<template>
    <main>
        <!-- Page Section -->
        <section class="content">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-md-6">
                        <!-- <Navbar /> -->

                        <div class="card">
                            <div class="card-body">

                                TODO...

                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-info-circle mr-1"></i>
                                    CashFusion Guide
                                </h3>
                            </div>

                            <div class="card-body">
                                <div class="mb-0">
                                    CashFusion is an anonymity protocol designed to allow multiple coin inputs <em>(of varying amounts)</em> and multiple coin outputs <em>(of varying amounts)</em> per participant.
                                </div>

                                <div class="mt-0 mb-3">
                                    <small class="text-danger"><strong>NOTE:</strong> TOR is used for additional privacy protection against malicious servers.</small>
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

            </div>
        </section>
    </main>
</template>

<script>
/* Import modules. */
import { BITBOX } from 'bitbox-sdk'
import numeral from 'numeral'

export default {
    data: () => {
        return {
            bitbox: null,
            usd: 0,
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
