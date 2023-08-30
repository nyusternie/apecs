<template>
        <main>
        <section class="grid grid-cols-3 gap-10 p-10">
            <NuxtLink to="/studios/tailwind" class="w-full bg-indigo-300 border-4 border-indigo-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    Tailwind CSS
                </h2>
            </NuxtLink>

            <NuxtLink to="" class="w-full bg-indigo-300 border-4 border-indigo-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    Icon Creator
                </h2>
            </NuxtLink>

            <NuxtLink to="" class="w-full bg-indigo-300 border-4 border-indigo-500 p-5 flex justify-center rounded-xl shadow">
                <h2 class="text-3xl font-medium">
                    Photo Search
                </h2>
            </NuxtLink>


        </section>

    </main>
</template>

<script>
export default {
    data: () => {
        return {
            //
        }
    },
    head: () => ({
        title: 'Design Studio — APECS Dev',
        meta: [
            {
                hid: 'description', // `vmid` for it as it will not work
                name: 'description',
                content: `Newsfeed`
            }
        ]
    }),
    created: async function () {
        /* Retrieve session. */
        // const session = await this.hasSession()
        //     .catch(err => console.error('Session Error:', err))

        /* Validate session. */
        // if (!session) {
        //     return
        // }
    },
    mounted: function () {
        //
    },
}
</script>
