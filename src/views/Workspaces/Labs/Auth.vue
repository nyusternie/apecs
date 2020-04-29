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

                                TODO...

                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-info-circle mr-1"></i>
                                    Authorization Guide
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
import Header from '@/components/Header.vue'
import Navbar from './Navbar.vue'

export default {
    components: {
        Header,
        Navbar,
    },
    data: () => {
        return {
            rawTxHex: '020000000141f7f072c1cba4a6b50266f1c574b391166590da4d7fb10c2e61e80e69bf9d15000000006441c374bfb607aef669ebad0ecdc13c0cdb71e5e0cd97b40631a5f11dcedf428634a486ab3aefdfc651dc3ee040307d7fabe4a70c9586efab9348828f48624c2adcc12102130221d09ef7d2fdba9db903246a8e69bed0125ab4e44dc5a6dac66b87d13b2affffffff019e1d0000000000001976a91430a8161ef13bb7fccea6283159e47553f8a576e888ac00000000',
        }
    },
    computed: {
        txVersion() {
            if (this.rawTxHex !== '') {
                /* Parse tx version. */
                const txVersion = this.rawTxHex.slice(0, 8)

                /* Return tx version. */
                return txVersion
            } else {
                /* Return null. */
                return null
            }
        },

        txInputCount() {
            if (this.rawTxHex !== '') {
                /* Parse tx input count. */
                const txInputCount = this.rawTxHex.slice(8, 10)

                /* Return tx input count. */
                return txInputCount
            } else {
                /* Return null. */
                return null
            }
        },

        txId() {
            if (this.rawTxHex !== '') {
                /* Parse tx id. */
                const txId = this.rawTxHex.slice(10, 74)

                /* Reverse endianness. */
                const reversed = this.reverseBytes(txId)

                /* Return (reversed) tx id. */
                return reversed
            } else {
                /* Return null. */
                return null
            }
        },

        txOutpointIndex() {
            if (this.rawTxHex !== '') {
                /* Parse tx outpoint index. */
                const txOutpointIndex = this.rawTxHex.slice(74, 82)

                /* Return tx input count. */
                return txOutpointIndex
            } else {
                /* Return null. */
                return null
            }
        },

        txInputScriptBytes() {
            if (this.rawTxHex !== '') {
                /* Parse tx outpoint index. */
                const txInputScriptBytes = this.rawTxHex.slice(82, 84)

                /* Return tx input count. */
                return txInputScriptBytes
            } else {
                /* Return null. */
                return null
            }
        },

        txSignature() {
            if (this.rawTxHex !== '') {
                /* Parse tx outpoint index. */
                // FIXME: Calculate the txInputScriptBytes (length).
                const txSignature = this.rawTxHex.slice(84, 284)

                /* Return tx input count. */
                return txSignature
            } else {
                /* Return null. */
                return null
            }
        },

        txSequence() {
            if (this.rawTxHex !== '') {
                /* Parse tx outpoint index. */
                const txSequence = this.rawTxHex.slice(284, 292)

                /* Return tx input count. */
                return txSequence
            } else {
                /* Return null. */
                return null
            }
        },

        txOutputCount() {
            if (this.rawTxHex !== '') {
                /* Parse tx outpoint index. */
                const txOutputCount = this.rawTxHex.slice(292, 294)

                /* Return tx input count. */
                return txOutputCount
            } else {
                /* Return null. */
                return null
            }
        },

        txValue() {
            if (this.rawTxHex !== '') {
                /* Parse tx outpoint index. */
                const txValue = this.rawTxHex.slice(294, 310)

                /* Reverse endianness. */
                const reversed = this.reverseBytes(txValue)

                /* Return tx input count. */
                return reversed
            } else {
                /* Return null. */
                return null
            }
        },

        txOutputScriptBytes() {
            if (this.rawTxHex !== '') {
                /* Parse tx outpoint index. */
                const txOutputScriptBytes = this.rawTxHex.slice(310, 312)

                /* Return tx input count. */
                return txOutputScriptBytes
            } else {
                /* Return null. */
                return null
            }
        },

        txPubKeyScript() {
            if (this.rawTxHex !== '') {
                /* Parse tx outpoint index. */
                const txPubKeyScript = this.rawTxHex.slice(312, 362)

                /* Return tx input count. */
                return txPubKeyScript
            } else {
                /* Return null. */
                return null
            }
        },

        txLockTime() {
            if (this.rawTxHex !== '') {
                /* Parse tx outpoint index. */
                const txLockTime = this.rawTxHex.slice(362, 370)

                /* Return tx input count. */
                return txLockTime
            } else {
                /* Return null. */
                return null
            }
        },

    },
    methods: {
        reverseBytes(_bytes) {
            /* Reverse bytes. */
            // source: https://stackoverflow.com/a/29017642/514914
            return _bytes.match(/[a-fA-F0-9]{2}/g).reverse().join('')
        },
    },
    created: async function () {
        //
    },
    mounted: function () {

    },
}
</script>

<style scoped>
/*  */
</style>
