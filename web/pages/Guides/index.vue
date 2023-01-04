<template>
    <main class="flex justify-center">
        <!-- Page Section -->
        <section class="max-w-5xl grid grid-cols-5 gap-5 py-10">
            <!-- <Navbar class="hidden col-span-5 mt-5" /> -->

            <div class="col-span-3 grid grid-cols-3 pb-10">

                <NuxtLink to="/guides/docker" class="col-span-3 p-3 mb-5 bg-gray-300 border-4 border-gray-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Docker
                    </h1>

                    <div class="">
                        Easy setup for Docker
                    </div>
                </NuxtLink>

                <NuxtLink to="/guides/key-generation" class="col-span-3 p-3 mb-5 bg-gray-300 border-4 border-gray-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Key Generation
                    </h1>

                    <div class="">
                        Create SSH for secure access controls between your nodes.
                    </div>

                    <span class="block text-sm ml-8">
                        <strong>NOTE:</strong> Secure your key(s) with a strong password.
                    </span>
                </NuxtLink>

                <NuxtLink to="/guides/nvm" class="col-span-3 p-3 mb-5 bg-gray-300 border-4 border-gray-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Node Version Manager (NVM)
                    </h1>

                    <div class="">
                        NVM makes manager your node versions quick and easy.
                    </div>
                </NuxtLink>

                <NuxtLink to="/guides/veracrypt" class="col-span-3 p-3 mb-5 bg-gray-300 border-4 border-gray-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        VeraCrypt
                    </h1>

                    <div class="">
                        Setup a secure container to store secure data on a non-secure hardware device (eg. DigitalOcean droplet).
                    </div>
                </NuxtLink>

                <NuxtLink to="/guides/vps-secure-setup" class="col-span-3 p-3 mb-5 bg-gray-300 border-4 border-gray-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        VPS Secure Setup
                    </h1>

                    <div class="">
                        A complete step-by-setup walkthrough for setting up a new "Secure" Debian v9/10 virtual private server.
                    </div>
                </NuxtLink>

                <NuxtLink to="/guides/yarn" class="col-span-3 p-3 mb-5 bg-gray-300 border-4 border-gray-500 rounded-xl">
                    <h1 class="text-center text-3xl font-bold">
                        Yarn
                    </h1>

                    <div class="">
                        Setup Yarn package manager.
                    </div>
                </NuxtLink>

            </div>

            <aside class="block col-span-2">
                <div class="sticky p-5 top-10 bg-gray-300 border-4 border-gray-500 rounded-xl">
                    <div class="flex items-center">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-widivh="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <h1 class="text-2xl ml-2">
                            Guides &amp; Tutorials
                        </h1>
                    </div>

                    <div class="mt-3">
                        <div class="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>

                    </div>
                </div>
            </aside>

        </section>

    </main>
</template>

<script>
export default {
    data: () => {
        return {
            //
        }
    },
    head: () => ({
        title: 'Guides & Tutorials — APECS Dev',
        meta: [
            {
                hid: 'description', // `vmid` for it as it will not work
                name: 'description',
                content: `Guides & Tutorials`
            }
        ]
    }),
    computed: {
        //
    },
    methods: {
        //
    },
    created: function () {
        //
    },
    mounted: function () {
        //
    },
}
</script>
