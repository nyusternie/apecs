<template>
    <main class="bg-white">
        <SiteHeader :title="title" :description="description" />

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

        <section class="bg-indigo-800">
            <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
                <div class="max-w-4xl mx-auto text-center">
                    <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                        Trusted by developers across multiple blockchains
                    </h2>

                    <p class="mt-3 text-xl text-indigo-200 sm:mt-4">
                        Access our community of over 200+ security experts with certifications in many areas of crypto.
                    </p>
                </div>

                <dl class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
                    <div class="flex flex-col">
                        <dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                            Auditor Transparency
                        </dt>
                        <dd class="order-1 text-5xl font-extrabold text-white">
                            100%
                        </dd>
                    </div>

                    <div class="flex flex-col mt-10 sm:mt-0">
                        <dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                            On-chain Availability
                        </dt>
                        <dd class="order-1 text-5xl font-extrabold text-white">
                            24/7
                        </dd>
                    </div>

                    <div class="flex flex-col mt-10 sm:mt-0">
                        <dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                            Audited Funds Lost
                        </dt>
                        <dd class="order-1 text-5xl font-extrabold text-white">
                            $0.00
                        </dd>
                    </div>
                </dl>
            </div>
        </section>

        <Featured />

        <!-- Logo cloud -->
        <div class="hidden max-w-7xl mx-auto border-t border-gray-200 py-12 px-4 sm:px-6 lg:py-20 lg:px-8">
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

                            <router-link to="/audit-pricing" class="py-3 mr-10 flex justify-center hover:underline text-sm text-red-900 font-medium">
                                Pricing &amp; Licensing Options
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
/* Import (local) components. */
import Featured from './Audits/Featured'

export default {
    components: {
        Featured,
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
