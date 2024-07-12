<template>
    <NuxtLayout name="guides">
        <template #intro>
            <div class="max-w-xl">
                <h2 class="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    Uncomplicated Firewall
                </h2>

                <small class="pl-3 text-xs font-medium text-gray-200 uppercase tracking-widest italic">
                    Infrastructure
                </small>

                <p class="mt-5 text-xl text-indigo-300">
                    Uncomplicated Firewall (UFW) is a program for managing a netfilter firewall designed to be easy to use
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
            <h1 class="mt-5 text-3xl font-bold">
                Setup a Universal Firewall (UFW)
            </h1>

            <small class="block pl-3 text-sm font-medium text-rose-500 tracking-widest uppercase">
                Level: <span class="text-lg">Easy</span>
            </small>

            <section class="mt-3 py-5 max-w-5xl mx-auto">
                <div class="p-5 text-2xl font-medium bg-gray-100 border-4 border-gray-300 rounded-xl">
                    Allow UFW to Web Ports

                    <small class="block text-sm">
                        NOTE: TBD
                    </small>
                </div>

<pre class="mt-5 p-5 bg-yellow-100 border-4 border-yellow-300 rounded-xl">
<code>sudo ufw allow proto tcp from any to any port 80,443</code></pre>
            </section>

        </template>
    </NuxtLayout>
</template>
