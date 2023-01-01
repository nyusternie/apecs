<template>
    <main class="h-full">
        <UnderConstruction />
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
        title: 'File Manager — Cash DevOps',
        meta: [
            {
                hid: 'description', // `vmid` for it as it will not work
                name: 'description',
                content: `File Manager`
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
