<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SectionBorder from '@/Components/SectionBorder.vue';

import UpdateInformationForm from "@/Pages/Gallery/Partials/UpdateInformationForm.vue";
import DeleteForm from "@/Pages/Gallery/Partials/DeleteForm.vue";

</script>

<template>
    <AppLayout title="Galeri"
               name="Galeri"
               desc="lorem ipsum"
               action="Kembali"
               :href="route('gallery.index')"
    >

        <div>
            <div class="max-w-7xl mx-auto py-10">
                <div >
                    <UpdateInformationForm :gallery="$page.props.gallery ?? '' " />

                    <SectionBorder />
                </div>

                <template v-if="$page.props.gallery">
                    <DeleteForm :gallery="$page.props.gallery" />
                </template>
            </div>
        </div>
    </AppLayout>
</template>
