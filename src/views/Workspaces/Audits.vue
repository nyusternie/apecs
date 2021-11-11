<template>
    <main class="bg-white">
        <Header :title="title" :description="description" />

        <section class="relative bg-white pt-16 pb-32 overflow-hidden">
            <div class="relative">
                <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                        <div>
                            <div>
                                <span class="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                                    <!-- Heroicon name: outline/inbox -->
                                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div class="mt-6">
                                <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
                                    Stay on top of customer support
                                </h2>
                                <p class="mt-4 text-lg text-gray-500">
                                    Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui
                                    tellus ornare pharetra.
                                </p>
                                <div class="mt-6">
                                    <a href="#" class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                                        Get started
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="mt-8 border-t border-gray-200 pt-6">
                            <blockquote>
                                <div>
                                    <p class="text-base text-gray-500">
                                        &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur donec aliquet. Mi venenatis in euismod ut.&rdquo;
                                    </p>
                                </div>
                                <footer class="mt-3">
                                    <div class="flex items-center space-x-3">
                                        <div class="flex-shrink-0">
                                            <img class="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
                                        </div>
                                        <div class="text-base font-medium text-gray-700">
                                            Marcia Hill, Digital Marketing Manager
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                    <div class="mt-12 sm:mt-16 lg:mt-0">
                        <div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                            <img
                                class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                                alt="Inbox user interface"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-24">
                <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                        <div>
                            <div>
                                <span class="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                                    <!-- Heroicon name: outline/sparkles -->
                                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </span>
                            </div>
                            <div class="mt-6">
                                <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
                                    Better understand your customers
                                </h2>
                                <p class="mt-4 text-lg text-gray-500">
                                    Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui
                                    tellus ornare pharetra.
                                </p>
                                <div class="mt-6">
                                    <a href="#" class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                                        Get started
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                        <div class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                            <img
                                class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                                alt="Customer profile user interface"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Comparison table -->
        <!-- <div class="max-w-2xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"> -->
        <div class="max-w-2xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-0">
            <!-- xs to lg -->
            <div class="space-y-24 lg:hidden">
                <section>
                    <div class="px-4 mb-8">
                        <h2 class="text-lg leading-6 font-medium text-gray-900">Basic</h2>

                        <p class="mt-4">
                            <span class="text-4xl font-extrabold text-gray-900">$9</span>
                            <span class="text-base font-medium text-gray-500">/mo</span>
                        </p>

                        <p class="mt-4 text-sm text-gray-500">Quis suspendisse ut fermentum neque vivamus non tellus.</p>

                        <a href="javascript://" class="mt-6 block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600">Buy Basic</a>
                    </div>

                    <table class="w-full">
                        <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                            Features
                        </caption>

                        <thead>
                            <tr>
                                <th class="sr-only" scope="col">Feature</th>
                                <th class="sr-only" scope="col">Included</th>
                            </tr>
                        </thead>

                        <tbody class="divide-y divide-gray-200">
                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">
                                    Molestie lobortis massa
                                </th>

                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">
                                    Molestie lobortis massa
                                </th>

                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Tellus pulvinar sit dictum.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/minus -->
                                    <svg class="ml-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">No</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Convallis.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/minus -->
                                    <svg class="ml-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">No</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table class="w-full">
                        <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                            Reporting
                        </caption>
                        <thead>
                            <tr>
                                <th class="sr-only" scope="col">Feature</th>
                                <th class="sr-only" scope="col">Included</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Adipiscing.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Eget risus integer.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/minus -->
                                    <svg class="ml-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">No</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Gravida leo urna velit.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/minus -->
                                    <svg class="ml-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">No</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Elementum ut dapibus mi feugiat cras nisl.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/minus -->
                                    <svg class="ml-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">No</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table class="w-full">
                        <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                            Support
                        </caption>
                        <thead>
                            <tr>
                                <th class="sr-only" scope="col">Feature</th>
                                <th class="sr-only" scope="col">Included</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Sit dignissim.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Congue at nibh et.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/minus -->
                                    <svg class="ml-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">No</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Volutpat feugiat mattis.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/minus -->
                                    <svg class="ml-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">No</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Tristique pellentesque ornare diam sapien.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/minus -->
                                    <svg class="ml-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">No</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="border-t border-gray-200 px-4 pt-5">
                        <a href="javascript://" class="block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600">Buy Basic</a>
                    </div>
                </section>

                <section>
                    <div class="px-4 mb-8">
                        <h2 class="text-lg leading-6 font-medium text-gray-900">Essential</h2>
                        <p class="mt-4">
                            <span class="text-4xl font-extrabold text-gray-900">$29</span>
                            <span class="text-base font-medium text-gray-500">/mo</span>
                        </p>
                        <p class="mt-4 text-sm text-gray-500">Quis eleifend a tincidunt pellentesque. A tempor in sed.</p>
                        <a href="javascript://" class="mt-6 block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600">Buy Essential</a>
                    </div>

                    <table class="w-full">
                        <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                            Features
                        </caption>
                        <thead>
                            <tr>
                                <th class="sr-only" scope="col">Feature</th>
                                <th class="sr-only" scope="col">Included</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">
                                    Molestie lobortis massa
                                </th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Urna purus felis.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">
                                    Molestie lobortis massa
                                </th>

                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Convallis.</th>
                                <td class="py-5 pr-4">
                                    <span class="block text-sm text-gray-700 text-right">Up to 20 users</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table class="w-full">
                        <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                            Reporting
                        </caption>
                        <thead>
                            <tr>
                                <th class="sr-only" scope="col">Feature</th>
                                <th class="sr-only" scope="col">Included</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Adipiscing.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Eget risus integer.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Gravida leo urna velit.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/minus -->
                                    <svg class="ml-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">No</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Elementum ut dapibus mi feugiat cras nisl.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/minus -->
                                    <svg class="ml-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">No</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table class="w-full">
                        <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                            Support
                        </caption>
                        <thead>
                            <tr>
                                <th class="sr-only" scope="col">Feature</th>
                                <th class="sr-only" scope="col">Included</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Sit dignissim.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Congue at nibh et.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Volutpat feugiat mattis.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Tristique pellentesque ornare diam sapien.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/minus -->
                                    <svg class="ml-auto h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">No</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="border-t border-gray-200 px-4 pt-5">
                        <a href="javascript://" class="block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600">Buy Essential</a>
                    </div>
                </section>

                <section>
                    <div class="px-4 mb-8">
                        <h2 class="text-lg leading-6 font-medium text-gray-900">Premium</h2>
                        <p class="mt-4">
                            <span class="text-4xl font-extrabold text-gray-900">$59</span>
                            <span class="text-base font-medium text-gray-500">/mo</span>
                        </p>
                        <p class="mt-4 text-sm text-gray-500">Orci volutpat ut sed sed neque, dui eget. Quis tristique non.</p>
                        <a href="javascript://" class="mt-6 block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600">Buy Premium</a>
                    </div>

                    <table class="w-full">
                        <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                            Features
                        </caption>
                        <thead>
                            <tr>
                                <th class="sr-only" scope="col">Feature</th>
                                <th class="sr-only" scope="col">Included</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">
                                    Molestie lobortis massa
                                </th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Urna purus felis.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Tellus pulvinar sit dictum.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Convallis.</th>
                                <td class="py-5 pr-4">
                                    <span class="block text-sm text-gray-700 text-right">Up to 50 users</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table class="w-full">
                        <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                            Reporting
                        </caption>
                        <thead>
                            <tr>
                                <th class="sr-only" scope="col">Feature</th>
                                <th class="sr-only" scope="col">Included</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Adipiscing.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Eget risus integer.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Gravida leo urna velit.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Elementum ut dapibus mi feugiat cras nisl.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Yes</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table class="w-full">
                        <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                            Support
                        </caption>
                        <thead>
                            <tr>
                                <th class="sr-only" scope="col">Feature</th>
                                <th class="sr-only" scope="col">Included</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Sit dignissim.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Congue at nibh et.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Volutpat feugiat mattis.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Yes</span>
                                </td>
                            </tr>

                            <tr class="border-t border-gray-200">
                                <th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Tristique pellentesque ornare diam sapien.</th>
                                <td class="py-5 pr-4">
                                    <!-- Heroicon name: solid/check -->
                                    <svg class="ml-auto h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span class="sr-only">Yes</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="border-t border-gray-200 px-4 pt-5">
                        <a href="javascript://" class="block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600">Buy Premium</a>
                    </div>
                </section>
            </div>

            <!-- lg+ -->
            <div class="hidden lg:block">
                <table class="w-full h-px table-fixed">
                    <caption class="sr-only">
                        Pricing plan comparison
                    </caption>
                    <thead>
                        <tr>
                            <th class="pb-4 pl-6 pr-6 text-sm font-medium text-gray-900 text-left" scope="col">
                                <span class="sr-only">Feature by</span>
                                <span>CHOOSE YOUR PATH</span>
                            </th>

                            <th class="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left" scope="col">
                                FOR MY FOSS PROJECT OR APPLICATION
                            </th>

                            <th class="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left" scope="col">
                                FOR A PUBLIC UTILITY / COMMON GOOD
                            </th>

                            <th class="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left" scope="col">
                                FOR A COMMERCIAL APPLICATION
                            </th>
                        </tr>
                    </thead>

                    <tbody class="border-t border-gray-200 divide-y divide-gray-200">
                        <tr>
                            <th class="py-8 pl-6 pr-6 align-top text-sm font-medium text-gray-900 text-left" scope="row">
                                PRICING
                            </th>

                            <td class="h-full py-8 px-6 align-top">
                                <div class="h-full flex flex-col justify-between">
                                    <div>
                                        <p>
                                            <span class="text-4xl font-extrabold text-gray-900">FREE</span>
                                            <!-- <span class="text-base font-medium text-gray-500"> as in beer</span> -->
                                        </p>

                                        <p class="mt-4 text-sm text-gray-500">
                                            Self-service solution for teams that need for a low-budget security solution.
                                        </p>
                                    </div>

                                    <a href="javascript://" class="mt-6 block w-full bg-gradient-to-r from-green-500 to-green-600 border border-transparent rounded-md shadow py-4 text-2xl font-semibold text-white text-center hover:to-green-700">
                                        GET STARTED
                                    </a>
                                </div>
                            </td>

                            <td class="h-full py-8 px-6 align-top">
                                <div class="h-full flex flex-col justify-between">
                                    <div>
                                        <p>
                                            <span class="text-4xl font-extrabold text-gray-900">FREE</span>
                                            <!-- <span class="text-base font-medium text-gray-500"> as in beer</span> -->
                                        </p>

                                        <p class="mt-4 text-sm text-gray-500">
                                            FOSS projects that offer a "public good" for the crypto community.
                                        </p>
                                    </div>

                                    <a href="javascript://" class="mt-6 block w-full bg-gradient-to-r from-green-500 to-green-600 border border-transparent rounded-md shadow py-4 text-2xl font-semibold text-white text-center hover:to-green-700">
                                        GET STARTED
                                    </a>
                                </div>
                            </td>

                            <td class="h-full py-8 px-6 align-top">
                                <div class="h-full flex flex-col justify-between">
                                    <div>
                                        <p>
                                            <span class="text-4xl font-extrabold text-gray-900">Contact Us</span>
                                            <!-- <span class="text-base font-medium text-gray-500">/mo</span> -->
                                        </p>

                                        <p class="mt-4 text-sm text-gray-500">
                                            Full-service security service suite, performed by trained professionals.
                                        </p>
                                    </div>

                                    <a href="javascript://" class="mt-6 block w-full bg-gradient-to-r from-blue-400 to-blue-500 border border-transparent rounded-md shadow py-4 text-2xl font-semibold text-white text-center hover:to-blue-800">
                                        CONTACT US
                                    </a>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th class="py-3 pl-6 bg-gray-50 text-sm font-medium text-gray-900 text-left" colspan="4" scope="colgroup">Features</th>
                        </tr>

                        <tr>
                            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">
                                Smart contract security analysis
                            </th>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/check -->
                                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Included in Basic</span>
                            </td>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/check -->
                                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Included in Essential</span>
                            </td>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/check -->
                                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Included in Premium</span>
                            </td>
                        </tr>

                        <tr>
                            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">
                                Smart contract verification
                            </th>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/check -->
                                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Included in Basic</span>
                            </td>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/check -->
                                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Included in Essential</span>
                            </td>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/check -->
                                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Included in Premium</span>
                            </td>
                        </tr>

                        <tr>
                            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">
                                Custom audit URL
                            </th>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/minus -->
                                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Not included in Basic</span>
                            </td>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/check -->
                                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Included in Essential</span>
                            </td>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/check -->
                                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Included in Premium</span>
                            </td>
                        </tr>

                        <tr>
                            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Convallis.</th>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/minus -->
                                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Not included in Basic</span>
                            </td>

                            <td class="py-5 px-6">
                                <span class="block text-sm text-gray-700">Up to 20 users</span>
                            </td>

                            <td class="py-5 px-6">
                                <span class="block text-sm text-gray-700">Up to 50 users</span>
                            </td>
                        </tr>

                        <tr>
                            <th class="py-3 pl-6 bg-gray-50 text-sm font-medium text-gray-900 text-left" colspan="4" scope="colgroup">Reporting</th>
                        </tr>

                        <tr>
                            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Adipiscing.</th>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/check -->
                                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Included in Basic</span>
                            </td>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/check -->
                                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Included in Essential</span>
                            </td>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/check -->
                                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Included in Premium</span>
                            </td>
                        </tr>

                        <tr>
                            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Eget risus integer.</th>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/minus -->
                                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Not included in Basic</span>
                            </td>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/check -->
                                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Included in Essential</span>
                            </td>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/check -->
                                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Included in Premium</span>
                            </td>
                        </tr>

                        <tr>
                            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Gravida leo urna velit.</th>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/minus -->
                                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Not included in Basic</span>
                            </td>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/minus -->
                                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Not included in Essential</span>
                            </td>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/check -->
                                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Included in Premium</span>
                            </td>
                        </tr>

                        <tr>
                            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Elementum ut dapibus mi feugiat cras nisl.</th>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/minus -->
                                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Not included in Basic</span>
                            </td>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/minus -->
                                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Not included in Essential</span>
                            </td>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/check -->
                                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Included in Premium</span>
                            </td>
                        </tr>

                        <tr>
                            <th class="py-3 pl-6 bg-gray-50 text-sm font-medium text-gray-900 text-left" colspan="4" scope="colgroup">Support</th>
                        </tr>

                        <tr>
                            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Sit dignissim.</th>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/check -->
                                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Included in Basic</span>
                            </td>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/check -->
                                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Included in Essential</span>
                            </td>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/check -->
                                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Included in Premium</span>
                            </td>
                        </tr>

                        <tr>
                            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Congue at nibh et.</th>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/minus -->
                                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Not included in Basic</span>
                            </td>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/check -->
                                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Included in Essential</span>
                            </td>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/check -->
                                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Included in Premium</span>
                            </td>
                        </tr>

                        <tr>
                            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Volutpat feugiat mattis.</th>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/minus -->
                                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Not included in Basic</span>
                            </td>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/check -->
                                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Included in Essential</span>
                            </td>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/check -->
                                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Included in Premium</span>
                            </td>
                        </tr>

                        <tr>
                            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Tristique pellentesque ornare diam sapien.</th>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/minus -->
                                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Not included in Basic</span>
                            </td>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/minus -->
                                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Not included in Essential</span>
                            </td>

                            <td class="py-5 px-6">
                                <!-- Heroicon name: solid/check -->
                                <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">Included in Premium</span>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr class="border-t border-gray-200">
                            <th class="sr-only" scope="row">Choose your plan</th>

                            <td class="pt-5 px-6">
                                <a href="javascript://" class="block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600">Buy Basic</a>
                            </td>

                            <td class="pt-5 px-6">
                                <a href="javascript://" class="block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600">Buy Essential</a>
                            </td>

                            <td class="pt-5 px-6">
                                <a href="javascript://" class="block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600">Buy Premium</a>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

        <!-- Logo cloud -->
        <div class="max-w-7xl mx-auto border-t border-gray-200 py-12 px-4 sm:px-6 lg:py-20 lg:px-8">
            <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img class="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                </div>
                <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img class="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                </div>
                <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img class="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
                </div>
                <div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                    <img class="h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor" />
                </div>
                <div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                    <img class="h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation" />
                </div>
            </div>
        </div>

        <div class="bg-gray-50">
            <!-- FAQ -->
            <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-extrabold text-gray-900 text-center">
                    Frequently asked questions
                </h2>
                <div class="mt-12">
                    <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
                        <div class="space-y-2">
                            <dt class="text-lg leading-6 font-medium text-gray-900">
                                What is the cost for auditing a project?
                            </dt>

                            <dd class="text-base text-gray-500">
                                Costs vary based upon the length and complexity of the contracts to be audited.
                            </dd>
                        </div>

                        <div class="space-y-2">
                            <dt class="text-lg leading-6 font-medium text-gray-900">
                                How long does it take to produce an audit report?
                            </dt>

                            <dd class="text-base text-gray-500">
                                We aim for a turnaround time of 2-10 days for most audits, though the length and complexity of the contracts can lead to longer turnaround times.
                            </dd>
                        </div>

                        <div class="space-y-2">
                            <dt class="text-lg leading-6 font-medium text-gray-900">
                                Do you create custom Smart Contracts?
                            </dt>

                            <dd class="text-base text-gray-500">
                                We no longer perform custom development work.
                            </dd>
                        </div>

                        <div class="space-y-2">
                            <dt class="text-lg leading-6 font-medium text-gray-900">
                                Do you require KYC?
                            </dt>

                            <dd class="text-base text-gray-500">
                                Generally, we do not require KYC. We do offer KYC services, however, through our partner KYC Capital.
                            </dd>
                        </div>

                        <div class="space-y-2">
                            <dt class="text-lg leading-6 font-medium text-gray-900">
                                What happens during automated testing?
                            </dt>

                            <dd class="text-base text-gray-500">
                                Simulation of hundreds of thousands of interactions with your smart contract on a test blockchain using a suite of automated test tools to determine if any security vulnerabilities exist.
                            </dd>
                        </div>

                    </dl>
                </div>
            </div>
        </div>

        <!-- Feature section with brand panel -->
        <div class="relative mb-10">
            <div class="absolute inset-0 flex flex-col" aria-hidden="true">
                <div class="flex-1 bg-gray-50"></div>
                <div class="flex-1"></div>
            </div>

            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                    <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                        <div class="lg:self-center">
                            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                                <span class="block">Ready to test the security of your Smart Bitcoin DApp?</span>
                                <span class="mt-5 block text-red-900">It takes less than 5 minutes, and it's FREE!</span>
                            </h2>

                            <p class="mt-5 text-lg font-medium leading-6 text-orange-50">
                                An advanced suite of security tools and services are available in our <router-link to="/smartbch" class="text-blue-100 font-bold hover:underline">Smart Bitcoin Center</router-link>.
                            </p>

                            <p class="mt-5 text-sm font-medium leading-6 text-orange-50">
                                Rest a bit easier knowing that your application is adhearing to the "best-practices" set from over a decade of hard work performed by thousands of developers.
                            </p>

                            <router-link to="/smartbch" class="mt-8 bg-orange-100 border border-transparent rounded-md shadow py-3 px-6 inline-flex items-center text-2xl font-bold text-red-600 hover:text-red-500">
                                GO TO SMARTBCH CENTER
                            </router-link>
                        </div>
                    </div>
                    <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                        <img
                            class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                            src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
                            alt="App screenshot"
                        />
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>

<script>
/* Import components. */
import Header from '@/components/PageHeader'

export default {
    components: {
        Header,
    },
    data: () => {
        return {
            title: null,
            description: null,
        }
    },
    created: async function () {
        /* Set page title. */
        this.title = `Smart Audits`

        /* Set page description. */
        this.description = `Perform a comprehensive suite of <span class="text-gray-100 font-medium">automated audits</span> on your application's smart contracts and backend services.`

    },
    mounted: function () {
        //
    },
}
</script>

<style scoped>
/*  */
</style>
