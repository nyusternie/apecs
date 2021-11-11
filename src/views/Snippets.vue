<template>
    <main class="p-10">
        <h1 class="text-3xl">
            Code Snippets
        </h1>

        <h1 class="mt-5 text-3xl font-bold">
            Math.sol
            <small class="text-xs text-gray-500">SOLIDITY</small>
        </h1>

        <div class="mt-3 p-5 font-medium bg-yellow-100 border-4 border-yellow-300 rounded-xl">
            Provides a library for performing various math operations.
        </div>

        <section class="mt-5 p-5 bg-yellow-100 border-4 border-yellow-300 rounded-xl">
<code><pre>
pragma solidity =0.5.16;

// a library for performing various math operations

library Math {
    function min(uint x, uint y) internal pure returns (uint z) {
        z = x &lt; y ? x : y;
    }

    // babylonian method (https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method)
    function sqrt(uint y) internal pure returns (uint z) {
        if (y > 3) {
            z = y;
            uint x = y / 2 + 1;
            while (x &lt; z) {
                z = x;
                x = (y / x + x) / 2;
            }
        } else if (y != 0) {
            z = 1;
        }
    }
}
</pre></code>
        </section>

    </main>
</template>

<script>
/* Import components. */
// import Header from '@/components/Header'
// import UnderConstruction from '@/components/UnderConstruction'

export default {
    components: {
        // Header,
        // UnderConstruction,
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
