<script setup>
import {Head, Link} from '@inertiajs/inertia-vue3';
import LandingLayout from "@/Layouts/LandingLayout.vue";

import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'
import {ref} from "vue";
import {Editor, EditorContent, useEditor} from '@tiptap/vue-3'
import StarterKit from "@tiptap/starter-kit";
import PrimaryButton from "@/Components/PrimaryButton.vue";



const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '5' },
    { label: 'Beta Users', value: '521' },
    { label: 'Raised', value: '$25M' },
]

const props = defineProps({
    trip: Object,
});

const editor = useEditor({
    content: props.trip.content,
    editorProps: {
        attributes: {
            class: 'prose prose-sm text-sm text-gray-900',
        },
    },
    extensions: [
        StarterKit.configure({
            paragraph: {
                HTMLAttributes: {
                    class: 'text-base text-gray-500',
                },
            },
            Heading: {
                HTMLAttributes: {
                    class: 'text-gray-900',
                },
            },
        })
    ],
    autofocus: false,
    editable: false,
})

const editorItinerary = useEditor({
    content: props.trip.itinerary,
    editorProps: {
        attributes: {
            class: 'prose prose-sm text-sm text-gray-900',
        },
    },
    extensions: [
        StarterKit.configure({
            paragraph: {
                HTMLAttributes: {
                    class: 'text-base text-gray-500',
                },
            },
            Heading: {
                HTMLAttributes: {
                    class: 'text-gray-900',
                },
            },
        })
    ],
    autofocus: false,
    editable: false,
})

const editorInclude = useEditor({
    content: props.trip.include,
    editorProps: {
        attributes: {
            class: 'prose prose-sm text-sm text-gray-900',
        },
    },
    extensions: [
        StarterKit.configure({
            paragraph: {
                HTMLAttributes: {
                    class: 'text-base text-gray-500',
                },
            },
            Heading: {
                HTMLAttributes: {
                    class: 'text-gray-900',
                },
            },
        })
    ],
    autofocus: false,
    editable: false,
})

const tab = ref(1)

