<template>
    <main>
        <section class="grid grid-cols-3 gap-10 p-10">
            <router-link to="/editors" class="w-full bg-pink-300 p-5 flex justify-center rounded-xl">
                Editors
            </router-link>

            <router-link to="/sandbox" class="w-full bg-pink-300 p-5 flex justify-center rounded-xl">
                Sandbox
            </router-link>

            <router-link to="/smartbch" class="w-full bg-pink-300 p-5 flex justify-center rounded-xl">
                Smart Bitcoin
            </router-link>

            <router-link to="/studios" class="w-full bg-pink-300 p-5 flex justify-center rounded-xl">
                Studios
            </router-link>

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
