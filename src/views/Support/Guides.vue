<template>
    <main>
        <!-- Header -->
        <Header pageId="guides" />

        <!-- Page Section -->
        <section class="content">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-md-6">
                        <Navbar />

                        <div class="card">
                            <div class="card-body">

                                <dl class="row">

                                    <!-- Docker -->
                                    <dt class="col-sm-4">
                                        <router-link to="/guides/docker">
                                            Docker
                                        </router-link>
                                    </dt>
                                    <dd class="col-sm-8">
                                        Easy setup for Docker
                                    </dd>

                                    <!-- Key Generation -->
                                    <dt class="col-sm-4">
                                        <router-link to="/guides/key-generation">
                                            Key Generation
                                        </router-link>
                                    </dt>
                                    <dd class="col-sm-8">
                                        Create SSH for secure access controls between your nodes.
                                    </dd>
                                    <dd class="col-sm-8 offset-sm-4">
                                        <small class="text-danger"><strong>NOTE:</strong> Secure your key(s) with a strong password.</small>
                                    </dd>

                                    <!-- Node Version Manager (NVM) -->
                                    <dt class="col-sm-4">
                                        <router-link to="/guides/nvm">
                                            Node Version Manager (NVM)
                                        </router-link>
                                    </dt>
                                    <dd class="col-sm-8">
                                        NVM makes manager your node versions quick and easy.
                                    </dd>

                                    <!-- VeraCrypt -->
                                    <dt class="col-sm-4">
                                        <router-link to="/guides/veracrypt">
                                            VeraCrypt
                                        </router-link>
                                    </dt>
                                    <dd class="col-sm-8">
                                        Setup a secure container to store secure data on a non-secure hardware device (eg. DigitalOcean droplet).
                                    </dd>

                                    <!-- VPS Secure Setup -->
                                    <dt class="col-sm-4">
                                        <router-link to="/guides/vps-secure-setup">
                                            VPS Secure Setup
                                        </router-link>
                                    </dt>
                                    <dd class="col-sm-8">
                                        A complete step-by-setup walkthrough for setting up a new "Secure" Debian v9/10 virtual private server.
                                    </dd>

                                    <!-- Yarn -->
                                    <dt class="col-sm-4">
                                        <router-link to="/guides/yarn">
                                            Yarn
                                        </router-link>
                                    </dt>
                                    <dd class="col-sm-8">
                                        Setup Yarn package manager.
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
                                    Guides &amp; Tutorials
                                </h3>
                            </div>

                            <div class="card-body">
                                <div class="mb-0">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>

                                <div class="mt-0 mb-3">
                                    <small class="text-danger"><strong>Ready to go LIVE?</strong> Switch from Testnet to Mainnet and go for it!</small>
                                </div>

                                [ CONTACT FORM HERE ]

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
import Navbar from './Guides/Navbar.vue'

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
