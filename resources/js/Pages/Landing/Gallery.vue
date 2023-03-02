<script setup>
import {Link} from "@inertiajs/inertia-vue3";
import {ref} from "vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import LandingLayout from "@/Layouts/LandingLayout.vue";
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'
import PrimaryButton from "@/Components/PrimaryButton.vue";
import Trip from "@/Components/Sections/Trip.vue";
import TripDetail from "@/Components/Sections/TripDetail.vue";
import Blog from "@/Components/Sections/Blog.vue";
import BlogDetail from "@/Components/Sections/BlogDetail.vue";


const props = defineProps({
    gallery: Object,
});

</script>

<template>
    <LandingLayout
        title="Galeri"
        header="Galeri"
        desc="Lorem ipsum dolor sit amet"
        img="/img/sindoro.jpg"
    >

        <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8">
            <div class="">
                <!--                    <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">-->
                <!--                        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Team</h2>-->
                <!--                        <p class="text-xl text-gray-500">Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus quis et.</p>-->
                <!--                    </div>-->
                <ul role="list" class="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none">
                    <template v-for="item in props.gallery" :key="item.name">
<!--                        <Link :href="route('gallery.edit', item)">-->
                            <li class="my-5 sm:my-0 nightwind-prevent-block">
                                <div class="relative">
                                    <img class="object-cover shadow-lg rounded-2xl h-64 w-full" :src="item.media[0].original_url" alt="" />
                                    <div class="absolute bottom-0 left-0 right-0 rounded-b-2xl py-2 px-3 bg-primary-500 bg-opacity-50 backdrop-blur">
                                        <h3 class="font-medium text-white">{{ item.name }}</h3>
                                        <p class="text-gray-200 text-sm">{{ item.desc }}</p>
                                    </div>
                                </div>

                            </li>
<!--                        </Link>-->
                    </template>
                </ul>
            </div>
        </div>

    </LandingLayout>
</template>
