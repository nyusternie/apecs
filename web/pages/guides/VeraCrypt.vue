<template>
    <NuxtLayout name="guides">
        <template #intro>
            <div class="max-w-xl">
                <h2 class="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    VeraCrypt
                </h2>

                <p class="mt-5 text-xl text-indigo-300">
                    VeraCrypt is a free and open-source utility for on-the-fly encryption <em>(OTFE)</em>.
                    The software can create a virtual encrypted disk that works just like a regular disk but within a file.
                </p>
            </div>
        </template>

        <template #links>
            <div class="mt-10 w-full max-w-xs lg:mt-0">
                <label for="currency" class="block text-2xl font-medium text-indigo-400">
                    Recommended Links
                </label>

                <div class="flex flex-col mt-1.5 pl-3 relative text-indigo-200">
                    <div>
                        ↳ <NuxtLink to="/guides/veracrypt" class="hover:underline">
                            Setup your first container
                        </NuxtLink>
                    </div>

                    <div>
                        ↳ <NuxtLink>
                            Nuxt Link #2
                        </NuxtLink>
                    </div>

                    <div>
                        ↳ <NuxtLink>
                            Nuxt Link #3
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </template>

        <!-- Page Section -->
        <template #main>
            <section class="col-span-3 p-3 h-full bg-gradient-to-r from-gray-50 to-gray-100">
                <h3 class="text-2xl font-medium">Official Website</h3>

                <a href="https://www.veracrypt.fr/en/Downloads.html" target="_blank" class="text-blue-500 font-medium hover:underline">
                    https://www.veracrypt.fr/en/Downloads.html</a>

                <h3 class="mt-5 text-2xl font-medium">IPFS Repository</h3>

                <a href="https://ipfs.io/ipfs/QmSoTesXuTFi55wuHXQoY9Nwm5eVhGoxFxAquMZidLnR43" target="_blank" class="text-blue-500 font-medium hover:underline">
                    https://ipfs.io/ipfs/QmSoTesXuTFi55wuHXQoY9Nwm5eVhGoxFxAquMZidLnR43</a>
            </section>

            <h3 class="mt-10 text-2xl font-medium">
                Install Dependencies (for Debian 12)
            </h3>

            <div class="my-5 w-3/4 border-4 border-yellow-300 bg-yellow-100 rounded-xl overflow-hidden">
                <textarea rows="1" class="-mb-2 p-5 w-full border-0 bg-yellow-100">apt install libpcsclite1 libccid</textarea>
            </div>

        </template>
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
