<script setup>
import { ref } from 'vue'

const rawTxHex = ref(null)
</script>

<template>
    <main class="bg-yellow-200">
        <div class="form-group">
            <label>Decode Raw Transaction</label>
            <textarea
                class="block border-4 border-indigo-500 rounded-lg"
                rows="3"
                placeholder="Paste raw hex code here"
                v-model="rawTxHex"
            ></textarea>

            <button class="mt-3 block border-2 border-indigo-500 rounded-lg" @click="runTest">
                Run Test
            </button>
        </div>

        <section v-if="txVersion">
            <h2 class="text-2xl font-medium">Version</h2>

            <h3>[ {{txVersion}} ]</h3>

            <small class="text-muted">
                Version numbers can be ...
            </small>
        </section>

        <dl class="row">
            <dt v-if="txInputCount" class="col-sm-4">Input Count</dt>
            <dd v-if="txInputCount" class="col-sm-8">{{txInputCount}}</dd>

            <dt v-if="txId" class="col-sm-4">Transaction Id</dt>
            <dd v-if="txId" class="col-sm-8"><a :href="'https://explorer.bitcoin.com/bch/tx/' + txId" target="_blank">{{txId}}</a></dd>
            <dd v-if="txVersion" class="col-sm-8 offset-sm-4">
                <small class="text-muted">
                    NOTE: Endianness has been reversed.
                </small>
            </dd>

            <dt v-if="txOutpointIndex" class="col-sm-4">Outpoint Index</dt>
            <dd v-if="txOutpointIndex" class="col-sm-8">{{txOutpointIndex}}</dd>

            <dt v-if="txInputScriptBytes" class="col-sm-4">Script Bytes</dt>
            <dd v-if="txInputScriptBytes" class="col-sm-8">{{txInputScriptBytes}}</dd>

            <dt v-if="txSignature" class="col-sm-4">Signature</dt>
            <dd v-if="txSignature" class="col-sm-8">{{txSignature}}</dd>

            <dt v-if="txSequence" class="col-sm-4">Sequence</dt>
            <dd v-if="txSequence" class="col-sm-8">{{txSequence}}</dd>

            <dt v-if="txOutputCount" class="col-sm-4">Output Count</dt>
            <dd v-if="txOutputCount" class="col-sm-8">{{txOutputCount}}</dd>

            <dt v-if="txValue" class="col-sm-4">Value</dt>
            <dd v-if="txValue" class="col-sm-8">{{txValue}}</dd>
            <dd v-if="txVersion" class="col-sm-8 offset-sm-4">
                <small class="text-muted">
                    NOTE: Endianness has been reversed.
                </small>
            </dd>

            <dt v-if="txOutputScriptBytes" class="col-sm-4">Script Bytes</dt>
            <dd v-if="txOutputScriptBytes" class="col-sm-8">{{txOutputScriptBytes}}</dd>

            <dt v-if="txPubKeyScript" class="col-sm-4">PubKey Script</dt>
            <dd v-if="txPubKeyScript" class="col-sm-8">{{txPubKeyScript}}</dd>

            <dt v-if="txLockTime" class="col-sm-4">Lock Time</dt>
            <dd v-if="txLockTime" class="col-sm-8">{{txLockTime}}</dd>

        </dl>
    </main>
</template>

