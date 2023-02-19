<template>
    <main class="flex flex-col">

        <h1 class="w-full text-4xl text-center font-bold mt-5 p-3 border-b-4 border-gray-500">
            Nexa Daemon
        </h1>

        <section class="my-3">
<h2>Get wallet info</h2>
<code><pre>
nexa-cli getwalletinfo
</pre></code>
        </section>

        <section class="my-3">
<h2>List unspent UTXOs</h2>
<code><pre>
nexa-cli listunspent
</pre></code>
        </section>

        <section class="my-3">
<h2>List unspent UTXOs</h2>
<code><pre>
nexa-cli listunspent
</pre></code>
        </section>

        <!-- Page Section -->
        <section class="w-full h-full flex">

            <div class="w-1/2 bg-rose-500">
                code window

                <select @change="selectQuery" v-model="selected">
                    <option value="default">Default</option>
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
            default:
                return this.loadDefault()
            }
        },

        loadDefault() {
            this.userQuery = `/* Customize your query below. */
n/a
            `
        },

        /**
         * Remote Procedure Call (RPC)
         *
         * @param {String} _method
         * @param {Object} _params
         * @returns
         */
        async rpc(_method, _params) {
            let endpoint
            let error
            let response

            // try {
            //     /* Set endpoint. */
            //     endpoint = `http://user:password@127.0.0.1:7227`

            //     /* Build package. */
            //     const pkg = {
            //         "jsonrpc": "2.0",
            //         "id": "core",
            //         "method": _method,
            //         "params": _params,
            //     }

            //     /* Request Elasticsearch query. */
            //     response = await fetch
            //         .post(endpoint)
            //         .set('accept', 'json')
            //         .send(pkg)
            //         .catch(_err => {
            //             console.error(_err)

            //             if (_err && _err.response && _err.response.text) {
            //                 error = JSON.parse(_err.response.text)
            //             } else if (_err && _err.response) {
            //                 error = _err.response
            //             } else {
            //                 error = _err
            //             }
            //         })

            //     /* Validate error. */
            //     if (error) {
            //         return error
            //     }

            //     /* Validate response. */
            //     if (!response) {
            //         return null
            //     }
            //     // console.log('\nRPC CALL (response):', response)

            //     /* Validate response. */
            //     if (response.body && response.body.result) {
            //         return response.body.result
            //     } else if (response.text) {
            //         return response.text
            //     } else {
            //         return null
            //     }

            // } catch (err) {
            //     return err
            // }
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

        // const rpc = await this.rpc('getwalletinfo', '')
        // console.log('RPC (getwalletinfo):', rpc)

    },
    mounted: function () {
        //
    },
}
</script>
