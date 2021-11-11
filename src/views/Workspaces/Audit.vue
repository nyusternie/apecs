<template>
    <main class="bg-white">
        <div class="bg-indigo-900">
            <!-- Header section with select menu -->
            <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
                <div class="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
                    <div class="max-w-xl">
                        <h2 class="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
                            Smart Audits
                        </h2>

                        <p class="mt-5 text-xl text-indigo-300">
                            Perform a comprehensive suite of <span class="text-gray-100 font-medium">automated audits</span> on your application's smart contracts and backend services.
                        </p>
                    </div>

                    <div class="mt-10 w-full max-w-xs lg:mt-0">
                        <label for="currency" class="block text-base font-medium text-indigo-300">
                            CHOOSE YOUR PLATFORM
                        </label>

                        <div class="mt-1.5 relative">
                            <select id="currency" name="currency" class="block w-full bg-none bg-indigo-400 bg-opacity-25 border border-transparent text-white focus:ring-white focus:border-white rounded-md">
                                <option class="bg-gray-900">Binance Smart Chain (BSC)</option>
                                <option class="bg-gray-900">Ethereum (ETH)</option>
                                <option class="bg-gray-900" selected>Smart Bitcoin (sBCH)</option>
                            </select>

                            <div class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                                <!-- Heroicon name: solid/chevron-down -->
                                <svg class="h-4 w-4 text-indigo-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Comparison table -->
        <div class="max-w-2xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
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

                                    <a href="javascript://" class="mt-6 block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600">Buy Basic</a>
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

                                    <a href="javascript://" class="mt-6 block w-full bg-green-600 border border-transparent rounded-md shadow py-4 text-2xl font-semibold text-white text-center hover:to-pink-600">
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

                                    <a href="javascript://" class="mt-6 block w-full bg-gray-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600">
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
                                What&#039;s the best thing about Switzerland?
                            </dt>
                            <dd class="text-base text-gray-500">
                                I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                            </dd>
                        </div>

                        <div class="space-y-2">
                            <dt class="text-lg leading-6 font-medium text-gray-900">
                                How do you make holy water?
                            </dt>
                            <dd class="text-base text-gray-500">
                                You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                            </dd>
                        </div>

                        <div class="space-y-2">
                            <dt class="text-lg leading-6 font-medium text-gray-900">
                                Why do you never see elephants hiding in trees?
                            </dt>
                            <dd class="text-base text-gray-500">
                                Because they&#039;re so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                            </dd>
                        </div>

                        <div class="space-y-2">
                            <dt class="text-lg leading-6 font-medium text-gray-900">
                                What do you call someone with no body and no nose?
                            </dt>
                            <dd class="text-base text-gray-500">
                                Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                            </dd>
                        </div>

                        <div class="space-y-2">
                            <dt class="text-lg leading-6 font-medium text-gray-900">
                                Why can&#039;t you hear a pterodactyl go to the bathroom?
                            </dt>
                            <dd class="text-base text-gray-500">
                                Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                            </dd>
                        </div>

                        <div class="space-y-2">
                            <dt class="text-lg leading-6 font-medium text-gray-900">
                                Why did the invisible man turn down the job offer?
                            </dt>
                            <dd class="text-base text-gray-500">
                                He couldn&#039;t see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
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
                                <span class="block">Ready to dive in?</span>
                                <span class="block text-red-900">Start your free trial today.</span>
                            </h2>
                            <p class="mt-4 text-lg leading-6 text-orange-50">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.</p>
                            <a href="javascript://" class="mt-8 bg-orange-100 border border-transparent rounded-md shadow py-3 px-6 inline-flex items-center text-base font-medium text-red-600 hover:text-red-500">Sign up for free</a>
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
// import UnderConstruction from '@/components/UnderConstruction'

export default {
    components: {
        // UnderConstruction,
    },
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

<style scoped>
/*  */
</style>
