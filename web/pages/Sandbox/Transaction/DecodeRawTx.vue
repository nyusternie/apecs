<script setup>
import { ref } from 'vue'

/**
 * Reverse Bytes
 *
 * Reverses the order (endiness) of the hex string.
 *
 * @param {String} _bytes A (hex) string.
 */
const reverseBytes = (_bytes) => {
    if (!Array.isArray(_bytes)) {
        return _bytes
    }

    if (typeof _bytes === 'undefined' || !_bytes || _bytes.length === 0) {
        return _bytes
    }

    /* Reverse bytes. */
    // source: https://stackoverflow.com/a/29017642/514914
    return _bytes.match(/[a-fA-F0-9]{2}/g).reverse().join('')
}

// const rawTxHex = ref(null)
// const rawTxHex = ref('02000000012db9e967da7f57989d01e2d7b33491f2c007a216177cdb001e13e6fb8a4cdff90000000000ffffffff0140420f00000000001976a9143453e86c368be96a88742a29003dd29ab9a5d03288ac00000000') // BCH
const rawTxHex = ref('000100c80e241c69107c397ad81730541aba81d0528d14309b2a516f6e415c484c6b9864222103cbe16ecb57d7a173ef5d46692daf38f366e2939b655817335fbfcd8a4edc41c0405e29f9533df564bc308d188e7e12a3f41954e24ba1d7a994c8d0060ea819a70c2af63d74b995f9aace3daf965df314df94b437cb662eff12861e2fd3d6974e1afeffffff39050000000000000101580200000000000017005114aa53676557ac11d41f0c66caade565cac78ca4f8605b0300') // NEXA

