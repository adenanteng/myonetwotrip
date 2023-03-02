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
    gallery: Object | String,
});

</script>

<template>
    <AppLayout title="Galeri"
               name="Galeri"
               desc="lorem ipsum"
               action="Tambah Galeri"
               :href="route('gallery.create')"
    >

        <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8">
            <div class="">
                <!--                    <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">-->
                <!--                        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Team</h2>-->
                <!--                        <p class="text-xl text-gray-500">Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus quis et.</p>-->
                <!--                    </div>-->
                <ul role="list" class="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 list-none">
                    <template v-for="item in props.gallery" :key="item.name">
                        <Link :href="route('gallery.edit', item)">
                        <li class="my-5 sm:my-0 nightwind-prevent-block">
                            <div class="relative">
                                <img class="object-cover shadow-lg rounded-2xl h-64 w-full" :src="item.media[0].original_url" alt="" />
                                <div class="absolute bottom-0 left-0 right-0 rounded-b-2xl py-2 px-3 bg-primary-500 bg-opacity-50 backdrop-blur">
                                    <h3 class="font-medium text-white">{{ item.name }}</h3>
                                    <p class="text-gray-200 text-sm">{{ item.desc }}</p>
                                </div>
                            </div>
                        </li>
                        </Link>
                    </template>
                </ul>
            </div>
        </div>

    </AppLayout>



</template>
