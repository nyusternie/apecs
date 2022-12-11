<template>
    <main class="h-full overflow-x-hidden overflow-y-scroll">
        <header class="bg-gradient-to-r from-indigo-900 to-indigo-700 border-b-4 border-indigo-500">
            <div class="max-w-2xl mx-auto py-12 px-4 sm:py-20 sm:px-6 lg:px-8 lg:max-w-7xl">
                <div class="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-start">
                    <slot name="intro" />

                    <slot name="tldr" />
                </div>
            </div>
        </header>

        <slot name="main" />
    </main>
</template>
