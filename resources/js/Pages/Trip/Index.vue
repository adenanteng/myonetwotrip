<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link} from "@inertiajs/inertia-vue3";
import DeleteUserForm from '@/Pages/Profile/Partials/DeleteUserForm.vue';
import LogoutOtherBrowserSessionsForm from '@/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue';
import SectionBorder from '@/Components/SectionBorder.vue';
import UpdateTripInformationForm from "@/Pages/Trip/Partials/UpdateTripInformationForm.vue";
import UpdateTripItineraryForm from "@/Pages/Trip/Partials/UpdateTripItineraryForm.vue";
import UpdateTripPhotoForm from "@/Pages/Trip/Partials/UpdateTripPhotoForm.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";

defineProps({
    confirmsTwoFactorAuthentication: Boolean,
    trip: Object
});

function formatPrice(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

function formatPriceX(value) {
    return formatPrice(value).replace(/0/g, "x")
}

</script>

<template>
    <AppLayout title="Destinasi">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Destinasi
            </h2>

            <PrimaryButton as="a" :href="route('trip.create')">
                Tambah
            </PrimaryButton>
        </template>

        <div>
            <div class="mx-auto sm:px-6 lg:px-8">
                <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <template v-for="trip in $page.props.trip" :key="trip.name">
                        <li
                            class="col-span-1 flex flex-col bg-white/25 rounded-2xl shadow-lg divide-y divide-gray-200 border border-gray-300">
                            <Link :href="route('trip.show', trip.slug)" class="h-full">
                                <div class="relative">
                                    <img v-if="trip.media[0]"
                                         class="object-cover h-80 w-full rounded-t-2xl border-b border-gray-300"
                                         :src="trip.media[0].original_url" alt=""/>
                                    <div v-else class="h-80 rounded-t-2xl border-b border-gray-300"/>
                                    <Link :href="route('trip.edit', trip.slug)" class="absolute top-1 right-1 bg-green-100 hover:bg-green-300 border border-green-300 rounded-2xl h-8 w-8 flex justify-center items-center">
                                        <i class="fa-regular fa-pen text-green-800" />
                                    </Link>
                                </div>
                                <div class="flex-1 flex flex-col px-8 py-4">
                                    <h3 class="text-gray-900 text-sm font-medium">{{ trip.name }}<span class="px-2 py-1 ml-2 text-green-800 text-xs font-medium bg-green-100 rounded-full">{{ trip.category }}</span></h3>
                                    <div class="mt-1 flex-grow flex flex-col space-y-1 text-gray-500 text-xs">
                                        <div class="">
                                            {{ trip.duration }}
                                        </div>
                                        <div class="">
                                            Rp <span class="text-sm">{{ formatPriceX(trip.price) }}</span> / tiket
                                        </div>
                                    </div>
                                </div>
                                <div class="py-3 px-8 border-t border-gray-300 flex items-center">
                                    <i class="fa-regular fa-location-dot "></i>
                                    <span class="ml-3 text-sm capitalize">{{ trip.location }}, {{ trip.city }}</span>
                                </div>
                            </Link>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </AppLayout>
</template>
