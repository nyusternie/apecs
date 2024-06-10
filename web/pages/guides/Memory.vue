<template>
    <NuxtLayout name="guides">
        <template #intro>
            <div class="max-w-xl">
                <h2 class="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    Memory Management
                </h2>

                <p class="mt-5 text-xl text-indigo-300">
                    Manage your server's memory like a PRO!
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
                    Add Swap Space
                </h3>

                <div class="my-5 w-3/4 border-4 border-yellow-300 bg-yellow-100 rounded-xl overflow-hidden">
                    <textarea rows="4" class="-mb-2 p-5 w-full border-0 bg-yellow-100">swapon --show
# free -h
fallocate -l 4G /swapfile

chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
swapon --show

# free -h
echo '/swapfile none swap sw 0 0' | tee -a /etc/fstab

# cat /proc/sys/vm/swappiness
# sysctl vm.swappiness=10
echo 'vm.swappiness=10' | tee -a /etc/sysctl.conf</textarea>
                </div>

                <!-- <ul class="-mt-3 mb-3 pl-10 text-xs text-gray-500 list-disc">
                    <li>(a)rchive</li>
                    <li>(v)erbose</li>
                    <li>(P)rogress + (P)artial</li>
                    <li>(z)ip compression</li>
                    <li>(h)uman-readable</li>
                    <li>remote sh(e)ll</li>
                </ul> -->
        </section>
        </template>
    </NuxtLayout>
</template>

<script>
export default {
    data: () => {
        return {
            //
        }
    },
    computed: {
        //
    },
    methods: {
        //
    },
    created: async function () {
        //
    },
    mounted: function () {
        //
    },
}
</script>
