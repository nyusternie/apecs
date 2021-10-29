<template>
    <main class="flex flex-col">

        <h1 class="w-full text-4xl text-center font-bold mt-5 p-3 border-b-4 border-gray-500">
            SLPDB Lab
        </h1>

        <!-- Page Section -->
        <section class="w-full h-full flex">

            <div class="w-1/2 bg-rose-500">
                code window

                <select @change="selectQuery" v-model="selected">
                    <option value="default">Default</option>
                    <option value="addr-balance">Address balances by token</option>
                    <option value="token-balance">Token balances by address</option>
                    <option value="txs-address">Transactions by address</option>
                    <option value="tokens-sent">Tokens sent</option>
                    <option value="token-info">Token info</option>
                    <option value="utxos-token">UTXOs by token</option>
                    <option value="swap">Signal, Watch &amp; Pay (SWaP)</option>
                    <option value="sipnet">Gossip Network</option>
                </select>

                <a href="https://status.slpdb.io" target="_blank">
                    https://status.slpdb.io
                </a>

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
import Nito from 'nitojs'
// import superagent from 'superagent'

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

            // const response = await superagent.get()
            const response = await Nito.SLP.Query.request(request)
                .catch(err => console.error(err))
            console.log('RESPONSE (body):', response)

            this.output = JSON.stringify(response, null, 2)
        },

        selectQuery() {
            console.log('SELECTED', this.selected)

            switch(this.selected) {
            case 'addr-balance':
                return this.loadAddrBalance()
            case 'token-balance':
                return this.loadTokenBalance()
            case 'txs-address':
                return this.loadTxsAddress()
            case 'tokens-sent':
                return this.loadTokensSent()
            case 'token-info':
                return this.loadTokenInfo()
            case 'utxos-token':
                return this.loadUtxosByToken()
            case 'swap':
                return this.loadSwap()
            case 'sipnet':
                return this.loadSipnet()
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

        loadAddrBalance() {
            this.userQuery = `/* Customize your query below. */
{
  "v": 3,
  "q": {
    "db": ["g"],
    "aggregate": [
      {
        "$match": {
          "tokenDetails.tokenIdHex": "7cf3c06b85ce9fa611098d78551ce13f5cdd345db2041f2d942438fb4ce80ee8"
        }
      },
      {
        "$unwind": "$graphTxn.outputs"
      },
      {
        "$match": {
          "graphTxn.outputs.status": "UNSPENT"
        }
      },
      {
        "$group": {
          "_id": "$graphTxn.outputs.address",
          "slpAmount": {
            "$sum": "$graphTxn.outputs.slpAmount"
          }
        }
      },
      {
        "$match": {
          "slpAmount": {
            "$gt": 0
          }
        }
      }
    ],
    "sort": {
      "slpAmount": -1
    },
    "project": {
      "address": "$_id",
      "token_balance": "$slpAmount"
    },
    "limit": 10,
    "skip": 0
  }
}
            `
        },

        loadTokenBalance() {
            this.userQuery = `/* Customize your query below. */
{
  "v": 3,
  "q": {
    "db": ["g"],
    "aggregate": [
      {
        "$match": {
          "graphTxn.outputs.address": "simpleledger:pz8kpuypq2m55q9yuj9pv6r7hvzz8t4mrygmjzrnjq"
        }
      },
      {
        "$unwind": "$graphTxn.outputs"
      },
      {
        "$match": {
          "graphTxn.outputs.status": "UNSPENT",
          "graphTxn.outputs.address": "simpleledger:pz8kpuypq2m55q9yuj9pv6r7hvzz8t4mrygmjzrnjq"
        }
      }
    ]
  }
}
            `
        },

        loadTxsAddress() {
            this.userQuery = `/* Customize your query below. */
{
  "v": 3,
  "q": {
    "db": ["c"],
    "aggregate": [
      {
        "$match": {
          "$and": [
            {"slp.valid": true},
            {
              "$or": [
                {"in.e.a": "simpleledger:pz8kpuypq2m55q9yuj9pv6r7hvzz8t4mrygmjzrnjq"},
                {"out.e.a": "simpleledger:pz8kpuypq2m55q9yuj9pv6r7hvzz8t4mrygmjzrnjq"}
              ]
            }
          ]
        }
      },
      {
        "$sort": {"blk.i": -1}
      },
      {
        "$skip": 0
      },
      {
        "$limit": 100
      },
      {
        "$lookup": {
          "from": "tokens",
          "localField": "slp.detail.tokenIdHex",
          "foreignField": "tokenDetails.tokenIdHex",
          "as": "token"
        }
      },
      {
        "$lookup": {
          "from": "graphs",
          "localField": "tx.h",
          "foreignField": "graphTxn.txid",
          "as": "graph"
        }
      }
    ],
    "limit": 100
  }
}
            `
        },

        loadTokensSent() {
            this.userQuery = `/* Customize your query below. */
{
    "v": 3,
    "q": {
      "db": ["c"],
      "find": {
        "$and": [
          {"slp.valid": true},
          {"slp.detail.tokenIdHex": "7cf3c06b85ce9fa611098d78551ce13f5cdd345db2041f2d942438fb4ce80ee8"},
          {"slp.detail.transactionType": "SEND"}
        ]
      },
      "sort": {"blk.i": -1},
      "limit": 100,
      "skip": 0
    },
    "r": {
      "f": "[ .[] | { slp } ]"
    }
  }
            `
        },

        loadTokenInfo() {
            this.userQuery = `/* Customize your query below. */
{
    "v": 3,
    "q": {
        "db": ["t"],
        "find": {
            "tokenDetails.tokenIdHex": "7cf3c06b85ce9fa611098d78551ce13f5cdd345db2041f2d942438fb4ce80ee8"
        },
        "limit": 1
    }
}
            `
        },

        loadUtxosByToken() {
            this.userQuery = `/* Customize your query below. */
{
  "v": 3,
  "q": {
    "db": ["g"],
    "aggregate": [
      {
        "$match": {
          "tokenDetails.tokenIdHex": "7cf3c06b85ce9fa611098d78551ce13f5cdd345db2041f2d942438fb4ce80ee8",
          "graphTxn.outputs.address": "simpleledger:pz8kpuypq2m55q9yuj9pv6r7hvzz8t4mrygmjzrnjq",
          "graphTxn.outputs.status": {
            "$in": [
              "UNSPENT",
              "BATON_UNSPENT"
            ]
          }
        }
      },
      {
        "$unwind": "$graphTxn.outputs"
      },
      {
        "$match": {
          "graphTxn.outputs.status": {
            "$in": [
              "UNSPENT",
              "BATON_UNSPENT"
            ]
          },
          "graphTxn.outputs.slpAmount": {
            "$gt": 0
          }
        }
      }
    ]
  }
}
            `
        },

        loadSwap() {
            this.userQuery = `/* Customize your query below. */
{
  "v": 3,
  "q": {
    "find": {
      "out.h1": "53575000"
    },
    "limit": 10
  }
}
            `
        },

        loadSipnet() {
            this.userQuery = `/* Customize your query below. */
{
  "v": 3,
  "q": {
    "find": {
      "out.h1": "53495000"
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
