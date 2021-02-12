<template>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">{{title}}</h1>
                </div>

                <div v-if="pageId === 'dashboard'" class="col-sm-6">
                    <div class="float-sm-right text-right">
                        <strong class="text-info">BU!LD BCH!</strong>
                        <span class="text-secondary">&nbsp;and&nbsp;</span>
                        <strong><a href="https://twitter.com/search?q=%23MakeBitcoinCashAgain" target="_blank">#MakeBitcoinCashAgain</a></strong>
                    </div>
                </div>

                <div v-else class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="javascript://" @click="goTo('/')">Dashboard</a>
                        </li>

                        <li class="breadcrumb-item active">
                            {{title}}
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        pageId: String
    },
    computed: {
        title: function () {
            switch(this.pageId) {
            case 'dashboard':
                return 'Dashboard'
            case 'stats':
                return 'Bitcoin Statistics'
            case 'status':
                return 'Community & Network Status'
            case 'ver':
                return 'Ver: Node Virtual Assistant'

            case 'blockchains':
                return 'Blockchain Insights'
            case 'discuss':
                return 'Discuss'
            case 'events':
                return 'Event Calendar'
            case 'markets':
                return 'Market Insights'
            case 'privacy':
                return 'Privacy Insights'
            case 'news':
                return 'Headline News'

            /* Desktop */
            case 'file-mgr':
                return 'File Manager'
            case 'notebook':
                return 'Notebook'

            /* Profiles */
            case 'contributors':
                return 'Contributors'
            case 'profile':
                return 'Profile'

            /* Projects */
            case 'projects':
            case 'project-detail':
                return 'Projects'

            /* Workspaces */
            case 'code-editor':
                return 'Code Editor'
            case 'graphics-studio':
                return 'Graphics Studio'
            case 'labs':
                return 'Lab Experiments'

            /* Support */
            case 'buidling':
                return 'BUIDLing 101'
            case 'faq':
                return 'FAQ'
            case 'guides':
                return 'Guides & Tutorials'
            case 'matrix':
                return 'Matrix'
            case 'slack':
                return 'Slack'
            case 'tickets':
                return 'Support Tickets'

            default:
                return 'Unknown Page'
            }
        },

    },
    methods: {
        /**
         * Go To
         *
         * Navigates to a page location (in the router).
         */
        goTo(_location) {
            this.$router.push(_location)
        }
    },
}
</script>

<style scoped>
/*  */
</style>
