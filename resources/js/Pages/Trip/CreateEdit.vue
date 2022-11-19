<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import DeleteUserForm from '@/Pages/Profile/Partials/DeleteUserForm.vue';
import LogoutOtherBrowserSessionsForm from '@/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue';
import SectionBorder from '@/Components/SectionBorder.vue';
import UpdateTripInformationForm from "@/Pages/Trip/Partials/UpdateTripInformationForm.vue";
import UpdateTripItineraryForm from "@/Pages/Trip/Partials/UpdateTripItineraryForm.vue";
import UpdateTripPhotoForm from "@/Pages/Trip/Partials/UpdateTripPhotoForm.vue";

defineProps({
    confirmsTwoFactorAuthentication: Boolean,
});
</script>

<template>
    <AppLayout title="Profile">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Wisata
            </h2>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <div>
                    <UpdateTripInformationForm :trip="$page.props.trip ?? ''" />

                    <SectionBorder />
                </div>

                <div v-if="$page.props.trip">
                    <UpdateTripPhotoForm :trip="$page.props.trip" />

                    <SectionBorder />
                </div>

                <div v-if="$page.props.trip">
                    <UpdateTripItineraryForm :trip="$page.props.trip" />

                    <SectionBorder />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
