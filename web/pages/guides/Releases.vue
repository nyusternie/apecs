<template>
    <NuxtLayout name="guides">
        <template #intro>
            <div class="max-w-xl">
                <h2 class="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    Software Releases
                </h2>

                <p class="mt-5 text-xl text-indigo-300">
                    Best practices for deploying a new software release.
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
                <div class="mt-3 p-5 font-medium bg-gray-100 border-4 border-gray-300 rounded-xl">
                    Publishes to Git.

                    <small class="block">
                        NOTE: This will work for ANY git system.
                    </small>
                </div>

<pre class="mt-5 p-5 bg-yellow-100 border-4 border-yellow-300 rounded-xl">
<code>git tag -a vYY.MM.DD -m "&lt;short-description&gt;"
git push origin &lt;tagname&gt;
tar cvzf build/&lt;app-name&gt;-YYMMDD.tar.gz dist
</code></pre>

            </section>
        </template>
    </NuxtLayout>
</template>
