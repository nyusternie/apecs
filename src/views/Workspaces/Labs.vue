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

                                <dl class="row">

                                    <!-- Authentication -->
                                    <dt class="col-sm-4">
                                        <router-link to="/labs/auth">
                                            Authentication
                                        </router-link>
                                    </dt>
                                    <dd class="col-sm-8">
                                        Perform user / identity verification using one or more protocols.
                                    </dd>

                                    <!-- CashFusion -->
                                    <dt class="col-sm-4">
                                        <router-link to="/labs/cashfusion">
                                            CashFusion
                                        </router-link>
                                    </dt>
                                    <dd class="col-sm-8">
                                        Perform coin anonymity experiments using the CashFusion protocol.
                                    </dd>
                                    <dd class="col-sm-8 offset-sm-4">
                                        <small class="text-danger">Please be curtious of others when testing on Mainnet.</small>
                                    </dd>

                                    <!-- CashScript -->
                                    <dt class="col-sm-4">
                                        <router-link to="/labs/cashscript">
                                            CashScript
                                        </router-link>
                                    </dt>
                                    <dd class="col-sm-8">
                                        Experiment with Bitcoin Cash smart contracts.
                                    </dd>

                                    <!-- CashShuffle -->
                                    <dt class="col-sm-4">
                                        <router-link to="/labs/cashshuffle">
                                            CashShuffle
                                        </router-link>
                                    </dt>
                                    <dd class="col-sm-8">
                                        Perform coin anonymity experiments using the CashShuffle protocol.
                                    </dd>
                                    <dd class="col-sm-8 offset-sm-4">
                                        <small class="text-danger">Please be curtious of others when testing on Mainnet.</small>
                                    </dd>

                                    <!-- Cryptography -->
                                    <dt class="col-sm-4">
                                        <router-link to="/labs/crypto">
                                            Cryptography
                                        </router-link>
                                    </dt>
                                    <dd class="col-sm-8">
                                        Perform various cryptographic functions.
                                    </dd>

                                    <!-- Decoders -->
                                    <dt class="col-sm-4">
                                        <router-link to="/labs/decode">
                                            Decoders
                                        </router-link>
                                    </dt>
                                    <dd class="col-sm-8">
                                        Perform various decoding functions.
                                    </dd>

                                    <!-- Hashing -->
                                    <dt class="col-sm-4">
                                        <router-link to="/labs/hash">
                                            Hashing
                                        </router-link>
                                    </dt>
                                    <dd class="col-sm-8">
                                        Calculate a hash (aka message digest) of data.
                                    </dd>

                                    <!-- Messaging -->
                                    <dt class="col-sm-4">
                                        <router-link to="/labs/msg">
                                            Messaging
                                        </router-link>
                                    </dt>
                                    <dd class="col-sm-8">
                                        Send and receive messages from one or more on-chain protocols.
                                    </dd>

                                    <!-- Transaction -->
                                    <dt class="col-sm-4">
                                        <router-link to="/labs/tx">
                                            Transaction
                                        </router-link>
                                    </dt>
                                    <dd class="col-sm-8">
                                        Perform experiments on Bitcoin Cash transactions.
                                    </dd>

                                    <!-- Wallet -->
                                    <dt class="col-sm-4">
                                        <router-link to="/labs/wallet">
                                            Wallet
                                        </router-link>
                                    </dt>
                                    <dd class="col-sm-8">
                                        Build and experiment with Bitcoin Cash wallets.
                                    </dd>

                                </dl>

                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-info-circle mr-1"></i>
                                    Lab Experiments Guide
                                </h3>
                            </div>

                            <div class="card-body">
                                <div class="mb-0">
                                    Lab Experiments is a workspace for developers to safely build and test their latest blockchain ideas.
                                </div>

                                <div class="mt-0 mb-3">
                                    <small class="text-danger"><strong>Ready to go LIVE?</strong> Switch from Testnet to Mainnet and go for it!</small>
                                </div>

                                <dl class="row">
                                    <dt class="col-sm-4">Prototype</dt>
                                    <dd class="col-sm-8">
                                        Build new functions and test your ideas.
                                    </dd>

                                    <dt class="col-sm-4">Collaborate</dt>
                                    <dd class="col-sm-8">
                                        Send your experiments to other developers to critique and comment.
                                    </dd>

                                    <dt class="col-sm-4">Deploy</dt>
                                    <dd class="col-sm-8">
                                        When you're ready to deploy your experiemnt.
                                        Integration with GitHub and GitLab makes it a sinch.
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
import Header from '@/components/Header.vue'
import Navbar from './Labs/Navbar.vue'

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

    },
}
</script>

<style scoped>
/*  */
</style>
