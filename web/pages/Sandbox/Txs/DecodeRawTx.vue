<script setup>
import numeral from 'numeral'
import { ref } from 'vue'
import { useSystemStore } from '@/stores/system'

/* Initialize System store. */
const System = useSystemStore()

/**
 * Reverse Bytes
 *
 * Reverses the order (endianness) of the hex string.
 *
 * @param {String} _bytes A (hex) string.
 */
const reverseBytes = (_bytes) => {
    if (!Array.isArray(_bytes)) {
        // return _bytes
        // NOTE: We presume this is a HEX string.
        return _bytes.match(/[a-fA-F0-9]{2}/g).reverse().join('')
    }

    if (typeof _bytes === 'undefined' || !_bytes || _bytes.length === 0) {
        return _bytes
    }

    /* Reverse bytes. */
    // source: https://stackoverflow.com/a/29017642/514914
    return _bytes.match(/[a-fA-F0-9]{2}/g).reverse().join('')
}

// const rawTxHex = ref(null)
const rawTxHex = ref('0200000001abadc7de402c7a7b84b7fb2eff5d0c8c94d661d010637a4fb5b8c11c55e6f435000000006441f8c401531747cb2cfb133a37b0817a942cbc72cbe259aec83a5d2ee8d6977a535a2050d4f2dbc53560673fbdfc17f7ef6af14e390964847ed5d4e7a487d29c094121024c750792d20e799f91cad7ebd8e67ae5e6638be213fcec8b4874a010d070db4900000000016e040000000000001976a9141d048fbba6307f595356910bca64fa0e86ca7de788ac00000000') // BCH #1
// const rawTxHex = ref('000100c80e241c69107c397ad81730541aba81d0528d14309b2a516f6e415c484c6b9864222103cbe16ecb57d7a173ef5d46692daf38f366e2939b655817335fbfcd8a4edc41c0405e29f9533df564bc308d188e7e12a3f41954e24ba1d7a994c8d0060ea819a70c2af63d74b995f9aace3daf965df314df94b437cb662eff12861e2fd3d6974e1afeffffff39050000000000000101580200000000000017005114aa53676557ac11d41f0c66caade565cac78ca4f8605b0300') // NEXA

const chainid = computed(() => {
    /* Validate hex value. */
    if (
        typeof rawTxHex.value === 'undefined' ||
        rawTxHex.value === null ||
        rawTxHex.value === ''
    ) {
        /* Return null. */
        return null
    }

    /* Test for Bitcoin Cash. */
    if (rawTxHex.value.slice(0, 8) === '02000000') {
        return 'BCH'
    }

    /* Test for Nexa. */
    if (rawTxHex.value.slice(0, 2) === '00') {
        return 'NEXA'
    }

    return null
})

/**
 * Transaction Version (Parser)
 *
 * Will parse the transaction version.
 */
const txVersion = computed(() => {
    /* Validate hex value. */
    if (
        typeof rawTxHex.value === 'undefined'
        || rawTxHex.value === null
        || rawTxHex.value === ''
    ) {
        /* Return null. */
        return null
    }

    /* Initialize version. */
    let version = null

    /* Validate hex length. */
    // NOTE: Allow up to 4 bytes for version number.
    if (rawTxHex.value.length >= 8) {
        if (chainid.value === 'BCH') {
            /* Parse (transaction) version. */
            version = rawTxHex.value.slice(0, 8) // BCH
        }

        if (chainid.value === 'NEXA') {
            /* Parse (transaction) version. */
            version = rawTxHex.value.slice(0, 2) // NEXA
        }
    }

    /* Return (transaction) version. */
    return version
})

const txInputCount = computed(() => {
    /* Validate hex value. */
    if (!chainid) return null

    let inputCount = null

    if (typeof rawTxHex.value !== 'undefined' && rawTxHex.value !== '') {
        if (chainid.value === 'BCH') {
            /* Parse tx input count. */
            inputCount = rawTxHex.value.slice(8, 10)
        }

        if (chainid.value === 'NEXA') {
            /* Parse tx input count. */
            inputCount = rawTxHex.value.slice(2, 4)
        }
    }

    /* Return tx input count. */
    return inputCount
})

