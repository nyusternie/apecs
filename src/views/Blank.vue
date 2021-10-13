<template>
    <main class="flex justify-center">
        <!-- Page Section -->
        <section class="max-w-5xl grid grid-cols-3 gap-5 py-10">
            <UnderConstruction />
        </section>
    </main>
</template>

<script>
/* Import components. */
import UnderConstruction from '@/components/UnderConstruction'

export default {
    components: {
        UnderConstruction,
    },
    data: () => {
        return {
            //
        }
    },
    created: async function () {
        /* Retrieve session. */
        const session = await this.hasSession()
            .catch(err => console.error('Session Error:', err))

        /* Validate session. */
        if (!session) {
            return
        }
    },
    mounted: function () {
        //
    },
}
</script>

<style scoped>
/*  */
</style>
