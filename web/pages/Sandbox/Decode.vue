<template>
    <main>
        <!-- Page Section -->
        <section class="content">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-md-6">
                        <Navbar />

                        <div class="card">
                            <div class="card-body">

                                <div class="form-group">
                                    <label>Base64</label>
                                    <textarea
                                        class="form-control"
                                        rows="3"
                                        placeholder="Paste encoded text here"
                                        v-model="base64"
                                    ></textarea>

                                    <textarea
                                        v-if="base64Decoded"
                                        class="form-control mt-3"
                                        rows="3"
                                        disabled
                                        :value="base64Decoded"
                                    ></textarea>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-info-circle mr-1"></i>
                                    Decoding Tools
                                </h3>
                            </div>

                            <div class="card-body">
                                <dl class="row">
                                    <dt class="col-sm-4">Base64</dt>
                                    <dd class="col-sm-8">
                                        Designed to carry data stored in <strong>binary formats</strong> across channels that only reliably support <strong>text (eg. UTF-8) content.</strong>
                                    </dd>

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

        <section class="mt-5">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quasi magnam! Qui deleniti, nulla ipsam voluptatum, non quis ut libero at ipsum delectus, placeat perspiciatis. Atque repellat id earum dolorem?
            </p>
        </section>
    </main>
</template>

<script>
definePageMeta({ layout: 'sandbox' })

export default {
    data: () => ({
        base64: null,
    }),
    head: () => ({
        title: 'Decode — Cash DevOps',
        meta: [
            {
                hid: 'description', // `vmid` for it as it will not work
                name: 'description',
                content: 'Perform various decoding operations.'
            }
        ]
    }),
    computed: {
        base64Decoded() {
            if (this.base64) {
                return Buffer.from(this.base64, 'base64').toString()
            } else {
                return null
            }
        },
    },
    methods: {
        //
    },
    created: async function () {
        //
    },
    mounted: function () {
        //
    },
}
</script>

<style scoped>
/*  */
</style>
