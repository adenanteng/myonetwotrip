<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link} from "@inertiajs/inertia-vue3";
import DeleteUserForm from '@/Pages/Profile/Partials/DeleteUserForm.vue';
import LogoutOtherBrowserSessionsForm from '@/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue';
import SectionBorder from '@/Components/SectionBorder.vue';
import UpdateTripInformationForm from "@/Pages/Trip/Partials/UpdateTripInformationForm.vue";
import UpdateTripItineraryForm from "@/Pages/Trip/Partials/UpdateTripItineraryForm.vue";
import UpdateTripPhotoForm from "@/Pages/Trip/Partials/UpdateTripPhotoForm.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/vue'
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

defineProps({
    trip: Object
});

import {Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/vue'

const product = {
    name: 'Application UI Icon Pack',
    version: {name: '1.0', date: 'June 5, 2021', datetime: '2021-06-05'},
    price: '$220',
    description:
        'The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.',
    highlights: [
        '200+ SVG icons in 3 unique styles',
        'Compatible with Figma, Sketch, and Adobe XD',
        'Drawn on 24 x 24 pixel grid',
    ],
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-product-01.jpg',
    imageAlt: 'Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.',
}
const reviews = {
    average: 4,
    featured: [
        {
            id: 1,
            rating: 5,
            content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
            date: 'July 16, 2021',
            datetime: '2021-07-16',
            author: 'Emily Selman',
            avatarSrc:
                'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        },
        {
            id: 2,
            rating: 5,
            content: `
        <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
      `,
            date: 'July 12, 2021',
            datetime: '2021-07-12',
            author: 'Hector Gibbons',
            avatarSrc:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        },
        // More reviews...
    ],
}
const faqs = [
    {
        question: 'What format are these icons?',
        answer:
            'The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code.',
    },
    {
        question: 'Can I use the icons at different sizes?',
        answer:
            "Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be scaled to different sizes as needed. We don't recommend going smaller than 20 x 20 or larger than 64 x 64 to retain legibility and visual balance.",
    },
    // More FAQs...
]
const license = {
    href: '#',
    summary:
        'For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.',
    content: `
    <h4>Overview</h4>

    <p>For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.</p>

    <ul role="list">
    <li>You\'re allowed to use the icons in unlimited projects.</li>
    <li>Attribution is not required to use the icons.</li>
    </ul>

    <h4>What you can do with it</h4>

    <ul role="list">
    <li>Use them freely in your personal and professional work.</li>
    <li>Make them your own. Change the colors to suit your project or brand.</li>
    </ul>

    <h4>What you can\'t do with it</h4>

    <ul role="list">
    <li>Don\'t be greedy. Selling or distributing these icons in their original or modified state is prohibited.</li>
    <li>Don\'t be evil. These icons cannot be used on websites or applications that promote illegal or immoral beliefs or activities.</li>
    </ul>
  `,
}

function formatPrice(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

function formatPriceX(value) {
    return formatPrice(value).replace(/0/g, "x")
}

</script>

<template>
    <AppLayout :title="trip.name">
        <div>
            <div class="mx-auto sm:px-6 lg:px-8 py-12">
                <!-- Product -->
                <div class="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
                    <!-- Product image -->
                    <div class="lg:row-end-1 lg:col-span-4">
                        <!--                        <div class="aspect-w-4 aspect-h-3 rounded-2xl bg-gray-100 overflow-hidden">-->
                        <!--                            <img :src="trip.media[0].original_url" alt="" class="object-center object-cover"/>-->
                        <Carousel :items-to-show="1" :wrap-around="true" :autoplay="3000" :transition="1000">
                            <Slide v-for="slide in trip.media" :key="slide">
                                <div class="carousel__item w-full aspect-w-16 aspect-h-9 mx-1.5">
                                    <img class="rounded-2xl object-cover object-center w-full "
                                         :src="slide.original_url">
                                </div>
                            </Slide>

                            <template #addons>
                                <Navigation/>
                                <Pagination/>
                            </template>
                        </Carousel>
                        <!--                        </div>-->
                    </div>

                    <!-- Product details -->
                    <div
                        class="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
                        <div class="flex flex-col-reverse">
                            <div class="mt-4 text-sm text-gray-500 capitalize">
                                <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl flex items-end">
                                    {{ trip.name }}
                                </h1>

                                <p class="mt-2">
                                    <i class="fa-regular fa-clock mr-1"/> {{ trip.duration }}
                                </p>
                                <p class="mt-2">
                                    <i class="fa-regular fa-location-dot mr-1"/> {{ trip.location }}, {{ trip.city }}
                                </p>
                            </div>
                        </div>

                        <p class="text-gray-500 mt-6">{{ trip.desc }}</p>
                        <p class="text-gray-500 mt-6" v-if="trip.desc2">{{ trip.desc2 }}</p>
                        <p class="text-gray-500 mt-6" v-if="trip.desc3">{{ trip.desc3 }}</p>

                        <p class="mt-5">Mulai dari <span class="font-medium text-xl">Rp </span> <span
                            class="font-bold text-2xl">{{ formatPrice(trip.price) }}</span> /{{ trip.person }}</p>

                        <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                            <button type="button"
                                    class="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
                                Beli Tiket
                            </button>
                            <button type="button"
                                    class="w-full bg-indigo-50 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
                                Preview
                            </button>
                        </div>

                        <div class="border-t border-gray-200 mt-10 pt-10 space-y-5">
                            <div>
                                <h3 class="text-sm font-medium text-gray-900"><i
                                    class="fa-regular fa-check text-green-600 mr-2"/>Include</h3>
                                <div class="mt-2 prose prose-sm text-gray-500">
                                    <ul role="list">
                                        <template v-for="include in trip.amenity" :key="include">
                                            <li v-if="include.group_id === 1">
                                                {{ include.name }}
                                            </li>
                                        </template>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-sm font-medium text-gray-900"><i
                                    class="fa-regular fa-x text-red-600 mr-2"/>Exclude</h3>
                                <div class="mt-2 prose prose-sm text-gray-500">
                                    <ul role="list">
                                        <template v-for="exclude in trip.amenity" :key="exclude">
                                            <li v-if="exclude.group_id === 2">
                                                {{ exclude.name }}
                                            </li>
                                        </template>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="border-t border-gray-200 mt-10 pt-10">
                            <h3 class="text-sm font-medium text-gray-900">Author</h3>
                            <div class="mt-4 text-sm text-gray-500 flex items-center">
                                <img v-if="trip.user.media" :src="trip.user.media[0].original_url" class="mr-2"/>
                                <span v-else
                                      class="block h-10 w-10 rounded-full flex items-center justify-center bg-indigo-100 mr-2">
                                    <i class="fa-duotone fa-user text-2xl text-indigo-400"/>
                                </span>
                                <div class="grid">
                                    <p class="capitalize text-gray-700 font-medium">
                                        {{ trip.user.name }}
                                    </p>
                                    {{ trip.user.email }}
                                    <Link v-if="trip.user_id === $page.props.user.id"
                                          :href="route('trip.edit', trip.slug)"
                                          class="underline text-sm hover:text-gray-900">
                                        Edit postingan
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4">
                        <TabGroup as="div">
                            <div class="border-b border-gray-200">
                                <TabList class="-mb-px flex space-x-8">
                                    <Tab as="template" v-slot="{ selected }">
                                        <button
                                            :class="[selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300', 'whitespace-nowrap py-6 border-b-2 font-medium text-sm']">
                                            Initerary
                                        </button>
                                    </Tab>
                                    <Tab as="template" v-slot="{ selected }">
                                        <button
                                            :class="[selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300', 'whitespace-nowrap py-6 border-b-2 font-medium text-sm']">
                                            FAQ
                                        </button>
                                    </Tab>
                                    <Tab as="template" v-slot="{ selected }">
                                        <button
                                            :class="[selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300', 'whitespace-nowrap py-6 border-b-2 font-medium text-sm']">
                                            Syarat & Ketentuan
                                        </button>
                                    </Tab>
                                </TabList>
                            </div>
                            <TabPanels as="template">
                                <TabPanel class="space-y-5 mt-5">
                                    <template v-for="itinerary in trip.itinerary" :key="itinerary.id">
                                        <Disclosure v-slot="{ open }">
                                            <DisclosureButton
                                                class="flex w-full justify-between items-center rounded-2xl px-4 py-2 text-left text-sm font-medium text-indigo-600 bg-indigo-100/25 hover:bg-indigo-200/25 border border-indigo-300">
                                                <span>{{ itinerary.name }}</span>
                                                <i :class="open ? 'rotate-180 transform' : ''"
                                                   class="fa-regular fa-angle-down"/>
                                            </DisclosureButton>
                                            <DisclosurePanel class="px-4 ml-5 text-sm text-gray-500">
                                                <ul class="list-disc space-y-1">
                                                    <li v-for="detail in itinerary.detail">
                                                        {{ detail.desc }}
                                                    </li>
                                                </ul>
                                            </DisclosurePanel>
                                        </Disclosure>
                                    </template>
                                </TabPanel>

                                <TabPanel as="dl" class="text-sm text-gray-500">
                                    <h3 class="sr-only">Frequently Asked Questions</h3>

                                    <template v-for="faq in faqs" :key="faq.question">
                                        <dt class="mt-10 font-medium text-gray-900">{{ faq.question }}</dt>
                                        <dd class="mt-2 prose prose-sm max-w-none text-gray-500">
                                            <p>{{ faq.answer }}</p>
                                        </dd>
                                    </template>
                                </TabPanel>

                                <TabPanel class="pt-10">
                                    <h3 class="sr-only">License</h3>

                                    <div class="prose prose-sm max-w-none text-gray-500" v-html="license.content"/>
                                </TabPanel>
                            </TabPanels>
                        </TabGroup>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
