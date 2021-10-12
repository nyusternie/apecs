<template>
    <main>
        <!-- Header -->
        <Header pageId="stats" />

        <!-- Page Section -->
        <section class="content">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-3 text-right">
                        <h4>STATISTICS</h4>
                    </div>
                    <div class="col-9">
                        <a href="https://status.devops.cash" target="_blank">
                            https://status.devops.cash
                        </a>
                    </div>
                </div>

                <hr />

                <div class="row">
                    <div class="col-6">
                        <h3>DevOps</h3>

                        <div class="row">
                            <div class="col-6">
                                <h5 class="text-center bg-indigo">FULCRUM<small>.devops.cash</small></h5>

                                <div class="color-palette-set">
                                    <div class="bg-indigo color-palette"><span>#6610f2</span></div>
                                    <div class="bg-indigo disabled color-palette"><span>Disabled</span></div>
                                </div>
                            </div>

                            <div class="col-6">
                                <h5 class="text-center bg-orange">BITDB<small>.devops.cash</small></h5>

                                <div class="color-palette-set">
                                    <div class="bg-orange color-palette"><span>#e83e8c</span></div>
                                    <div class="bg-orange disabled color-palette"><span>Synching</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-6">
                        <h3>Fountainhead</h3>

                        <div class="col-6">
                            <h5 class="text-center bg-olive">SLPDB<small>.fountainhead.cash</small></h5>

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
                  <h5 class="mt-3">Colors</h5>
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
import Header from '@/components/Header'

export default {
    components: {
        Header,
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

<style scoped>

.color-palette {
  height: 35px;
  line-height: 35px;
  text-align: right;
  padding-right: .75rem;
}

.color-palette.disabled {
  text-align: center;
  padding-right: 0;
  display: block;
}

.color-palette-set {
  margin-bottom: 15px;
}

.color-palette span {
  display: none;
  font-size: 12px;
}

.color-palette:hover span {
  display: block;
}

.color-palette.disabled span {
  display: block;
  text-align: left;
  padding-left: .75rem;
}

.color-palette-box h4 {
  position: absolute;
  left: 1.25rem;
  margin-top: .75rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  display: block;
  z-index: 7;
}

</style>
