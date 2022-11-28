<template>
    <main class="p-10">
        <h1 class="text-3xl">Transaction Details</h1>

        <div class="w-max mt-5 p-3 border-2 bg-pink-100 border-pink-300 rounded-xl">
            <span class="block text-gray-500 font-bold text-sm">TRANSACTION HASH</span>
            <span class="text-2xl text-gray-600 font-medium">{{hash}}</span>
        </div>

        <div v-if="valueDisplay" class="w-max mt-5 p-3 border-2 bg-pink-100 border-pink-300 rounded-xl">
            <span class="block text-gray-500 font-bold text-sm">VALUE</span>
            <span class="text-2xl text-gray-600 font-medium">{{valueDisplay}}</span>
        </div>

        <div class="w-max mt-5 p-3 border-2 bg-pink-100 border-pink-300 rounded-xl">
            <span class="block text-gray-500 font-bold text-sm">FROM</span>
            <span class="text-2xl text-gray-600 font-medium">{{from}}</span>
        </div>

        <div v-if="to" class="w-max mt-5 p-3 border-2 bg-pink-100 border-pink-300 rounded-xl">
            <span class="block text-gray-500 font-bold text-sm">TO</span>
            <span class="text-2xl text-gray-600 font-medium">{{to}}</span>
        </div>

        <div class="w-max grid grid-cols-4">
            <div class="w-max mt-5 p-3 border-2 bg-pink-100 border-pink-300 rounded-xl">
                <span class="block text-gray-500 font-bold text-sm">GAS RESERVED</span>
                <span class="text-2xl text-gray-600 font-medium">{{gasReservedDisplay}}</span>
            </div>

            <div class="w-max mt-5 p-3 border-2 bg-pink-100 border-pink-300 rounded-xl">
                <span class="block text-gray-500 font-bold text-sm">GAS PRICE</span>
                <span class="text-2xl text-gray-600 font-medium">{{gasPriceDisplay}}</span>
            </div>

            <div class="w-max mt-5 p-3 border-2 bg-pink-100 border-pink-300 rounded-xl">
                <span class="block text-gray-500 font-bold text-sm">GAS USED</span>
                <span class="text-2xl text-gray-600 font-medium">{{gasUsedDisplay}}</span>
            </div>

            <div class="w-max mt-5 p-3 border-2 bg-pink-100 border-pink-300 rounded-xl">
                <span class="block text-gray-500 font-bold text-sm">CUMULATIVE GAS USED</span>
                <span class="text-2xl text-gray-600 font-medium">{{cGasUsedDisplay}}</span>
            </div>
        </div>

        <div class="w-max grid grid-cols-3 gap-5">
            <div class="w-max mt-5 p-3 border-2 bg-pink-100 border-pink-300 rounded-xl text-center">
                <span class="block text-gray-500 font-bold text-sm">NONCE</span>
                <span class="text-2xl text-gray-600 font-medium">{{nonce}}</span>
            </div>

            <div class="w-max mt-5 p-3 border-2 bg-pink-100 border-pink-300 rounded-xl text-center">
                <span class="block text-gray-500 font-bold text-sm">INDEX</span>
                <span class="text-2xl text-gray-600 font-medium">{{index}}</span>
            </div>

            <div class="w-max mt-5 p-3 border-2 bg-pink-100 border-pink-300 rounded-xl text-center">
                <span class="block text-gray-500 font-bold text-sm">STATUS</span>
                <span class="text-2xl text-gray-600 font-medium">{{status}}</span>
            </div>
        </div>

        <div class="w-80 grid grid-cols-2 gap-5">
            <div class="w-max mt-5 p-3 border-2 bg-pink-100 border-pink-300 rounded-xl">
                <span class="block text-gray-500 font-bold text-sm">BLOCK NUMBER</span>
                <span class="text-2xl text-gray-600 font-medium">{{blockNumberDisplay}}</span>
            </div>

            <div class="w-max mt-5 p-3 border-2 bg-pink-100 border-pink-300 rounded-xl">
                <span class="block text-gray-500 font-bold text-sm">BLOCK HASH</span>
                <span class="text-2xl text-gray-600 font-medium">{{blockHash}}</span>
            </div>
        </div>

        <div v-if="contractAddress" class="w-max mt-5 p-3 border-2 bg-pink-100 border-pink-300 rounded-xl">
            <span class="block text-gray-500 font-bold text-sm">CONTRACT ADDRESS</span>
            <router-link :to="'/sbch/address/' + contractAddress" class="text-2xl text-blue-500 font-medium hover:underline">
                {{contractAddress}}
            </router-link>
        </div>

        <div class="w-max mt-5 p-3 border-2 bg-pink-100 border-pink-300 rounded-xl">
            <span class="block text-gray-500 font-bold text-sm">INPUT</span>
            <span class="text-2xl text-gray-600 font-medium">{{inputDisplay}}</span>
        </div>

        <div v-if="logs && logs.length" class="w-max mt-5 p-3 border-2 bg-pink-100 border-pink-300 rounded-xl">
            <span class="block text-gray-500 font-bold text-sm">
                EVENT LOGS
            </span>

            <div v-for="evt of logs" :key="evt.address">
                <span class="block text-xl text-gray-400 font-medium">
                    index <span class="text-gray-600">{{Number(evt.logIndex)}}</span>
                </span>

                <span class="block text-xl text-gray-400 font-medium">
                    address <span class="text-gray-600">{{evt.address}}</span>
                </span>

                <span class="block text-xl text-gray-400 font-medium">
                    data <span class="text-gray-600">{{evt.data}}</span>
                </span>

