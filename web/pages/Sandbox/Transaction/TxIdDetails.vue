<template>
    <main>
        <div class="form-group">
            <label>Transaction Id</label>
            <input
                type="text"
                class="form-control"
                placeholder="Enter a transaction id"
                v-model="txId"
            >
        </div>

        <dl class="row">
            <pre>
                <code>
                    {{txDetails}}
                </code>
            </pre>

            <!-- <dt v-if="txVersion" class="col-sm-4">Version</dt>
            <dd v-if="txVersion" class="col-sm-8">{{txVersion}}</dd>
            <dd v-if="txVersion" class="col-sm-8 offset-sm-4">
                <small class="text-muted">
                    Version numbers can be ...
                </small>
            </dd> -->

            <!-- <dt v-if="txInputCount" class="col-sm-4">Input Count</dt>
            <dd v-if="txInputCount" class="col-sm-8">{{txInputCount}}</dd> -->

            <!-- <dt v-if="txId" class="col-sm-4">Transaction Id</dt>
            <dd v-if="txId" class="col-sm-8"><a :href="'https://explorer.bitcoin.com/bch/tx/' + txId" target="_blank">{{txId}}</a></dd>
            <dd v-if="txVersion" class="col-sm-8 offset-sm-4">
                <small class="text-muted">
                    NOTE: Endianness has been reversed.
                </small>
            </dd> -->

            <!-- <dt v-if="txOutpointIndex" class="col-sm-4">Outpoint Index</dt>
            <dd v-if="txOutpointIndex" class="col-sm-8">{{txOutpointIndex}}</dd> -->

            <!-- <dt v-if="txInputScriptBytes" class="col-sm-4">Script Bytes</dt>
            <dd v-if="txInputScriptBytes" class="col-sm-8">{{txInputScriptBytes}}</dd> -->

            <!-- <dt v-if="txSignature" class="col-sm-4">Signature</dt>
            <dd v-if="txSignature" class="col-sm-8">{{txSignature}}</dd> -->

            <!-- <dt v-if="txSequence" class="col-sm-4">Sequence</dt>
            <dd v-if="txSequence" class="col-sm-8">{{txSequence}}</dd> -->

            <!-- <dt v-if="txOutputCount" class="col-sm-4">Output Count</dt>
            <dd v-if="txOutputCount" class="col-sm-8">{{txOutputCount}}</dd> -->

            <!-- <dt v-if="txValue" class="col-sm-4">Value</dt>
            <dd v-if="txValue" class="col-sm-8">{{txValue}}</dd>
            <dd v-if="txVersion" class="col-sm-8 offset-sm-4">
                <small class="text-muted">
                    NOTE: Endianness has been reversed.
                </small>
            </dd> -->

            <!-- <dt v-if="txOutputScriptBytes" class="col-sm-4">Script Bytes</dt>
            <dd v-if="txOutputScriptBytes" class="col-sm-8">{{txOutputScriptBytes}}</dd> -->

            <!-- <dt v-if="txPubKeyScript" class="col-sm-4">PubKey Script</dt>
            <dd v-if="txPubKeyScript" class="col-sm-8">{{txPubKeyScript}}</dd> -->

            <!-- <dt v-if="txLockTime" class="col-sm-4">Lock Time</dt>
            <dd v-if="txLockTime" class="col-sm-8">{{txLockTime}}</dd> -->

        </dl>
    </main>
</template>

<script>
/* Import modules. */
import { BITBOX } from 'bitbox-sdk'
// import numeral from 'numeral'