const txVersion = computed(() => {
    /* Validate hex value. */
    if (
        typeof rawTxHex.value === 'undefined' ||
        rawTxHex.value === null ||
        rawTxHex.value === ''
    ) {
        /* Return null. */
        return null
    }

    /* Validate hex length. */
    if (rawTxHex.value.length >= 8) {
        /* Parse (transaction) version. */
        // const version = rawTxHex.value.slice(0, 8) // BCH
        const version = rawTxHex.value.slice(0, 2) // NEXA

        /* Return (transaction) version. */
        return version
    }

    /* Return null. */
    return null
})

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
        // txInputCount() {
        //     /* Validate hex value. */
        //     if (
        //         typeof rawTxHex === 'undefined' ||
        //         rawTxHex === null ||
        //         rawTxHex === ''
        //     ) {
        //         /* Return null. */
        //         return null
        //     }

        //     if (typeof rawTxHex !== 'undefined' && rawTxHex !== '') {
        //         /* Parse tx input count. */
        //         const txInputCount = rawTxHex.slice(8, 10)

        //         /* Return tx input count. */
        //         return txInputCount
        //     } else {
        //         /* Return null. */
        //         return null
        //     }
        // },

        // txId() {
        //     /* Validate hex value. */
        //     if (
        //         typeof rawTxHex === 'undefined' ||
        //         rawTxHex === null ||
        //         rawTxHex === ''
        //     ) {
        //         /* Return null. */
        //         return null
        //     }

        //     if (typeof rawTxHex !== 'undefined' && rawTxHex !== '') {
        //         /* Parse tx id. */
        //         const txId = rawTxHex.slice(10, 74)

        //         /* Reverse endianness. */
        //         const reversed = reverseBytes(txId)

        //         /* Return (reversed) tx id. */
        //         return reversed
        //     } else {
        //         /* Return null. */
        //         return null
        //     }
        // },

        // txOutpointIndex() {
        //     /* Validate hex value. */
        //     if (
        //         typeof rawTxHex === 'undefined' ||
        //         rawTxHex === null ||
        //         rawTxHex === ''
        //     ) {
        //         /* Return null. */
        //         return null
        //     }

        //     if (typeof rawTxHex !== 'undefined' && rawTxHex !== '') {
        //         /* Parse tx outpoint index. */
        //         const txOutpointIndex = rawTxHex.slice(74, 82)

        //         /* Return tx input count. */
        //         return txOutpointIndex
        //     } else {
        //         /* Return null. */
        //         return null
        //     }
        // },

        // txInputScriptBytes() {
        //     /* Validate hex value. */
        //     if (
        //         typeof rawTxHex === 'undefined' ||
        //         rawTxHex === null ||
        //         rawTxHex === ''
        //     ) {
        //         /* Return null. */
        //         return null
        //     }

        //     if (typeof rawTxHex !== 'undefined' && rawTxHex !== '') {
        //         /* Parse tx outpoint index. */
        //         const txInputScriptBytes = rawTxHex.slice(82, 84)

        //         /* Return tx input count. */
        //         return txInputScriptBytes
        //     } else {
        //         /* Return null. */
        //         return null
        //     }
        // },

        // txSignature() {
        //     /* Validate hex value. */
        //     if (
        //         typeof rawTxHex === 'undefined' ||
        //         rawTxHex === null ||
        //         rawTxHex === ''
        //     ) {
        //         /* Return null. */
        //         return null
        //     }

        //     if (typeof rawTxHex !== 'undefined' && rawTxHex !== '') {
        //         /* Parse tx outpoint index. */
        //         // FIXME: Calculate the txInputScriptBytes (length).
        //         const txSignature = rawTxHex.slice(84, 284)

        //         /* Return tx input count. */
        //         return txSignature
        //     } else {
        //         /* Return null. */
        //         return null
        //     }
        // },

        // txSequence() {
        //     /* Validate hex value. */
        //     if (
        //         typeof rawTxHex === 'undefined' ||
        //         rawTxHex === null ||
        //         rawTxHex === ''
        //     ) {
        //         /* Return null. */
        //         return null
        //     }

        //     if (typeof rawTxHex !== 'undefined' && rawTxHex !== '') {
        //         /* Parse tx outpoint index. */
        //         const txSequence = rawTxHex.slice(284, 292)

        //         /* Return tx input count. */
        //         return txSequence
        //     } else {
        //         /* Return null. */
        //         return null
        //     }
        // },

        // txOutputCount() {
        //     /* Validate hex value. */
        //     if (
        //         typeof rawTxHex === 'undefined' ||
        //         rawTxHex === null ||
        //         rawTxHex === ''
        //     ) {
        //         /* Return null. */
        //         return null
        //     }

        //     if (typeof rawTxHex !== 'undefined' && rawTxHex !== '') {
        //         /* Parse tx outpoint index. */
        //         const txOutputCount = rawTxHex.slice(292, 294)

        //         /* Return tx input count. */
        //         return txOutputCount
        //     } else {
        //         /* Return null. */
        //         return null
        //     }
        // },

        // txValue() {
        //     /* Validate hex value. */
        //     if (
        //         typeof rawTxHex === 'undefined' ||
        //         rawTxHex === null ||
        //         rawTxHex === ''
        //     ) {
        //         /* Return null. */
        //         return null
        //     }

        //     if (typeof rawTxHex !== 'undefined' && rawTxHex !== '') {
        //         /* Parse tx outpoint index. */
        //         const txValue = rawTxHex.slice(294, 310)

        //         /* Reverse endianness. */
        //         const reversed = reverseBytes(txValue)

        //         /* Return tx input count. */
        //         return reversed
        //     } else {
        //         /* Return null. */
        //         return null
        //     }
        // },

        // txOutputScriptBytes() {
        //     /* Validate hex value. */
        //     if (
        //         typeof rawTxHex === 'undefined' ||
        //         rawTxHex === null ||
        //         rawTxHex === ''
        //     ) {
        //         /* Return null. */
        //         return null
        //     }

        //     if (typeof rawTxHex !== 'undefined' && rawTxHex !== '') {
        //         /* Parse tx outpoint index. */
        //         const txOutputScriptBytes = rawTxHex.slice(310, 312)

        //         /* Return tx input count. */
        //         return txOutputScriptBytes
        //     } else {
        //         /* Return null. */
        //         return null
        //     }
        // },

        // txPubKeyScript() {
        //     /* Validate hex value. */
        //     if (
        //         typeof rawTxHex === 'undefined' ||
        //         rawTxHex === null ||
        //         rawTxHex === ''
        //     ) {
        //         /* Return null. */
        //         return null
        //     }

        //     if (typeof rawTxHex !== 'undefined' && rawTxHex !== '') {
        //         /* Parse tx outpoint index. */
        //         const txPubKeyScript = rawTxHex.slice(312, 362)

        //         /* Return tx input count. */
        //         return txPubKeyScript
        //     } else {
        //         /* Return null. */
        //         return null
        //     }
        // },

        // txLockTime() {
        //     /* Validate hex value. */
        //     if (
        //         typeof rawTxHex === 'undefined' ||
        //         rawTxHex === null ||
        //         rawTxHex === ''
        //     ) {
        //         /* Return null. */
        //         return null
        //     }

        //     if (typeof rawTxHex !== 'undefined' && rawTxHex !== '') {
        //         /* Parse tx outpoint index. */
        //         const txLockTime = rawTxHex.slice(362, 370)

        //         /* Return tx input count. */
        //         return txLockTime
        //     } else {
        //         /* Return null. */
        //         return null
        //     }
        // },

    },
}
</script>
