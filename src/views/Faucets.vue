<template>
    <main>
        <!-- Header -->
        <Header pageId="" />

        <!-- Page Section -->
        <section class="content">
            <div class="container-fluid">
                <UnderConstruction />
            </div>
        </section>

        <section>
            <div>
                BCH Testnet Address:
            </div>

            <div>
                bchtest:qq3goi409u454iwht3jhuidy78yausdifhr2
            </div>

            <button>Get TBCH!</button>

            <div>
                Please send tBCH back to this faucet at this address:
                qq3goi409u454iwht3jhuidy78yausdifhr2
            </div>

            <div>
                Current Balance: 162.58239475 tBCH
            </div>
        </section>
    </main>
</template>

<script>
/* Import components. */
import Header from '@/components/Header.vue'
import UnderConstruction from '@/components/UnderConstruction.vue'

export default {
    components: {
        Header,
        UnderConstruction,
    },
    data: () => {
        return {
            //
        }
    },
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

<style scoped>
/*  */
</style>
