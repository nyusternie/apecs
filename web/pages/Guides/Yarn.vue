<template>
    <main class="p-10">

        <h3 class="text-2xl font-medium">
            Add the public key
        </h3>

        <div class="my-5 w-3/4 border-4 border-yellow-300 bg-yellow-100 rounded-xl overflow-hidden">
            <textarea rows="1" class="-mb-2 p-5 w-full border-0 bg-yellow-100">
                curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
            </textarea>
        </div>

        <h3 class="mt-10 text-2xl font-medium">
            Add the new source
        </h3>

        <div class="my-5 w-3/4 border-4 border-yellow-300 bg-yellow-100 rounded-xl overflow-hidden">
            <textarea rows="1" class="-mb-2 p-5 w-full border-0 bg-yellow-100">
                echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
            </textarea>
        </div>

        <h3 class="mt-10 text-2xl font-medium">
            Update the repository
        </h3>

        <div class="my-5 w-3/4 border-4 border-yellow-300 bg-yellow-100 rounded-xl overflow-hidden">
            <textarea rows="1" class="-mb-2 p-5 w-full border-0 bg-yellow-100">
                apt update
            </textarea>
        </div>

        <h3 class="mt-10 text-2xl font-medium">
            Install Yarn
        </h3>

        <div class="my-5 w-3/4 border-4 border-yellow-300 bg-yellow-100 rounded-xl overflow-hidden">
            <textarea rows="1" class="-mb-2 p-5 w-full border-0 bg-yellow-100">
                apt install yarn
            </textarea>
        </div>

    </main>

</template>

<script>
export default {
    components: {
        //
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
