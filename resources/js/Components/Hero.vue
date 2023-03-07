<script setup>
    import 'vue3-carousel/dist/carousel.css'
    import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'
    import ApplicationMark from '@/Components/ApplicationMark.vue';

</script>


<template>
    <div class="shadow-lg">
        <template v-if="$page.props.page.hero[1]" >
            <Carousel :items-to-show="1" :wrap-around="true" :transition="1000" :autoplay="5000" >
                <template #slides>
                    <Slide v-for="hero in $page.props.page.hero" :key="hero">
                        <div class="carousel__item w-screen relative">
                            <img class="object-cover w-full h-screen " :src="hero.media[0].original_url">

                            <div v-if="hero.name" class="absolute w-full bottom-0 top-0 flex justify-center items-center bg-gradient-to-tr from-primary-500 dark:from-gray-500">
                                <div class="text-left justify-start max-w-screen-xl w-full px-10 2xl:px-0">
                                    <h1 class="max-w-2xl text-white text-6xl font-bold capitalize nightwind-prevent">
                                        {{ hero.name }}
                                    </h1>
                                    <p class="max-w-xl text-gray-100 text-base mt-1 nightwind-prevent">{{ hero.desc }}</p>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </template>

                <!--            <template #addons>-->
                <!--                    <Navigation />-->
                <!--                    <Pagination/>-->
                <!--            </template>-->
            </Carousel>
        </template>

        <template v-else >
            <Carousel :items-to-show="1" >
                <template #slides>
                    <Slide v-for="hero in $page.props.page.hero" :key="hero">
                        <div class="carousel__item w-screen relative">
                            <img class="object-cover w-full h-screen " :src="hero.media[0].original_url">

                            <div v-if="hero.name" class="absolute w-full bottom-0 top-0 flex justify-center items-center bg-gradient-to-tr from-primary-500 dark:from-gray-500">
                                <div class="text-left justify-start max-w-screen-xl w-full px-10 2xl:px-0">
                                    <h1 class="max-w-2xl text-white text-6xl font-bold capitalize nightwind-prevent">
                                        {{ hero.name }}
                                    </h1>
                                    <p class="max-w-xl text-gray-100 text-base mt-1 nightwind-prevent">{{ hero.desc }}</p>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </template>
            </Carousel>
        </template>

    </div>
</template>
