<template>
    <main class="">
        <div class="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">

            <div class="mt-8">
                <dl class="divide-y divide-gray-200">
                    <div class="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                        <dt class="text-base font-medium text-gray-900 md:col-span-5">
                            How do I setup my own Bitcoin testnet?
                        </dt>

                        <dd class="mt-2 md:mt-0 md:col-span-7">
                            <p class="text-base text-gray-500">
                                There are several options available to get started with a local testnet.
                            </p>

                            <p class="text-base text-gray-500">
                                PandaCash offers a instant Regtest node for easily testing new applications.
                            </p>

                            <p class="text-base text-gray-500">
                                DevOps offers several popular sandboxes (BCH, sBCH, BSC, ETH) in our Workspaces area.
                            </p>
                        </dd>
                    </div>

                    <!-- More questions... -->
                </dl>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data: () => ({
        title: null,
        description: null,
    }),
    created: function () {
        /* Set page title. */
        this.title = `Frequently Asked Questions`

        /* Set page description. */
        this.description = `We know you have lots of questions, so we've collected <span class="text-gray-100 font-medium">TOP DEVS</span> from all over crypto to give you the right answers.`

    },
    mounted: function () {
        //
    },
}
</script>
