<template>
    <main class="w-screen flex flex-row bg-pink-500">
        <Menu class="w-80 h-screen flex-none overflow-x-hidden overflow-y-scroll" />

        <section class="h-screen bg-gradient-to-r from-gray-50 to-gray-200">
            <SiteHeader />

            <main id="content-win" class="overflow-x-hidden overflow-y-scroll">
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
