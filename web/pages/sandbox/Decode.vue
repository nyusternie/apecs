<template>
    <NuxtLayout name="sandbox">
        <template #intro>
            <div class="max-w-xl">
                <h2 class="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    Decode
                </h2>

                <p class="mt-5 text-xl text-indigo-300">
                    Perform a comprehensive suite of <span class="text-gray-100 font-medium">automated audits</span> on your application's smart contracts and backend services.
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
            <div class="">
                <div class="grid grid-cols-3 gap-4">
                    <div class="col-span-2">
                        <div class="">
                            <div class="">

                                <div class="flex flex-row gap-4 justify-between">
                                    <textarea
                                        class="h-48 flex-grow m-5 border-4 border-indigo-500 rounded-lg"
                                        placeholder="Paste encoded text here"
                                        v-model="base64"
                                    ></textarea>

                                    <textarea
                                        class="h-48 flex-grow m-5 border-4 border-indigo-500 rounded-lg"
                                        placeholder="Decoded text will appear here"
                                        disabled
                                        :value="base64Decoded"
                                    ></textarea>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="col-span-1">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">
                                    <i class="fas fa-info-circle mr-1"></i>
                                    <font-awesome-icon icon="fa-solid fa-user-secret" />
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

                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, ea sit voluptatibus, vero minus laudantium illo adipisci quos ex praesentium, amet quam hic quia. Officia eligendi sequi porro nemo atque.
                        </div>
                    </div>
                </div>

            </div>
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
    data: () => ({
        base64: null,
    }),
    head: () => ({
        title: 'Decode — APECS Dev',
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
                return atob(this.base64)
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
