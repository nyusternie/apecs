<template>
    <NuxtLayout name="guides">
        <template #intro>
            <div class="max-w-xl">
                <h2 class="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    MariaDB
                </h2>

                <p class="mt-5 text-xl text-indigo-300">
                    Installing MariaDB to a Debian/Ubuntu machine is quick and easy.
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
                            MariaDB Engine Installation
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
                <h1 class="mt-5 text-3xl font-bold">
                    Deploy MariaDB
                    <small class="text-xs text-gray-500 uppercase">Infrastructure</small>
                </h1>

                <div class="mt-3 p-5 font-medium bg-gray-100 border-4 border-gray-300 rounded-xl">
                    Deploys a NoSQL database using Docker.

                    <small class="block">
                        NOTE: All database data is stored in the current working folder.
                    </small>
                </div>

    <pre class="mt-5 p-5 bg-yellow-100 border-4 border-yellow-300 rounded-xl">
    <code>docker run --rm \
        --name my-couchdb \
        -e COUCHDB_USER=admin \
        -e COUCHDB_PASSWORD=password \
        -e COUCHDB_ERLANG_COOKIE=33595219-bc56-43ca-9df6-a9b4145f1e49 \
        -p 127.0.0.1:5984:5984 \
        -v $(pwd):/opt/couchdb/data \
        couchdb:3.3.1
    </code></pre>
            </section>

            <section class="py-10 max-w-5xl mx-auto">
                <div class="mt-3 p-5 font-medium bg-gray-100 border-4 border-gray-300 rounded-xl">
                    Deploys a NoSQL database using Docker.

                    <small class="block">
                        NOTE: All database data is stored in the current working folder.
                    </small>
                </div>

    <pre class="mt-5 p-5 bg-yellow-100 border-4 border-yellow-300 rounded-xl">
    <code>version: '3'

    services:
      db:
        image: mysql:8
        restart: always
        environment:
          - MYSQL_ROOT_PASSWORD=gitea
          - MYSQL_USER=gitea
          - MYSQL_PASSWORD=gitea
          - MYSQL_DATABASE=gitea
        networks:
          - gitea
        volumes:
          - ./mysql:/var/lib/mysql
    </code></pre>
            </section>

        </template>
    </NuxtLayout>
</template>
