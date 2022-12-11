<template>
    <main class="">
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
            <div class="flex flex-col border-r border-gray-200">

                <NuxtLink to="/" class="brand-link bg-gradient-to-r from-gray-50 to-gray-200 border-b-4 border-gray-300 rounded-b-3xl overflow-hidden">
                    <div class="flex flex-row justify-between pr-3">
                        <img
                            src="@/assets/img/icon.png"
                            alt="DevOps Icon"
                            class="w-16 m-5"
                        >

                        <div class="flex flex-col text-center flex-grow justify-center">
                            <span class="block text-4xl font-base text-gray-400">C <span class="ml-1">A</span> <span class="text-green-500">$</span> H</span>
                            <span class="block text-4xl font-bold text-gray-500">DevOps</span>
                        </div>
                    </div>
                </NuxtLink>

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
                    <div class="hidden px-0 mt-1 relative inline-block text-left">
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

                    <div class="mt-3 flex-grow flex flex-col">

                        <nav class="flex-1 px-2 pt-2 space-y-8 bg-white" aria-label="Sidebar">
                            <div class="space-y-1">
                                <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
                                <NuxtLink to="/" class="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                    <svg class="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    Dashboard
                                </NuxtLink>

                                <NuxtLink to="/projects" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                    <svg class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                    Projects
                                </NuxtLink>

                                <div class="space-y-1">
                                    <!-- Current: "bg-gray-100 text-gray-900", Default: "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
                                    <button
                                        type="button"
                                        class="bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        aria-controls="sub-menu-1"
                                        aria-expanded="false"
                                        @click="showDesktopMenu = !showDesktopMenu"
                                    >
                                        <svg class="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                        <span class="flex-1">
                                            My Desktop
                                        </span>
                                        <!-- Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" -->
                                        <svg class="text-gray-300 ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150" viewBox="0 0 20 20" aria-hidden="true">
                                            <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                                        </svg>
                                    </button>

                                    <div v-if="showDesktopMenu" class="space-y-1" id="sub-menu-1">
                                        <NuxtLink to="/desktop/newsfeed" class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                            Newsfeed
                                        </NuxtLink>

                                        <NuxtLink to="/desktop/notebook" class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                            Notebook
                                        </NuxtLink>

                                        <NuxtLink to="/desktop/filemanager" class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                            File Manager
                                        </NuxtLink>

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
                                        @click="showWorkspacesMenu = !showWorkspacesMenu"
                                    >
                                        <svg class="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                        <span class="flex-1">
                                            Workspaces
                                        </span>
                                        <!-- Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" -->
                                        <svg class="text-gray-300 ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150" viewBox="0 0 20 20" aria-hidden="true">
                                            <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                                        </svg>
                                    </button>

                                    <div v-if="showWorkspacesMenu" class="space-y-1" id="sub-menu-1">
                                        <NuxtLink to="/sandbox" class="group w-full flex justify-between items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                            <div>Sandbox</div>
                                            <div class="float-right badge badge-danger">New</div>
                                        </NuxtLink>

                                        <NuxtLink to="/smartbch" class="group w-full flex justify-between items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                            Smart Bitcoin
                                            <div class="float-right badge badge-danger">New</div>
                                        </NuxtLink>

                                        <NuxtLink to="/workspaces" class="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                            more workspaces..
                                        </NuxtLink>
                                    </div>
                                </div>

                                <NuxtLink to="/stats" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                    <svg class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
                                    Statistics
                                </NuxtLink>

                                <NuxtLink to="/faucets" class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                                    <svg class="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
                                    Faucets
                                </NuxtLink>

                            </div>

                            <div class="space-y-1">
                                <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="projects-headline">
                                    SUPPORT CENTER
                                </h3>

                                <div class="space-y-1" role="group" aria-labelledby="projects-headline">
                                    <NuxtLink to="/dapps" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                        <span class="truncate">
                                            15 Min DApps
                                        </span>
                                    </NuxtLink>

                                    <NuxtLink to="/guides" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                        <span class="truncate">
                                            Guides &amp; Tutorials
                                        </span>
                                    </NuxtLink>

                                    <NuxtLink to="/snippets" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                        <span class="truncate">
                                            Code Snippets
                                        </span>
                                    </NuxtLink>

                                    <NuxtLink to="/faq" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                        <span class="truncate">
                                            FAQ
                                        </span>
                                    </NuxtLink>

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

                                    <a href="https://github.com/avasdao/devops" target="_blank" class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
                                        <span class="truncate">
                                            Fork us on GitHub
                                        </span>
                                    </a>

                                </div>
                            </div>

                        </nav>
                    </div>
                <!-- </div> -->

                <footer class='py-3 text-sm bg-gray-100 text-center border-t-2 border-gray-200'>
                    <span class="block">&bullet; &nbsp; DevOps is <span class="font-bold">100% FREE</span> as in beer &nbsp; &bullet;</span>

                    <span class="block mt-2">
                        Latest: <a href="https://github.com/avasdao/devops" target="_blank" class="text-red-500 font-bold">v{{version}}</a>
                        &nbsp; &bullet; &nbsp;
                        (<a href="https://github.com/avasdao/devops/-/releases" target="_blank" class="text-red-500 font-bold">other releases</a>)
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

        // this.version = require('../package.json').version
        this.version = this.$config.clientVersion
    },
}
</script>
