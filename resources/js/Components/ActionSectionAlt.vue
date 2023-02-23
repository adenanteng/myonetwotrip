<script setup>
import SectionTitle from './SectionTitle.vue';
</script>

<template>
    <div class="bg-white bg-opacity-50 shadow-xl overflow-hidden rounded-2xl border border-gray-300">
        <div class="px-4 py-5 sm:px-6">
            <SectionTitle>
                <template #title>
                    <slot name="title" />
                </template>
                <template #description>
                    <slot name="description" />
                </template>
            </SectionTitle>
        </div>
        <div class="border-t border-gray-300 px-4 py-5 sm:px-6">
            <slot name="content" />
        </div>
    </div>
</template>
