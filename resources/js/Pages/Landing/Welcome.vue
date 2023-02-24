<script setup>
import LandingLayout from "@/Layouts/LandingLayout.vue";
import Cta from "@/Components/Sections/Cta.vue";
import Trip from "@/Components/Sections/Trip.vue";
import TripDetail from "@/Components/Sections/TripDetail.vue";
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';
import PrimaryButton from "@/Components/PrimaryButton.vue";
import {ref} from "vue";

const props = defineProps({
    trip: Object,
});

const myCarousel = ref(null)

function formatPrice(value) {
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

</script>

<template>
    <LandingLayout title="Beranda" desc="Lorem ipsum">

        <Carousel
            :items-to-show="1"
            :wrap-around="true"
            :transition="1000"
            :autoplay="10000"
            ref="myCarousel">
            <template #slides>
                <Slide v-for="item in props.trip" :key="item">
                    <div class="carousel__item w-screen relative">
                        <img v-if="item.media[0]" class="object-cover w-full h-screen " :src="item.media[0].original_url">

                        <span v-else class="block h-screen w-full flex justify-center items-center">
                            <i class="fa-duotone fa-image text-primary-600 text-7xl"/>
                        </span>

                        <div class="absolute px-10 w-full bottom-0 top-0 flex justify-center items-center bg-gradient-to-tr from-gray-900 dark:from-gray-900 transition duration-1000">
                            <div class="text-left justify-start max-w-screen-xl w-full px-10 2xl:px-0">
                                <h1 class="max-w-2xl text-white text-6xl font-bold capitalize nightwind-prevent">
                                    {{ item.name }}
                                </h1>
                                <p class="max-w-xl text-gray-100 text-base mt-1 nightwind-prevent">{{ item.desc }}</p>

                                <p class="text-gray-100 mt-3">Mulai dari</p>
                                <h3 class="max-w-2xl text-white text-3xl font-bold capitalize nightwind-prevent">
                                    Rp. {{ formatPrice(item.price) }} <span class="text-base font-normal">/ tiket</span>
                                </h3>

                                <p class="text-gray-100 mt-3 text-base nightwind-prevent capitalize"><i class="fa-regular fa-location-dot mr-2" />{{ item.location }}, {{ item.city }}</p>

                                <PrimaryButton class="mt-3" as="a" :href="'/destinasi'+item">
                                    Lihat Destinasi
                                </PrimaryButton>

                                <div class="mt-3 flex space-x-2 nightwind-prevent-block">
                                    <button class="text-gray-400 hover:text-white hover:underline group" @click="myCarousel.prev()">
                                        Sebelumnya
                                        <i class="text-white fa-regular fa-arrow-left ml-2 rounded-full p-1 border border-transparent group-hover:border-white"/>
                                    </button>
                                    <button class="text-gray-400 hover:text-white hover:underline group" @click="myCarousel.next()">
                                        <i class="text-white fa-regular fa-arrow-right mr-2 rounded-full p-1 border border-transparent group-hover:border-white"/>
                                        Selanjutnya
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>
            </template>

            <template #addons>
                <!--                <Navigation />-->
<!--                <Pagination/>-->
            </template>
        </Carousel>

<!--        <heroVideo-->
<!--            name="aduh"-->
<!--            desc="hahhaha"-->
<!--            video="/video/video.mp4"-->
<!--        />-->

<!--        <Cta-->
<!--            name="Jelajahi Destinasi"-->
<!--            desc="Liburanmu"-->
<!--            primary_button="Jelajahi"-->
<!--            primary_link="landing.destination"-->
<!--        />-->

<!--        <div class="">-->
<!--            <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">-->
<!--                <div class="lg:grid lg:grid-cols-2 lg:gap-8">-->
<!--                    <h2 class="max-w-md mx-auto text-3xl font-extrabold text-indigo-900 text-center lg:max-w-xl lg:text-left">The world's most innovative companies use Workflow</h2>-->
<!--                    <div class="flow-root self-center mt-8 lg:mt-0">-->
<!--                        <div class="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">-->
<!--                            <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">-->
<!--                                <img class="h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-900.svg" alt="Workcation" />-->
<!--                            </div>-->
<!--                            <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">-->
<!--                                <img class="h-12" src="https://tailwindui.com/img/logos/tuple-logo-indigo-900.svg" alt="Tuple" />-->
<!--                            </div>-->
<!--                            <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">-->
<!--                                <img class="h-12" src="https://tailwindui.com/img/logos/level-logo-indigo-900.svg" alt="Level" />-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

<!--        <Trip-->
<!--            name=""-->
<!--            desc=""-->
<!--        >-->
<!--            <template #detail>-->
<!--                <TripDetail v-for="item in props.trip"-->
<!--                            :slug="item.slug"-->
<!--                            :name="item.name"-->
<!--                            :desc="item.desc"-->
<!--                            :category="item.category"-->
<!--                            :city="item.city"-->
<!--                            :img="item.media ?? false"-->
<!--                />-->
<!--            </template>-->
<!--        </Trip>-->

    </LandingLayout>

</template>
