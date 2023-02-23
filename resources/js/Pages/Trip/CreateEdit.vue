<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SectionBorder from '@/Components/SectionBorder.vue';

import UpdateInformationForm from "@/Pages/Trip/Partials/UpdateInformationForm.vue";
import DeleteForm from "@/Pages/Trip/Partials/DeleteForm.vue";
import UpdateHeroForm from "@/Pages/Trip/Partials/UpdateHeroForm.vue";
import UpdateContentForm from "@/Pages/Trip/Partials/UpdateContentForm.vue";
import UpdateItineraryForm from "@/Pages/Trip/Partials/UpdateItineraryForm.vue";
import UpdateIncludeForm from "@/Pages/Trip/Partials/UpdateIncludeForm.vue";

</script>

<template>
    <AppLayout title="Paket Wisata"
               name="Paket Wisata"
               desc="lorem ipsum"
               action="Kembali"
               :href="route('trip.index')"
    >

        <div>
            <div class="max-w-7xl mx-auto py-10">
                <div >
                    <UpdateInformationForm :trip="$page.props.trip ?? '' " />

                    <SectionBorder />
                </div>

                <template v-if="$page.props.trip">
                    <UpdateHeroForm :trip="$page.props.trip" />

                    <SectionBorder />

                    <UpdateContentForm :trip="$page.props.trip" />

                    <SectionBorder />

                    <UpdateItineraryForm :trip="$page.props.trip" />

                    <SectionBorder />

                    <UpdateIncludeForm :trip="$page.props.trip" />

                    <SectionBorder />

                    <DeleteForm :trip="$page.props.trip" />
                </template>
            </div>
        </div>
    </AppLayout>
</template>