const txId = computed(() => {
    /* Validate hex value. */
    if (!chainid) return null

    let startPos = 0
    let endPos = 0
    let value = null

    if (typeof rawTxHex.value !== 'undefined' && rawTxHex.value !== '') {
        /* Parse tx outpoint index. */
        value = rawTxHex.value.slice(10, 74)
    }

    /* Return tx input count. */
    return {
        startPos,
        endPos,
        value,
        reversed: reverseBytes(value),
    }
})

const txOutpointIndex = computed(() => {
    /* Validate hex value. */
    if (!chainid) return null

    let outpointIndex = null

    if (typeof rawTxHex.value !== 'undefined' && rawTxHex.value !== '') {
        if (chainid.value === 'BCH') {
            /* Parse tx outpoint index. */
            outpointIndex = rawTxHex.value.slice(74, 82)
        }

        if (chainid.value === 'NEXA') {
            /* Parse tx outpoint index. */
            outpointIndex = rawTxHex.value.slice(4, 6)
        }
    }

    /* Return tx input count. */
    return outpointIndex
})

const txOutpoint = computed(() => {
    /* Validate hex value. */
    if (!chainid || chainid !== 'NEXA') return null

    let outpoint = null
    let reversed = null

    if (typeof rawTxHex.value !== 'undefined' && rawTxHex.value !== '') {
        /* Parse tx id. */
        outpoint = rawTxHex.value.slice(6, 70)

        /* Reverse endianness. */
        reversed = reverseBytes(outpoint)
    }

    /* Return (reversed) tx id. */
    return reversed
})

const authBlock = computed(() => {
    /* Validate hex value. */
    if (!chainid) return null

    let authBlockLength = 0

    if (chainid.value === 'BCH') {
        /* Parse authorization block. */
        authBlockLength = rawTxHex.value.slice(82, 84)
    }

    /* Return authorization block length. */
    return authBlockLength
})

const sigBlock = computed(() => {
    /* Validate hex value. */
    if (!chainid) return null

    let sigBlockLength = 0

    if (chainid.value === 'BCH') {
        /* Parse signature block. */
        sigBlockLength = rawTxHex.value.slice(84, 86)
    }

    /* Return signature block length. */
    return sigBlockLength
})

const txInputScriptBytes = computed(() => {
    /* Validate hex value. */
    if (!chainid) return null

    if (typeof rawTxHex.value !== 'undefined' && rawTxHex.value !== '') {
        /* Parse tx outpoint index. */
        const txInputScriptBytes = rawTxHex.value.slice(76, 142)

        /* Return tx input count. */
        return txInputScriptBytes
    } else {
        /* Return null. */
        return null
    }
})

const txSignature = computed(() => {
    /* Validate hex value. */
    if (!chainid) return null

    let startPos = 0
    let endPos = 0
    let value = null

    if (typeof rawTxHex.value !== 'undefined' && rawTxHex.value !== '') {
        if (chainid.value === 'BCH') {
            const sigLen = parseInt(sigBlock.value, 16) * 2

            startPos = 86
            endPos = startPos + sigLen

            /* Parse tx outpoint index. */
            value = rawTxHex.value.slice(startPos, endPos)
        }

        if (chainid.value === 'NEXA') {
            const sigLen = parseInt(sigBlock.value, 16) * 2

            startPos = 144
            endPos = startPos + sigLen

            /* Parse tx outpoint index. */
            value = rawTxHex.value.slice(startPos, endPos)
        }
    }

    /* Return tx input count. */
    return {
        startPos,
        endPos,
        tiny: `${value.slice(0, 16)} ... ${value.slice(-16)}`, // for mobile
        abbr: `${value.slice(0, 32)} ... ${value.slice(-32)}`, // for desktop
        value,
    }
})

