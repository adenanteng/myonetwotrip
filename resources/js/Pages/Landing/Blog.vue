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
    blog: Object,
});

const myCarousel = ref(null)

</script>

<template>
    <LandingLayout
        title="Artikel"
        header="Artikel"
        desc="Lorem ipsum dolor sit amet"
        img="/img/sindoro.jpg"
    >

        <Blog
            name="Membaca itu baik"
            desc="Lorem ipsum dolor sit amet"
        >
            <template #detail>
                <BlogDetail v-for="item in props.blog"
                            :slug="item.slug"
                            :name="item.name"
                            :desc="item.desc"
                            :category="item.category"
                            :img="item.media ?? false"
                            :created="item.created"
                />
            </template>
        </Blog>


    </LandingLayout>
</template>
