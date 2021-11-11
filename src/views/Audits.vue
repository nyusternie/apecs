<template>
    <main class="w-full">
        <!-- Page Section -->
        <section class="max-w-5xl mx-auto mt-10">

            <h1 class="text-5xl font-bold">Audit Center</h1>

        </section>

        <section v-if="id" class="max-w-5xl mx-auto mt-10">

            <h1 class="text-3xl font-medium">
                Loading Audit Id ( {{id}} )
            </h1>

            <h3 class="text-2xl font-medium mt-5">
                Name: {{getAudit(id).name}}
            </h3>

            <p class="p-10">
                Ea in illustriora o quo ea reprehenderit. Proident nam deserunt. Ita malis
                arbitror, id malis eram quem cupidatat, quis probant instituendarum o possumus
                labore nisi se fore iis voluptate minim admodum voluptate an sed minim offendit
                exquisitaque, a se transferrem nam illum in et enim voluptate. Si veniam ex
                quid, ab dolor summis hic aliquip, aliquip quo amet eiusmod sed te malis laborum
                concursionibus.Excepteur esse deserunt officia id senserit nisi legam e eram.
                Aut aliqua quamquam senserit non ut id tempor consequat, est summis ingeniis
                doctrina, an amet expetendis coniunctione. Tamen ut litteris ne enim et aliquip
                fugiat laboris. Hic tamen dolore do incididunt.
            </p>

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
            id: null,
        }
    },
    methods: {
        getAudit(_id) {
            let audit

            switch(_id) {
            case 'token-bridge':
                audit = {
                    name: 'Token Bridge',
                    url: 'https://tokenbridge.cash',
                }
                break
            }

            return audit
        },

    },
    created: async function () {
        /* Retrieve session. */
        // const session = await this.hasSession()
        //     .catch(err => console.error('Session Error:', err))

        /* Validate session. */
        // if (!session) {
        //     return
        // }

        const route = this.$route
        console.log('ROUTE', route)

        let params

        if (route.params) {
            params = route.params
            console.log('PARAMS', params)
        }

        if (params.id) {
            /* Set (audit) id. */
            this.id = params.id
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
