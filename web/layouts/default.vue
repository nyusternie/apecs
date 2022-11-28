<template>
    <main class="w-screen flex flex-row bg-green-400">
        <Menu />

        <section>
            <Header />

            <slot id="content-win" class="overflow-x-hidden overflow-y-scroll h-full" />
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
