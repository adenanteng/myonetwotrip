<script setup>
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import {Link} from "@inertiajs/inertia-vue3";
import {computed, useSlots} from "vue";

const props = defineProps({
    name: String,
    desc: String,
    primary_button: String,
    primary_link: String,
})

const hasPrimary = computed(() => !! useSlots().primaryButton);
const hasSecondary = computed(() => !! useSlots().secondaryButton);
</script>

<template>
    <div class="py-20 px-4 sm:px-6 items-center text-center max-w-2xl mx-auto lg:px-8">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            <span class="block" >
                {{ props.name }}
            </span>
            <span class="block text-primary-600">
                {{ props.desc }}
            </span>
        </h2>
        <div class="mt-6 flex justify-center space-x-2">
            <PrimaryButton v-if="props.primary_button" as="a" :href="route(primary_link)">
                {{ props.primary_button }}
            </PrimaryButton>

<!--            <SecondaryButton v-if="props.cta.secondary_button">-->
<!--                {{ props.cta.secondary_button }}-->
<!--            </SecondaryButton>-->
<!--            <Link v-if="hasPrimary" class="nightwind-prevent inline-flex items-center px-4 py-2 bg-primary-600 border border-transparent rounded-full font-semibold text-base text-white hover:bg-primary-700 active:bg-primary-900 focus:outline-none focus:border-primary-900 focus:ring focus:ring-primary-300 disabled:opacity-25 transition">-->
<!--                {{ props.cta.primary_button }}-->
<!--            </Link>-->
        </div>
    </div>
</template>
