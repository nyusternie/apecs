<template>
    <main class="flex justify-center">
        <!-- Page Section -->
        <section class="max-w-5xl grid grid-cols-5 gap-5 py-10">
            <div class="col-span-3">

                <div class="row">
                    <div class="col-md-6">
                        <!-- <Navbar /> -->

                        <div class="form-group">
                            <label>Enter a Query</label>
                            <textarea
                                class="form-control"
                                rows="3"
                                placeholder="Paste your query statement here"
                                v-model="query"
                            ></textarea>
                        </div>

                        <div class="card">
                            <div class="card-body">

                                <h4>OUTPUT AREA</h4>

                                <pre>
                                    <code>
                                        {{output}}
                                    </code>
                                </pre>

                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-info-circle mr-1"></i>

                                </h3>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <aside class="block col-span-2">
                <div class="sticky p-5 top-10 bg-pink-300 border-4 border-pink-500 rounded-xl">
                    <div class="flex items-center">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-widivh="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <h1 class="text-2xl ml-2">Server-side Event Guide</h1>
                    </div>


                    <div class="">

                        <div class="row">

                            <div class="col-md-6">

                                <div class="card">
                                    <div class="card-header">
                                    </div>

                                    <div class="card-body">
                                        <dl class="row">
                                            <dt class="col-sm-4">Description lists</dt>
                                            <dd class="col-sm-8">A description list is perfect for defining terms.</dd>
                                            <dt class="col-sm-4">Euismod</dt>
                                            <dd class="col-sm-8">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                                            <dd class="col-sm-8 offset-sm-4">Donec id elit non mi porta gravida at eget metus.</dd>
                                            <dt class="col-sm-4">Malesuada porta</dt>
                                            <dd class="col-sm-8">Etiam porta sem malesuada magna mollis euismod.</dd>
                                            <dt class="col-sm-4">Felis euismod semper eget lacinia</dt>
                                            <dd class="col-sm-8">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
                                                sit amet risus.
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </aside>

        </section>
    </main>
</template>

<script>
/* Import modules. */
// import EventSource from 'eventsource'

export default {
    data: () => {
        return {
            endpoint: null,
            query: null,
            b64query: null,
            output: null,
        }
    },
    computed: {
        //
    },
    methods: {
        //
    },
    created: async function () {
        this.output = 'Initializing output area...'
    },
    mounted: function () {
        this.query = `{
            v: 3,
            q: {
                find: {
                    //
                }
            }
        }`

        // this.query = `{
        //     v: 3,
        //     q: {
        //         find: {
        //             'out.e.a': 'qqy0l8y249dr4suvalvqunzxmp6kgslxd5uve0j4y2'
        //         }
        //     }
        // }`

        // Turn the query into base64 encoded string.
        // This is required for accessing a public bitdb node
        this.b64query = Buffer
            .from(this.query)
            .toString('base64')
        console.log('Base64 query:', this.b64query)

        // this.endpoint = 'https://bitsocket.bch.sx/s/' + this.b64query
        // this.endpoint = 'https://bitsocket.devops.cash/s/' + this.b64query
        // this.endpoint = 'https://slpsocket.fountainhead.cash/s/' + this.b64query
        // this.endpoint = 'https://slpsocket.devops.cash/s/' + this.b64query
        this.endpoint = 'https://flipstarter.satoshisangels.com/events'
        // this.endpoint = 'https://flipstarter.devops.cash/events'

        /* Initialize socket connection. */
        // const bitsocket = new EventSource(this.endpoint)

        /* Handle socket opening. */
        // bitsocket.onopen = () => {
        //     this.output = 'We have started listening...'
        // }

        /* Handle socket closing. */
        // bitsocket.onclose = () => {
        //     this.output = 'We have stopped listening.'
        // }

        /* Handle socket messages. */
        // bitsocket.onmessage = (e) => {
        //     try {
        //         /* Parse JSON data. */
        //         const data = JSON.parse(e.data)
        //         console.log('DATA', data)

        //         /* Update output/display. */
        //         this.output = JSON.stringify(data, null, 2)
        //     } catch (err) {
        //         console.error(err)
        //     }
        // }
    },
}
</script>
