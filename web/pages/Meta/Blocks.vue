<template>
    <main aria-labelledby="announcements-title">
        <div class="rounded-lg bg-white overflow-hidden shadow">
            <div class="p-6">
                <h2 class="text-xl font-bold text-gray-800">
                    Latest Blocks
                </h2>

                <h3>
                    Current height is <span class="font-bold text-lg text-blue-500">{{displayBlockHeight}}</span>
                </h3>

                <div class="py-0" v-for="block of displayBlocks" :key="block.hash">
                    <div class="flex justify-end relative top-5 right-5 z-10">
                        <div class="p-2 text-gray-200 text-base font-bold rounded-full bg-pink-500">
                            #{{block.index}}
                        </div>
                    </div>

                    <div class="relative p-3 border-2 border-gray-500 bg-gray-300 rounded-xl focus-within:ring-2 focus-within:ring-cyan-500">
                        <h3 class="text-sm font-semibold text-gray-800">
                            <a href="javascript://" class="hover:underline focus:outline-none">
                                <span class="absolute inset-0" aria-hidden="true"></span>
                                {{shorten(block.hash)}}
                            </a>
                        </h3>

                        <p class="mt-1 text-sm text-gray-600 line-clamp-2">
                            # Txs: {{block.transactions.length}}
                        </p>
                    </div>
                </div>

                <div class="mt-6">
                    <a href="javascript://" class="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        View all
                    </a>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
/* Import modules. */
import numeral from 'numeral'

/* Set constants. */
const NUM_BLOCKS_DISPLAYED = 5

export default {
    props: {
        blockHeight: String,
    },
    data: () => {
        return {
            blocks: null,
            numTxsProcessed: null,
        }
    },
    watch: {
        blockHeight: function (_blockNum) {
            if (!_blockNum) return

            this.addBlock(_blockNum)
        },
    },
    computed: {
        displayBlocks() {
            if (!this.blocks) return []

            const blocks = this.blocks

            return blocks.reverse().slice(0, NUM_BLOCKS_DISPLAYED)
        },

        displayBlockHeight() {
            if (!this.blockHeight) {
                return 0
            }

            return numeral(Number(this.blockHeight)).format('0,0')
        }
    },
    methods: {
        async addBlock(_blockNum) {
            console.log('add block', _blockNum)
        },

        shorten(_value) {
            return _value.slice(0, 12) + ' ... ' + _value.slice(-12)
        },

    },
    created: async function () {
        /* Initialize blocks. */
        this.blocks = []

        this.numTxsProcessed = 0
    },
    mounted: function () {
        //
    },
}
</script>
