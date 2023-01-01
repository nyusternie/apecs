<template>
    <NuxtLayout name="sandbox">
        <template #intro>
            <div class="max-w-xl">
                <h2 class="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    CashScript
                </h2>

                <p class="mt-5 text-xl text-indigo-300">
                    Smart contracts for Bitcoin Cash
                </p>
            </div>
        </template>

        <template #options>
            <div class="mt-10 w-full max-w-xs lg:mt-0">
                <label for="currency" class="block text-base font-medium text-indigo-300 uppercase">
                    Choose Your Platform
                </label>

                <div class="mt-1.5 relative">
                    <select id="currency" name="currency" class="block w-full bg-none bg-indigo-400 bg-opacity-25 border border-transparent text-white focus:ring-white focus:border-white rounded-md">
                        <option class="bg-gray-900">Binance Smart Chain (BSC)</option>
                        <option class="bg-gray-900">Ethereum (ETH)</option>
                        <option class="bg-gray-900" selected>Smart Bitcoin (sBCH)</option>
                    </select>

                    <div class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                        <!-- Heroicon name: solid/chevron-down -->
                        <svg class="h-4 w-4 text-indigo-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </template>

        <!-- Page Section -->
        <template #main>
            <section class="p-3">
                <div class="">
                    <div class="col-md-6">
                        <!-- <Navbar /> -->

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
            </section>
        </template>

        <!-- <section class="mt-5">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quasi magnam! Qui deleniti, nulla ipsam voluptatum, non quis ut libero at ipsum delectus, placeat perspiciatis. Atque repellat id earum dolorem?
            </p>
        </section> -->
    </NuxtLayout>
</template>

<script>
export default {
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
