<template>
    <main class="p-10">
        <h1 class="text-3xl">Address Details</h1>

        <h3 class="text-2xl text-gray-600 font-medium">
            <span class="block sm:inline">Balance </span>
            <span class="">{{balanceDisplay}}</span>
        </h3>

        <h3 class="text-lg text-gray-600 font-medium">{{balanceUsdDisplay}}</h3>
    </main>
</template>

<script>
/* global BigInt */

/* Import modules. */
import Nito from 'nitojs'
import numeral from 'numeral'
import superagent from 'superagent'

/* Import components. */
// import Header from '@/components/Header'
// import UnderConstruction from '@/components/UnderConstruction'

export default {
    components: {
        // Header,
        // UnderConstruction,
    },
    data: () => {
        return {
            endpoint: null,
            balance: null,
            usd: null,
        }
    },
    computed: {
        balanceDisplay() {
            if (!this.balance) return 'n/a'

            /* Set balance (in Wei). */
            const wei = this.balance
            console.log('WEI', wei)

            /* Calculate satoshis value. */
            // NOTE: Reduce balance down to satoshis (8-decimals).
            const satoshis = Number(wei / BigInt(10000000000))
            console.log('SATOSHIS', satoshis)

            /* Calculate BCH value. */
            const bch = satoshis / 100000000

            /* Format balance. */
            const balance = numeral(bch).format('0,0.00[000000]') + ' sBCH'

            /* Return balance. */
            return balance
        },

        balanceUsdDisplay() {
            if (!this.balance || !this.usd) return 'n/a'

            /* Set balance (in Wei). */
            const wei = this.balance
            console.log('WEI', wei)

            /* Calculate satoshis value. */
            // NOTE: Reduce balance down to satoshis (8-decimals).
            const satoshis = Number(wei / BigInt(10000000000))
            console.log('SATOSHIS', satoshis)

            /* Calculate BCH value. */
            const bch = satoshis / 100000000

            /* Calcualte USD value. */
            const usd = bch * this.usd

            /* Format balance. */
            const balance = numeral(usd).format('$0,0.00') + ' USD'

            /* Return balance. */
            return balance
        },

    },
    methods: {
        async getBalance(_address) {
            /* Build request. */
            const request = {
                id: 0,
                jsonrpc: '2.0',
                method: 'eth_getBalance',
                params: [ _address, 'latest' ],
            }
            console.log('REQUEST', request);

            /* Make RPC request. */
            const response = await superagent
                .post(this.endpoint)
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
            console.log('BODY (getBalance)', body)

            /* Validate body result. */
            if (body && body.result) {
                /* Set balance. */
                this.balance = BigInt(body.result)
            }

        },

    },
    created: async function () {
        if (!this.$route.params || !this.$route.params.address) {
            throw new Error('No address provided')
        }

        if (this.$route.path.slice(0, 6) === '/amber') {
            this.endpoint = 'https://smartbch.devops.cash/testnet'
        } else {
            // this.endpoint = 'https://smartbch.devops.cash/mainnet'
            this.endpoint = 'https://smartbch.fountainhead.cash/mainnet'
        }

        /* Set transaction id. */
        const address = this.$route.params.address
        console.log('ADDRESS', address)

        this.usd = await Nito.Markets.getTicker('BCH')
            .catch(err => console.error(err))
        console.log('USD', this.usd)

        this.getBalance(address)

        /* Retrieve session. */
        // const session = await this.hasSession()
        //     .catch(err => console.error('Session Error:', err))

        /* Validate session. */
        // if (!session) {
        //     return
        // }
    },
    mounted: function () {
        //
    },
}
</script>

<style scoped>
/*  */
</style>
