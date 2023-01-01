<template>
    <main>
        <Navbar class="hidden" />

        <div class="grid grid-cols-5 gap-4 h-full overflow-hidden pb-20 bg-red-500">
            <section class="col-span-3 p-3 h-full overflow-y-scroll bg-purple-500">
                <p class="text-xl">
                    Installing Docker to a Debian/Ubuntu machine is quick and easy.
                </p>

                <div class="my-3 flex justify-between border-2 border-gray-500 p-3 rounded-xl bg-white">
                    <span>
                        ssh-keygen
                    </span>

                    <svg class="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                </div>

                <p>
                    More steps here..
                </p>

                <div class="my-3 flex justify-between border-2 border-gray-500 p-3 rounded-xl bg-white">
                    <span>
                        apt install apt-transport-https ca-certificates curl gnupg2 software-properties-common
                    </span>

                    <svg class="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                </div>

                <div class="my-3 flex justify-between border-2 border-gray-500 p-3 rounded-xl bg-white">
                    <span>
                        curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -
                    </span>

                    <svg class="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                </div>

                <div class="my-3 flex justify-between border-2 border-gray-500 p-3 rounded-xl bg-white">
                    <span>
                        add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
                    </span>

                    <svg class="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                </div>

                <div class="my-3 flex justify-between border-2 border-gray-500 p-3 rounded-xl bg-white">
                    <span>
                        apt update
                    </span>

                    <svg class="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                </div>

                <div class="my-3 flex justify-between border-2 border-gray-500 p-3 rounded-xl bg-white">
                    <span>
                        apt install docker-ce docker-compose
                    </span>

                    <svg class="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                </div>

                <small>* docker-compose pull && docker-compose up -d</small>

                <br /><small>** /var/lib/docker/volumes</small>
            </section>

            <section class="col-span-2 p-3 bg-yellow-400">
                <div class="flex items-center">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

                    <span class="ml-2 text-3xl font-bold">
                        Key Generation Guide
                    </span>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">
                            <i class="fas fa-info-circle mr-1"></i>
                        </h3>
                    </div>

                    <div class="card-body">
                        <dl class="row">
                            <dt class="col-sm-4">Description lists</dt>
                            <dd class="col-sm-8">A description list is perfect for defining terms.</dd>
                            <dt class="col-sm-4">Euismod</dt>
                            <dd class="col-sm-8">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                            <dd class="col-sm-8 offset-sm-4">Donec id elit non mi porta gravida at eget metus.</dd>
                        </dl>
                    </div>

                </div>
            </section>
        </div>

    </main>
</template>

<script>
/* Import components. */
import Navbar from './Navbar'

export default {
    components: {
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
        //
    },
}
</script>
