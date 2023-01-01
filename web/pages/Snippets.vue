<template>
    <main class="">
        <header class="bg-indigo-900">
            <!-- Header section with select menu -->
            <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
                <div class="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
                    <div class="max-w-xl">
                        <h2 class="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
                            Code Snippets
                        </h2>

                        <p class="mt-5 text-xl text-indigo-300">
                            Perform a comprehensive suite of <span class="text-gray-100 font-medium">automated audits</span> on your application's smart contracts and backend services.
                        </p>
                    </div>

                    <div class="mt-10 w-full max-w-xs lg:mt-0">
                        <label for="currency" class="block text-base font-medium text-indigo-300">
                            CHOOSE YOUR PLATFORM
                        </label>

                        <div class="mt-1.5 relative">
                            <select id="currency" name="currency" class="block w-full bg-none bg-indigo-400 bg-opacity-25 border border-transparent text-white focus:ring-white focus:border-white rounded-md">
                                <option class="bg-gray-900">Binance Smart Chain (BSC)</option>
                                <option class="bg-gray-900">Ethereum (ETH)</option>
                                <option class="bg-gray-900" selected>Smart Bitcoin (sBCH)</option>
                            </select>

                            <div class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                                <!-- Heroicon name: solid/chevron-down -->
                                <svg class="h-4 w-4 text-indigo-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section class="my-10 max-w-5xl mx-auto">
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

<pre class="mt-5 p-5 bg-yellow-100 border-4 border-yellow-300 rounded-xl"><code>
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
</code></pre>
        </section>

    </main>
</template>

<script>
export default {
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
