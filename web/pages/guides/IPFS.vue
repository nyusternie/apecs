<template>
    <NuxtLayout name="guides">
        <template #intro>
            <div class="max-w-xl">
                <h2 class="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    IPFS
                </h2>

                <p class="mt-5 text-xl text-indigo-300">
                    Best practices when using IPFS.
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
                            Docker Engine Installation
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
                <h1 class="mt-5 text-3xl font-bold">
                    Deploy IPFS
                    <small class="text-xs text-gray-500 uppercase">Infrastructure</small>
                </h1>

                <section class="py-10 max-w-5xl mx-auto">
                    <div class="mt-3 p-5 font-medium bg-gray-100 border-4 border-gray-300 rounded-xl">
                        Start IPFS (in a Docker container)

                        <small class="block">
                            NOTE: Create an executable file `start-ipfs.sh`
                        </small>
                    </div>

<pre class="mt-5 p-5 bg-yellow-100 border-4 border-yellow-300 rounded-xl">
<code>docker run
  -d
  --restart always
  --name ipfs_host
  -e IPFS_PROFILE=server
  -v $IPFS_STAGING:/export
  -v $IPFS_DATA:/data/ipfs
  -p 4001:4001
  -p 4001:4001/udp
  -p 127.0.0.1:8080:8080
  -p 127.0.0.1:5001:5001
  ipfs/kubo:latest</code></pre>
                </section>

                <section class="py-10 max-w-5xl mx-auto">
                    <div class="mt-3 p-5 font-medium bg-gray-100 border-4 border-gray-300 rounded-xl">
                        (optional) Mount to the Host System

                        <small class="block">
                            NOTE: Create an executable file `start-gateway.sh`
                        </small>
                    </div>

<pre class="mt-5 p-5 bg-yellow-100 border-4 border-yellow-300 rounded-xl">
<code>while true; do eval "$(cat /gateway/pipe)" &> /gateway/output; done</code></pre>
                </section>

                <!-- <h3 class="mt-10 text-2xl font-medium">
                    Install Docker and Docker Compose
                </h3>

                <div class="my-5 w-3/4 border-4 border-yellow-300 bg-yellow-100 rounded-xl overflow-hidden">
                    <textarea rows="1" class="-mb-2 p-5 w-full border-0 bg-yellow-100 line-through">apt install -y docker-ce docker-compose (DEPRECATED)</textarea>
                </div> -->

            </section>
        </template>

        <!-- <section class="mt-5">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quasi magnam! Qui deleniti, nulla ipsam voluptatum, non quis ut libero at ipsum delectus, placeat perspiciatis. Atque repellat id earum dolorem?
            </p>
        </section> -->
    </NuxtLayout>
</template>
