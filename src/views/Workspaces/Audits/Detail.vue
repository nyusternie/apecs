<template>
    <main class="w-full">
        <!-- Page Section -->
        <section class="max-w-5xl mx-auto mt-10">

            <h1 class="text-5xl font-bold">
                {{name}} Smart Audit
            </h1>

            <div class="mt-5 p-3 bg-gray-200 border-2 border-gray-300 rounded-xl">
                <h1 class="text-lg font-medium text-gray-400">DISCLAIMER</h1>

                <p class="mt-3 text-sm text-gray-500">
                    The audit makes no statements or warrantees about utility of the code, safety of the code, suitability of the business model, regulatory regime for the business model, or any other statements about fitness of the contracts to purpose, or their bug free status.
                </p>

                <p class="mt-3 text-xs text-gray-500 font-medium">
                    THE AUDIT DOCUMENTATION IS FOR DISCUSSION PURPOSES ONLY
                </p>
            </div>

        </section>

        <section class="max-w-5xl mx-auto mt-10">
            <h1 class="text-2xl font-medium">
                SYNOPSIS
            </h1>

            <p class="mt-5">
                The focus of this review was to ensure the following properties:
            </p>

            <p class="mt-5">
                Security: identifying security related issues within each contract and within the system of contracts.
            </p>

            <p class="mt-5">
                Sound Architecture: evaluation of the architecture of this system through the lens of established smart contract best practices and general software best practices.
            </p>

            <p class="mt-5">
                Code Correctness and Quality: a full review of the contract source code. The primary areas of focus include:
            </p>

            <p class="mt-5">
                <ul class="list-disc ml-10 my-5">
                    <li>
                        Correctness (does it do was it is intended to do)
                    </li>
                    <li>
                        Readability (how easily it can be read and understood)
                    </li>
                    <li>
                        Sections of code with high complexity
                    </li>
                    <li>
                        Improving scalability
                    </li>
                    <li>
                        Quantity and quality of test coverage
                    </li>
                </ul>
            </p>

            <h1 class="text-2xl font-medium">
                SEVERITY OF FINDINGS
            </h1>

            <h3 class="text-xl font-medium">
                Critical
            </h3>

            Critical issues are directly exploitable bugs or security vulnerabilities.

            Left unaddressed these issues are highly likely or guaranteed to cause major problems or potentially a full failure in the operations of the contract.

            <h3 class="text-xl font-medium">
                Major
            </h3>

            Major issues will be things like bugs or security vulnerabilities. These issues may not be directly exploitable, or may require a certain condition to arise in order to be exploited.

            Left unaddressed these issues are highly likely to cause problems with the operation of the contract or lead to a situation which allows the system to be exploited in some way.

            <h3 class="text-xl font-medium">
                Medium
            </h3>

            Medium issues are generally objective in nature but do not represent actual bugs or security problems.

            These issues should be addressed unless there is a clear reason not to.

            <h3 class="text-xl font-medium">
                Minor
            </h3>

            Minor issues are generally subjective in nature, or potentially deal with topics like "best practices" or "readability". Minor issues in general will not indicate an actual problem or bug in code.

            The maintainers should use their own judgement as to whether addressing these issues improves the codebase.

            <h1 class="text-2xl font-medium">
                SUMMARY
            </h1>

            Brief summary of audit.
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
