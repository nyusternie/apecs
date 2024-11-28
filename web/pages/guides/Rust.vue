<template>
    <NuxtLayout name="guides">
        <template #intro>
            <div class="max-w-xl">
                <h2 class="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    Cascading Style Sheets (CSS)
                </h2>

                <p class="mt-5 text-xl text-indigo-300">
                    Some of the most useful CSS tricks to help you in a bind.
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
            <section class="py-10 max-w-5xl mx-auto">
                <div class="p-5 text-2xl font-medium bg-gray-100 border-4 border-gray-300 rounded-xl">
                    Generates a UUID.

                    <small class="block text-sm">
                        Version 4.
                    </small>
                </div>

<pre class="mt-5 p-5 bg-yellow-100 border-4 border-yellow-300 rounded-xl">
<code>use uuid::Uuid;
let sessionid = Uuid::new_v4();
</code></pre>

            </section>
        </template>
    </NuxtLayout>
</template>
