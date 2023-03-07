<script setup>
import {onMounted, ref, watch} from 'vue';
import {Inertia} from '@inertiajs/inertia';
import {Head, Link} from '@inertiajs/inertia-vue3';
import nightwind from "nightwind/helper";
import ApplicationMark from '@/Components/ApplicationMark.vue';
import Banner from '@/Components/Banner.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import PrimaryButton from "@/Components/PrimaryButton.vue";
import DarkmodeToggle from "@/Components/DarkmodeToggle.vue";
import Footer from "@/Components/Footer.vue";
import FlyoutMenu from "@/Components/FlyoutMenu.vue";

const props = defineProps({
    title: String,
    darkMode: Boolean,
    header: String,
    desc: String,
    img: String,
    page: Object,
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

const headRef = ref(null); // obtain the reference

onMounted(() => {
    var prev = window.pageYOffset;
    window.addEventListener("scroll", () => {
        if (headRef.value != null) {
            var curr = window.pageYOffset;
            if (prev > curr) {
                headRef.value.classList.add("scrolled");
                headRef.value.classList.remove("scrollDown");
            } else {
                headRef.value.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur', 'border', 'border-gray-300', 'rounded-full');
                headRef.value.classList.remove("scrolled");
            }
            if (curr === 0) {
                headRef.value.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur', 'border', 'border-gray-300', 'rounded-full');
                headRef.value.classList.remove("scrolled");
            }
            prev = curr;

        }
    });
});

const destination = [
    {
        name: 'Bali',
        desc: 'Measure actions your users take',
        href: '/kota/bali',
        icon: 'fa-mountains',
    },
    {
        name: 'Yogyakarta',
        desc: 'Create your own targeted content',
        href: '/kota/yogyakarta',
        icon: 'fa-mountains',
    },
    {
        name: 'Nusa Tenggara Barat',
        desc: 'Keep track of your growth',
        href: '/kota/nusa-tenggara-barat',
        icon: 'fa-mountains',
    },
    {
        name: 'Malang',
        desc: 'Create your own targeted content',
        href: '/kota/malang',
        icon: 'fa-mountains',
    },
    {
        name: 'Lampung',
        desc: 'Keep track of your growth',
        href: '/kota/lampung',
        icon: 'fa-mountains',
    },
]

</script>

<template>
    <div class="transition duration-1000 nightwind" :class="darkMode ? 'dark' : '' ">
        <template v-if="$page.props.setting != null">
            <Head :title="title + ' - ' + $page.props.setting.name"/>
        </template>

        <template v-else>
            <Head :title="title"/>
        </template>

        <Banner/>

        <div class="min-h-screen bg-gray-100 bg-glass bg-fixed">
            <nav class="px-3 mb-3 pt-3 w-full z-50 fixed top-0" >
                <!-- Primary Navigation Menu -->
                <div class="px-3 max-w-screen-xl mx-auto" ref="headRef">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->
                            <div class="shrink-0 flex items-center">
                                <!--                                <Link :href="route('welcome')">-->
                                <ApplicationMark class="block h-10 w-auto"/>
                                <!--                                </Link>-->
                            </div>

                            <!-- Navigation Links -->
                            <div class="hidden space-x-8 sm:-my-px sm:ml-10 lg:flex">
                                <NavLink :href="route('landing.welcome')" :active="route().current('landing.welcome')" >
                                    Beranda
                                </NavLink>

<!--                                <NavLink :href="route('landing.opentrip')" :active="route().current('landing.opentrip')" >-->
<!--                                    Opentrip-->
<!--                                </NavLink>-->

                                <NavLink :active="$page.url.startsWith('/kota')">
                                    <FlyoutMenu
                                        title="Destinasi"
                                        :data="destination"
                                    />
                                </NavLink>

<!--                                <NavLink :href="route('landing.gallery')" :active="$page.url.startsWith('/galeri')" >-->
<!--                                    Galeri-->
<!--                                </NavLink>-->
<!--                                <NavLink :href="route('landing.bali')" :active="$page.url.startsWith('/bali')" >-->
<!--                                    Bali-->
<!--                                </NavLink>-->

<!--                                <NavLink :href="route('landing.yogyakarta')" :active="$page.url.startsWith('/yogyakarta')" >-->
<!--                                    Yogyakarta-->
<!--                                </NavLink>-->

<!--                                <NavLink :href="route('landing.ntb')" :active="$page.url.startsWith('/nusa-tenggara-barat')" >-->
<!--                                    Nusa Tenggara Barat-->
<!--                                </NavLink>-->

<!--                                <NavLink :href="route('landing.malang')" :active="$page.url.startsWith('/malang')" >-->
<!--                                    Malang-->
<!--                                </NavLink>-->

<!--                                <NavLink :href="route('landing.lampung')" :active="$page.url.startsWith('/lampung')" >-->
<!--                                    Lampung-->
<!--                                </NavLink>-->

<!--                                <NavLink :href="route('landing.blog')" :active="route().current('landing.blog')" >-->
<!--                                    Artikel-->
<!--                                </NavLink>-->

                            </div>
                        </div>

                        <div class="hidden lg:flex sm:items-center sm:ml-6">
                            <div class="ml-3 relative" v-if="$page.props.user == null">
                                <NavLink href="/login">
                                    Login
                                </NavLink>
                            </div>

                            <div class="ml-3 relative">
                                <DarkmodeToggle :darkMode="darkMode" @click="darkMode = ! darkMode"/>
                            </div>

                            <!-- Settings Dropdown -->
                            <div class="ml-3 relative" v-if="$page.props.user == null">
                                <a
                                    class="nightwind-prevent inline-flex items-center px-4 py-2 bg-primary-600 border border-transparent rounded-full font-semibold text-base text-white hover:bg-primary-700 active:bg-primary-900 focus:outline-none focus:border-primary-900 focus:ring focus:ring-primary-300 disabled:opacity-25 transition"
                                    target="_blank"
                                    href="https://api.whatsapp.com/send?phone=6285156875180&text=Halo%20Admin%20Myonetwotrip%20saya%20mau%20order"
                                >
                                    <i class="fa-regular fa-paper-plane mr-1"/> Pesan Tiket
                                </a>
                            </div>

                            <div class="ml-3 relative" v-if="$page.props.user">
                                <Dropdown align="right" width="48">
                                    <template #trigger>
                                        <button
                                            class="flex text-sm border-transparent rounded-full focus:outline-none focus:ring focus:ring-primary-300 transition">
                                            <img v-if="$page.props.user" class="h-10 w-10 rounded-full object-cover"
                                                 :src="$page.props.user.profile_photo_url"
                                                 :alt="$page.props.user.name">
                                            <span v-else
                                                  class="block h-10 w-10 bg-primary-100 flex items-center justify-center rounded-full">
                                                <i class="fa-duotone fa-user text-2xl text-primary-400"></i>
                                            </span>
                                        </button>
                                    </template>

                                    <template #content>
                                        <!-- Account Management -->
                                        <DropdownLink href="/dashboard">
                                            Dasbor
                                        </DropdownLink>

                                        <DropdownLink href="/user/profile">
                                            Profil
                                        </DropdownLink>

                                        <div class="border-t border-gray-100"/>

                                        <!-- Authentication -->
                                        <form @submit.prevent="logout">
                                            <DropdownLink as="button">
                                                Keluar
                                            </DropdownLink>
                                        </form>
                                    </template>
                                </Dropdown>
                            </div>

                        </div>

                        <!-- Hamburger -->
                        <div class="-mr-2 flex items-center lg:hidden">
                            <DarkmodeToggle :darkMode="darkMode" @click="darkMode = ! darkMode"/>
                            <button
                                class="inline-flex items-center justify-center ml-2 p-2 rounded-2xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition"
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
                        </div>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                <div :class="{'block': showingNavigationDropdown, 'hidden': ! showingNavigationDropdown}" class="lg:hidden mt-2 bg-white bg-opacity-50 backdrop-blur rounded-2xl border border-gray-300">
                    <div class="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink :href="route('landing.welcome')" :active="route().current('landing.welcome')">
                            Beranda
                        </ResponsiveNavLink>

                        <ResponsiveNavLink :href="route('landing.bali')" :active="$page.url.startsWith('/bali')" >
                            Bali
                        </ResponsiveNavLink>

                        <ResponsiveNavLink :href="route('landing.yogyakarta')" :active="$page.url.startsWith('/yogyakarta')" >
                            Yogyakarta
                        </ResponsiveNavLink>

                        <ResponsiveNavLink :href="route('landing.ntb')" :active="$page.url.startsWith('/nusa-tenggara-barat')" >
                            Nusa Tenggara Barat
                        </ResponsiveNavLink>

                        <ResponsiveNavLink :href="route('landing.malang')" :active="$page.url.startsWith('/malang')" >
                            Malang
                        </ResponsiveNavLink>

                        <ResponsiveNavLink :href="route('landing.lampung')" :active="$page.url.startsWith('/lampung')" >
                            Lampung
                        </ResponsiveNavLink>

                    </div>

                    <!-- Responsive Settings Options -->
                    <div class="pt-4 pb-1 border-t border-gray-200">
                        <div v-if="$page.props.user" class="flex items-center px-4 mb-3">
                            <div class="shrink-0 mr-3">
                                <img class="h-10 w-10 rounded-full object-cover"
                                     :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name">
                            </div>

                            <div>
                                <div class="font-medium text-base text-gray-800">
                                    {{ $page.props.user.name }}
                                </div>
                                <div class="font-medium text-sm text-gray-500">
                                    {{ $page.props.user.email }}
                                </div>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <!-- Team Management -->
                            <template v-if="$page.props.user">
                                <ResponsiveNavLink :href="route('dashboard')"
                                                   :active="route().current('dashboard')">
                                    Dasbor
                                </ResponsiveNavLink>

                                <ResponsiveNavLink :href="route('profile.show')"
                                                   :active="route().current('profile.show')">
                                    Profil
                                </ResponsiveNavLink>

                                <!-- Authentication -->
                                <form method="POST" @submit.prevent="logout">
                                    <ResponsiveNavLink as="button">
                                        Keluar
                                    </ResponsiveNavLink>
                                </form>

                            </template>


                            <template v-else>
                                <ResponsiveNavLink :href="route('login')">
                                    Masuk
                                </ResponsiveNavLink>

                                <ResponsiveNavLink :href="route('register')">
                                    Daftar
                                </ResponsiveNavLink>
                            </template>
                        </div>
                    </div>
                </div>
            </nav>


<!--            <header v-if="$slots.header" class="">-->
<!--                <div-->
<!--                    class="px-4 mt-10 lg:flex lg:items-center lg:justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">-->
<!--                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">-->
<!--                        <slot name="header" />-->
<!--                    </h2>-->
<!--                    <div v-if="$slots.action" class="mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-2">-->
<!--                        <slot name="action"/>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </header>-->

<!--            <div v-if="header" class="relative pt-16 pb-20 mt-12 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 max-w-screen-2xl mx-auto">-->
<!--                <div class="absolute inset-0">-->
<!--                    <div class="bg-indigo-600 rounded-t-2xl h-1/3 sm:h-1/3 nightwind-prevent"/>-->
<!--                </div>-->
<!--                <div class="relative max-w-8xl mx-auto">-->
<!--                    <div class=" text-center nightwind-prevent-block">-->
<!--                        <h2 class="text-3xl tracking-tight font-extrabold text-white sm:text-4xl"><slot name="name"/></h2>-->
<!--                        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4"><slot name="desc"/></p>-->
<!--                    </div>-->
<!--                    <div class="">-->
<!--                        &lt;!&ndash; Page Content &ndash;&gt;-->
<!--                        <main class="">-->
<!--                            <slot/>-->
<!--                        </main>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->

            <main class="">
                <div v-if="props.header" class=" relative ">
<!--                    &lt;!&ndash; Start Home &ndash;&gt;-->
<!--                    <section class="relative">-->
<!--                        <img class="object-cover w-full h-screen " :src="props.img">-->

<!--                        <div class="absolute inset-0 h-full w-full bg-gradient-to-t to-transparent from-gray-100 dark:from-gray-800"></div>-->

<!--                        <div class="absolute text-center p-6 bottom-0 left-0 right-0">-->
<!--                            <h3 class="md:text-3xl md:leading-normal text-2xl leading-normal font-bold text-gray-900">{{ props.header }}</h3>-->
<!--                        </div>-->
<!--                    </section>&lt;!&ndash;end section&ndash;&gt;-->
<!--                    &lt;!&ndash; End Home &ndash;&gt;-->

                    <img class="object-cover w-full h-screen " :src="props.img">

                    <div class="absolute w-full bottom-0 top-0 flex justify-center items-center bg-gradient-to-tr to-transparent from-gray-800 dark:from-gray-800">
                        <div class="text-left justify-start max-w-screen-xl w-full px-10 2xl:px-0">
                            <h1 class="max-w-2xl text-white text-4xl lg:text-6xl font-bold capitalize nightwind-prevent">
                                {{ props.header }}
                            </h1>
                            <p class="max-w-xl text-gray-100 text-base mt-1 nightwind-prevent">
                                {{ props.desc }}
                            </p>
                        </div>
                    </div>
                </div>

                <slot />
            </main>

            <div class="fixed inset-x-0 bottom-0 nightwind-prevent-block">
                <div class="bg-primary-600 bg-opacity-50 backdrop-blur">
                    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                        <div class="flex items-center justify-between flex-wrap">
                            <div class="w-0 flex-1 flex items-center">
                                <span class="flex p-2 rounded-lg bg-indigo-800">
                                    <i class="fa-regular fa-bullhorn text-white" />
                                </span>
                                <p class="ml-3 font-medium text-white truncate">
                                    <span class="md:hidden">Website dalam tahap pengembangan! </span>
                                    <span class="hidden md:inline">Website ini masih dalam tahap pengembangan. </span>
                                </p>
                            </div>
<!--                            <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">-->
<!--                                <a href="#" class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"> Learn more </a>-->
<!--                            </div>-->
<!--                            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">-->
<!--                                <button type="button" class="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">-->
<!--                                    <i class="fa-regular fa-x text-white" />-->
<!--                                </button>-->
<!--                            </div>-->
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    </div>
</template>
