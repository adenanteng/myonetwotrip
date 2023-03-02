<script setup>
import {ref, watch} from 'vue';
import {Inertia} from '@inertiajs/inertia';
import {Head, Link} from '@inertiajs/inertia-vue3';
import ApplicationMark from '@/Components/ApplicationMark.vue';
import Banner from '@/Components/Banner.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLinkAlt from '@/Components/NavLinkAlt.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import DarkmodeToggle from "@/Components/DarkmodeToggle.vue";

import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverOverlay,
    PopoverPanel,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'

const user = {
    name: 'Chelsea Hagon',
    email: 'chelsea.hagon@example.com',
    role: 'Human Resources Manager',
    imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const stats = [
    {label: 'Vacation days left', value: 12},
    {label: 'Sick days left', value: 4},
    {label: 'Personal days left', value: 2},
]

const props = defineProps({
    title: String,
    darkMode: Boolean,
    greeting: String,
    name: String,
    desc: String,
    action: String,
    href: String,
    avatar: String
});

const darkMode = ref(JSON.parse(localStorage.getItem('darkmode')) ?? false)

watch(darkMode, (newDarkMode) => {
    console.log(`darkmode is ${newDarkMode}`)
    localStorage.setItem('darkmode', JSON.stringify(newDarkMode))
})

const showingNavigationDropdown = ref(false);

const logout = () => {
    Inertia.post(route('logout'));
};
</script>

<template>
    <div class="transition duration-1000" :class="darkMode ? 'nightwind dark' : 'nightwind' ">
        <template v-if="$page.props.appSetting">
            <Head :title="title + ' - ' + $page.props.appSetting.name"/>
        </template>

        <template v-else>
            <Head :title="title"/>
        </template>

        <Banner/>

        <div class="min-h-screen bg-gray-100 bg-glass bg-fixed ">
            <Popover as="header" class="pb-24 bg-gradient-to-r from-primary-800 to-cyan-600" v-slot="{ open }">
                <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div class="relative flex flex-wrap items-center justify-center lg:justify-between">
                        <!-- Logo -->
                        <div class="absolute left-0 py-5 flex-shrink-0 lg:static flex items-center">
<!--                            <Link :href="route('dashboard')">-->
                                <ApplicationMark class="block h-9 w-auto"/>
<!--                            </Link>-->
                            <div class="ml-2 nightwind-prevent-block" v-if="$page.props.appSetting">
                                <h1 class="text-white capitalize font-semibold">{{ $page.props.appSetting.name }}</h1>
                                <p class="text-gray-200 font-light text-sm">{{ $page.props.appSetting.desc }}</p>
                            </div>
                        </div>

                        <!-- Right section on desktop -->
                        <div class="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
<!--                            <button type="button" class="flex-shrink-0 p-1 text-cyan-200 rounded-full hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white">-->
<!--                                <i class="fa-duotone fa-bell" aria-hidden="true" />-->
<!--                            </button>-->
                            <DarkmodeToggle :darkMode="darkMode" @click="darkMode = ! darkMode"/>

                            <!-- Profile dropdown -->
                            <Menu as="div" class="ml-4 relative flex-shrink-0">
                                <Dropdown align="right" width="48">
                                    <template #trigger>
                                        <button v-if="$page.props.jetstream.managesProfilePhotos"
                                                class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                                            <img class="h-10 w-10 rounded-full object-cover"
                                                 :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name">
                                        </button>

                                        <span v-else class="inline-flex rounded-2xl">
                                        <button type="button"
                                                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-2xl text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition">
                                            {{ $page.props.user.name }}

                                            <svg
                                                class="ml-2 -mr-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path fill-rule="evenodd"
                                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                        </button>
                                    </span>
                                    </template>

                                    <template #content>
                                        <DropdownLink href="/">
                                            Beranda
                                        </DropdownLink>

                                        <DropdownLink href="user/profile">
                                            Profil
                                        </DropdownLink>

<!--                                        <DropdownLink v-if="$page.props.jetstream.hasApiFeatures"-->
<!--                                                      :href="route('api-tokens.index')">-->
<!--                                            API Tokens-->
<!--                                        </DropdownLink>-->

                                        <div class="border-t border-gray-100"/>

                                        <!-- Authentication -->
                                        <form @submit.prevent="logout">
                                            <DropdownLink as="button">
                                                Keluar
                                            </DropdownLink>
                                        </form>
                                    </template>
                                </Dropdown>
                            </Menu>
                        </div>

                        <div class="w-full py-10 lg:py-5 lg:border-t lg:border-white lg:border-gray-300">
                            <div class="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
                                <!-- Left nav -->
                                <div class="hidden lg:block lg:col-span-2">
                                    <nav class="flex space-x-4">
                                        <NavLinkAlt
                                            :href="route('dashboard')"
                                            :active="$page.url == '/dashboard'">
                                            Dasbor
                                        </NavLinkAlt>

                                        <NavLinkAlt
                                            v-if="$page.props.user.role_id==1"
                                            :href="route('trip.index')"
                                            :active="$page.url.startsWith('/trip')">
                                            Destinasi
                                        </NavLinkAlt>

                                        <NavLinkAlt
                                            v-if="$page.props.user.role_id==1"
                                            :href="route('gallery.index')"
                                            :active="$page.url.startsWith('/gallery')">
                                            Galeri
                                        </NavLinkAlt>

                                        <NavLinkAlt
                                            v-if="$page.props.user.role_id==1"
                                            :href="route('blog.index')"
                                            :active="$page.url.startsWith('/blog')">
                                            Blog
                                        </NavLinkAlt>

                                        <NavLinkAlt
                                            v-if="$page.props.user.role_id==1"
                                            :href="route('user.index')"
                                            :active="$page.url.startsWith('/user')">
                                            Pengguna
                                        </NavLinkAlt>

                                        <NavLinkAlt
                                            v-if="$page.props.user.role_id==1"
                                            :href="route('setting.index')"
                                            :active="$page.url.startsWith('/setting')">
                                            Pengaturan
                                        </NavLinkAlt>

                                    </nav>
                                </div>
                                <div class="px-12 lg:px-0">
                                    <!-- Search -->
                                    <div class="flex justify-end">
<!--                                        <div class="relative focus-within:text-gray-600 ">-->
<!--                                            <div-->
<!--                                                class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">-->
<!--                                                <i class="fa-duotone fa-search " />-->
<!--                                            </div>-->
<!--                                            <input class="block w-full text-white bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-2xl leading-5 focus:text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"-->
<!--                                                   placeholder="Cari" type="search" name="search"/>-->
<!--                                        </div>-->
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Menu button -->
                        <div class="absolute right-0 flex-shrink-0 lg:hidden">
                            <!-- Mobile menu button -->
                            <PopoverButton
                                class="bg-transparent p-2 rounded-2xl inline-flex items-center justify-center text-cyan-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white">
                                <button
                                    class="inline-flex items-center justify-center rounded-2xl text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition"
                                    @click="showingNavigationDropdown = ! showingNavigationDropdown">
                                    <svg
                                        class="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            :class="{'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </PopoverButton>
                        </div>
                    </div>
                </div>

                <TransitionRoot as="template" :show="open">
                    <div class="lg:hidden">
                        <TransitionChild as="template" enter="duration-150 ease-out" enter-from="opacity-0"
                                         enter-to="opacity-100" leave="duration-150 ease-in" leave-from="opacity-100"
                                         leave-to="opacity-0">
                            <PopoverOverlay class="z-20 fixed inset-0 bg-black bg-opacity-50"/>
                        </TransitionChild>

                        <TransitionChild as="template" enter="duration-150 ease-out" enter-from="opacity-0 scale-95"
                                         enter-to="opacity-100 scale-100" leave="duration-150 ease-in"
                                         leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                            <PopoverPanel focus
                                          class="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top">
                                <div
                                    class="rounded-2xl bg-white bg-opacity-50 backdrop-blur shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
                                    <div class="pt-3 pb-2">
                                        <div class="flex items-center justify-between px-4">
                                            <div>
                                                <Link :href="route('dashboard')">
                                                    <ApplicationMark class="block h-9 w-auto"/>
                                                </Link>
                                            </div>
                                            <div class="-mr-2">
                                                <PopoverButton
                                                    class="bg-white rounded-2xl inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                                                    <button
                                                        class="inline-flex items-center justify-center p-2 rounded-2xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition"
                                                        @click="showingNavigationDropdown = ! showingNavigationDropdown">
                                                        <svg
                                                            class="h-6 w-6"
                                                            stroke="currentColor"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                :class="{'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M4 6h16M4 12h16M4 18h16"
                                                            />
                                                            <path
                                                                :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="M6 18L18 6M6 6l12 12"
                                                            />
                                                        </svg>
                                                    </button>
                                                </PopoverButton>
                                            </div>
                                        </div>
                                        <div class="mt-3 px-2 space-y-1">
                                            <ResponsiveNavLink :href="route('dashboard')"
                                                               :active="route().current('dashboard')">
                                                Dasbor
                                            </ResponsiveNavLink>

                                            <ResponsiveNavLink :href="route('trip.index')"
                                                               :active="$page.url.startsWith('/trip')"
                                                               v-if="$page.props.user.role_id==1">
                                                Destinasi
                                            </ResponsiveNavLink>

                                            <ResponsiveNavLink :href="route('gallery.index')"
                                                               :active="$page.url.startsWith('/gallery')"
                                                               v-if="$page.props.user.role_id==1">
                                                Galeri
                                            </ResponsiveNavLink>

                                            <ResponsiveNavLink :href="route('blog.index')"
                                                               :active="$page.url.startsWith('/blog')"
                                                               v-if="$page.props.user.role_id==1">
                                                Blog
                                            </ResponsiveNavLink>

                                            <ResponsiveNavLink :href="route('user.index')"
                                                               :active="$page.url.startsWith('/user')"
                                                               v-if="$page.props.user.role_id==1">
                                                Pengguna
                                            </ResponsiveNavLink>

                                            <ResponsiveNavLink :href="route('setting.index')"
                                                               :active="$page.url.startsWith('/setting')"
                                                               v-if="$page.props.user.role_id==1">
                                                Pengaturan
                                            </ResponsiveNavLink>

                                        </div>
                                    </div>
                                    <div class="pt-4 pb-2">
                                        <div class="flex items-center px-5">
                                            <div class="flex-shrink-0">
                                                <img class="h-12 w-12 rounded-full"
                                                     :src="$page.props.user.profile_photo_url"
                                                     :alt="$page.props.user.name"/>
                                            </div>
                                            <div class="ml-3 min-w-0 flex-1">
                                                <div class="text-base font-medium text-gray-800 truncate capitalize">
                                                    {{ $page.props.user.name }}
                                                </div>
                                                <div class="text-sm font-medium text-gray-500 truncate">
                                                    {{ $page.props.user.email }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-3 px-2 space-y-1">

                                            <ResponsiveNavLink :href="route('landing.welcome')"
                                                               :active="route().current('landing.welcome')">
                                                Beranda
                                            </ResponsiveNavLink>

                                            <ResponsiveNavLink :href="route('profile.show')"
                                                               :active="route().current('profile.show')">
                                                Profil
                                            </ResponsiveNavLink>

                                            <ResponsiveNavLink v-if="$page.props.jetstream.hasApiFeatures"
                                                               :href="route('api-tokens.index')"
                                                               :active="route().current('api-tokens.index')">
                                                API Tokens
                                            </ResponsiveNavLink>

                                            <!-- Authentication -->
                                            <form method="POST" @submit.prevent="logout">
                                                <ResponsiveNavLink as="button">
                                                    Keluar
                                                </ResponsiveNavLink>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </PopoverPanel>
                        </TransitionChild>
                    </div>
                </TransitionRoot>
            </Popover>
            <main class="-mt-24 pb-8 ">
                <div class="max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <!-- Main 3 column grid -->
                    <div class="">
                        <!-- Left column -->
                        <div class="">

                            <!-- Welcome panel -->
                            <section >
                                <div class="rounded-2xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg">
                                    <div class="p-6">
                                        <div class="sm:flex sm:items-center sm:justify-between">
                                            <div class="sm:flex sm:space-x-5">
                                                <div class="flex-shrink-0">
                                                    <img v-if="props.avatar" class="mx-auto h-20 w-20 rounded-full"
                                                         :src="props.avatar" :alt="props.avatar"/>
                                                </div>
                                                <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                                                    <p class="text-sm font-medium text-gray-600">{{
                                                            props.greeting
                                                        }}</p>
                                                    <p class="text-xl font-bold text-gray-900 sm:text-2xl capitalize">
                                                        {{ props.name }}</p>
                                                    <p class="text-sm font-medium text-gray-600">{{ props.desc }}</p>
                                                </div>
                                            </div>
                                            <div class="mt-5 flex justify-center sm:mt-0" v-if="props.action">
                                                <Link :href="props.href"
                                                      class="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
                                                    {{ props.action }}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="border-t border-gray-300 bg-gray-50 bg-opacity-50 grid grid-cols-1 divide-y divide-gray-300 dark:divide-gray-600 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
<!--                                        <div v-for="stat in stats" :key="stat.label"-->
<!--                                             class="px-6 py-5 text-sm font-medium text-center">-->
<!--                                            <span class="text-gray-900">{{ stat.value }}</span>-->
<!--                                            {{ ' ' }}-->
<!--                                            <span class="text-gray-600">{{ stat.label }}</span>-->
<!--                                        </div>-->
                                        <div class="py-5" />
                                    </div>
                                </div>
                            </section>

                            <!-- Page Content -->
                            <main class="py-10">
                                <slot/>
                            </main>

                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                    <div class="border-t border-gray-200 py-8 text-sm text-gray-500 text-center sm:text-left"><span
                        class="block sm:inline">&copy; 2022 Enola.</span> <span class="block sm:inline">All rights reserved.</span>
                    </div>
                </div>
            </footer>
        </div>
    </div>

</template>
