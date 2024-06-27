<template>
    <NuxtLayout name="guides">
        <template #intro>
            <div class="max-w-xl">
                <h2 class="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    Android
                </h2>

                <p class="mt-5 text-xl text-indigo-300">
                    Some best practices for building Android apps.
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
                    Running the Android Emulator
                </h3>

                <div class="my-5 w-3/4 border-4 border-yellow-300 bg-yellow-100 rounded-xl overflow-hidden">
                    <textarea rows="6" class="-mb-2 p-5 w-full border-0 bg-yellow-100">
npx react-native start --reset-cache
emulator -avd Pixel_5_API_30 -no-snapshot
npx react-native run-android
emulator -list-avds
adb -s emulator-5554 reverse tcp:9090 tcp:9090
                    </textarea>
                </div>
            </section>
        </template>
    </NuxtLayout>
</template>
