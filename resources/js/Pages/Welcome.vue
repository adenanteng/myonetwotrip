<script setup>

import {Inertia} from '@inertiajs/inertia';
import {Head, Link, usePage} from '@inertiajs/inertia-vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'
import PrimaryButton from "@/Components/PrimaryButton.vue";

// const carousel = () => usePage().props.value.carousel
const breakpoints = {
    640: {
        itemsToShow: 1,
        snapAlign: 'center',
    },
    769: {
        itemsToShow: 2.5,
        snapAlign: 'center',
    },
    1025: {
        itemsToShow: 2.5,
        snapAlign: 'start',
    },
    1281: {
        itemsToShow: 4,
        snapAlign: 'start',
    },
}

</script>

<!--<style scoped>-->
<!--.carousel {-->
<!--    /*padding-left: 10rem;*/-->
<!--}-->

<!--.carousel__viewport {-->
<!--    perspective: 2000px;-->
<!--}-->

<!--/*.carousel__icon {*/-->
<!--/*    fill: white !important;*/-->
<!--/*}*/-->

<!--.carousel__track {-->
<!--    transform-style: preserve-3d;-->
<!--}-->

<!--.carousel__slide&#45;&#45;sliding {-->
<!--    transition: 0.8s;-->
<!--}-->

<!--.carousel__slide&#45;&#45;active {-->
<!--    transform: scale(1.15);-->
<!--    z-index: 30;-->
<!--}-->
<!--</style>-->

<template>
    <AppLayout title="Welcome">
        <!--        <template #header>-->
        <!--            <h2 class="font-semibold text-xl text-gray-800 leading-tight">-->
        <!--                Dashboard-->
        <!--            </h2>-->
        <!--        </template>-->

        <div class="min-h-screen bg-hero object-cover rounded-2xl shadow-lg flex items-end">
            <div class="lg:grid lg:grid-cols-12 lg:gap-8 w-full mb-40">
                <div
                    class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                    <div>
                        <h1 class="text-4xl mt-20 lg:text-5xl xl:text-6xl tracking-tight font-extrabold text-white">
                            INDONESIA
                        </h1>
                        <p class="text-gray-100 mt-1">Anim aute id magna
                            aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                            veniam
                            occaecat fugiat aliqua ad ad non deserunt sunt.
                        </p>
                        <PrimaryButton class="mt-3" as="a" :href="route('trip.index')">
                            Jelajahi Destinasi <i class="fa-regular fa-angle-right ml-2" />
                        </PrimaryButton>
                    </div>
                </div>
                <div class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                    <Carousel :items-to-show="1" :wrap-around="true" :transition="1000" :autoplay="3000"
                              :breakpoints="breakpoints">
                        <Slide v-for="slide in $page.props.carousel" :key="slide">
                            <div class="carousel__item w-full mx-1.5">
                                <h6 class="pl-3 text-left text-white">{{ slide.name }}</h6>
                                <div class="aspect-w-9 my-1.5 aspect-h-12 rounded-2xl ring-4 ring-sky-300 ring-opacity-25">
                                    <img class="rounded-2xl object-cover "
                                         :src="slide.img">
                                </div>
                            </div>
                        </Slide>

                        <template #addons>
                            <!--                                <Navigation />-->
                            <Pagination/>
                        </template>
                    </Carousel>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
