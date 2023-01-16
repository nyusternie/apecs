<template>
    <main class="h-full overflow-x-hidden overflow-y-scroll">
        <header class="bg-gradient-to-r from-indigo-900 to-indigo-700 border-b-4 border-indigo-500">
            <div class="pl-8 pt-5">
                <NuxtLink to="/guides" class="text-indigo-100">
                    ↳ <span class="hover:underline">back to <span class="font-medium">Guides</span></span>
                </NuxtLink>
            </div>

            <div class="max-w-2xl mx-auto pt-6 pb-10 px-20 sm:pt-8 sm:pb-16 sm:px-6 lg:px-8 lg:max-w-7xl">
                <div class="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-start">
                    <slot name="intro" />

                    <slot name="links" />
                </div>
            </div>
        </header>

        <section class="p-3">
            <slot name="main" />
        </section>
    </main>
</template>

<script defer data-domain="apecs.dev" src="https://plausible.io/js/script.js"></script>
