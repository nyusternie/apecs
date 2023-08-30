<template>
    <NuxtLayout name="guides">
        <template #intro>
            <div class="max-w-xl">
                <h2 class="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    NGINX
                </h2>

                <p class="mt-5 text-xl text-indigo-300">
                    Installing NGINX to a Debian/Ubuntu machine is quick and easy.
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
                        ↳ <a href="https://docs.docker.com/engine/install/" target="_blank" class="hover:underline">
                            NGINX Engine Installation
                        </a>
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
            <section class="p-3 h-full bg-gradient-to-r from-gray-50 to-gray-100">
                <h3 class="text-2xl font-medium">
                    Quick Install
                </h3>

                <div class="my-5 w-3/4 border-4 border-yellow-300 bg-yellow-100 rounded-xl overflow-hidden">
                    <textarea rows="3" class="-mb-2 p-5 w-full border-0 bg-yellow-100">curl -fsSL https://get.docker.com -o get-docker.sh
chmod +x ./get-docker.sh
./get-docker.sh</textarea>
                </div>

                <hr />

                <h3 class="text-2xl font-medium">
                    Update your system
                </h3>

                <div class="my-5 w-3/4 border-4 border-yellow-300 bg-yellow-100 rounded-xl overflow-hidden">
                    <textarea rows="1" class="-mb-2 p-5 w-full border-0 bg-yellow-100">apt update</textarea>
                </div>

                <h3 class="text-2xl font-medium">
                    Install the certificate
                </h3>

                <div class="my-5 w-3/4 border-4 border-yellow-300 bg-yellow-100 rounded-xl overflow-hidden">
                    <textarea rows="1" class="-mb-2 p-5 w-full border-0 bg-yellow-100">apt install apt-transport-https ca-certificates curl gnupg2 software-properties-common</textarea>
                </div>

                <h3 class="mt-10 text-2xl font-medium">
                    Add the key
                </h3>

                <div class="my-5 w-3/4 border-4 border-yellow-300 bg-yellow-100 rounded-xl overflow-hidden">
                    <textarea rows="2" class="-mb-2 p-5 w-full border-0 bg-yellow-100">curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -</textarea>
                </div>

                <h3 class="mt-10 text-2xl font-medium">
                    Add the repository
                </h3>

                <div class="my-5 w-3/4 border-4 border-yellow-300 bg-yellow-100 rounded-xl overflow-hidden">
                    <textarea rows="2" class="-mb-2 p-5 w-full border-0 bg-yellow-100">add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"</textarea>
                </div>

                <h3 class="mt-10 text-2xl font-medium">
                    Update the system
                </h3>

                <div class="my-5 w-3/4 border-4 border-yellow-300 bg-yellow-100 rounded-xl overflow-hidden">
                    <textarea rows="2" class="-mb-2 p-5 w-full border-0 bg-yellow-100">apt update</textarea>
                </div>

                <h3 class="mt-10 text-2xl font-medium">
                    Install NGINX and NGINX Compose
                </h3>

                <div class="my-5 w-3/4 border-4 border-yellow-300 bg-yellow-100 rounded-xl overflow-hidden">
                    <textarea rows="2" class="-mb-2 p-5 w-full border-0 bg-yellow-100">apt install docker-ce docker-compose</textarea>
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
