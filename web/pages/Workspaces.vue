<template>
    <main>
        <section class="grid grid-cols-3 gap-10 p-10">
            <NuxtLink to="/avax" class="w-full bg-indigo-300 border-4 border-indigo-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    Avalanche
                </h2>
            </NuxtLink>

            <NuxtLink to="/btc" class="w-full bg-indigo-300 border-4 border-indigo-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    Bitcoin
                </h2>
            </NuxtLink>

            <NuxtLink to="/bch" class="w-full bg-indigo-300 border-4 border-indigo-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    Bitcoin Cash
                </h2>
            </NuxtLink>

            <NuxtLink to="/dash" class="w-full bg-indigo-300 border-4 border-indigo-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    Dash
                </h2>
            </NuxtLink>

            <NuxtLink to="/editors" class="w-full bg-rose-300 border-4 border-rose-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    Editors
                </h2>
            </NuxtLink>

            <NuxtLink to="/eth" class="w-full bg-indigo-300 border-4 border-indigo-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    Ethereum
                </h2>
            </NuxtLink>

            <NuxtLink to="/nexa" class="w-full bg-indigo-300 border-4 border-indigo-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    Nexa
                </h2>
            </NuxtLink>

            <NuxtLink to="/matic" class="w-full bg-indigo-300 border-4 border-indigo-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    Polygon
                </h2>
            </NuxtLink>

            <NuxtLink to="/sandbox" class="w-full bg-rose-300 border-4 border-rose-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    Sandbox
                </h2>
            </NuxtLink>

            <NuxtLink to="/sbch" class="w-full bg-indigo-300 border-4 border-indigo-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    Smart Bitcoin
                </h2>
            </NuxtLink>

            <NuxtLink to="/studios" class="w-full bg-rose-300 border-4 border-rose-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    Studios
                </h2>
            </NuxtLink>

            <NuxtLink to="/trx" class="w-full bg-indigo-300 border-4 border-indigo-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    Tron
                </h2>
            </NuxtLink>

        </section>

    </main>
</template>

<script>
/* Import components. */
// import UnderConstruction from '@/components/UnderConstruction'

export default {
    components: {
        // UnderConstruction,
    },
    head: () => ({
        title: 'Workspaces — APECS',
        meta: [
            {
                hid: 'description', // `vmid` for it as it will not work
                name: 'description',
                content: `Workspaces`
            }
        ]
    }),
    data: () => {
        return {
            //
        }
    },
    created: async function () {
        //
    },
    mounted: function () {
        //
    },
}
</script>
