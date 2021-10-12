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

                                TODO...

                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-info-circle mr-1"></i>
                                    CashScript Glossary / Guide
                                    <br />
                                    <small>
                                        source: <a href="https://developer.bitcoin.com/cashscript/docs/language" target="_blank">
                                        https://developer.bitcoin.com/cashscript/docs/language</a>
                                    </small>
                                </h3>
                            </div>

                            <div class="card-body">
                                <dl class="row">
                                    <dt class="col-sm-4">tx.age</dt>
                                    <dd class="col-sm-8">
                                        Represents the block depth of the utxo that is being spent by the current transaction.
                                    </dd>

                                    <dt class="col-sm-4">tx.bytecode</dt>
                                    <dd class="col-sm-8">
                                        Represents the Bitcoin Script bytecode of the current contract.
                                    </dd>

                                    <dt class="col-sm-4">tx.hashOutputs</dt>
                                    <dd class="col-sm-8">
                                        Represents the double sha256 of the serialisation of all outputs (bytes8 amount + bytes locking script).
                                    </dd>

                                    <dt class="col-sm-4">tx.time</dt>
                                    <dd class="col-sm-8">
                                        Represents the block number that the transaction is included in.
                                    </dd>
                                    <dd class="col-sm-8 offset-sm-4">
                                        <small>(eg. <code>478559</code>)</small>
                                    </dd>

                                    <dt class="col-sm-4">tx.value (bytes8)</dt>
                                    <dd class="col-sm-8">
                                        Represents the value of current input being spent.
                                    </dd>
                                    <dd class="col-sm-8 offset-sm-4">
                                        <small>
                                            Due to technical limitations, this can only work if tx.value fits within a 32-bit signed integer (max ~21 BCH).
                                        </small>
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
import Header from '@/components/Header'
import Navbar from './Navbar'

export default {
    components: {
        Header,
        Navbar,
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
