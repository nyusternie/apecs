<script setup>
import { ref } from 'vue'

// const rawTxHex = ref(null)
const rawTxHex = ref('02000000012db9e967da7f57989d01e2d7b33491f2c007a216177cdb001e13e6fb8a4cdff90000000000ffffffff0140420f00000000001976a9143453e86c368be96a88742a29003dd29ab9a5d03288ac00000000')
</script>

<template>
    <main class="flex flex-col space-y-5">
        <textarea
            class="w-full h-32 block border-4 border-yellow-400 bg-yellow-50 text-yellow-900 rounded-lg"
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

        <section v-if="txInputCount">
            <h2 class="text-2xl font-medium">Input Count</h2>

            <h3>[ {{txInputCount}} ]</h3>

            <small class="text-muted">
                Transaction Id
                <a :href="'https://explorer.bitcoin.com/bch/tx/' + txId" target="_blank">{{txId}}</a>
            </small>

            <small class="text-muted">
                NOTE: Endianness has been reversed.
            </small>
        </section>

        <section v-if="txVersion">
            <h2 class="text-2xl font-medium">Outpoint Index</h2>

            <h3>[ {{txOutpointIndex}} ]</h3>
        </section>

        <section v-if="txVersion">
            <h2 class="text-2xl font-medium">Script Bytes</h2>

            <h3>[ {{txInputScriptBytes}} ]</h3>
        </section>

        <section v-if="txVersion">
            <h2 class="text-2xl font-medium">Signature</h2>

            <h3>[ {{txSignature}} ]</h3>
        </section>

        <section v-if="txVersion">
            <h2 class="text-2xl font-medium">Sequence</h2>

            <h3>[ {{txSequence}} ]</h3>
        </section>

        <section v-if="txVersion">
            <h2 class="text-2xl font-medium">Output Count</h2>

            <h3>[ {{txOutputCount}} ]</h3>
        </section>

        <section v-if="txVersion">
            <h2 class="text-2xl font-medium">Value</h2>

            <h3>[ {{txValue}} ]</h3>
        </section>

        <section v-if="txVersion">
            <h2 class="text-2xl font-medium">Script Bytes</h2>

            <h3>[ {{txOutputScriptBytes}} ]</h3>
        </section>

        <section v-if="txVersion">
            <h2 class="text-2xl font-medium">PubKey Script</h2>

            <h3>[ {{txPubKeyScript}} ]</h3>
        </section>

        <section v-if="txVersion">
            <h2 class="text-2xl font-medium">Lock Time</h2>

            <h3>[ {{txLockTime}} ]</h3>
        </section>

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
