<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SectionBorder from '@/Components/SectionBorder.vue';

import UpdateInformationForm from "@/Pages/User/Partials/UpdateInformationForm.vue";
import DeleteForm from "@/Pages/User/Partials/DeleteForm.vue";
import PasswordResetForm from "./Partials/PasswordResetForm.vue";

</script>

<template>
    <AppLayout title="Pengguna"
               name="Pengguna"
               desc="lorem ipsum"
               action="Kembali"
               href="/user"
    >

        <div>
            <div class="max-w-7xl mx-auto py-10">
                <div >
                    <UpdateInformationForm :users="$page.props.users ?? '' " />

                    <SectionBorder />
                </div>

                <template v-if="$page.props.users">
                    <PasswordResetForm :users="$page.props.users" />

                    <SectionBorder />

                    <DeleteForm :users="$page.props.users" />
                </template>
            </div>
        </div>
    </AppLayout>
</template>
