<template>
    <main class="min-h-full">
        <SiteHeaderView />

        <section class="mt-8 pb-8">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="p-5 max-w-xl flex flex-col bg-gradient-to-r from-gray-900 to-yellow-900 border-2 border-yellow-400 rounded-lg shadow">
                    <span class="block text-gray-100 font-medium">- Recommended</span>
                    <span class="block text-gray-100 font-medium">- Descriptions</span>
                    <span class="block text-gray-100 font-medium">- Kitchen Sink</span>
                </div>

                <h1 class="sr-only">
                    Bitcoin Configuration
                </h1>

                <!-- Main 3 column grid -->
                <div class="mt-5 grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">

                    <section class=" flex flex-col col-span-2 space-y-4 ">
                        <h1 class="text-3xl font-bold text-yellow-900">
                            bitcoin.conf
                            <small class="text-lg text-yellow-600">Recommended for Best DX</small>
                        </h1>

                        <pre class="p-5 text-yellow-900 bg-yellow-50 border-2 border-yellow-200 rounded-lg shadow">
# location to store blockchain and other data.
datadir=/data/Bitcoin
dbcache=4000

# Must set txindex=1 so Bitcoin keeps the full index
txindex=1

# [rpc]
# Accept command line and JSON-RPC commands.
server=1
# Default Username and Password for JSON-RPC connections
# BitDB uses these values by default, but if you can change the settings
# By setting the config.json file in BitDB folder
rpcuser=root
rpcpassword=bitcoin

# If you want to allow remote JSON-RPC access
rpcallowip=0.0.0.0/0
# [wallet]
disablewallet=1

# [ZeroMQ]
# ZeroMQ messages power the realtime BitDB crawler
# so it's important to set the endpoint
zmqpubhashtx=tcp://127.0.0.1:28332
zmqpubhashblock=tcp://127.0.0.1:28332

# BitDB makes heavy use of JSON-RPC so it's set to a higher number
# But you can tweak this number as you want
rpcworkqueue=512</pre>

                        <h1 class="text-3xl font-bold text-yellow-900">
                            bitcoin.conf
                            <small class="text-lg text-yellow-600">Kitchen Sink</small>
                        </h1>

                        <pre class="p-5 text-yellow-900 bg-yellow-50 border-2 border-yellow-200 rounded-lg shadow">
# location to store blockchain and other data.
datadir=/data/Bitcoin
dbcache=4000

...</pre>
                    </section>

                    <!-- Right column -->
                    <div class="grid grid-cols-1 gap-4">
                        Bitcoin configuration files.
                    </div>
                </div>
            </div>
        </section>

        <FooterView />
    </main>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
    // middleware: 'magic.auth',
    data: () => ({
        //
    }),
    head: () => ({
        title: 'Blank — APECS Dev',
        meta: [
            {
                hid: 'description', // `vmid` for it as it will not work
                name: 'description',
                content: 'TBD..'
            }
        ]
    }),
    computed: {
        // ...mapGetters({
        //     // panelIsShowing: 'system/getPanelState'
        // })
    },
    created: function () {
        //
    },
    mounted: function () {
        //
    },
    methods: {
        //
    }
}
</script>
