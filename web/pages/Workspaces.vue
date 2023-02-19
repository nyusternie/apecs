<template>
    <main>
        <section class="grid grid-cols-3 gap-10 p-10">
            <NuxtLink to="/avax" class="w-full bg-indigo-300 border-4 border-indigo-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    Avalanche
                </h2>
            </NuxtLink>

            <NuxtLink to="/bsc" class="w-full bg-indigo-300 border-4 border-indigo-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    Binance
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

            <NuxtLink to="/eth" class="w-full bg-indigo-300 border-4 border-indigo-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    Ethereum
                </h2>
            </NuxtLink>

            <NuxtLink to="/fil" class="w-full bg-indigo-300 border-4 border-indigo-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    Filecoin
                </h2>
            </NuxtLink>

            <NuxtLink to="/monero" class="w-full bg-indigo-300 border-4 border-indigo-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    Monero
                </h2>
            </NuxtLink>

            <NuxtLink to="/nexa" class="w-full bg-indigo-300 border-4 border-indigo-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    Nexa
                </h2>
            </NuxtLink>

            <NuxtLink to="/xnexa" class="w-full bg-indigo-300 border-4 border-indigo-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    Nexaverse
                </h2>
            </NuxtLink>

            <NuxtLink to="/matic" class="w-full bg-indigo-300 border-4 border-indigo-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    Polygon
                </h2>
            </NuxtLink>

            <NuxtLink to="/sbch" class="w-full bg-indigo-300 border-4 border-indigo-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    Smart Bitcoin
                </h2>
            </NuxtLink>

            <NuxtLink to="/rune" class="w-full bg-indigo-300 border-4 border-indigo-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    THORChain
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
export default {
    head: () => ({
        title: 'Workspaces — APECS Dev',
        meta: [
            {
                hid: 'description', // `vmid` for it as it will not work
                name: 'description',
                content: `Browse all of the Workspaces of our supported blockchains.`
            }
        ]
    }),
    data: () => {
        return {
            //
        }
    },
    created: function () {
        //
    },
    mounted: function () {
        //
    },
}
</script>
