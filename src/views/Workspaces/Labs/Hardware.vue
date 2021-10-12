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

                                Connect your Ledger Nano S/X

                                <button type="button" class="btn btn-block btn-primary" @click="connectLedger">Connect Ledger</button>

                                <div v-if="ledgerAddress" class="p-3">
                                    Ledger Address: {{ledgerAddress}}
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-info-circle mr-1"></i>
                                    Hardware Guide
                                </h3>
                            </div>

                            <div class="card-body">
                                <dl class="row">
                                    <dt class="col-sm-4">Description lists</dt>
                                    <dd class="col-sm-8">A description list is perfect for defining terms.</dd>
                                    <dt class="col-sm-4">Euismod</dt>
                                    <dd class="col-sm-8">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                                    <dd class="col-sm-8 offset-sm-4">Donec id elit non mi porta gravida at eget metus.</dd>
                                    <dt class="col-sm-4">Malesuada porta</dt>
                                    <dd class="col-sm-8">Etiam porta sem malesuada magna mollis euismod.</dd>
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
/* Import components. */
import Header from '@/components/Header'
import Navbar from './Navbar'

// FOR DEVELOPMENT PURPOSES ONLY
import LedgerTransport from '@ledgerhq/hw-transport-webusb'
import LedgerBtc from '@ledgerhq/hw-app-btc'

export default {
    components: {
        Header,
        Navbar,
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
                const transport = await LedgerTransport.create()
                const btc = new LedgerBtc(transport)

                const result = await btc.getWalletPublicKey(`44'/145'/0'/0/0`)
                // const result = await btc.getWalletPublicKey(`44'/145'/0'/0/1`)

                return result.bitcoinAddress
            }

            getBtcAddress().then(_address => {
                console.log('ADDRESS', _address)
                this.ledgerAddress = _address
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
