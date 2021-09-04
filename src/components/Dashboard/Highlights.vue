<template>
    <div class="row">
        <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box">
                <span class="info-box-icon bg-danger elevation-1">
                    <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </span>

                <div class="info-box-content">
                    <span class="info-box-text">Financial Health</span>
                    <span class="info-box-number">
                        {{displayPrice}} <small>USD</small>
                        <div class="text-success">
                            <small>
                                <i class="fas fa-arrow-up"></i>
                                4.37% • last 30 days
                            </small>
                        </div>
                    </span>
                </div>
            </div>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box mb-3">
                <span class="info-box-icon bg-warning elevation-1">
                    <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </span>

                <div class="info-box-content">
                    <span class="info-box-text">Mining Power</span>
                    <span class="info-box-number">
                        4.26TH/s <small>~3.82%</small>
                        <div class="text-success">
                            <small>
                                <i class="fas fa-arrow-up"></i>
                                1.80% • last 30 days
                            </small>
                        </div>
                    </span>
                </div>
            </div>
        </div>

        <!-- fix for small devices only -->
        <div class="clearfix hidden-md-up"></div>

        <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box mb-3">
                <span class="info-box-icon bg-success elevation-1">
                    <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </span>

                <div class="info-box-content">
                    <span class="info-box-text">Buyers SPEDNing</span>
                    <span class="info-box-number">
                        $388.8K <small>USD</small>
                        <div class="text-success">
                            <small>
                                <i class="fas fa-arrow-up"></i>
                                6.12% • last 30 days
                            </small>
                        </div>
                    </span>
                </div>
            </div>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box mb-3">
                <span class="info-box-icon bg-info elevation-1">
                    <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                </span>

                <div class="info-box-content" @click="goto('/contributors')">
                    <span class="info-box-text">Devs BUIDLing</span>
                    <span class="info-box-number">
                        9 <small class="text-danger">(2 new)</small> |
                        4 <small class="text-danger">(0 new)</small>
                        <div class="text-success">
                            <small>
                                <i class="fas fa-arrow-up"></i>
                                14.82% • last 30 days
                            </small>
                        </div>
                    </span>
                </div>
            </div>
        </div>

    </div>
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
        displayPrice: function () {
            return numeral(this.usd / 100).format('$0.00[00]')
        }
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
         * Goto (Page Location)
         */
        goto(_location) {
            this.$router.push(_location)
        },
    },
    created: function () {
        /* Initialize BITBOX. */
        this.initBitbox()

        /* Update USD. */
        this.updatePrice()
    },
    mounted: function () {
        //
    },
}
</script>

<style scoped>
.info-box-content {
    cursor: pointer;
}
</style>
