<template>
    <NuxtLayout name="sandbox">
        <template #intro>
            <div class="max-w-xl">
                <h2 class="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    CashFusion
                </h2>

                <p class="mt-5 text-xl text-indigo-300">
                    CashFusion is an anonymity protocol designed to allow multiple coin inputs <em>(of varying amounts)</em> and multiple coin outputs <em>(of varying amounts)</em> per participant.

                    <span class="mt-2 block text-sm italic text-indigo-200">
                        <strong>NOTE:</strong> TOR is used for additional privacy protection against malicious servers.
                    </span>
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
                <div class="row">

                    <div class="col-md-6">

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-info-circle mr-1"></i>
                                    CashFusion Guide
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
import numeral from 'numeral'

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

    },
    created: async function () {
        /* Update USD. */
        // this.updatePrice()

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
