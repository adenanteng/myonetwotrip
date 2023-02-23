<script setup>
import {Head, Link, useForm} from '@inertiajs/inertia-vue3';
import LandingLayout from "@/Layouts/LandingLayout.vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import SelectInput from "@/Components/SelectInput.vue";
import {ref} from "vue";
import Table from "@/Components/Table.vue";

const props = defineProps({
    users: Object | String,
});

const searchQuery = ref('')
const gridTitle = [
    'Nama',
    'Email',
    'Peran',
    'Bergabung',
]
const gridColumns = [
    'name',
    'email',
    'role',
    'created',
]

</script>

<template>
    <AppLayout title="Pengguna"
               name="Pengguna"
               desc="lorem ipsum"
               action="Tambah Pengguna"
               :href="route('user.create')"
    >

        <form id="search">
            <TextInput
                name="query"
                v-model="searchQuery"
                type="text"
                class="mt-1 block w-96 mb-5 shadow"
                placeholder="Cari disini"
            />
        </form>

        <Table
            :title="gridTitle"
            :data="props.users"
            :columns="gridColumns"
            :filter-key="searchQuery"
            routes="user"
            :edit=true
        />

    </AppLayout>



</template>
