<template>
    <main>
        <div class="flex flex-row gap-4 h-full overflow-hidden pb-20 bg-red-500">
            <section class="col-span-3 p-3 h-full overflow-y-scroll bg-gray-200">
                <router-link to="/guides/docker" class="block mt-5 p-3 border-4 border-gray-400 rounded-xl">
                    <div class="flex items-center text-3xl font-bold">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>

                        <span class="ml-2">
                            Docker
                        </span>
                    </div>

                    <span class="block text-sm ml-8">
                        Easy setup for Docker
                    </span>
                </router-link>

                <router-link to="/guides/key-generation" class="block mt-5 p-3 border-4 border-gray-400 rounded-xl">
                    <div class="flex items-center text-3xl font-bold">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>

                        <span class="ml-2">
                            Key Generation
                        </span>
                    </div>

                    <span class="block text-sm ml-8">
                        Create SSH for secure access controls between your nodes.
                    </span>

                    <span class="block text-sm ml-8">
                        <strong>NOTE:</strong> Secure your key(s) with a strong password.
                    </span>
                </router-link>

                <router-link to="/guides/nvm" class="block mt-5 p-3 border-4 border-gray-400 rounded-xl">
                    <div class="flex items-center text-3xl font-bold">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>

                        <span class="ml-2">
                            Node Version Manager (NVM)
                        </span>
                    </div>

                    <span class="block text-sm ml-8">
                        NVM makes manager your node versions quick and easy.
                    </span>
                </router-link>

                <router-link to="/guides/veracrypt" class="block mt-5 p-3 border-4 border-gray-400 rounded-xl">
                    <div class="flex items-center text-3xl font-bold">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>

                        <span class="ml-2">
                            VeraCrypt
                        </span>
                    </div>

                    <span class="block text-sm ml-8">
                        Setup a secure container to store secure data on a non-secure hardware device (eg. DigitalOcean droplet).
                    </span>
                </router-link>

                <router-link to="/guides/vps-secure-setup" class="block mt-5 p-3 border-4 border-gray-400 rounded-xl">
                    <div class="flex items-center text-3xl font-bold">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>

                        <span class="ml-2">
                            VPS Secure Setup
                        </span>
                    </div>

                    <span class="block text-sm ml-8">
                        A complete step-by-setup walkthrough for setting up a new "Secure" Debian v9/10 virtual private server.
                    </span>
                </router-link>

                <router-link to="/guides/yarn" class="block mt-5 p-3 border-4 border-gray-400 rounded-xl">
                    <div class="flex items-center text-3xl font-bold">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>

                        <span class="ml-2">
                            Yarn
                        </span>
                    </div>

                    <span class="block text-sm ml-8">
                        Setup Yarn package manager.
                    </span>
                </router-link>

            </section>

            <section class="p-3 bg-yellow-400">
                <div class="flex items-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>

                    <span class="ml-2 text-3xl font-bold">
                        Guides &amp; Tutorials
                    </span>
                </div>

                <div class="card-header">
                    <h3 class="card-title">
                        <i class="fas fa-info-circle mr-1"></i>

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
            </section>
        </div>
    </main>
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
    created: function () {
        //
    },
    mounted: function () {
        //
    },
}
</script>
