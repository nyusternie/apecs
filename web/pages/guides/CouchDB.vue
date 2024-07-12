<template>
    <NuxtLayout name="guides">
        <template #intro>
            <div class="max-w-xl">
                <h2 class="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    CouchDB
                </h2>

                <small class="pl-3 text-xs font-medium text-gray-200 uppercase tracking-widest italic">
                    Infrastructure
                </small>

                <p class="mt-5 text-xl text-indigo-300">
                    Apache CouchDB is an open-source document-oriented NoSQL database, implemented in Erlang.
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
                            CouchDB Engine Installation
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
            <h1 class="mt-5 text-3xl font-bold">
                Setup CouchDB
            </h1>

            <small class="block pl-3 text-sm font-medium text-rose-500 tracking-widest uppercase">
                Level: <span class="text-lg">Easy</span>
            </small>

            <section class="mt-3 py-5 max-w-5xl mx-auto">
                <div class="p-5 text-2xl font-medium bg-gray-100 border-4 border-gray-300 rounded-xl">
                    Deploys a NoSQL database using Docker

                    <small class="block text-sm">
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

                <div class="mt-3 p-5 font-medium bg-fuchsia-200 border-4 border-fuchsia-300 rounded-xl">
                    For PRODUCTION deployments, you can make the server run "permanently".

                    <small class="block">
                        --rm (remove this flag)
                    </small>

                    <small class="block">
                        -d --restart unless-stopped (replace with these flags)
                    </small>
                </div>
            </section>

            <section class="mt-3 py-5 max-w-5xl mx-auto">
                <div class="p-5 text-2xl font-medium bg-gray-100 border-4 border-gray-300 rounded-xl">
                    Deploys a NoSQL database using Docker Compose

                    <small class="block text-sm">
                        NOTE: All database data is stored in the current working folder.
                    </small>
                </div>

<pre class="mt-5 p-5 bg-yellow-100 border-4 border-yellow-300 rounded-xl">
<code>services:
  couchdb:
    image: couchdb
    container_name: couchdb
    restart: unless-stopped
    ports:
      - '127.0.0.1:5984:5984'
      - '127.0.0.1:4369:4369'
      - '127.0.0.1:9100:9100'
    environment:
      - COUCHDB_USER=${COUCHDB_USER} # change this to match your system's ENV
      - COUCHDB_PASSWORD=${COUCHDB_PASSWORD} # change this to match your system's ENV
    volumes:
      - ./data:/opt/couchdb/data
    logging: # apply better controls to Docker overlay folder
      driver: 'json-file'
      options:
        max-file: '5'
        max-size: '10m'
networks:
  couchdb-network:
    driver: bridge
</code></pre>
            </section>

            <section class="mt-3 py-5 max-w-5xl mx-auto">
                <div class="p-5 text-2xl font-medium bg-gray-100 border-4 border-gray-300 rounded-xl">
                    Add a New User

                    <small class="block text-sm">
                        NOTE: TBD...
                    </small>
                </div>

<pre class="mt-5 p-5 bg-yellow-100 border-4 border-yellow-300 rounded-xl">
<code>curl -X PUT http://localhost:5984/_users/org.couchdb.user:new_username \
    -H "Accept: application/json" \
    -H "Content-Type: application/json" \
    -d '{"name": "new_username", "password": "new_password", "roles": [], "type": "user"}'
</code></pre>
            </section>

        </template>
    </NuxtLayout>
</template>
