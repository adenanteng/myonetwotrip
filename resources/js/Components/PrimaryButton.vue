<script setup>
import {computed} from "vue";
import { Link } from '@inertiajs/inertia-vue3';

defineProps({
    type: {
        type: String,
        default: 'submit',
    },
    as: String,
    href: String,
});

const classes = computed(() => {
    return 'inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-2xl font-semibold text-sm text-white tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition';
});
</script>

<template>
    <Link v-if="as === 'a'" :href="href" :class="classes">
        <slot />
    </Link>

    <button v-else :type="type" :class="classes">
        <slot />
    </button>
</template>
