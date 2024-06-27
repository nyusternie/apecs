<template>
    <NuxtLayout name="guides">
        <template #intro>
            <div class="max-w-xl">
                <h2 class="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    Yarn
                </h2>

                <p class="mt-5 text-xl text-indigo-300">
                    Yarn is a great package manager for Node.js.
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
                <h3 class="text-2xl font-medium">
                    Add the public key
                </h3>

                <div class="my-5 w-3/4 border-4 border-yellow-300 bg-yellow-100 rounded-xl overflow-hidden">
                    <textarea rows="1" class="-mb-2 p-5 w-full border-0 bg-yellow-100">curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -</textarea>
                </div>

                <h3 class="mt-10 text-2xl font-medium">
                    Add the new source
                </h3>

                <div class="my-5 w-3/4 border-4 border-yellow-300 bg-yellow-100 rounded-xl overflow-hidden">
                    <textarea rows="1" class="-mb-2 p-5 w-full border-0 bg-yellow-100">echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list</textarea>
                </div>

                <h3 class="mt-10 text-2xl font-medium">
                    Update the repository
                </h3>

                <div class="my-5 w-3/4 border-4 border-yellow-300 bg-yellow-100 rounded-xl overflow-hidden">
                    <textarea rows="1" class="-mb-2 p-5 w-full border-0 bg-yellow-100">apt update</textarea>
                </div>

                <h3 class="mt-10 text-2xl font-medium">
                    Install Yarn
                </h3>

                <div class="my-5 w-3/4 border-4 border-yellow-300 bg-yellow-100 rounded-xl overflow-hidden">
                    <textarea rows="1" class="-mb-2 p-5 w-full border-0 bg-yellow-100">apt install yarn</textarea>
                </div>
            </section>
        </template>
    </NuxtLayout>
</template>
