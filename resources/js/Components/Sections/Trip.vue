<script setup>
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import {computed, useSlots} from "vue";
import {Link} from "@inertiajs/inertia-vue3";
import Heading from "@/Components/Heading.vue";

const props = defineProps({
    name: String,
    desc: String,
})

</script>

<template>
    <div class="grid px-10 my-10 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <p class="text-3xl font-extrabold sm:text-4xl capitalize text-gray-900">
            {{ props.name }}
        </p>
        <p class="max-w-prose text-base text-gray-500">
            {{ props.desc }}
        </p>
    </div>

    <div class="my-12 grid gap-5 lg:grid-cols-4 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <slot name="detail" />
    </div>

</template>
