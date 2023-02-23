<script setup>

    const props = defineProps({
        video: Object | Boolean,
        name: String,
        desc: String
    })
</script>


<template>
    <div class=" shadow-lg flex relative ">

        <video v-if="props.video" class="flex-shrink-0 w-full h-screen object-cover" loop muted autoplay>
            <source :src="props.video" type="video/mp4">
            Your browser does not support HTML video.
        </video>

        <div v-if="props.name" class="absolute w-full bottom-0 top-0 px-10 flex justify-center items-center">
            <div class="text-left justify-start max-w-screen-xl w-full">
                <h1 class="max-w-2xl text-white font-bold text-7xl capitalize nightwind-prevent ">
                    {{ props.name }}
                </h1>
                <p class="max-w-xl text-gray-100 text-base mt-1 nightwind-prevent">{{ props.desc }}</p>
            </div>
        </div>
    </div>
</template>
