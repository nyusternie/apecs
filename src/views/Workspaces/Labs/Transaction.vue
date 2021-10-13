<template>
    <main>
        <!-- Page Section -->
        <section class="content">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-md-6">
                        <!-- <Navbar /> -->

                        <div class="card">
                            <div class="card-header d-flex p-0">
                                <h3 class="card-title p-3">Transaction Menu</h3>

                                <ul class="nav nav-pills ml-auto p-2">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#txIdDetails" data-toggle="tab">ID</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="#decodeRawTx" data-toggle="tab">Raw</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="#advanced" data-toggle="tab">Advanced</a>
                                    </li>
                                </ul>
                            </div>

                            <div class="card-body">
                                <div class="tab-content">
                                    <div class="tab-pane active" id="txIdDetails">
                                        <TxIdDetails />
                                    </div>

                                    <div class="tab-pane" id="decodeRawTx">
                                        <DecodeRawTx />
                                    </div>

                                    <div class="tab-pane" id="advanced">
                                        <em>coming soonish'</em>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-info-circle mr-1"></i>
                                    Transaction Guide
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
/* Import components. */
// import Header from '@/components/Header'

// import Navbar from './Navbar'

import DecodeRawTx from './Transaction/DecodeRawTx'
import TxIdDetails from './Transaction/TxIdDetails'

export default {
    components: {
        // Header,

        // Navbar,

        DecodeRawTx,
        TxIdDetails,
    },
    data: () => {
        return {
            //
        }
    },
    computed: {
        //
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