const txPubkey = computed(() => {
    /* Validate hex value. */
    if (!chainid) return null

    let startPos = 0
    let endPos = 0
    let value = null
    let pubkeyLen = 0

    if (typeof rawTxHex.value !== 'undefined' && rawTxHex.value !== '') {
        if (chainid.value === 'BCH') {
            pubkeyLen = rawTxHex.value.slice(txSignature.value.endPos, txSignature.value.endPos + 2)
            // console.log('PUBKEY LEN', pubkeyLen)

            startPos = txSignature.value.endPos + 2
            endPos = startPos + (parseInt(pubkeyLen, 16) * 2)

            /* Parse tx outpoint index. */
            // FIXME: Calculate the txInputScriptBytes (length).
            value = rawTxHex.value.slice(startPos, endPos)
        }

        if (chainid.value === 'NEXA') {

            startPos = 144
            endPos = 272

            /* Parse tx outpoint index. */
            // FIXME: Calculate the txInputScriptBytes (length).
            value = rawTxHex.value.slice(startPos, endPos)
        }
    }

    /* Return tx input count. */
    return {
        startPos,
        endPos,
        value,
    }
})

const txSequence = computed(() => {
    /* Validate hex value. */
    if (!chainid) return null

    let startPos = 0
    let endPos = 0
    let value = null

    if (typeof rawTxHex.value !== 'undefined' && rawTxHex.value !== '') {
        if (chainid.value === 'BCH') {
            startPos = txPubkey.value.endPos
            endPos = startPos + 8

            /* Parse tx outpoint index. */
            value = rawTxHex.value.slice(startPos, endPos)
        }

        if (chainid.value === 'NEXA') {
            startPos = txPubkey.value.endPos
            endPos = startPos + 8

            /* Parse tx outpoint index. */
            value = rawTxHex.value.slice(startPos, endPos)
        }
    }

    /* Return tx input count. */
    return {
        startPos,
        endPos,
        value,
    }
})

const txOutputCount = computed(() => {
    /* Validate hex value. */
    if (!chainid) return null

    let startPos = 0
    let endPos = 0
    let value = null

    if (typeof rawTxHex.value !== 'undefined' && rawTxHex.value !== '') {
        if (chainid.value === 'BCH') {
            startPos = txSequence.value.endPos
            endPos = startPos + 2

            /* Parse tx outpoint index. */
            value = rawTxHex.value.slice(startPos, endPos)
        }

        if (chainid.value === 'NEXA') {
            startPos = txSequence.value.endPos
            endPos = startPos + 2

            /* Parse tx outpoint index. */
            value = rawTxHex.value.slice(startPos, endPos)
        }
    }

    /* Return tx input count. */
    return {
        startPos,
        endPos,
        value,
    }
})

const txOutputValue = computed(() => {
    /* Validate hex value. */
    if (!chainid) return null

    let startPos = 0
    let endPos = 0
    let value = null

    if (typeof rawTxHex.value !== 'undefined' && rawTxHex.value !== '') {
        if (chainid.value === 'BCH') {
            startPos = txOutputCount.value.endPos
            endPos = startPos + 16

            /* Parse tx outpoint index. */
            value = rawTxHex.value.slice(startPos, endPos)
        }

        if (chainid.value === 'NEXA') {
            startPos = txOutputCount.value.endPos
            endPos = startPos + 16

            /* Parse tx outpoint index. */
            value = rawTxHex.value.slice(startPos, endPos)
        }
    }

    let bch
    let reversed
    let satoshis
    let usd

    reversed = reverseBytes(value)

    satoshis = parseInt(reversed, 16)

    bch = satoshis / 100000000.0

    if (System.quotes.BCH) {
        console.log('FOUND BCH (System.quotes.BCH)', System.quotes.BCH)
        console.log('FOUND BCH (System.quotes.BCH.price)', System.quotes.BCH.price)
        usd = numeral((satoshis / 100000000.0) * System.quotes.BCH.price).format('$0,0.00[00]')
    }

    /* Return tx input count. */
    return {
        startPos,
        endPos,
        value,
        reversed,
        satoshis,
        bch,
        usd,
    }
})

const txOutputScriptBytes = computed(() => {
    return 'n/a'
    /* Validate hex value. */
    if (!chainid) return null

    if (typeof rawTxHex.value !== 'undefined' && rawTxHex.value !== '') {
        /* Parse tx outpoint index. */
        const txOutputScriptBytes = rawTxHex.value.slice(310, 312)

        /* Return tx input count. */
        return txOutputScriptBytes
    } else {
        /* Return null. */
        return null
    }
})