<!--
Approval (owneraddress, spenderaddress, valueuint256)
0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925


 -->

                <div class="p-3">
                    <span class="block text-gray-500 font-bold text-sm">
                        TOPICS
                    </span>

                    <div v-for="topic of evt.topics" :key="topic">
                        <span class="block text-xl font-medium text-gray-600">
                            {{topic}}
                        </span>
                    </div>
                </div>

                <span class="block text-xl text-gray-400 font-medium">
                    removed <span class="text-gray-600">{{evt.removed}}</span>
                </span>

            </div>
        </div>

        <div class="mt-10">
            <h1 class="text-xl font-bold text-gray-400">RAW DATA</h1>

            <div class="p-5 h-48 overflow-scroll bg-yellow-50 border-4 border-yellow-300 rounded">
                <pre v-html="rawData" />
            </div>
        </div>

        <div class="mt-10">
            <h1 class="text-xl font-bold text-gray-400">RAW RECEIPT</h1>

            <div class="p-5 h-48 overflow-scroll bg-yellow-50 border-4 border-yellow-300 rounded">
                <pre v-html="rawReceipt" />
            </div>
        </div>
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
            usd: null,

            hash: null,
            blockHash: null,
            blockNumber: null,
            from: null,
            to: null,
            gasReserved: null,
            gasPrice: null,
            gasUsed: null,
            cGasUsed: null,
            input: null,
            nonce: null,
            index: null,
            value: null,

            contractAddress: null,
            status: null,
            logs: null,

            rawData: null,
            rawReceipt: null,
        }
    },
    computed: {
        valueDisplay() {
            if (!this.value) return null

            /* Calculate satoshis. */
            const satoshis = this.value / BigInt(10000000000)

            /* Calculate BCH. */
            const bch = Number(satoshis) / 100000000.0

            /* Return formatted. */
            return numeral(bch).format('0,0.00[000000]') + ' BCH | ' + numeral(satoshis).format('0,0') + ' satoshis'
        },

        blockNumberDisplay() {
            if (!this.blockNumber) return 'n/a'

            /* Return formatted. */
            return numeral(this.blockNumber).format('0,0')
        },

        gasReservedDisplay() {
            if (!this.gasReserved) return 'n/a'

            /* Return formatted. */
            return numeral(this.gasReserved).format('0,0') + ' wei'
        },

        gasUsedDisplay() {
            if (!this.gasUsed) return 'n/a'

            /* Return formatted. */
            return numeral(this.gasUsed).format('0,0') + ' wei'
        },

        cGasUsedDisplay() {
            if (!this.cGasUsed) return 'n/a'

            /* Return formatted. */
            return numeral(this.cGasUsed).format('0,0') + ' wei'
        },

        gasPriceDisplay() {
            if (!this.gasPrice) return 'n/a'

            /* Return formatted. */
            return numeral(this.gasPrice / BigInt(1000000000)).format('0,0.00[000000]') + ' gWei'
        },

        inputDisplay() {
            if (!this.input) return 'n/a'

            /* Return formatted. */
            return this.input.slice(0, 50) + ' ...'
        },

    },
    methods: {
        async getTransaction(_txid) {
            /* Build request. */
            const request = {
                id: 0,
                jsonrpc: '2.0',
                method: 'eth_getTransactionByHash',
                params: [ _txid ],
            }
            // console.log('REQUEST', request);

            /* Make RPC request. */
            const response = await superagent
                // .post('https://smartbch.devops.cash/mainnet')
                .post('https://smartbch.fountainhead.cash/mainnet')
                // .post('https://smartbch.devops.cash/testnet')
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
            console.log('BODY (getTransaction)', body)

            /* Validate body result. */
            if (body && body.result) {
                /* Set raw data. */
                this.rawData += JSON.stringify(body.result, null, 4)

                /* Set (transaction) hash. */
                this.hash = body.result.hash

                /* Set block hash. */
                this.blockHash = body.result.blockHash

                /* Set block number. */
                this.blockNumber = BigInt(body.result.blockNumber)

                /* Set from. */
                this.from = body.result.from

                /* Set to. */
                this.to = body.result.to

                /* Set gas amount (reserved). */
                this.gasReserved = BigInt(body.result.gas)

                /* Set gas price. */
                this.gasPrice = BigInt(body.result.gasPrice)

                /* Set input. */
                this.input = body.result.input

                /* Set nonce. */
                this.nonce = BigInt(body.result.nonce)

                /* Set (transaction) index. */
                this.index = BigInt(body.result.transactionIndex)

                /* Set value. */
                this.value = BigInt(body.result.value ? body.result.value : 0)

            }

        },

        async getReceipt(_txid) {
            /* Build request. */
            const request = {
                id: 0,
                jsonrpc: '2.0',
                method: 'eth_getTransactionReceipt',
                params: [ _txid ],
            }
            // console.log('REQUEST', request);

            /* Make RPC request. */
            const response = await superagent
                // .post('https://smartbch.devops.cash/mainnet')
                .post('https://smartbch.fountainhead.cash/mainnet')
                // .post('https://smartbch.devops.cash/testnet')
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
            console.log('BODY (getReceipt)', body)

            /* Validate body result. */
            if (body && body.result) {
                /* Set raw receipt. */
                this.rawReceipt += JSON.stringify(body.result, null, 4)

                /* Set gas used. */
                this.gasUsed = BigInt(body.result.gasUsed)

                /* Set (cumulative) gas used. */
                this.cGasUsed = BigInt(body.result.cumulativeGasUsed)

                /* Set (cumulative) gas used. */
                this.contractAddress = body.result.contractAddress

                /* Set status. */
                this.status = BigInt(body.result.status)

                /* Set logs. */
                this.logs = body.result.logs

            }

        },

    },
    created: async function () {
        if (!this.$route.params || !this.$route.params.txid) {
            throw new Error('No transaction provided')
        }

        /* Initialize raw data. */
        this.rawData = ''

        /* Initialize raw receipt. */
        this.rawReceipt = ''

        /* Set transaction id. */
        const txid = this.$route.params.txid
        console.log('TXID', txid)

        this.usd = await Nito.Markets.getTicker('BCH')
            .catch(err => console.error(err))
        console.log('USD', this.usd)

        this.getTransaction(txid)
        this.getReceipt(txid)

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
