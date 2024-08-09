<template>
    <NuxtLayout name="guides">
        <template #intro>
            <div class="max-w-xl">
                <h2 class="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    VPS Secure Setup
                </h2>

                <small class="pl-3 text-xs font-medium text-gray-200 uppercase tracking-widest italic">
                    Infrastructure
                </small>

                <p class="mt-5 text-xl text-indigo-300">
                    Learn how-to to securely configure and protect your "rented" cloud servers from "bad actors".
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
                Setup a Virtual Private Server (VPS)
            </h1>

            <small class="block pl-3 text-sm font-medium text-rose-500 tracking-widest uppercase">
                Level: <span class="text-lg">Intermediate</span>
            </small>

            <section class="mt-3 py-5 max-w-5xl mx-auto">
                <div class="p-5 text-2xl font-medium bg-gray-100 border-4 border-gray-300 rounded-xl">
                    update.sh

                    <small class="block text-sm">
                        NOTE: Run this script regularly to keep the system up-to-date.
                    </small>
                </div>

<pre class="mt-5 p-5 bg-yellow-100 border-4 border-yellow-300 rounded-xl">
<code>apt update && apt upgrade -y && apt-get autoremove -y</code></pre>
            </section>

            <section class="mt-3 py-5 max-w-5xl mx-auto">
                <div class="p-5 text-2xl font-medium bg-gray-100 border-4 border-gray-300 rounded-xl">
                    Recommended Modules

                    <small class="block text-sm">
                        NOTE: Allow support for MOST 3rd-party modules.
                    </small>
                </div>

<pre class="mt-5 p-5 bg-yellow-100 border-4 border-yellow-300 rounded-xl">
<code>apt install -y \
  apt-transport-https \
  autoconf \
  build-essential \
  ca-certificates
  curl \
  git \
  gnupg2 \
  libtool \
  make \
  net-tools \
  software-properties-common \
  vim
</code></pre>
            </section>

            <section class="mt-3 py-5 max-w-5xl mx-auto">
                <div class="p-5 text-2xl font-medium bg-gray-100 border-4 border-gray-300 rounded-xl">
                    Disable Password Authentication

                    <small class="block text-sm">
                        NOTE: You MUST enable SSH login before doing this step.
                    </small>
                </div>

<pre class="mt-5 p-5 bg-yellow-100 border-4 border-yellow-300 rounded-xl">
<code>vim /etc/ssh/sshd_config
PasswordAuthentication no    &lt;-- this will be commented out by default
sudo service ssh restart
</code></pre>
            </section>

            <section class="mt-3 py-5 max-w-5xl mx-auto">
                <div class="p-5 text-2xl font-medium bg-gray-100 border-4 border-gray-300 rounded-xl">
                    Disable Visual-Mode in Vim

                    <small class="block text-sm">
                        NOTE: Debian ONLY
                    </small>
                </div>

<pre class="mt-5 p-5 bg-yellow-100 border-4 border-yellow-300 rounded-xl">
<code>touch ~/.vimrc && echo "set mouse-=a" >> ~/.vimrc</code></pre>
            </section>

            <section class="mt-3 py-5 max-w-5xl mx-auto">
                <NuxtLink to="UFW" class="p-5 text-2xl font-medium bg-blue-200 border-4 border-blue-300 rounded-xl">
                    Setup Universal Firewall (UFW)
                </NuxtLink>
            </section>

            <section class="mt-3 py-5 max-w-5xl mx-auto">
                <div class="p-5 text-2xl font-medium bg-gray-100 border-4 border-gray-300 rounded-xl">
                    Create SSL Certificate

                    <small class="block text-sm">
                        NOTE: TBD
                    </small>
                </div>

<pre class="mt-5 p-5 bg-yellow-100 border-4 border-yellow-300 rounded-xl">
<code>openssl req \
    -newkey rsa:2048 -nodes -keyout server.key \
    -x509 -days 3650 -out server.crt
</code></pre>
            </section>

            <section class="mt-3 py-5 max-w-5xl mx-auto">
                <div class="p-5 text-2xl font-medium bg-gray-100 border-4 border-gray-300 rounded-xl">
                    Initial NodeJS

                    <small class="block text-sm">
                        NOTE: Choose either a "static" or "proxy" source.
                    </small>
                </div>

<pre class="mt-5 p-5 bg-yellow-100 border-4 border-yellow-300 rounded-xl">
<code>server {
    listen  80;
    listen  [::]:80;
    listen  443 ssl;
    listen  [::]:443 ssl;

    server_name domain.ext www.domain.ext;

    ssl_certificate      /etc/nginx/ssl/server.crt;
    ssl_certificate_key  /etc/nginx/ssl/server.key;

    access_log /dev/null;
    error_log /root/error_log;

    root /var/www/html;

    # Add index.php to the list if you are using PHP
    index index.html index.htm;

    location / {
        # First attempt to serve request as file, then
        # as directory, then fall back to displaying a 404.
        # try_files $uri $uri/ =404;
        try_files $uri $uri/ /index.html;
    }
}
</code></pre>

<pre class="mt-5 p-5 bg-yellow-100 border-4 border-yellow-300 rounded-xl">
<code>server {
    listen  80;
    listen  [::]:80;
    listen  443 ssl;
    listen  [::]:443 ssl;

    server_name domain.ext www.domain.ext;

    ssl_certificate      /etc/nginx/ssl/server.crt;
    ssl_certificate_key  /etc/nginx/ssl/server.key;

    access_log /dev/null;
    error_log /root/error_log;

    location / {
        proxy_set_header Access-Control-Allow-Origin *;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;

        proxy_pass http://127.0.0.1:3000;
        proxy_redirect off;

        proxy_http_version 1.1;
        proxy_read_timeout 1h;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
</code></pre>
            </section>

            <section class="mt-3 py-5 max-w-5xl mx-auto">
                <div class="p-5 text-2xl font-medium bg-gray-100 border-4 border-gray-300 rounded-xl">
                    setenv

                    <small class="block text-sm">
                        NOTE: TBD
                    </small>
                </div>

<pre class="mt-5 p-5 bg-yellow-100 border-4 border-yellow-300 rounded-xl">
<code>export COUCHDB_USER=admin
export COUCHDB_PASSWORD=uuid

# USE FOR LOCAL DEVELOPMENT
# COUCHDB_USER=admin COUCHDB_PASSWORD=uuid yarn dev --port 39###
</code></pre>
            </section>

            <section class="mt-3 py-5 max-w-5xl mx-auto">
                <div class="p-5 text-2xl font-medium bg-gray-100 border-4 border-gray-300 rounded-xl">
                    deploy.sh

                    <small class="block text-sm">
                        NOTE: TBD
                    </small>
                </div>

<pre class="mt-5 p-5 bg-yellow-100 border-4 border-yellow-300 rounded-xl">
<code>source setenv

cd /usr/src/project-name/sub-folder
git pull --no-rebase
docker compose up -d --build

docker image prune -af
</code></pre>
            </section>

        </template>
    </NuxtLayout>
</template>
