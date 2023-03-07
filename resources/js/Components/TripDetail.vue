<script setup>

import {Link} from "@inertiajs/inertia-vue3";

const props = defineProps({
    slug: String,
    name: String,
    desc: String,
    category: String,
    city: String,
    img: String | Boolean,
})

</script>

<template>

    <div class="flex flex-col rounded-2xl border border-gray-300 shadow-lg overflow-hidden ">
        <Link :href="route('trip.show', props.slug)">
            <div class="flex-shrink-0">
                <img v-if="props.img[0]" class="h-60 w-full object-cover" :src="props.img[0].original_url"
                     alt=""/>
                <span v-else class="block h-60 w-full bg-primary-100 flex justify-center items-center">
                    <i class="fa-duotone fa-image text-primary-600 text-7xl"/>
                </span>
            </div>
            <div class="flex-1 bg-white bg-opacity-50 pt-6 pb-3 px-6 flex flex-col justify-between">
                <div class="flex-1">
                    <p class="text-sm font-medium text-primary-600">
                        <span class="hover:underline capitalize">
                            {{ props.category }}
                        </span>
                    </p>
                    <div class="block mt-1">
                        <p class="text-base font-semibold text-gray-900 capitalize">
                            {{ props.name }}
                        </p>
                    </div>
                </div>
                <div class="mt-3 pt-3 flex items-center border-t border-gray-300">
                    <div class="">
                        <div class="text-sm font-medium text-primary-600">
                            <span class="hover:underline capitalize">
                                <i class="fa-regular fa-location-dot mr-1"/> {{ props.city }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </div>

</template>
