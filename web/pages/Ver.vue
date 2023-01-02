<template>
    <main>
        <!-- Header -->
        <SiteHeader pageId="ver" />

        <!-- Page Section -->
        <section class="content">
            <div class="container-fluid">
                <p>
                    For your convenience, there is an automatic installation script that installs Ver for you.
                </p>

                <p>
                    To install the latest stable version:
                </p>

                <code class="p-3">
                    bash -c "$(wget -O - https://apt.apecs.dev/ver.sh)"
                </code>

                <p class="mt-3">
                    To install a specific version of Ver:
                </p>

                <code class="p-3">
                    wget https://apt.apecs.dev/ver.sh
                </code>
                <br /><code class="p-3">
                    chmod +x ver.sh
                </code>
                <br /><code class="p-3">
                    ./ver.sh &lt;version number&gt;
                </code>
            </div>
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