export default {
    components: {
        //
    },
    data: () => {
        return {
            bitbox: null,
            usd: 0,

            txId: 'ec062a26ef5577fb35458bb8055a785676c8ce23f360c38de150e203c29f7abc',
            txDetails: null,
        }
    },
    computed: {
        // txInputCount() {
        //     if (this.txId !== '') {
        //         /* Parse tx input count. */
        //         const txInputCount = this.txId.slice(8, 10)
        //
        //         /* Return tx input count. */
        //         return txInputCount
        //     } else {
        //         /* Return null. */
        //         return null
        //     }
        // },

        // txOutpointIndex() {
        //     if (this.txId !== '') {
        //         /* Parse tx outpoint index. */
        //         const txOutpointIndex = this.txId.slice(74, 82)
        //
        //         /* Return tx input count. */
        //         return txOutpointIndex
        //     } else {
        //         /* Return null. */
        //         return null
        //     }
        // },

        // txInputScriptBytes() {
        //     if (this.txId !== '') {
        //         /* Parse tx outpoint index. */
        //         const txInputScriptBytes = this.txId.slice(82, 84)
        //
        //         /* Return tx input count. */
        //         return txInputScriptBytes
        //     } else {
        //         /* Return null. */
        //         return null
        //     }
        // },

        // txSignature() {
        //     if (this.txId !== '') {
        //         /* Parse tx outpoint index. */
        //         // FIXME: Calculate the txInputScriptBytes (length).
        //         const txSignature = this.txId.slice(84, 284)
        //
        //         /* Return tx input count. */
        //         return txSignature
        //     } else {
        //         /* Return null. */
        //         return null
        //     }
        // },

        // txSequence() {
        //     if (this.txId !== '') {
        //         /* Parse tx outpoint index. */
        //         const txSequence = this.txId.slice(284, 292)
        //
        //         /* Return tx input count. */
        //         return txSequence
        //     } else {
        //         /* Return null. */
        //         return null
        //     }
        // },

        // txOutputCount() {
        //     if (this.txId !== '') {
        //         /* Parse tx outpoint index. */
        //         const txOutputCount = this.txId.slice(292, 294)
        //
        //         /* Return tx input count. */
        //         return txOutputCount
        //     } else {
        //         /* Return null. */
        //         return null
        //     }
        // },

        // txValue() {
        //     if (this.txId !== '') {
        //         /* Parse tx outpoint index. */
        //         const txValue = this.txId.slice(294, 310)
        //
        //         /* Reverse endianness. */
        //         const reversed = this.reverseBytes(txValue)
        //
        //         /* Return tx input count. */
        //         return reversed
        //     } else {
        //         /* Return null. */
        //         return null
        //     }
        // },

        // txOutputScriptBytes() {
        //     if (this.txId !== '') {
        //         /* Parse tx outpoint index. */
        //         const txOutputScriptBytes = this.txId.slice(310, 312)
        //
        //         /* Return tx input count. */
        //         return txOutputScriptBytes
        //     } else {
        //         /* Return null. */
        //         return null
        //     }
        // },

        // txPubKeyScript() {
        //     if (this.txId !== '') {
        //         /* Parse tx outpoint index. */
        //         const txPubKeyScript = this.txId.slice(312, 362)
        //
        //         /* Return tx input count. */
        //         return txPubKeyScript
        //     } else {
        //         /* Return null. */
        //         return null
        //     }
        // },

        // txLockTime() {
        //     if (this.txId !== '') {
        //         /* Parse tx outpoint index. */
        //         const txLockTime = this.txId.slice(362, 370)
        //
        //         /* Return tx input count. */
        //         return txLockTime
        //     } else {
        //         /* Return null. */
        //         return null
        //     }
        // },

    },
    methods: {
        /**
         * Initialize BITBOX
         */
        initBitbox() {
            console.info('Initializing BITBOX..')

            try {
                /* Initialize BITBOX. */
                this.bitbox = new BITBOX()
            } catch (err) {
                console.error(err)
            }
        },

        /**
         * Update Price
         */
        async updatePrice() {
            try {
                const current = await this.bitbox.Price.current('usd')
                console.log('CURRENT PRICE', current)

                this.usd = current
            } catch (err) {
                console.error(err)
            }
        },

        /**
         * Update Transaction Details
         */
        async updateTxDetails() {
            if (this.txId !== '') {
                /* Retrieve transaction details. */
                const details = await this.bitbox.Transaction
                    .details(this.txId)

                /* Update (transaction) details. */
                this.txDetails = details
            } else {
                /* Return null. */
                return null
            }
        },

        // reverseBytes(_bytes) {
        //     /* Reverse bytes. */
        //     // source: https://stackoverflow.com/a/29017642/514914
        //     return _bytes.match(/[a-fA-F0-9]{2}/g).reverse().join('')
        // },

    },
    created: async function () {
        /* Initialize BITBOX. */
        this.initBitbox()

        /* Update USD. */
        this.updatePrice()

        /* Update (transaction) details. */
        this.updateTxDetails()

    },
    mounted: function () {
        //
    },
}
</script>

<style scoped>
/*  */
</style>
