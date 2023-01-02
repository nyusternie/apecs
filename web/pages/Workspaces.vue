<template>
    <main>
        <section class="grid grid-cols-3 gap-10 p-10">
            <NuxtLink to="/editors" class="w-full bg-pink-300 p-5 flex justify-center rounded-xl">
                Editors
            </NuxtLink>

            <NuxtLink to="/sandbox" class="w-full bg-pink-300 p-5 flex justify-center rounded-xl">
                Sandbox
            </NuxtLink>

            <NuxtLink to="/smartbch" class="w-full bg-pink-300 p-5 flex justify-center rounded-xl">
                Smart Bitcoin
            </NuxtLink>

            <NuxtLink to="/studios" class="w-full bg-pink-300 p-5 flex justify-center rounded-xl">
                Studios
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
