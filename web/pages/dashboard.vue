<template>
    <main class="bg-green-400 w-screen">
        <SiteHeader pageId="dashboard" />

        <div class="lg:hidden m-5 text-gray-700 text-sm border-2 border-pink-500 bg-pink-100 rounded-3xl p-3">
            <h1 class="text-xl font-extrabold">NOTICE</h1>

            <p class="mt-2">
                Please visit <span class="font-bold text-red-800">https://APECS.cash</span> from a <span class="font-bold">Desktop</span> computer to enable the full developer experience.
            </p>

            <p class="mt-2">
                Please explore this <span class="font-bold">Mobile</span> version to discover our benefits and learn more about our mission.
            </p>
        </div>

        <Highlights />


            <!-- Projects list (only on smallest breakpoint) -->
            <div class="mt-10 sm:hidden">
                <div class="px-4 sm:px-6">
                    <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">Projects</h2>
                </div>
                <ul role="list" class="mt-3 border-t border-gray-200 divide-y divide-gray-100">
                    <li>
                        <a href="#" class="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
                            <span class="flex items-center truncate space-x-3">
                                <span class="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-pink-600" aria-hidden="true"></span>
                                <span class="font-medium truncate text-sm leading-6">
                                    GraphQL API
                                    <span class="truncate font-normal text-gray-500">in Engineering</span>
                                </span>
                            </span>
                            <!-- Heroicon name: solid/chevron-right -->
                            <svg class="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </li>

                    <!-- More projects... -->
                </ul>
            </div>

            <!-- Projects table (small breakpoint and up) -->
            <div class="hidden mt-8 sm:block">
                <div class="align-middle inline-block min-w-full border-b border-gray-200">
                    <table class="min-w-full">
                        <thead>
                            <tr class="border-t border-gray-200">
                                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <span class="lg:pl-2">Project</span>
                                </th>
                                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Members
                                </th>
                                <th class="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Last updated
                                </th>
                                <th class="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-100">
                            <tr>
                                <td class="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
                                    <div class="flex items-center space-x-3 lg:pl-2">
                                        <div class="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-pink-600" aria-hidden="true"></div>
                                        <a href="#" class="truncate hover:text-gray-600">
                                            <span>
                                                GraphQL API
                                                <span class="text-gray-500 font-normal">in Engineering</span>
                                            </span>
                                        </a>
                                    </div>
                                </td>
                                <td class="px-6 py-3 text-sm text-gray-500 font-medium">
                                    <div class="flex items-center space-x-2">
                                        <div class="flex flex-shrink-0 -space-x-1">
                                            <img
                                                class="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
                                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt="Dries Vincent"
                                            />

                                            <img
                                                class="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
                                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt="Lindsay Walton"
                                            />

                                            <img
                                                class="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
                                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt="Courtney Henry"
                                            />

                                            <img
                                                class="max-w-none h-6 w-6 rounded-full ring-2 ring-white"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt="Tom Cook"
                                            />
                                        </div>

                                        <span class="flex-shrink-0 text-xs leading-5 font-medium">+8</span>
                                    </div>
                                </td>
                                <td class="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                                    March 17, 2020
                                </td>
                                <td class="pr-6">
                                    <div class="relative flex justify-end items-center">
                                        <button
                                            type="button"
                                            class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                            id="project-options-menu-0-button"
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                        >
                                            <span class="sr-only">Open options</span>
                                            <!-- Heroicon name: solid/dots-vertical -->
                                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                            </svg>
                                        </button>

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
                                            class="mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="project-options-menu-0-button"
                                            tabindex="-1"
                                        >
                                            <div class="py-1" role="none">
                                                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                                                <a href="#" class="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="project-options-menu-0-item-0">
                                                    <!-- Heroicon name: solid/pencil-alt -->
                                                    <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                                        <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                                                    </svg>
                                                    Edit
                                                </a>
                                                <a href="#" class="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="project-options-menu-0-item-1">
                                                    <!-- Heroicon name: solid/duplicate -->
                                                    <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                                                        <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                                                    </svg>
                                                    Duplicate
                                                </a>
                                                <a href="#" class="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="project-options-menu-0-item-2">
                                                    <!-- Heroicon name: solid/user-add -->
                                                    <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                                                    </svg>
                                                    Share
                                                </a>
                                            </div>
                                            <div class="py-1" role="none">
                                                <a href="#" class="text-gray-700 group flex items-center px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="project-options-menu-0-item-3">
                                                    <!-- Heroicon name: solid/trash -->
                                                    <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <!-- More projects... -->
                        </tbody>
                    </table>
                </div>
            </div>
        <!-- </main> -->



        <main class="lg:col-span-9 xl:col-span-6">
            <div class="px-4 sm:px-0">
                <div class="sm:hidden">
                    <label for="question-tabs" class="sr-only">Select a tab</label>
                    <select id="question-tabs" class="block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-rose-500 focus:ring-rose-500">
                        <option selected>Recent</option>

                        <option>Most Liked</option>

                        <option>Most Answers</option>
                    </select>
                </div>
                <div class="hidden sm:block">
                    <nav class="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
                        <!-- Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" -->
                        <a href="#" aria-current="page" class="text-gray-900 rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
                            <span>Recent</span>
                            <span aria-hidden="true" class="bg-rose-500 absolute inset-x-0 bottom-0 h-0.5"></span>
                        </a>

                        <a href="#" class="text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
                            <span>Most Liked</span>
                            <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
                        </a>

                        <a href="#" class="text-gray-500 hover:text-gray-700 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
                            <span>Most Answers</span>
                            <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
                        </a>
                    </nav>
                </div>
            </div>
            <div class="mt-4">
                <h1 class="sr-only">Recent questions</h1>
                <ul role="list" class="space-y-4">
                    <li class="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
                        <article aria-labelledby="question-title-81614">
                            <div>
                                <div class="flex space-x-3">
                                    <div class="flex-shrink-0">
                                        <img
                                            class="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </div>
                                    <div class="min-w-0 flex-1">
                                        <p class="text-sm font-medium text-gray-900">
                                            <a href="#" class="hover:underline">Dries Vincent</a>
                                        </p>
                                        <p class="text-sm text-gray-500">
                                            <a href="#" class="hover:underline">
                                                <time datetime="2020-12-09T11:43:00">December 9 at 11:43 AM</time>
                                            </a>
                                        </p>
                                    </div>
                                    <div class="flex-shrink-0 self-center flex">
                                        <div class="relative inline-block text-left">
                                            <div>
                                                <button type="button" class="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600" id="options-menu-0-button" aria-expanded="false" aria-haspopup="true">
                                                    <span class="sr-only">Open options</span>
                                                    <!-- Heroicon name: solid/dots-vertical -->
                                                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                    </svg>
                                                </button>
                                            </div>

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
                                                class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                role="menu"
                                                aria-orientation="vertical"
                                                aria-labelledby="options-menu-0-button"
                                                tabindex="-1"
                                            >
                                                <div class="py-1" role="none">
                                                    <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                                                    <a href="#" class="text-gray-700 flex px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-0-item-0">
                                                        <!-- Heroicon name: solid/star -->
                                                        <svg class="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path
                                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                            />
                                                        </svg>
                                                        <span>Add to favorites</span>
                                                    </a>
                                                    <a href="#" class="text-gray-700 flex px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-0-item-1">
                                                        <!-- Heroicon name: solid/code -->
                                                        <svg class="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                                                clip-rule="evenodd"
                                                            />
                                                        </svg>
                                                        <span>Embed</span>
                                                    </a>
                                                    <a href="#" class="text-gray-700 flex px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="options-menu-0-item-2">
                                                        <!-- Heroicon name: solid/flag -->
                                                        <svg class="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd" />
                                                        </svg>
                                                        <span>Report content</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 id="question-title-81614" class="mt-4 text-base font-medium text-gray-900">
                                    What would you have done differently if you ran Jurassic Park?
                                </h2>
                            </div>
                            <div class="mt-2 text-sm text-gray-700 space-y-4">
                                <p>
                                    Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our
                                    generation.
                                </p>
                                <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
                            </div>
                            <div class="mt-6 flex justify-between space-x-8">
                                <div class="flex space-x-6">
                                    <span class="inline-flex items-center text-sm">
                                        <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                            <!-- Heroicon name: solid/thumb-up -->
                                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path
                                                    d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                                                />
                                            </svg>
                                            <span class="font-medium text-gray-900">29</span>
                                            <span class="sr-only">likes</span>
                                        </button>
                                    </span>
                                    <span class="inline-flex items-center text-sm">
                                        <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                            <!-- Heroicon name: solid/chat-alt -->
                                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                                            </svg>
                                            <span class="font-medium text-gray-900">11</span>
                                            <span class="sr-only">replies</span>
                                        </button>
                                    </span>
                                    <span class="inline-flex items-center text-sm">
                                        <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                            <!-- Heroicon name: solid/eye -->
                                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                                            </svg>
                                            <span class="font-medium text-gray-900">2.7k</span>
                                            <span class="sr-only">views</span>
                                        </button>
                                    </span>
                                </div>
                                <div class="flex text-sm">
                                    <span class="inline-flex items-center text-sm">
                                        <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                            <!-- Heroicon name: solid/share -->
                                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                            </svg>
                                            <span class="font-medium text-gray-900">Share</span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </article>
                    </li>

                    <!-- More questions... -->
                </ul>
            </div>
        </main>
        <aside class="hidden xl:block xl:col-span-4">
            <div class="sticky top-4 space-y-4">
                <section aria-labelledby="who-to-follow-heading">
                    <div class="bg-white rounded-lg shadow">
                        <div class="p-6">
                            <h2 id="who-to-follow-heading" class="text-base font-medium text-gray-900">
                                Who to follow
                            </h2>
                            <div class="mt-6 flow-root">
                                <ul role="list" class="-my-4 divide-y divide-gray-200">
                                    <li class="flex items-center py-4 space-x-3">
                                        <div class="flex-shrink-0">
                                            <img
                                                class="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </div>
                                        <div class="min-w-0 flex-1">
                                            <p class="text-sm font-medium text-gray-900">
                                                <a href="#">Leonard Krasner</a>
                                            </p>
                                            <p class="text-sm text-gray-500">
                                                <a href="#">@leonardkrasner</a>
                                            </p>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <button type="button" class="inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100">
                                                <!-- Heroicon name: solid/plus-sm -->
                                                <svg class="-ml-1 mr-0.5 h-5 w-5 text-rose-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                                                </svg>
                                                <span>
                                                    Follow
                                                </span>
                                            </button>
                                        </div>
                                    </li>

                                    <!-- More people... -->
                                </ul>
                            </div>
                            <div class="mt-6">
                                <a href="#" class="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                    View all
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section aria-labelledby="trending-heading">
                    <div class="bg-white rounded-lg shadow">
                        <div class="p-6">
                            <h2 id="trending-heading" class="text-base font-medium text-gray-900">
                                Trending
                            </h2>
                            <div class="mt-6 flow-root">
                                <ul role="list" class="-my-4 divide-y divide-gray-200">
                                    <li class="flex py-4 space-x-3">
                                        <div class="flex-shrink-0">
                                            <img
                                                class="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt="Floyd Miles"
                                            />
                                        </div>
                                        <div class="min-w-0 flex-1">
                                            <p class="text-sm text-gray-800">What books do you have on your bookshelf just to look smarter than you actually are?</p>
                                            <div class="mt-2 flex">
                                                <span class="inline-flex items-center text-sm">
                                                    <button type="button" class="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                                        <!-- Heroicon name: solid/chat-alt -->
                                                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                                                        </svg>
                                                        <span class="font-medium text-gray-900">291</span>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </li>

                                    <!-- More posts... -->
                                </ul>
                            </div>
                            <div class="mt-6">
                                <a href="#" class="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                    View all
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </aside>


        <section class="content">
            <div class="container-fluid">
                <!-- Highlights: Information boxes of most importance -->
                <!-- Trends: What's "hot" in the community -->
                <Trends />

                <!-- Goals: Community targets and milestones -->
                <Goals />

                <div class="row">
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-6">
                                <!-- Feeds: A live view of chats and messaging platforms -->
                                <Feeds />
                            </div>

                            <div class="col-md-6">
                                <!-- Newcomers: Newest "verified" users -->
                                <Newcomers />
                            </div>

                        </div>

                        <!-- Updates: Most recent "notable" project updates -->
                        <Updates />

                    </div>

                    <div class="col-md-4">
                        <!-- Featured: Projects that have high traction -->
                        <Featured />

                        <!-- Calendar: Upcoming events and important dates -->
                        <Calendar />

                        <!-- Todo: Top items to be completed -->
                        <!-- <Todo /> -->

                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    mounted: function () {
        //
    }
}
</script>
