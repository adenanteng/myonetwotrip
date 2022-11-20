<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="border border-gray-300 bg-white/25 overflow-hidden shadow-xl sm:rounded-2xl">
            <Welcome/>
        </div>
    </AppLayout>
</template>
