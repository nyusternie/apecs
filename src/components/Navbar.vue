<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- This example requires Tailwind CSS v2.0+ -->
        <div class="flex flex-col flex-grow border-r border-gray-200 pt-1 pb-4 bg-gray-700 overflow-y-auto">
            <router-link to="/" class="brand-link">
                <img
                    src="@/assets/img/icon.png"
                    alt="DevOps Icon"
                    class="brand-image img-rounded elevation-3"
                    style="opacity: .8"
                >
                <span class="font-light text-white">Cash DevOps</span>
            </router-link>

            <div class="user-panel mt-3 pb-3 mb-3 d-flex" v-if="account">
                <div class="avatar" v-if="account.emoji">
                    {{account.emoji}}
                </div>
                <div class="avatar" v-if="account.blockie">
                    <img :src="account.blockie" class="img-circle" elevation-3 />
                </div>
                <div>
                    <a href="javascript://" class="d-block text-white">{{account.nickname}}</a>
                    <a href="javascript://" class="d-block text-white" @click="signOut"><small>[ Sign Out ]</small></a>
                </div>
            </div>

            <div class="user-panel mt-3 pb-3 mb-0 d-flex" v-else>
                <div class="image">
                    <img src="@/assets/img/cyber-hacker-icon.jpg" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <a href="javascript://" class="d-block text-white" @click="signIn">Incognito <small>[ Sign in ]</small></a>
                    <a href="javascript://" class="d-block text-white" @click="donate"><small class="donate">[ donate $0.01 to devops ]</small></a>
                </div>
            </div>

            <div class="mt-0 flex-grow flex flex-col">
                <nav class="flex-1 px-2 space-y-8 bg-white" aria-label="Sidebar">
                    <div class="space-y-1">
                        <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
                        <router-link to="/" class="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                            <!--
                    Heroicon name: outline/home

                    Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500"
                  -->
                            <svg class="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            Dashboard
                        </router-link>

                        <router-link to="/projects" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                            <svg class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                            Projects
                        </router-link>

                        <div class="space-y-1">
                            <!-- Current: "bg-gray-100 text-gray-900", Default: "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
                            <button
                                type="button"
                                class="bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                aria-controls="sub-menu-1"
                                aria-expanded="false"
                            >
                                <!-- Heroicon name: outline/users -->
                                <svg class="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                <span class="flex-1" @click="showDesktopMenu = !showDesktopMenu">
                                    My Desktop
                                </span>
                                <!-- Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" -->
                                <svg class="text-gray-300 ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150" viewBox="0 0 20 20" aria-hidden="true">
                                    <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                                </svg>
                            </button>

                            <div v-if="showDesktopMenu" class="space-y-1" id="sub-menu-1">
                                <router-link to="/notebook" class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                    Notebook
                                </router-link>

                                <router-link to="/file-mgr" class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                    File Manager
                                </router-link>

                                <a href="javascript://" class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                    open my desktop..
                                </a>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <!-- Current: "bg-gray-100 text-gray-900", Default: "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
                            <button
                                type="button"
                                class="bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                aria-controls="sub-menu-1"
                                aria-expanded="false"
                            >
                                <!-- Heroicon name: outline/users -->
                                <svg class="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                <span class="flex-1" @click="showWorkspacesMenu = !showWorkspacesMenu">
                                    Workspaces
                                </span>
                                <!-- Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" -->
                                <svg class="text-gray-300 ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150" viewBox="0 0 20 20" aria-hidden="true">
                                    <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                                </svg>
                            </button>

                            <div v-if="showWorkspacesMenu" class="space-y-1" id="sub-menu-1">
                                <router-link to="/editor" class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                    Code Editor
                                </router-link>

                                <router-link to="/studio" class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                    Graphics Studio
                                </router-link>

                                <router-link to="/labs" class="group w-full flex justify-between items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                    <div>Lab Experiments</div>
                                    <div class="float-right badge badge-danger">New</div>
                                </router-link>

                                <a href="javascript://" class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                    more workspaces..
                                </a>
                            </div>
                        </div>

                        <a href="#" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                            <!-- Heroicon name: outline/chart-bar -->
                            <svg class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                />
                            </svg>
                            Reports
                        </a>
                    </div>

                    <div class="space-y-1">
                        <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="projects-headline">
                            SUPPORT CENTER
                        </h3>

                        <div class="space-y-1" role="group" aria-labelledby="projects-headline">
                            <router-link to="/buidling" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                <span class="truncate">
                                    BUIDLing 101
                                </span>
                            </router-link>

                            <router-link to="/guides" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                <span class="truncate">
                                    Guides &amp; Tutorials
                                </span>
                            </router-link>

                            <router-link to="/faq" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                <span class="truncate">
                                    FAQ
                                </span>
                            </router-link>

                            <a href="https://docs.devops.cash" target="_blank" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                <span class="truncate">
                                    Docs
                                </span>
                            </a>
                        </div>
                    </div>


                </nav>
            </div>
        </div>

        <!-- <div class="sidebar">
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                    <li class="nav-header">PRO BUIDLERS</li>

                    <li class="nav-item has-treeview">
                        <a href="javascript://" class="nav-link">
                            <i class="nav-icon fas fa-chart-pie"></i>
                            <p>
                                Charts & Data
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <router-link to="/privacy" class="nav-link">
                                    <i class="fas fa-user-secret nav-icon"></i>
                                    <p>Privacy</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/stats" class="nav-link">
                                    <i class="fas fa-chart-bar nav-icon"></i>
                                    <p>Stats</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/status" class="nav-link">
                                    <i class="fas fa-chart-bar nav-icon"></i>
                                    <p>Status</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <a href="javascript://" class="nav-link">
                                    <p>more charts & data...</p>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-header"></li>

                    <li class="nav-item has-treeview">
                        <a href="javascript://" class="nav-link">
                            <i class="nav-icon fas fa-headset"></i>
                            <p>
                                Contact Us
                                <i class="right fas fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <router-link to="/slack" class="nav-link">
                                    <i class="fab fa-slack nav-icon"></i>
                                    <p>Slack</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/matrix" class="nav-link">
                                    <i class="fas fa-comment-dots nav-icon"></i>
                                    <p>Matrix</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/tickets" class="nav-link">
                                    <i class="fas fa-envelope-square nav-icon"></i>
                                    <p>Open a Ticket</p>
                                </router-link>
                            </li>
                        </ul>
                    </li>

                </ul>
            </nav>
        </div> -->
    </aside>
