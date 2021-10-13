<template>
    <main class="flex justify-center">
        <!-- Page Section -->
        <section class="max-w-5xl grid grid-cols-5 gap-5 py-10">

            <div class="col-span-5 w-1/2 bg-pink-500 rounded-xl p-5 border-4 border-pink-700">
                <h1 class="text-2xl text-gray-200">CHECK OUR API STATUS &amp; HISTORY</h1>

                <a class="text-2xl text-gray-200 font-bold" href="https://status.devops.cash" target="_blank">
                    https://status.devops.cash
                </a>
            </div>

            <div class="col-span-5 w-1/2 bg-pink-500 rounded-xl p-5 border-4 border-pink-700">
                <h1 class="text-3xl font-bold text-center text-gray-200">FULCRUM<small>.devops.cash</small></h1>

                <div class="color-palette-set">
                    <span class="block">#6610f2</span>
                    <span class="block">Disabled</span>
                </div>
            </div>

            <div class="col-span-5 w-1/2 bg-pink-500 rounded-xl p-5 border-4 border-pink-700">
                <h1 class="text-3xl font-bold text-center text-gray-200">BITDB<small>.devops.cash</small></h1>

                <div class="color-palette-set">
                    <span class="block">#e83e8c</span>
                    <span class="block">Synching</span>
                </div>
            </div>

            <div class="col-span-5 w-1/2 bg-pink-500 rounded-xl p-5 border-4 border-pink-700">

            </div>

            <div class="container-fluid">

                <hr />

                <div class="row">
                    <div class="col-6">
                        <div class="row">
                            <div class="col-6">
                            </div>
                        </div>
                    </div>

                    <div class="col-6">
                        <h3>Fountainhead</h3>

                        <div class="col-6">
                            <h1 class="text-center bg-olive">SLPDB<small>.fountainhead.cash</small></h1>

                            <div class="color-palette-set">
                                <div class="bg-olive color-palette"><span>#3d9970</span></div>
                                <div class="bg-olive disabled color-palette"><span>Disabled</span></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-6">
                        <h3>Fullstack.cash</h3>

                        <div class="col-sm-6">
                            <h4 class="text-center bg-lightblue">Lightblue</h4>

                            <div class="color-palette-set">
                                <div class="bg-lightblue color-palette"><span>#3c8dbc</span></div>
                                <div class="bg-lightblue disabled color-palette"><span>Disabled</span></div>
                            </div>
                        </div>

                    </div>

                    <div class="col-6">
                        <h3>Bitcoin.com</h3>

                        <div class="row">
                            <div class="col-6">
                                <h4 class="text-center bg-teal">REST.bitcoin.com</h4>

                                <div class="color-palette-set">
                                    <div class="bg-teal color-palette"><span>#ff851b</span></div>
                                    <div class="bg-teal disabled color-palette"><span>Online</span></div>
                                </div>
                            </div>

                            <div class="col-6">
                                <h4 class="text-center bg-maroon">BitDB</h4>

                                <div class="color-palette-set">
                                    <div class="bg-maroon color-palette"><span>#d81b60</span></div>
                                    <div class="bg-maroon disabled color-palette"><span>Delayed</span></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="col-12">
                  <h1 class="mt-3">Colors</h1>
                </div>
                <!-- /.col-12 -->
                <div class="row">
                  <!-- /.col -->
                  <!-- /.col -->
                  <!-- /.col -->
                  <!-- /.col -->
                  <!-- /.col -->
                  <div class="col-sm-4 col-md-2">
                    <h4 class="text-center bg-lime">Lime</h4>

                    <div class="color-palette-set">
                      <div class="bg-lime color-palette"><span>#01ff70</span></div>
                      <div class="bg-lime disabled color-palette"><span>Disabled</span></div>
                    </div>
                  </div>
                  <!-- /.col -->
                  <div class="col-sm-4 col-md-2">
                    <h4 class="text-center bg-teal">Teal</h4>

                    <div class="color-palette-set">
                      <div class="bg-teal color-palette"><span>#39cccc</span></div>
                      <div class="bg-teal disabled color-palette"><span>Disabled</span></div>
                    </div>
                  </div>
                  <!-- /.col -->
                  <!-- /.col -->
                </div>


            </div>
        </section>
    </main>
</template>

<script>
/* Import components. */
// import Header from '@/components/Header'

export default {
    components: {
        // Header,
    },
    data: () => {
        return {
            //
        }
    },
    created: async function () {
        /* Retrieve session. */
        // const session = await this.hasSession()
        //     .catch(err => console.error('Session Error:', err))

        /* Validate session. */
        // if (!session) {
        //     return
        // }
    },
    mounted: function () {
        //
    },
}
</script>
