<template>
    <nav class="navbar navbar-expand navbar-primary navbar-dark">
        <ul class="navbar-nav">
            <li>
                <div class="nav-item d-none d-sm-inline-block mt-1">
                    <select class="form-control-sm">
                        <option value="mainnet" selected>Mainnet</option>
                        <option value="testnet">Testnet</option>
                    </select>
                </div>
            </li>

            <li class="nav-item d-none d-sm-inline-block">
                <router-link to="/labs" class="nav-link">
                    Home
                </router-link>
            </li>
        </ul>

        <form class="form-inline ml-3">
            <div class="input-group input-group-sm">
                <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">

                <div class="input-group-append">
                    <button class="btn btn-navbar" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </form>
    </nav>
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