</template>

<script>
/* Import modules. */
// import { BITBOX } from 'bitbox-sdk'

/* Initialize vuex. */
import { mapActions, mapState } from 'vuex'

/* Import libraries. */
import makeBlockie from 'ethereum-blockies-base64'
import moment from 'moment'
import superagent from 'superagent'

/* Import modules. */
import createSession from '@/libs/createSession'
import sendDonation from '@/libs/sendDonation'

export default {
    data: () => {
        return {
            bitbox: null,
            showDesktopMenu: null,
            showWorkspacesMenu: null,
        }
    },
    computed: {
        ...mapState({
            /* Profile */
            session: state => state.profile.session,
            sessionId: state => state.profile.sessionId,
            cashAccounts: state => state.profile.cashAccounts,

            /* System */
            apiUrl: state => state.system.apiUrl,
        }),

        version() {
            return require('../../package.json').version
        },

        currentYear () {
            return moment().format('YYYY')
        },

        /**
         * Selects a PRIMARY account for use during the session.
         */
        account() {
            /* Initialize account. */
            let account = null

            if (this.cashAccounts && this.cashAccounts.length > 0) {
                /* Set emoji. */
                const emoji = this.cashAccounts[0].accountEmoji

                /* Set nickname. */
                const nickname = `${this.cashAccounts[0].nameText}#${this.cashAccounts[0].accountNumber}`

                /* Set account. */
                account = {
                    emoji,
                    nickname,
                }
            }

            /* Validate session. */
            if (account === null && this.session) {
                /* Set address. */
                const address = this.session.validation.address

                /* Generate blockie. */
                const blockie = makeBlockie(address)

                /* Set nickname. */
                const nickname = `${address.slice(12, 20)} ... ${address.slice(-8)}`

                /* Set account. */
                account = {
                    blockie,
                    nickname,
                }
            }

            /* Return account details. */
            return account
        },

        newHeadlines() {
            return 1
        },

        newDiscussions() {
            return ''
        },

        numEvents() {
            return 1
        },
    },
    methods: {
        ...mapActions('profile', [
            'deleteSession',
            'initSession',
            'updateCashAccounts',
        ]),

        /**
         * Initialize BITBOX
         */
        // initBitbox() {
        //     console.info('Initializing BITBOX..')
        //
        //     try {
        //         /* Initialize BITBOX. */
        //         this.bitbox = new BITBOX()
        //     } catch (err) {
        //         console.error(err)
        //     }
        // },

        /**
         * Donate to Charity
         */
        donate() {
            /* Send donation. */
            sendDonation()
        },

        /**
         * Sign In
         */
        async signIn() {
            /* Create a new session. */
            const result = await createSession()
                .catch(err => {
                    if (err === 'DENIED') {
                        alert('whachudoin bro? gotta approve dat')
                    } else {
                        console.error('CREATE SESSION ERROR:', err)
                    }
                })
            console.log('CREATE SESSION RESULT', result)

            /* Validate result. */
            if (result && result.authHash) {
                /* Set authorizaton hash. */
                const authHash = result.authHash
                console.log('AUTH HASH', authHash)

                superagent
                    .post(this.apiUrl + '/sessions')
                    .send({ authHash })
                    .set('accept', 'json')
                    .end((err, res) => {
                        if (err) {
                            return console.error('API ERROR:', err)
                        }

                        // console.log('SESSION RESULT', res)

                        /* Set session. */
                        const session = res.body

                        /* Validate session. */
                        if (session) {
                            /* Update store. */
                            this.initSession(session)
                            console.log('SESSION', session)
                        }

                        /* Validate cash accounts. */
                        if (session && session.cashAccounts) {
                            /* Set cash accounts. */
                            this.updateCashAccounts(session.cashAccounts)
                        }
                    })

            } else {
                alert('Something went wrong.')
            }
        },

        /**
         * Sign Out
         */
        signOut() {
            /* Delete session. */
            this.deleteSession()
        },

    },
    created: function () {
        /* Initialize BITBOX. */
        // this.initBitbox()

        this.showDesktopMenu = false
        this.showWorkspacesMenu = false

        console.log('SESSION ID', this.sessionId)
        console.log('CASH ACCOUNTS', this.cashAccounts)
    },
}
</script>

<style scoped>
/* div .build-info,
div .build-info a {
    font-size: 12px;
    color: rgba(220, 220, 220, 0.5);
}

.nav-icon.fa-external-link-alt {
    font-size: 0.70rem !important;
    color: rgba(255, 255, 255, 1.0);

    margin-left: 3px;
}

.avatar {
    font-size: 1.8em;
    margin-left: 10px;
}
.nickname {
    font-size: 1.15em;
    margin-top: 5px;
    margin-left: 10px;
}
.signout {
    margin-left: 10px;
}
.donate {
    color: rgba(255, 180, 180, 0.8);
}

.ext-link {
    color: rgba(255, 120, 120, 0.8) !important;
    text-decoration: underline;
} */
</style>
