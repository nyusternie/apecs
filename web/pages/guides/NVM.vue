<template>
    <NuxtLayout name="guides">
        <template #intro>
            <div class="max-w-xl">
                <h2 class="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    Node Version Manager (NVM)
                </h2>

                <p class="mt-5 text-xl text-indigo-300">
                    Install this software manager for Node.js.
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
                            Install VeraCrypt
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
            <section class="p-3 h-full bg-gradient-to-r from-gray-50 to-gray-100">
                <h3 class="text-2xl font-medium">
                    Run the installation script
                </h3>

                <div class="my-5 w-3/4 border-4 border-yellow-300 bg-yellow-100 rounded-xl overflow-hidden">
                    <textarea rows="1" class="-mb-2 p-5 w-full border-0 bg-yellow-100">curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash</textarea>
                </div>
            </section>
        </template>
    </NuxtLayout>
    <!-- <main>
        <div class="grid grid-cols-5 gap-4 h-full overflow-hidden pb-20 bg-red-500">
            <section class="col-span-3 p-3 h-full overflow-y-scroll bg-purple-500">
                <p class="text-xl">
                    Installing Docker to a Debian/Ubuntu machine is quick and easy.
                </p>

                <div class="my-3 flex justify-between border-2 border-gray-500 p-3 rounded-xl bg-white">
                    <span>
                        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
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
                         Guide
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

    </main> -->
</template>
