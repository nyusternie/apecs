<template>
    <main class="w-screen flex flex-row bg-pink-500">
        <Menu class="w-80 h-screen flex-none overflow-x-hidden overflow-y-scroll" />

        <section class="h-screen bg-gradient-to-r from-gray-50 to-gray-200">
            <SiteHeader />

            <main id="content-win" class="overflow-x-hidden overflow-y-scroll">
                <header class="bg-indigo-900">
                    <!-- Header section with select menu -->
                    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
                        <div class="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
                            <div class="max-w-xl">
                                <h2 class="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
                                    Decode
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

                <slot />
            </main>
        </section>
    </main>
</template>

<style>
/* global window */
main::-webkit-scrollbar, section::-webkit-scrollbar {
    /* display: none; */
    width: 4px;
    height: 8px;
    background-color: #00A774; /* or add it to the track */
}
main::-webkit-scrollbar-thumb, section::-webkit-scrollbar-thumb {
    background: #8dc351;
}

#content-win {
    height: calc(100% - 70px);
}
</style>

<!-- Matomo -->
<script>
if (typeof process === 'undefined' || process.browser) {
    var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//matomo.avasdao.org/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '7']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
}
</script>
<!-- End Matomo Code -->
