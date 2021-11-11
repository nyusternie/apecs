<template>
    <main class="p-10">

        <h3 class="text-2xl font-medium">
            update.sh
        </h3>

        <div class="my-5 w-3/4 border-4 border-yellow-300 bg-yellow-100 rounded-xl overflow-hidden">
            <textarea rows="1" class="-mb-2 p-5 w-full border-0 bg-yellow-100">apt update && apt upgrade -y && apt-get autoremove -y</textarea>
        </div>

        <h3 class="mt-10 text-2xl font-medium">
            Recommended modules
        </h3>

        <div class="my-5 w-3/4 border-4 border-yellow-300 bg-yellow-100 rounded-xl overflow-hidden">
            <textarea rows="2" class="-mb-2 p-5 w-full border-0 bg-yellow-100">apt install -y apt-transport-https autoconf build-essential ca-certificates curl git gnupg2 libtool make net-tools software-properties-common vim</textarea>
        </div>

    </main>
</template>

<script>
/* Import components. */
// import Navbar from './Navbar'

export default {
    components: {
        // Navbar,
    },
    data: () => {
        return {
            //
        }
    },
    computed: {
        //
    },
    methods: {
        //
    },
    created: async function () {
        //
    },
    mounted: function () {
        //
    },
}
</script>

<style scoped>
/*  */
</style>
