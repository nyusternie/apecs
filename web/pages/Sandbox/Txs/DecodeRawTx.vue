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
    if (typeof _bytes === 'undefined' || !_bytes || _bytes.length === 0) {
        return _bytes
    }

    // if (!Array.isArray(_bytes)) {
    //     // return _bytes
    //     // NOTE: We presume this is a HEX string.
    //     return _bytes.match(/[a-fA-F0-9]{2}/g).reverse().join('')
    // }

    /* Reverse bytes. */
    // source: https://stackoverflow.com/a/29017642/514914
    return _bytes.match(/[a-fA-F0-9]{2}/g).reverse().join('')
}

// const rawTxHex = ref(null)
// const rawTxHex = ref('0200000001abadc7de402c7a7b84b7fb2eff5d0c8c94d661d010637a4fb5b8c11c55e6f435000000006441f8c401531747cb2cfb133a37b0817a942cbc72cbe259aec83a5d2ee8d6977a535a2050d4f2dbc53560673fbdfc17f7ef6af14e390964847ed5d4e7a487d29c094121024c750792d20e799f91cad7ebd8e67ae5e6638be213fcec8b4874a010d070db4900000000016e040000000000001976a9141d048fbba6307f595356910bca64fa0e86ca7de788ac00000000') // BCH (1 in / 1 out)
// const rawTxHex = ref('0200000002b8d95713b4a6c742f55326b2fa0bbfc7810630f7e293b9e172b67058cdcb3487010000006441bc71d8a42d1f9bf8137bcea2834770d6a1b31c5afdf7f8d4bbbb8815fcca0037b55c7fa78ae1f62e87e3ac953ab9241691ae3f8b09f4edfa402590e64d1451964121024c750792d20e799f91cad7ebd8e67ae5e6638be213fcec8b4874a010d070db490000000080d2fec073c4d7e8b539c1cd8e30a23f9b29b6d7b47e4a3b639401592194e2f50100000064413023ef0bf09b203b105a679aa337de7135c96a2361a52e28bd8981c78f4f238e5f57c995ce9982f1e1d1954f1f9d9fe90e4d5a1c8065b321e3f4bbf38d9835de4121024c750792d20e799f91cad7ebd8e67ae5e6638be213fcec8b4874a010d070db4900000000010c090000000000001976a9141d048fbba6307f595356910bca64fa0e86ca7de788ac00000000') // BCH (2 in / 1 out)
const rawTxHex = ref('020000000148957a304661f6426cb13bb364d558fa6dbed2202e4cd5bcbfa208a75de1022a040000006b483045022100c4d265fc9b7b61c944a917c7efc6d378754f525448f433e64dfcb1b07c9d78c902207db08c00603dde7b07488f90f760e228f9295fcdf9afeecc34ed40cdd6e5630441210350a165309f0f0761ed321890e033bc4af5e842cf38507e9862d602e448233fdeffffffff020a1f6d00000000001976a914658fb06e86f3c3ac21c6fbf50e18dfc0747b2dbd88aceacfe300000000001976a9143cc2e4b8446d150efdc420babb77ef69422e06fb88ac00000000') // BCH_ECSDA (1 in / 2 out)
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