const txPubKeyScript = computed (() => {
    /* Validate hex value. */
    if (!chainid) return null

    if (typeof rawTxHex.value !== 'undefined' && rawTxHex.value !== '') {
        /* Parse tx outpoint index. */
        const txPubKeyScript = rawTxHex.value.slice(-56, -8)

        /* Return tx input count. */
        return txPubKeyScript
    } else {
        /* Return null. */
        return null
    }
})

const txLockTime = computed(() => {
    /* Validate hex value. */
    if (!chainid) return null

    let startPos = 0
    let endPos = 0
    let value = null

    if (typeof rawTxHex.value !== 'undefined' && rawTxHex.value !== '') {
        if (chainid.value === 'BCH') {
            startPos = txPubkey.value.endPos
            endPos = startPos + 8

            /* Parse tx outpoint index. */
            value = rawTxHex.value.slice(startPos, endPos)
        }

        if (chainid.value === 'NEXA') {
            startPos = txPubkey.value.endPos
            endPos = startPos + 8

            /* Parse tx outpoint index. */
            value = rawTxHex.value.slice(startPos, endPos)
        }
    }

    /* Return tx input count. */
    return {
        startPos,
        endPos,
        value,
    }
})
</script>

<template>
    <main class="flex flex-col space-y-5">
        <div v-if="chainid === 'BCH'" class="">
            <h2 class="text-3xl text-yellow-700 font-medium">
                Bitcoin Cash Transaction
            </h2>
        </div>
        <div v-if="chainid === 'NEXA'" class="">
            <h2 class="text-3xl text-yellow-700 font-medium">
                Nexa Transaction
            </h2>
        </div>

        <textarea
            class="w-full h-32 px-2 py-1 block border-4 border-yellow-400 bg-yellow-50 text-xs text-yellow-900 rounded-lg"
            placeholder="Paste raw hex code here"
            v-model="rawTxHex"
        ></textarea>

        <button @click="rawTxHex = ''" class="w-fit my-5 px-3 py-2 bg-yellow-200 border-2 border-yellow-400 rounded-lg hover:bg-yellow-300">
            Clear Data
        </button>

        <section v-if="txVersion">
            <h2 class="text-2xl font-medium">
                Version
            </h2>

            <h3 class="text-xl text-rose-500 font-medium">
                {{txVersion}}
            </h3>

            <small v-if="chainid === 'BCH'" class="text-muted">
                Version number is the 1st 4 bytes of the transaction data in Big-endian (BE) format.
            </small>
            <small v-if="chainid === 'NEXA'" class="text-muted">
                Version number is the 1st byte of the transaction data.
            </small>
        </section>

        <section v-if="txInputCount">
            <h2 class="text-2xl font-medium">
                Input Count
            </h2>

            <h3 class="text-xl text-rose-500 font-medium font-mono">
                {{txInputCount}}
            </h3>

            <div v-if="txId">
                <small class="block text-muted">
                    Transaction ID
                    <a :href="'https://blockchair.com/bitcoin-cash/transaction/' + txId.reversed" target="_blank" class="block font-mono text-base text-blue-500 font-medium hover:underline">
                        {{txId.reversed}}
                    </a>
                </small>

                <small class="block text-xs italic">
                    NOTE: Endianness has been reversed.
                </small>
            </div>
        </section>

        <section v-if="txOutpointIndex">
            <h2 v-if="chainid === 'NEXA'" class="text-2xl font-medium">
                Outpoint Index
            </h2>
            <h2 v-if="chainid === 'BCH'" class="text-2xl font-medium">
                Vout Index
            </h2>

            <h3 class="text-xl text-rose-500 font-medium font-mono">
                {{txOutpointIndex}}
            </h3>
        </section>

        <section v-if="txOutpoint">
            <h2 class="text-2xl font-medium">
                Outpoint
            </h2>

            <h3 class="text-xl text-rose-500 font-medium font-mono">
                {{txOutpoint}}
            </h3>
        </section>

        <section v-if="authBlock">
            <h2 class="text-2xl font-medium">
                Authorization Block
            </h2>

            <h3 class="text-xl text-rose-500 font-medium font-mono">
                {{authBlock}} <small class="text-xs">[ {{parseInt(authBlock, 16)}} bytes ]</small>
            </h3>

            <section class="ml-5 px-3 py-1 bg-yellow-100 border border-yellow-500 rounded">
                <h3 class="text-xl text-rose-500 font-medium font-mono">
                    {{sigBlock}}

                    <small class="text-xs">[ {{parseInt(sigBlock, 16)}} bytes ]</small>

                    <small v-if="sigBlock === '41'" class="ml-2 text-xs">Schnorr Signature</small>
                    <small v-else class="ml-2 text-xs">ECSDA Signature</small>
                </h3>

                <small class="text-xs text-rose-500 font-medium font-mono">
                    {{txSignature.abbr}}
                </small>

                <h3 class="text-xl text-rose-500 font-medium font-mono">
                    {{txPubkey.value}}
                </h3>
            </section>
        </section>

        <section v-if="txVersion">
            <h2 class="text-2xl font-medium">
                Script Bytes
            </h2>

            <h3 class="text-xl text-rose-500 font-medium font-mono">
                {{txInputScriptBytes}}
            </h3>
        </section>

        <section v-if="txVersion">
            <h2 class="text-2xl font-medium">
                Signature
            </h2>

            <h3 class="text-xs text-rose-500 font-medium font-mono">
                {{txSignature.abbr}}
            </h3>
        </section>

        <section v-if="txSequence">
            <h2 class="text-2xl font-medium">
                Sequence
            </h2>

            <h3 class="text-xl text-rose-500 font-medium font-mono">
                {{txSequence.value}}
            </h3>

            <small class="text-muted">
                Value equals <code class="mx-1 text-sm text-rose-500 font-medium">MAXINT - 1</code>
            </small>
        </section>

        <section v-if="txOutputCount">
            <h2 class="text-2xl font-medium">
                Output Count
            </h2>

            <h3 class="text-xl text-rose-500 font-medium font-mono">
                {{txOutputCount.value}}
            </h3>
        </section>

        <section v-if="txOutputValue" class="w-fit mt-2 px-3 py-1 bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-500 rounded shadow">
            <h2 class="text-xl text-yellow-900 font-medium">
                Output Value
            </h2>

            <h3 class="text-xl text-rose-500 font-medium font-mono">
                {{txOutputValue.value}}
            </h3>

            <small class=" text-yellow-700">
                An <span class="font-medium">8-byte (64-bit)</span> number in Big-endian (BE) format.
            </small>

            <section class="w-fit my-1 px-3 py-1 text-yellow-400 bg-gradient-to-r from-yellow-800 to-yellow-700 border border-yellow-500 rounded shadow">
                <div v-if="txOutputValue.satoshis" class="grid grid-cols-2 gap-2">
                    <span class="font-mono text-yellow-100 font-medium text-right">
                        {{txOutputValue.satoshis}}
                    </span>

                    <span class="text-sm">
                        satoshis
                    </span>
                </div>

                <div v-if="txOutputValue.bch" class="grid grid-cols-2 gap-2">
                    <span class="font-mono text-yellow-100 font-medium text-right">
                        {{txOutputValue.bch}}
                    </span>

                    <span class="text-sm">
                        BCH
                    </span>
                </div>

                <div v-if="txOutputValue.usd" class="grid grid-cols-2 gap-2">
                    <span class="font-mono text-yellow-100 font-medium text-right">
                        {{txOutputValue.usd}}
                    </span>

                    <span class="text-sm">
                        USD

                        <small class="text-xs text-yellow-500">
                            {{numeral(System.quotes.BCH.price).format('$0,0.00')}}
                        </small>
                    </span>
                </div>
            </section>
        </section>

        <section v-if="txVersion">
            <h2 class="text-2xl font-medium">
                Script Bytes
            </h2>

            <h3 class="text-xl text-rose-500 font-medium font-mono">
                {{txOutputScriptBytes}}
            </h3>
        </section>

        <section v-if="txVersion">
            <h2 class="text-2xl font-medium">
                PubKey Script / Template
            </h2>

            <h3 class="text-xl text-rose-500 font-medium font-mono">
                {{txPubKeyScript}}
            </h3>
        </section>

        <section v-if="txLockTime">
            <h2 class="text-2xl font-medium">
                Lock Time
            </h2>

            <h3 class="text-xl text-rose-500 font-medium font-mono">
                {{txLockTime.value}}
            </h3>
        </section>

    </main>
</template>
