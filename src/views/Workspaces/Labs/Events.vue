<template>
    <main>
        <!-- Header -->
        <Header pageId="labs" />

        <!-- Page Section -->
        <section class="content">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-md-6">
                        <Navbar />

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
                                    Server-side Event Guide
                                </h3>
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
        </section>
    </main>
</template>

<script>
/* Import modules. */
import EventSource from 'eventsource'

/* Import components. */
import Header from '@/components/Header.vue'
import Navbar from './Navbar.vue'

export default {
    components: {
        Header,
        Navbar,
    },
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
        this.query = {
            v: 3,
            q: {
                find: {
                    //
                }
            }
        }

        // this.query = {
        //     v: 3,
        //     q: {
        //         find: {
        //             'out.e.a': 'qqy0l8y249dr4suvalvqunzxmp6kgslxd5uve0j4y2'
        //         }
        //     }
        // }

        // Turn the query into base64 encoded string.
        // This is required for accessing a public bitdb node
        this.b64query = Buffer
            .from(JSON.stringify(this.query))
            .toString('base64')
        console.log('Base64 query:', this.b64query)

        // this.endpoint = 'https://bitsocket.bch.sx/s/' + this.b64query
        // this.endpoint = 'https://bitsocket.devops.cash/s/' + this.b64query
        // this.endpoint = 'https://slpsocket.fountainhead.cash/s/' + this.b64query
        // this.endpoint = 'https://slpsocket.devops.cash/s/' + this.b64query
        this.endpoint = 'https://flipstarter.satoshisangels.com/events'
        // this.endpoint = 'https://flipstarter.devops.cash/events'

        /* Initialize socket connection. */
        const bitsocket = new EventSource(this.endpoint)

        /* Handle socket opening. */
        bitsocket.onopen = () => {
            this.output = 'We have started listening...'
        }

        /* Handle socket closing. */
        bitsocket.onclose = () => {
            this.output = 'We have stopped listening.'
        }

        /* Handle socket messages. */
        bitsocket.onmessage = (e) => {
            try {
                /* Parse JSON data. */
                const data = JSON.parse(e.data)

                /* Update output/display. */
                this.output = JSON.stringify(data, null, 2)
            } catch (err) {
                console.error(err)
            }
        }
    },
}
</script>

<style scoped>
/*  */
</style>
