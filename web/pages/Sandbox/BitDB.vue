<template>
    <main class="flex flex-col">

        <h1 class="w-full text-4xl text-center font-bold mt-5 p-3 border-b-4 border-gray-500">
            BitDB Lab
        </h1>

        <!-- Page Section -->
        <section class="w-full h-full flex">

            <div class="w-1/2 bg-rose-500">
                code window

                <select @change="selectQuery" v-model="selected">
                    <option value="default">Default</option>
                    <option value="latest-block">Latest Block</option>
                    <option value="advanced">Advanced</option>
                    <option value="memo">Memo.cash</option>
                    <option value="hello">Hello</option>
                    <option value="bet">Bet</option>
                    <option value="sender">Sender</option>
                    <option value="response">Response</option>
                    <option value="addressesTxs">Addresses Txs</option>
                    <option value="bfp">Bitcoin Files Protocol (BFP)</option>
                    <option value="bml">Bitcoin Markup Language (BML)</option>
                </select>

                <textarea class="w-full h-96" v-model="userQuery" />

                <button @click="query" class="ml-5 mt-3 p-3 text-center text-lg font-medium bg-pink-300 border-4 border-pink-500 rounded-xl">
                    Send Query
                </button>

            </div>

            <div class="w-1/2 bg-yellow-300 overflow-x-scroll overflow-y-scroll">
                instructions &amp; output

                <pre v-html="output" />
            </div>
        </section>
    </main>
</template>

<script>
/* Import modules. */
// import Nito from 'nitojs'

/* Import components. */
// import UnderConstruction from '@/components/UnderConstruction'

export default {
    components: {
        // UnderConstruction,
    },
    data: () => {
        return {
            requests: null,
            selected: null,
            output: null,
            userQuery: null,
        }
    },
    computed: {
        //
    },
    methods: {
        async query() {
            console.log('SEND QUERY')

            /* Clear output. */
            this.output = ''

            let request

            if (this.userQuery) {
                try {
                    // NOTE: We remove "helpful" comment.
                    const pos = this.userQuery.indexOf('{')

                    let userQuery

                    if (pos) {
                        userQuery = this.userQuery.slice(pos)
                    } else {
                        userQuery = this.userQuery
                    }
                    request = JSON.parse(userQuery)

                } catch (err) {
                    console.error(err)
                }
            } else {
                request = this.requests[0]

            }
            console.log('REQUEST', request)

            // const response = await fetch()
            const response = await Nito.Blockchain.Query.request(request)
                .catch(err => console.error(err))

            console.log('RESPONSE (body):', response)

            this.output = JSON.stringify(response, null, 2)
        },

        selectQuery() {
            console.log('SELECTED', this.selected)

            switch(this.selected) {
            case 'latest-block':
                return this.loadLatestBlock()
            case 'advanced':
                return this.loadAdvanced()
            case 'memo':
                return this.loadMemo()
            case 'hello':
                return this.loadHello()
            case 'bet':
                return this.loadBet()
            case 'sender':
                return this.loadSender()
            case 'response':
                return this.loadResponse()
            case 'addressesTxs':
                return this.loadAddressesTxs()
            case 'bfp':
                return this.loadBFP()
            case 'bml':
                return this.loadBML()
            default:
                return this.loadDefault()
            }
        },

        loadDefault() {
            this.userQuery = `/* Customize your query below. */
{
  "v": 3,
  "q": {
    "find": {},
    "limit": 10
  }
}
            `
        },

        loadLatestBlock() {
            this.userQuery = `/* Customize your query below. */
latest
            `
        },

        loadAdvanced() {
            this.userQuery = `/* Customize your query below. */
adv
            `
        },

        loadMemo() {
            this.userQuery = `/* Customize your query below. */
{
  "v": 3,
  "q": {
    "find": {
      "out.h1": "6d02"
    }
  }
}
            `
        },

        loadHello() {
            this.userQuery = `/* Customize your query below. */
{
  "v": 3,
  "q": {
    "find": {
      "out.b0": { "op": 106 },
      "out.s1": "hello"
    },
    "limit": 10
  }
}
            `
        },

        loadBet() {
            this.userQuery = `/* Customize your query below. */
{
  "v": 3,
  "q": {
    "find": {
      "$text": { "$search": "bet" },
      "out.h1": "6d02",
      "out.s2": { "$regex": "bet", "$options": "i" }
    },
    "limit": 10
  }
}
            `
        },

        loadSender() {
            this.userQuery = `/* Customize your query below. */
{
  "v": 3,
  "q": {
    "find": { "in.e.a": "qq4kp3w3yhhvy4gm4jgeza4vus8vpxgrwc90n8rhxe" },
    "limit": 10
  }
}
            `
        },

        loadResponse() {
            this.userQuery = `/* Customize your query below. */
{
  "v": 3,
  "q": {
    "find": { "out.h1": "6d02" },
    "limit": 100
  },
  "r": {
    "f": "[ { block: .blk.i?, timestamp: .blk.t?, content: .out[1].s2 } ]"
  }
}
            `
        },

        loadAddressesTxs() {
            this.userQuery = `/* Customize your query below. */
{
    "v": 3,
    "q": {
        "find": {
            "$or": [
                { "in.e.a": "qzpwncftddx7f59z93w4qv4hnj4as335vvz8gftqvr" },
                { "out.e.a": "qzpwncftddx7f59z93w4qv4hnj4as335vvz8gftqvr" }
            ]
        }
    }
}
            `
        },

        loadBFP() {
            this.userQuery = `/* Customize your query below. */
{
  "v": 3,
  "q": {
    "find": {
      "out.h1": "42465000"
    },
    "limit": 10
  }
}
            `
        },

        loadBML() {
            this.userQuery = `/* Customize your query below. */
{
  "v": 3,
  "q": {
    "find": {
      "out.h1": "424D4C00"
    },
    "limit": 10
  }
}
            `
        },

    },
    created: async function () {
        this.requests = []

        let request

        request = {
            v: 3,
            q: {
                find: {},
                limit: 10
            }
        }
        this.requests.push(request)

    },
    mounted: function () {
        //
    },
}
</script>