function formatPrice(value) {
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

</script>

<template>

    <LandingLayout :title="props.trip.name">

<!--        <template #header>-->
<!--            {{ blog.name }}-->
<!--        </template>-->
<!--        <div class="w-screen relative">-->
<!--            <img class="object-cover w-full h-screen " :src="props.trip.media[0].original_url">-->

<!--            <div class="absolute w-full bottom-0 top-0 flex justify-center items-center bg-gradient-to-tr from-primary-500 dark:from-gray-500">-->
<!--                <div class="text-left justify-start max-w-screen-xl w-full px-10 2xl:px-0">-->
<!--                    <h1 class="max-w-2xl text-white text-6xl font-bold capitalize nightwind-prevent">-->
<!--                        {{ trip.name }}-->
<!--                    </h1>-->
<!--                    <p class="max-w-xl text-gray-100 text-base mt-1 nightwind-prevent">{{ trip.desc }}</p>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->


        <div class="relative pb-10 pt-32 sm:px-10">
            <div class="lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-5 gap-8 lg:items-start">
                <div class="relative sm:py-16 lg:py-0 lg:col-span-3">
<!--                    <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">-->
<!--                        <div class="absolute inset-y-0 right-1/2 w-full bg-indigo-500 rounded-r-2xl lg:right-72" />-->
<!--                        <svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">-->
<!--                            <defs>-->
<!--                                <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">-->
<!--                                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />-->
<!--                                </pattern>-->
<!--                            </defs>-->
<!--                            <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />-->
<!--                        </svg>-->
<!--                    </div>-->
                    <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                        <!-- Testimonial card-->
                        <Carousel v-if="trip.media[0]" :items-to-show="1" :wrap-around="true" :transition="1000" :autoplay="5000">
                            <template #slides>
                                <Slide v-for="media in trip.media" :key="media.id">
                                    <div class="carousel__item w-full aspect-video rounded-2xl relative">
                                        <img class="object-cover w-full aspect-video rounded-2xl" :src="media.original_url">
                                    </div>
                                </Slide>
                            </template>
                            <template #addons>
<!--                                        <Navigation />-->
                                    <Pagination/>
                            </template>
                        </Carousel>

                        <div class="hidden lg:block">
                            <div class="border-b border-gray-300">
                                <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                    <button @click="tab=1"
                                            :class="[tab==1 ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']">
                                        Itinerary
                                    </button>
                                    <button @click="tab=2"
                                            :class="[tab==2 ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']">
                                        Tiket Sudah Termasuk
                                    </button>
                                </nav>

                                <div class="my-5" >
                                    <p v-show="tab==1"
                                        class="text-gray-600"
                                        v-html="trip.itinerary" />

                                    <p v-show="tab==2"
                                       class="text-gray-600"
                                       v-html="trip.include" />

<!--                                    <EditorContent-->
<!--                                        v-show="tab==1"-->
<!--                                        :editor="editorItinerary"-->
<!--                                        required />-->

<!--                                    <EditorContent-->
<!--                                        v-show="tab==2"-->
<!--                                        :editor="editorInclude"-->
<!--                                        required />-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:col-span-2">
                    <!-- Content area -->
                    <div class="pt-12 sm:pt-16 lg:pt-20">
                        <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl capitalize">{{ trip.name }}</h2>
                        <p class="capitalize text-primary-500"><i class="fa-regular fa-location-dot mr-2" />{{ trip.location }}, {{ trip.city }}</p>

                        <p class="text-gray-700 mt-3">Mulai dari</p>
                        <h3 class="max-w-2xl text-gray-900 text-3xl font-bold capitalize">
                            Rp. {{ formatPrice(trip.price) }} <span class="text-base font-normal">/ tiket</span>
                        </h3>

                        <a
                            target="_blank"
                            class="mt-2 mb-5 nightwind-prevent inline-flex items-center px-4 py-2 bg-primary-600 border border-transparent rounded-full font-semibold text-base text-white hover:bg-primary-700 active:bg-primary-900 focus:outline-none focus:border-primary-900 focus:ring focus:ring-primary-300 disabled:opacity-25 transition"
                            :href="'https://api.whatsapp.com/send?phone=6285156875180&text=Halo%20Myonetwotrip%20saya%20mau%20order%20https://myonetwotrip.com/destinasi/'+trip.slug"
                        >
                            Pesan Tiket Sekarang
                        </a>

                        <div class="text-gray-500 space-y-6">

                            <EditorContent
                                :editor="editor"
                                required />

<!--                            <p v-html="trip.content"></p>-->
                        </div>
                    </div>

                    <div class="block lg:hidden mt-10">
                        <div class="">
                            <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                                <button @click="tab=1"
                                        :class="[tab==1 ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']">
                                    Itinerary
                                </button>
                                <button @click="tab=2"
                                        :class="[tab==2 ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']">
                                    Tiket Sudah Termasuk
                                </button>
                            </nav>

                            <div class="my-5" >
                                <p v-show="tab==1"
                                   class="text-gray-600"
                                   v-html="trip.itinerary" />

                                <p v-show="tab==2"
                                   class="text-gray-600"
                                   v-html="trip.include" />
                            </div>
                        </div>
                    </div>

                    <!-- Stats section -->
<!--                    <div class="mt-10">-->
<!--                        <dl class="grid grid-cols-2 gap-x-4 gap-y-8">-->
<!--                            <div v-for="stat in stats" :key="stat.label" class="border-t-2 border-gray-300 pt-6">-->
<!--                                <dt class="text-base font-medium text-gray-500">{{ stat.label }}</dt>-->
<!--                                <dd class="text-3xl font-extrabold tracking-tight text-gray-900">{{ stat.value }}</dd>-->
<!--                            </div>-->
<!--                        </dl>-->
<!--                    </div>-->

                    <div class="mt-10 pt-10 flex items-center border-t border-gray-300">
                        <div class="flex-shrink-0">
                            <img class="h-10 w-10 rounded-full" :src="trip.user.profile_photo_url" alt="" />
                        </div>
                        <div class="ml-3">
                            <div class="text-sm font-medium text-gray-900">
                                <span class="hover:underline">
                                    {{ trip.user.name }}
                                </span>
                            </div>
                            <div class="flex space-x-1 text-sm text-gray-500">
                                <span>
                                    {{ trip.user.email }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </LandingLayout>

</template>
