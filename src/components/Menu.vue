<template>
    <main class="overflow-x-hidden overflow-y-scroll">
        <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
        <div v-if="showMobileMenu" class="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>

            <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                    <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span class="sr-only">Close sidebar</span>
                        <!-- Heroicon name: outline/x -->
                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div class="flex-shrink-0 flex items-center px-4">
                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg" alt="Workflow" />
                </div>

                <div class="mt-5 flex-1 h-0 overflow-y-auto">
                    <nav class="px-2">
                        <div class="space-y-1">
                            <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:text-gray-900 hover:bg-gray-50" -->
                            <a href="javascript://" class="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md" aria-current="page">
                                <svg class="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                                Home
                            </a>

                            <a href="javascript://" class="text-gray-600 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md">
                                <!-- Heroicon name: outline/view-list -->
                                <svg class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                </svg>
                                My tasks
                            </a>

                            <a href="javascript://" class="text-gray-600 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md">
                                <!-- Heroicon name: outline/clock -->
                                <svg class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Recent
                            </a>
                        </div>

                        <div class="mt-8">
                            <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="mobile-teams-headline">
                                Recommended Guides
                            </h3>

                            <div class="mt-1 space-y-1" role="group" aria-labelledby="mobile-teams-headline">
                                <a href="javascript://" class="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                    <span class="w-2.5 h-2.5 mr-4 bg-indigo-500 rounded-full" aria-hidden="true"></span>
                                    <span class="truncate">
                                        First-time DApp Developer
                                    </span>
                                </a>

                                <a href="javascript://" class="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                    <span class="w-2.5 h-2.5 mr-4 bg-green-500 rounded-full" aria-hidden="true"></span>
                                    <span class="truncate">
                                        Ethereum Developer
                                    </span>
                                </a>

                                <a href="javascript://" class="group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                    <span class="w-2.5 h-2.5 mr-4 bg-yellow-500 rounded-full" aria-hidden="true"></span>
                                    <span class="truncate">
                                        (Unstoppable) Bitcoin Apps
                                    </span>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div class="flex-shrink-0 w-14" aria-hidden="true">
                <!-- Dummy element to force sidebar to shrink to fit close icon -->
            </div>
        </div>

        <!-- Static sidebar for desktop -->
        <main class="hidden lg:block lg:flex-shrink-0">
            <div class="flex flex-col border-r border-gray-200 pt-0 pb-0 bg-gray-100">

                <router-link to="/" class="brand-link">
                    <div class="flex flex-row justify-between pr-3">
                        <img
                            src="@/assets/img/icon.png"
                            alt="DevOps Icon"
                            class="w-16 m-5"
                        >

                        <div class="flex flex-col text-center flex-grow justify-center">
                            <span class="block text-4xl font-base text-gray-400">CA<span class="text-green-500">$</span>H</span>
                            <span class="block text-4xl font-bold text-gray-500">DevOps</span>
                        </div>
                    </div>
                </router-link>

                <!-- <div class="user-panel mt-3 pb-3 mb-3 d-flex" v-if="account">
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
                </div> -->

                <!-- <div class="h-0 flex-1 flex flex-col overflow-y-auto"> -->
                    <!-- User account dropdown -->
                    <div class="px-0 mt-1 relative inline-block text-left">
                        <!-- <div> -->
                            <button
                                type="button"
                                class="group bg-gray-100 rounded-md mx-2 px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500"
                                id="options-menu-button"
                                aria-expanded="false"
                                aria-haspopup="true"
                            >
                                <span class="flex justify-between items-center">
                                    <span class="flex min-w-0 items-center justify-between space-x-3">
                                        <img
                                            class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                                            src="@/assets/img/cyber-hacker-icon.jpg"
                                            alt=""
                                        />
                                        <span class="flex-1 flex flex-col min-w-0">
                                            <span class="text-gray-900 text-sm font-medium truncate">Incognito <small>[ Sign in ]</small></span>
                                            <span class="text-gray-500 text-sm truncate"><small class="donate">[ donate $0.01 to DevOps ]</small></span>
                                        </span>
                                    </span>
                                    <!-- Heroicon name: solid/selector -->
                                    <svg class="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </button>
                        <!-- </div> -->

                        <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
                        <div
                            class="hidden z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu-button"
                            tabindex="-1"
                        >
                            <div class="py-1" role="none">
                                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                                <a href="javascript://" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-0">View profile</a>
                                <a href="javascript://" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-1">Settings</a>
                                <a href="javascript://" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-2">Notifications</a>
                            </div>
                            <div class="py-1" role="none">
                                <a href="javascript://" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-3">Get desktop app</a>
                                <a href="javascript://" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-4">Support</a>
                            </div>
                            <div class="py-1" role="none">
                                <a href="javascript://" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-item-5">Logout</a>
                            </div>
                        </div>
                    </div>

                    <!-- Sidebar Search -->
                    <!-- <div class="px-3 mt-1 mb-2">
                        <label for="search" class="sr-only">What are you looking for?</label>
                        <div class="mt-1 relative rounded-md shadow-sm">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" aria-hidden="true">
                                <svg class="mr-3 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                </svg>
                            </div>

                            <input type="text" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 sm:text-sm border-gray-300 rounded-md" placeholder="What are you looking for?" />
                        </div>
                    </div> -->

                    <div class="mt-0 flex-grow flex flex-col">

                        <nav class="flex-1 px-2 pt-2 space-y-8 bg-white" aria-label="Sidebar">
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

                                        <router-link to="/smartbch" class="group w-full flex justify-between items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                            Smart BCH
                                            <div class="float-right badge badge-danger">New</div>
                                        </router-link>

                                        <a href="javascript://" class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                            more workspaces..
                                        </a>
                                    </div>
                                </div>

                                <a href="javascript://" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
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

                                <router-link to="/faucet" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                    <svg class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
                                    Faucet
                                </router-link>

                            </div>

                            <div class="space-y-1">
                                <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="projects-headline">
                                    SUPPORT CENTER
                                </h3>

                                <div class="space-y-1" role="group" aria-labelledby="projects-headline">
                                    <router-link to="/buidling" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                        <span class="truncate">
                                            Build a DApp in 15 mins
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

                            <div class="space-y-1">
                                <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="projects-headline">
                                    STAFF LINKS
                                </h3>

                                <div class="space-y-1" role="group" aria-labelledby="projects-headline">
                                    <a href="https://www.reddit.com/r/CashDevOps/" target="_blank" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                        <span class="truncate">
                                            r/CashDevOps
                                        </span>
                                    </a>

                                    <a href="https://gitlab.com/bchplease/devops.cash" target="_blank" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                        <span class="truncate">
                                            Fork us on GitLab
                                        </span>
                                    </a>

                                </div>
                            </div>

                        </nav>
                    </div>
                <!-- </div> -->

                <footer class='py-3 text-sm bg-gray-100 text-center border-t-2 border-gray-200'>
                    <span class="block">Cash DevOps is <span class="font-bold">100% FREE</span> as in beer</span>

                    <span class="block mt-2">
                        Latest: <a href="https://gitlab.com/bchplease/devops.cash" target="_blank" class="text-red-500 font-bold">v{{version}}</a>
                        &nbsp; &bullet; &nbsp;
                        (<a href="https://gitlab.com/bchplease/devops.cash/-/releases" target="_blank" class="text-red-500 font-bold">other releases</a>)
                    </span>
                </footer>

            </div>
        </main>
    </main>
</template>

<script>
export default {
    data: () => {
        return {
            bitbox: null,
            showDesktopMenu: null,
            showMobileMenu: null,
            showWorkspacesMenu: null,
            version: null,
        }
    },
    created: function () {
        this.showDesktopMenu = false
        this.showMobileMenu = false
        this.showWorkspacesMenu = false

        this.version = require('../../package.json').version
    },
}
</script>
