<template>
    <main class="">

        <section class="max-w-5xl mx-auto">
            <div class="card-body">

                Connect your Ledger Nano S/X

                <button
                    class="p-3 m-3 bg-pink-300 border-4 border-pink-500 rounded-xl"
                    @click="connectLedger"
                >
                    Connect Ledger
                </button>

                <div v-if="ledgerAddress" class="m-3 p-3">
                    Ledger Address: {{ledgerAddress}}
                </div>

            </div>

        </section>
    </main>
</template>

<script>
/* Import components. */
// import Header from '@/components/Header'
// import Navbar from './Navbar'

// FOR DEVELOPMENT PURPOSES ONLY
import LedgerTransport from '@ledgerhq/hw-transport-webusb'
import LedgerBtc from '@ledgerhq/hw-app-btc'
import LedgerEth from '@ledgerhq/hw-app-eth'

export default {
    components: {
        // Header,
        // Navbar,
    },
    data: () => {
        return {
            ledgerAddress: null,
        }
    },
    computed: {
        //
    },
    methods: {
        connectLedger() {
            const getBtcAddress = async () => {
                const transport = await LedgerTransport
                    .create()
                    .catch(err => console.error(err))

                const btc = new LedgerBtc(transport)

                /* Set puprose. */
                const purpose = 44

                /* Set coin type. */
                // const coinType = 0 // Legacy Bitcoin (BTC)
                const coinType = 145 // Bitcoin Cash (BCH)

                /* Set account. */
                const account = 0

                /* Set (has) change. */
                const change = 0

                /* Set (address) index. */
                const index = 0

                const result = await btc
                    .getWalletPublicKey(`${purpose}'/${coinType}'/${account}'/${change}/${index}`)
                    .catch(err => console.error(err))

                /* Return address. */
                return result.bitcoinAddress
            }

            const getEthAddress = async () => {
                const transport = await LedgerTransport
                    .create()
                    .catch(err => console.error(err))

                const eth = new LedgerEth(transport)

                /* Set puprose. */
                const purpose = 44

                /* Set coin type. */
                const coinType = 60 // Ethereum (BCH)

                /* Set account. */
                const account = 0

                /* Set (has) change. */
                const change = 0

                /* Set (address) index. */
                const index = 0

                const result = await eth
                    .getWalletPublicKey(`${purpose}'/${coinType}'/${account}'/${change}/${index}`)
                    .catch(err => console.error(err))

                /* Return address. */
                return result.bitcoinAddress
            }

            /* Request Bitcoin address. */
            getBtcAddress()
                .then(_address => {
                    console.log('BITCOIN ADDRESS', _address)
                    this.ledgerAddress = _address
                })

            /* Request Ethereum address. */
            getEthAddress()
                .then(_address => {
                    console.log('ETHEREUM ADDRESS', _address)
                    // this.ledgerAddress = _address
                })

        },

    },
    created: async function () {
        //
    },
    mounted: function () {
        //
    },
}
</script>

<style scoped>
/*  */
</style>
