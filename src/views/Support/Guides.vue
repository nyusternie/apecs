<template>
    <main>
        <!-- Header -->
        <Header pageId="tutorials" />

        <!-- Page Section -->
        <section class="content">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-md-6">
                        <Navbar />

                        <div class="card">
                            <div class="card-body">

                                <h3>VPS Quick Setup</h3>

                                <code>
                                    apt update && apt upgrade -y && apt-get autoremove -y
                                </code>

                                <code>
                                    apt install -y apt-transport-https autoconf build-essential ca-certificates curl git gnupg2 libtool make software-properties-common vim
                                </code>

                                <h3>Key Generation</h3>

                                <code>
                                    ssh-keygen
                                </code>

                                <h3>VeraCrypt</h3>

                                <code>
                                    https://www.veracrypt.fr/en/Downloads.html
                                    https://ipfs.io/ipfs/QmSoTesXuTFi55wuHXQoY9Nwm5eVhGoxFxAquMZidLnR43
                                </code>

                                <h3>Install NVM</h3>

                                <code>
                                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
                                </code>

                                <h3>Install Docker (Debian 10)</h3>

                                <code>
                                    apt update
                                    apt install apt-transport-https ca-certificates curl gnupg2 software-properties-common
                                    curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -
                                    add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
                                    apt update
                                    apt install docker-ce docker-compose
                                </code>

                                <h3>Matrix (Synapse) over Docker</h3>

                                <code>
                                    https://linuxhandbook.com/install-matrix-synapse-docker/
                                </code>

                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">

                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-info-circle mr-1"></i>
                                    Developer Tutorials &amp; Guides
                                    <br />
                                    <!-- <small>
                                        source: <a href="https://developer.bitcoin.com/cashscript/docs/language" target="_blank">
                                        https://developer.bitcoin.com/cashscript/docs/language</a>
                                    </small> -->
                                </h3>
                            </div>

                            <div class="card-body">
                                <dl class="row">
                                    <dt class="col-sm-4">VPS Setup</dt>
                                    <dd class="col-sm-8">
                                        Useful commands to get up and running quickly.
                                    </dd>

                                    <!-- <dt class="col-sm-4">tx.bytecode</dt>
                                    <dd class="col-sm-8">
                                        Represents the Bitcoin Script bytecode of the current contract.
                                    </dd> -->

                                    <!-- <dt class="col-sm-4">tx.hashOutputs</dt>
                                    <dd class="col-sm-8">
                                        Represents the double sha256 of the serialisation of all outputs (bytes8 amount + bytes locking script).
                                    </dd> -->

                                    <!-- <dt class="col-sm-4">tx.time</dt>
                                    <dd class="col-sm-8">
                                        Represents the block number that the transaction is included in.
                                    </dd>
                                    <dd class="col-sm-8 offset-sm-4">
                                        <small>(eg. <code>478559</code>)</small>
                                    </dd> -->

                                    <!-- <dt class="col-sm-4">tx.value (bytes8)</dt>
                                    <dd class="col-sm-8">
                                        Represents the value of current input being spent.
                                    </dd>
                                    <dd class="col-sm-8 offset-sm-4">
                                        <small>
                                            Due to technical limitations, this can only work if tx.value fits within a 32-bit signed integer (max ~21 BCH).
                                        </small>
                                    </dd> -->

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
