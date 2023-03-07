<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import TextInput from '@/Components/TextInput.vue';
import {ref} from "vue";
import Table from "@/Components/Table.vue";

const props = defineProps({
    trip: Object | String,
});

const searchQuery = ref('')
const gridTitle = [
    'Nama',
    'Keterangan',
    'Kategori',
    'Kota'
]
const gridColumns = [
    'name',
    'desc',
    'category',
    'city'
]

</script>

<template>
    <AppLayout title="Paket Wisata"
               name="Paket Wisata"
               desc="lorem ipsum"
               action="Tambah Paket"
               :href="route('trip.create')"
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
            :data="$page.props.trip"
            :columns="gridColumns"
            :filter-key="searchQuery"
            routes="trip"
            :slug=true
            :view=true
            :edit=true
        />

    </AppLayout>



</template>
