<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
</script>

<template>
    <AppLayout title="Dashboard"
               greeting="Selamat datang kembali,"
               :name="$page.props.user.name"
               :desc="$page.props.user.email"
               :avatar="$page.props.user.profile_photo_url"
    >

<!--        <div class="">-->
<!--            <div class="bg-white bg-opacity-25 overflow-hidden shadow-lg sm:rounded-2xl border border-gray-300">-->
<!--                <Welcome />-->
<!--            </div>-->
<!--        </div>-->


    </AppLayout>
</template>
