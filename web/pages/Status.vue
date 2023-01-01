<template>
    <main class="flex justify-center">
        <!-- Page Section -->
        <section class="max-w-5xl grid grid-cols-3 gap-5 py-10">

            <div class="col-span-3 bg-pink-500 rounded-xl p-5 border-4 border-pink-700">
                <h1 class="text-2xl text-gray-200">CHECK OUR API STATUS &amp; HISTORY</h1>

                <a class="text-2xl text-gray-200 font-bold" href="https://status.devops.cash" target="_blank">
                    https://status.devops.cash
                </a>
            </div>

            <div class="col-span-3 text-sm text-gray-600 px-10">
                <span class="block text-base font-bold">IMPORTANT NOTE: </span>
                <span class="block">Every APECS RPC &amp; REST endpoint is rate-limited. </span>
                Plan accordingly when developing your apps and releasing to production.
            </div>

            <div class="bg-pink-500 rounded-xl p-5 border-4 border-pink-700">
                <h1 class="text-3xl font-bold text-center text-gray-200">
                    FULCRUM
                </h1>

                <a href="http://fulcrum.devops.cash" target= '_blank' class="flex justify-center items-center mt-3">
                    fulcrum.devops.cash
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>

                <div class="color-palette-set">
                    <span class="block">#6610f2</span>
                    <span class="block">Disabled</span>
                </div>
            </div>

            <div class="bg-pink-500 rounded-xl p-5 border-4 border-pink-700">
                <h1 class="text-3xl font-bold text-center text-gray-200">BITDB<small>.devops.cash</small></h1>

                <div class="color-palette-set">
                    <span class="block">Confirmed: {{bitdb.confirmed}}</span>
                    <span class="block">Unconfirmed: {{bitdb.unconfirmed}}</span>
                </div>

                <div v-if="bitdb.isValid">
                    <svg class="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                </div>

                <router-link to="/status/bitdb" class="block mt-3 text-center text-lg text-gray-100 font-medium font-block bg-yellow-500 p-3 border-2 border-yellow-700 rounded-xl">
                    Show all BitDB
                </router-link>
            </div>

            <div class="bg-pink-500 rounded-xl p-5 border-4 border-pink-700">
                <h1 class="text-center bg-olive">SLPDB<small>.fountainhead.cash</small></h1>

                <div class="color-palette-set">
                    <div class="bg-olive color-palette"><span>#3d9970</span></div>
                    <div class="bg-olive disabled color-palette"><span>Disabled</span></div>
                </div>
            </div>

        </section>
    </main>
</template>

<script>
/* Import modules. */
import superagent from 'superagent'

export default {
    data: () => {
        return {
            bitdb: null,
        }
    },
    methods: {
        async init() {
            const ENDPOINT = 'https://bitdb.devops.cash/q/ewogICJ2IjogMywKICAicSI6IHsKICAgICJmaW5kIjoge30sCiAgICAibGltaXQiOiAxMAogIH0KfQ=='

            const response = await superagent.get(ENDPOINT)
                .catch(err => console.error(err))

            if (response && response.body) {
                const body = response.body
                console.log('BODY', body)

                if (body.c) {
                    this.bitdb.confirmed = body.c.length
                }

                if (body.u) {
                    this.bitdb.unconfirmed = body.u.length
                }

                if (this.bitdb.confirmed + this.bitdb.unconfirmed === 20) {
                    this.bitdb.isValid = true
                }

            } else {
                console.error('FAILED TO RETRIEVE ENDPOINT')
            }
        },

    },
    created: async function () {
        /* Retrieve session. */
        // const session = await this.hasSession()
        //     .catch(err => console.error('Session Error:', err))

        /* Validate session. */
        // if (!session) {
        //     return
        // }

        this.bitdb = {
            isValid: false,
            confirmed: 'n/a',
            unconfirmed: 'n/a',
        }
    },
    mounted: function () {
        this.init()
    },
}
</script>
