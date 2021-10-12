<template>
    <main>
        <!-- Page Section -->
        <section class="content">
            <div class="container-fluid">
                <UnderConstruction />
            </div>
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