<script>
export default {
    components: {
        //
    },
    // data: () => ({
    //     // rawTxHex: '020000000141f7f072c1cba4a6b50266f1c574b391166590da4d7fb10c2e61e80e69bf9d15000000006441c374bfb607aef669ebad0ecdc13c0cdb71e5e0cd97b40631a5f11dcedf428634a486ab3aefdfc651dc3ee040307d7fabe4a70c9586efab9348828f48624c2adcc12102130221d09ef7d2fdba9db903246a8e69bed0125ab4e44dc5a6dac66b87d13b2affffffff019e1d0000000000001976a91430a8161ef13bb7fccea6283159e47553f8a576e888ac00000000',
    //     rawTxHex: null,
    // }),
    computed: {
        txVersion() {
            /* Validate hex value. */
            if (
                typeof this.rawTxHex === 'undefined' ||
                this.rawTxHex === null ||
                this.rawTxHex === ''
            ) {
                /* Return null. */
                return null
            }

            /* Validate hex length. */
            if (this.rawTxHex.length >= 8) {
                /* Parse tx version. */
                const txVersion = this.rawTxHex.slice(0, 8)

                /* Return tx version. */
                return txVersion
            }

            /* Return null. */
            return null
        },

        txInputCount() {
            if (typeof this.rawTxHex !== 'undefined' && this.rawTxHex !== '') {
                /* Parse tx input count. */
                const txInputCount = 'b'//this.rawTxHex.slice(8, 10)

                /* Return tx input count. */
                return txInputCount
            } else {
                /* Return null. */
                return null
            }
        },

        txId() {
            if (typeof this.rawTxHex !== 'undefined' && this.rawTxHex !== '') {
                /* Parse tx id. */
                const txId = 'c'//this.rawTxHex.slice(10, 74)

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
            if (typeof this.rawTxHex !== 'undefined' && this.rawTxHex !== '') {
                /* Parse tx outpoint index. */
                const txOutpointIndex = 'd'//this.rawTxHex.slice(74, 82)

                /* Return tx input count. */
                return txOutpointIndex
            } else {
                /* Return null. */
                return null
            }
        },

        txInputScriptBytes() {
            if (typeof this.rawTxHex !== 'undefined' && this.rawTxHex !== '') {
                /* Parse tx outpoint index. */
                const txInputScriptBytes = 'e'//this.rawTxHex.slice(82, 84)

                /* Return tx input count. */
                return txInputScriptBytes
            } else {
                /* Return null. */
                return null
            }
        },

        txSignature() {
            if (typeof this.rawTxHex !== 'undefined' && this.rawTxHex !== '') {
                /* Parse tx outpoint index. */
                // FIXME: Calculate the txInputScriptBytes (length).
                const txSignature = 'f'//this.rawTxHex.slice(84, 284)

                /* Return tx input count. */
                return txSignature
            } else {
                /* Return null. */
                return null
            }
        },

        txSequence() {
            if (typeof this.rawTxHex !== 'undefined' && this.rawTxHex !== '') {
                /* Parse tx outpoint index. */
                const txSequence = 'g'//this.rawTxHex.slice(284, 292)

                /* Return tx input count. */
                return txSequence
            } else {
                /* Return null. */
                return null
            }
        },

        txOutputCount() {
            if (typeof this.rawTxHex !== 'undefined' && this.rawTxHex !== '') {
                /* Parse tx outpoint index. */
                const txOutputCount = 'h'//this.rawTxHex.slice(292, 294)

                /* Return tx input count. */
                return txOutputCount
            } else {
                /* Return null. */
                return null
            }
        },

        txValue() {
            if (typeof this.rawTxHex !== 'undefined' && this.rawTxHex !== '') {
                /* Parse tx outpoint index. */
                const txValue = 'i'//this.rawTxHex.slice(294, 310)

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
            if (typeof this.rawTxHex !== 'undefined' && this.rawTxHex !== '') {
                /* Parse tx outpoint index. */
                const txOutputScriptBytes = 'j'//this.rawTxHex.slice(310, 312)

                /* Return tx input count. */
                return txOutputScriptBytes
            } else {
                /* Return null. */
                return null
            }
        },

        txPubKeyScript() {
            if (typeof this.rawTxHex !== 'undefined' && this.rawTxHex !== '') {
                /* Parse tx outpoint index. */
                const txPubKeyScript = 'k'//this.rawTxHex.slice(312, 362)

                /* Return tx input count. */
                return txPubKeyScript
            } else {
                /* Return null. */
                return null
            }
        },

        txLockTime() {
            if (typeof this.rawTxHex !== 'undefined' && this.rawTxHex !== '') {
                /* Parse tx outpoint index. */
                const txLockTime = 'l'//this.rawTxHex.slice(362, 370)

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
            // console.log('BYTES', _bytes)

            if (!Array.isArray(_bytes)) {
                return _bytes
            }

            if (typeof _bytes === 'undefined' || !_bytes || _bytes.length === 0) {
                return _bytes
            }

            /* Reverse bytes. */
            // source: https://stackoverflow.com/a/29017642/514914
            return _bytes.match(/[a-fA-F0-9]{2}/g).reverse().join('')
            // return _bytes
        },

        runTest() {
            console.log('run test', this.rawTxHex)

            // this.txVersion = 'hi there'
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
