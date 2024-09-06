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
            <section class="py-10 max-w-5xl mx-auto">
                <div class="p-5 text-2xl font-medium bg-gray-100 border-4 border-gray-300 rounded-xl">
                    Create the OpenSSL certificates

                    <small class="block text-sm">
                        NOTE: These are self-signed certificates.
                    </small>
                </div>

<pre class="mt-5 p-5 bg-yellow-100 border-4 border-yellow-300 rounded-xl">
<code>openssl req -newkey rsa:2048 -nodes -keyout server.key -x509 -days 3650 -out server.crt
</code></pre>
            </section>

            <section class="py-10 max-w-5xl mx-auto">
                <div class="p-5 text-2xl font-medium bg-gray-100 border-4 border-gray-300 rounded-xl">
                    Install Stream module

                    <small class="block text-sm">
                        NOTE: May already been installed by the distro.
                    </small>
                </div>

<pre class="mt-5 p-5 bg-yellow-100 border-4 border-yellow-300 rounded-xl">
<code>apt get install -y libnginx-mod-stream
</code></pre>
            </section>

        </template>

        <!-- <section class="mt-5">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quasi magnam! Qui deleniti, nulla ipsam voluptatum, non quis ut libero at ipsum delectus, placeat perspiciatis. Atque repellat id earum dolorem?
            </p>
        </section> -->
    </NuxtLayout>
</template>
