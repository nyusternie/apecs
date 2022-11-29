<template>
    <main class="w-screen flex flex-row bg-pink-500">
        <Menu class="w-80 h-screen flex-none overflow-x-hidden overflow-y-scroll" />

        <section class="h-screen">
            <Header />

            <main id="content-win" class="overflow-x-hidden overflow-y-scroll">
                <slot />
            </main>
        </section>
    </main>
</template>

<style>
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