const txOutpointIndices = computed(() => {
    /* Validate hex value. */
    if (!chainid) return null

    let startPos = 0
    let endPos = 0
    let value = null

    let outpointIndices = []

    if (typeof rawTxHex.value !== 'undefined' && rawTxHex.value !== '') {
        if (chainid.value === 'BCH') {
            startPos = 74
            endPos = 82
            value = rawTxHex.value.slice(startPos, endPos)

            /* Parse authorization block. */
            outpointIndices.push({
                startPos,
                endPos,
                value,
            })

            startPos = 356
            endPos = 364
            value = rawTxHex.value.slice(startPos, endPos)

            /* Parse authorization block. */
            outpointIndices.push({
                startPos,
                endPos,
                value,
            })
        }

        if (chainid.value === 'NEXA') {
            /* Parse tx outpoint index. */
            outpointIndex = rawTxHex.value.slice(4, 6)
        }
    }

    /* Return tx input count. */
    return outpointIndices
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

const txAuthBlocks = computed(() => {
    /* Validate hex value. */
    if (!chainid) return null

    let startPos = 0
    let endPos = 0
    let authLen = 0

    let authBlocks = []

    if (chainid.value === 'BCH') {
        startPos = 82
        endPos = startPos + 2
        authLen = parseInt(rawTxHex.value.slice(startPos, endPos), 16) * 2
        startPos = endPos
        endPos = startPos + authLen

        /* Parse authorization block. */
        authBlocks.push({
            startPos,
            endPos,
            value: rawTxHex.value.slice(startPos, endPos),
        })

        /* Parse # of remaining inputs. */
        const numInputsRemaining = parseInt(txInputCount.value, 16) - 1

        /* Handle remaining inputs. */
        for (let i = 0; i < numInputsRemaining; i++) {
            startPos = endPos + 8 + 64 + 8 // sequence + txid + vout
            endPos = startPos + 2
            authLen = parseInt(rawTxHex.value.slice(startPos, endPos), 16) * 2
            startPos = endPos
            endPos = startPos + authLen

            authBlocks.push({
                startPos,
                endPos,
                value: rawTxHex.value.slice(startPos, endPos),
            })
        }
    }
    // console.log('AUTH BLOCKS', authBlocks)

    /* Return authorization block length. */
    return authBlocks
})

const txSigBlocks = computed(() => {
    /* Validate hex value. */
    if (!chainid) return null

    let startPos = 0
    let endPos = 0
    let value = null
    let sigBlockLengths = []

    if (chainid.value === 'BCH') {
        for (let i = 0; i < txAuthBlocks.value.length; i++) {
            startPos = txAuthBlocks.value[i].startPos
            endPos = startPos + 2
            value = rawTxHex.value.slice(startPos, endPos)

            /* Parse signature block. */
            sigBlockLengths.push({
                startPos,
                endPos,
                value,
            })
        }
    }

    console.log('sigBlockLengths', sigBlockLengths)

    /* Return signature block length. */
    return sigBlockLengths
})

const txInputScriptBytes = computed(() => {
    return null
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

const txSignatures = computed(() => {
    /* Validate hex value. */
    if (!chainid) return null

    let startPos = 0
    let endPos = 0
    let value = null

    let signatures = []

    if (typeof rawTxHex.value !== 'undefined' && rawTxHex.value !== '') {
        if (chainid.value === 'BCH') {
            txSigBlocks.value.forEach(_block => {
                const sigLen = parseInt(_block.value, 16) * 2

                startPos = _block.startPos + 2
                endPos = startPos + sigLen

                /* Parse tx outpoint index. */
                value = rawTxHex.value.slice(startPos, endPos)

                signatures.push({
                    startPos,
                    endPos,
                    tiny: `${value.slice(0, 16)} ... ${value.slice(-16)}`, // for mobile
                    abbr: `${value.slice(0, 32)} ... ${value.slice(-32)}`, // for desktop
                    value,
                })
            })
        }

        if (chainid.value === 'NEXA') {
            const sigLen = parseInt(txSigBlocks.value, 16) * 2

            startPos = 144
            endPos = startPos + sigLen

            /* Parse tx outpoint index. */
            value = rawTxHex.value.slice(startPos, endPos)
        }
    }

    /* Return tx input count. */
    return signatures
})

const txPubkeys = computed(() => {
    /* Validate hex value. */
    if (!chainid) return null

    let startPos = 0
    let endPos = 0
    let value = null

    let pubkeys = []
    let pubkeyLen = 0

    if (typeof rawTxHex.value !== 'undefined' && rawTxHex.value !== '') {
        if (chainid.value === 'BCH') {
            txSignatures.value.forEach(_sig => {
                pubkeyLen = rawTxHex.value.slice(_sig.endPos, _sig.endPos + 2)
                // console.log('PUBKEY LEN', pubkeyLen)

                startPos = _sig.endPos + 2
                endPos = startPos + (parseInt(pubkeyLen, 16) * 2)

                /* Parse tx outpoint index. */
                // FIXME: Calculate the txInputScriptBytes (length).
                value = rawTxHex.value.slice(startPos, endPos)

                pubkeys.push({
                    startPos,
                    endPos,
                    value,
                })
            })
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
    return pubkeys
})

const txSequences = computed(() => {
    /* Validate hex value. */
    if (!chainid) return null

    let startPos = 0
    let endPos = 0
    let value = null

    let sequences = []

    if (typeof rawTxHex.value !== 'undefined' && rawTxHex.value !== '') {
        if (chainid.value === 'BCH') {
            txPubkeys.value.forEach(_pubkey => {
                startPos = _pubkey.endPos
                endPos = startPos + 8

                /* Parse tx outpoint index. */
                // FIXME: Calculate the txInputScriptBytes (length).
                value = rawTxHex.value.slice(startPos, endPos)

                sequences.push({
                    startPos,
                    endPos,
                    value,
                })
            })
        }

        if (chainid.value === 'NEXA') {
            startPos = txPubkeys.value.endPos
            endPos = startPos + 8

            /* Parse tx outpoint index. */
            value = rawTxHex.value.slice(startPos, endPos)
        }
    }

    /* Return tx input count. */
    return sequences
})

const txOutputCount = computed(() => {
    /* Validate hex value. */
    if (!chainid) return null

    let startPos = 0
    let endPos = 0
    let value = null

    if (typeof rawTxHex.value !== 'undefined' && rawTxHex.value !== '') {
        if (chainid.value === 'BCH') {
            startPos = txSequences.value[txSequences.value.length - 1].endPos
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
    return null
    /* Validate hex value. */
    if (!chainid) return null

    let startPos = 0
    let endPos = 0
    let value = null

    if (typeof rawTxHex.value !== 'undefined' && rawTxHex.value !== '') {
        if (chainid.value === 'BCH') {
            startPos = txOutputValue.value.endPos
            endPos = startPos + 2

            const keyBlock = rawTxHex.value.slice(startPos, endPos)
            console.log('KEY BLOCK', keyBlock)

            const keyLen = parseInt(keyBlock, 16) * 2

            startPos = startPos + 2
            endPos = startPos + keyLen

            /* Parse tx outpoint index. */
            value = rawTxHex.value.slice(startPos, endPos)
        }

        if (chainid.value === 'NEXA') {
            startPos = txSequences.value[0].endPos
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

const txPubKeyScript = computed (() => {
    /* Validate hex value. */
    if (!chainid) return null

    let startPos = 0
    let endPos = 0
    let value = null

    if (typeof rawTxHex.value !== 'undefined' && rawTxHex.value !== '') {
        if (chainid.value === 'BCH') {
            startPos = txOutputValue.value.endPos
            endPos = startPos + 2

            const keyBlock = rawTxHex.value.slice(startPos, endPos)
            console.log('KEY BLOCK', keyBlock)

            const keyLen = parseInt(keyBlock, 16) * 2

            startPos = startPos + 2
            endPos = startPos + keyLen

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

const txLockTime = computed(() => {
    /* Validate hex value. */
    if (!chainid) return null

    let startPos = 0
    let endPos = 0
    let value = null

    if (typeof rawTxHex.value !== 'undefined' && rawTxHex.value !== '') {
        if (chainid.value === 'BCH') {
            startPos = txPubKeyScript.value.endPos
            endPos = startPos + 8

            /* Parse tx outpoint index. */
            value = rawTxHex.value.slice(startPos, endPos)
        }

        if (chainid.value === 'NEXA') {
            startPos = txPubKeyScript.value.endPos
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


const myHandler = (_event) => {
    console.log('HANDLER', _event)

}
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

        <section v-if="txVersion" class="w-fit mt-2 px-3 py-1 bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-500 rounded shadow">
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

        <section v-if="txId" class="w-fit mt-2 px-3 py-1 bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-500 rounded shadow">
            <h2 class="text-2xl font-medium">
                Transaction ID
            </h2>

            <small class="block text-muted">
                <a :href="'https://blockchair.com/bitcoin-cash/transaction/' + txId.reversed" target="_blank" class="block font-mono text-base text-blue-500 font-medium hover:underline">
                    {{txId.reversed}}
                </a>
            </small>

            <small class="block text-xs italic">
                NOTE: Endianness has been reversed.
            </small>
        </section>

        <section v-if="txInputCount" class="w-fit mt-2 px-3 py-1 bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-500 rounded shadow">
            <h2 class="text-2xl font-medium">
                Input Count
            </h2>

            <h3 class="text-xl text-rose-500 font-medium font-mono">
                {{txInputCount}}
            </h3>

        </section>

        <section v-for="(block, index) of txAuthBlocks" :key="block.value" class="ml-10 px-3 py-3 bg-gradient-to-r from-gray-100 to-gray-200 border-2 border-gray-400 rounded shadow">
            <h2 class="text-xl text-gray-500 font-medium tracking-widest">
                Input # {{index + 1}}
            </h2>

            <section v-if="txOutpointIndices" class="w-fit mt-2 px-3 py-1 bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-500 rounded shadow">
                <h2 v-if="chainid === 'NEXA'" class="text-2xl font-medium">
                    Outpoint Index
                </h2>
                <h2 v-if="chainid === 'BCH'" class="text-2xl font-medium">
                    Vout Index
                </h2>

                <h3 class="text-xl text-rose-500 font-medium font-mono">
                    {{txOutpointIndices[index].value}}
                </h3>
            </section>

            <section v-if="txAuthBlocks">
                <h2 class="text-2xl font-medium" @contextmenu.prevent="myHandler($event)">
                    Authorization Block
                </h2>

                <div>
                    <h3 class="text-xs text-rose-500 font-medium font-mono">
                        {{txAuthBlocks[index].value}} <small class="">[ {{txAuthBlocks[index].value.length / 2}} bytes ]</small>
                    </h3>

                    <section class="mt-2 px-3 py-1 bg-yellow-100 border border-yellow-500 rounded">
                        <h3 class="text-xl text-rose-500 font-medium font-mono">
                            {{txSigBlocks[index].value}}

                            <small class="text-xs">[ {{parseInt(txSigBlocks[index].value, 16)}} bytes ]</small>

                            <small v-if="txSigBlocks[index].value === '41'" class="ml-2 text-xs">Schnorr Signature</small>
                            <small v-else class="ml-2 text-xs">ECDSA Signature</small>
                        </h3>

                        <small class="text-xs text-rose-500 font-medium font-mono">
                            {{txSignatures[index].abbr}}
                        </small>

                        <h3 class="text-sm text-yellow-700 font-medium">
                            Sig Hash Type ⇒ {{txSignatures[index].value.slice(-2)}}
                            <small v-if="txSignatures[index].value.slice(-2) === '41'" class="text-xs">
                                [ ALL | FORKID ]
                            </small>
                            <small v-if="txSignatures[index].value.slice(-2) === 'c1'" class="text-xs">
                                [ ALL | ANYONECANPAY | FORKID ]
                            </small>
                        </h3>

                        <h3 class="text-sm text-rose-500 font-medium font-mono">
                            {{txPubkeys[index].value}}
                        </h3>

                        <h3 class="text-sm text-rose-500 font-medium font-mono">
                            {{txSequences[index].value}}

                            <small class="text-muted text-xs">
                                (<code class="mx-1 text-rose-500 font-medium">MAXINT - 1??</code>)
                            </small>
                        </h3>
                    </section>
                </div>
            </section>

            <!-- <section v-if="txInputScriptBytes">
                <h2 class="text-2xl font-medium">
                    Script Bytes
                </h2>

                <h3 class="text-xl text-rose-500 font-medium font-mono">
                    {{txInputScriptBytes.value}}
                </h3>
            </section> -->

        </section>

        <section v-if="txOutpoint">
            <h2 class="text-2xl font-medium">
                Outpoint
            </h2>

            <h3 class="text-xl text-rose-500 font-medium font-mono">
                {{txOutpoint}}
            </h3>
        </section>

        <section v-if="txOutputCount" class="w-fit mt-2 px-3 py-1 bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-500 rounded shadow">
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

        <section v-if="txOutputScriptBytes">
            <h2 class="text-2xl font-medium">
                Script Bytes
            </h2>

            <h3 class="text-xl text-rose-500 font-medium font-mono">
                {{txOutputScriptBytes.value}}
            </h3>
        </section>

        <section v-if="txPubKeyScript">
            <h2 class="text-2xl font-medium">
                PubKey Script / Template
            </h2>

            <h3 class="text-xl text-rose-500 font-medium font-mono">
                {{txPubKeyScript.value}}
            </h3>
        </section>

        <section v-if="txLockTime" class="w-fit mt-2 px-3 py-1 bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-500 rounded shadow">
            <h2 class="text-2xl font-medium">
                Lock Time
            </h2>

            <h3 class="text-xl text-rose-500 font-medium font-mono">
                {{txLockTime.value}}
            </h3>
        </section>

    </main>
</template>
