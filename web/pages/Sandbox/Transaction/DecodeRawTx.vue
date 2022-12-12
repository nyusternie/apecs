<script setup>
import { ref } from 'vue'

const rawTxHex = ref(null)
</script>

<template>
    <main class="w-full bg-yellow-200">
        <h1 class="text-3xl font-medium">Decode Raw Transaction</h1>

        <textarea
            class="block border-4 border-indigo-500 rounded-lg"
            rows="3"
            placeholder="Paste raw hex code here"
            v-model="rawTxHex"
        ></textarea>

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
            /* Validate hex value. */
            if (
                typeof this.rawTxHex === 'undefined' ||
                this.rawTxHex === null ||
                this.rawTxHex === ''
            ) {
                /* Return null. */
                return null
            }

            if (typeof this.rawTxHex !== 'undefined' && this.rawTxHex !== '') {
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
            /* Validate hex value. */
            if (
                typeof this.rawTxHex === 'undefined' ||
                this.rawTxHex === null ||
                this.rawTxHex === ''
            ) {
                /* Return null. */
                return null
            }

            if (typeof this.rawTxHex !== 'undefined' && this.rawTxHex !== '') {
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
            /* Validate hex value. */
            if (
                typeof this.rawTxHex === 'undefined' ||
                this.rawTxHex === null ||
                this.rawTxHex === ''
            ) {
                /* Return null. */
                return null
            }

            if (typeof this.rawTxHex !== 'undefined' && this.rawTxHex !== '') {
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
            /* Validate hex value. */
            if (
                typeof this.rawTxHex === 'undefined' ||
                this.rawTxHex === null ||
                this.rawTxHex === ''
            ) {
                /* Return null. */
                return null
            }

            if (typeof this.rawTxHex !== 'undefined' && this.rawTxHex !== '') {
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
            /* Validate hex value. */
            if (
                typeof this.rawTxHex === 'undefined' ||
                this.rawTxHex === null ||
                this.rawTxHex === ''
            ) {
                /* Return null. */
                return null
            }

            if (typeof this.rawTxHex !== 'undefined' && this.rawTxHex !== '') {
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
            /* Validate hex value. */
            if (
                typeof this.rawTxHex === 'undefined' ||
                this.rawTxHex === null ||
                this.rawTxHex === ''
            ) {
                /* Return null. */
                return null
            }

            if (typeof this.rawTxHex !== 'undefined' && this.rawTxHex !== '') {
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
            /* Validate hex value. */
            if (
                typeof this.rawTxHex === 'undefined' ||
                this.rawTxHex === null ||
                this.rawTxHex === ''
            ) {
                /* Return null. */
                return null
            }

            if (typeof this.rawTxHex !== 'undefined' && this.rawTxHex !== '') {
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
            /* Validate hex value. */
            if (
                typeof this.rawTxHex === 'undefined' ||
                this.rawTxHex === null ||
                this.rawTxHex === ''
            ) {
                /* Return null. */
                return null
            }

            if (typeof this.rawTxHex !== 'undefined' && this.rawTxHex !== '') {
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
            /* Validate hex value. */
            if (
                typeof this.rawTxHex === 'undefined' ||
                this.rawTxHex === null ||
                this.rawTxHex === ''
            ) {
                /* Return null. */
                return null
            }

            if (typeof this.rawTxHex !== 'undefined' && this.rawTxHex !== '') {
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
            /* Validate hex value. */
            if (
                typeof this.rawTxHex === 'undefined' ||
                this.rawTxHex === null ||
                this.rawTxHex === ''
            ) {
                /* Return null. */
                return null
            }

            if (typeof this.rawTxHex !== 'undefined' && this.rawTxHex !== '') {
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
            /* Validate hex value. */
            if (
                typeof this.rawTxHex === 'undefined' ||
                this.rawTxHex === null ||
                this.rawTxHex === ''
            ) {
                /* Return null. */
                return null
            }

            if (typeof this.rawTxHex !== 'undefined' && this.rawTxHex !== '') {
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

    },
    created: async function () {
        //
    },
    mounted: function () {
        //
    },
}
</script>
