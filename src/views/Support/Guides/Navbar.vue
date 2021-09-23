<template>
    <main class="p-3 bg-red-400">
        <ul class="navbar-nav">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="javascript://">
                    {{networkDisplay}} <span class="caret"></span>
                </a>

                <div class="dropdown-menu">
                    <a class="dropdown-item" tabindex="-1" href="javascript://">Mainnet</a>
                    <a class="dropdown-item" tabindex="-1" href="javascript://">Testnet</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" tabindex="-1" href="javascript://">Custom</a>
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
    </main>
</template>

<script>
export default {
    components: {
        //
    },
    data: () => {
        return {
            network: 'mainnet', // FIXME: Move this to a store.
        }
    },
    computed: {
        networkDisplay() {
            switch(this.network) {
            case 'mainnet':
                return 'Mainnet'
            case 'testnet':
                return 'Testnet'
            case 'custom':
                return 'Custom'
            default:
                return 'Mainnet'
            }
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
