<template>
    <main class="w-full">
        <!-- Page Section -->
        <section class="max-w-5xl mx-auto mt-10">

            <h1 class="text-5xl font-bold">Audit Center</h1>

            <p class="p-10">
                Independent security assessment of a project codebase, typically requested and paid-for by the project team.
            </p>

            <p class="p-10">
                detects and describes (in a report) security issues with underlying vulnerabilities, severity/difficulty, potential exploit scenarios and recommended fixes
            </p>

            <p class="p-10">
                provides subjective insights into code quality, documentation and testing.
            </p>

            <p class="p-10">
                Independent security assessment of a project codebase, typically requested and paid-for by the project team.
            </p>

        </section>

        <section v-if="id" class="max-w-5xl mx-auto mt-10">

            <h1 class="text-3xl font-medium">
                Loading Audit Id ( {{id}} )
            </h1>

            <h3 class="text-2xl font-medium mt-5">
                THIS IS A FREE COMMUNITY AUDIT
            </h3>

            <h3 class="text-2xl font-medium mt-5">
                Name: {{name}}
            </h3>

            <p class="p-10">
                SCOPE:
For Ethereum-based smart-contract projects, the scope is typically the on-chain smart contract code and sometimes includes the off-chain components that interact with the smart contracts
            </p>

            <p class="p-10">
                GOAL:
The goal of audits is to assess project code (with any associated specification, documentation) and alert project team, typically before launch, of potential security-related issues that need to be addressed to improve security posture, decrease attack surface and mitigate risk
            </p>

            <p class="p-10">
                NOT GOAL:
not a security guarantee of “bug-free” code by any stretch of imagination but a best-effort endeavour by trained security experts operating within reasonable constraints of time, understanding, expertise and of course, decidability
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
    computed: {
        name() {
            if (!this.id) return null

            switch(this.id) {
            case 'token-bridge':
                return 'Token Bridge'
            default:
                return 'n/a'
            }
        },

        url() {
            if (!this.id) return null

            switch(this.id) {
            case 'token-bridge':
                return 'https://tokenbridge.cash'
            default:
                return 'n/a'
            }
        },

    },
    methods: {
        //
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
