<script setup>
import {ref} from 'vue';
import {useForm} from '@inertiajs/inertia-vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import SelectInput from "@/Components/SelectInput.vue";
import TextAreaInput from "@/Components/TextAreaInput.vue";
import SectionBorder from '@/Components/SectionBorder.vue';

const props = defineProps({
    trip: Object,
    itinerary: Object
});

const form = useForm({
    trip_id: props.trip.id,
    name: null,
});

const formDetail = useForm({
    itinerary_id: null,
    desc: null,
});

const storeTripItinerary = () => {
    form.post(route('trip.addItinerary'), {
        errorBag: 'addItinerary',
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {

        },
    });
};

const storeTripItineraryDetail = () => {
    formDetail.post(route('trip.addItineraryDetail'), {
        errorBag: 'addItineraryDetail',
        preserveScroll: true,
        onSuccess: () => formDetail.reset('desc'),
        onError: () => {

        },
    });
};
</script>

<template>
    <FormSection @submitted="storeTripItinerary">
        <template #title>
            Informasi Itinerary
        </template>

        <template #description>
            Ensure your account is using a long, random password to stay secure.
        </template>

        <template #form>
            <div class="col-span-6" v-if="trip.itinerary[0]">
                <ul class="space-y-5">
                    <template v-for="itinerary in trip.itinerary">
                        <li class="">
                            <h4 class="font-medium capitalize"><i
                                class="fa-regular fa-mountain-city font-normal text-gray-400 mr-2"/> {{ itinerary.name }}</h4>
                            <ul class="text-gray-600 ml-10 list-disc">
                                <template v-for="detail in itinerary.detail">
                                    <li class="">
                                        {{ detail.desc }}
                                    </li>
                                </template>
                            </ul>
                        </li>
                        <div class="py-1">
                            <div class="border-t border-gray-300" />
                        </div>
                    </template>
                </ul>

            </div>

            <div class="col-span-6 border-2 border-dashed border-indigo-300 rounded-2xl p-3">
                <div class="flex justify-between items-end mb-5">
                    <h4>Tambah Judul</h4>
                    <ActionMessage :on="form.recentlySuccessful" class="mx-3">
                        Berhasil disimpan.
                    </ActionMessage>
                </div>
                <div class="flex items-end gap-3">
                    <div class="grow">
                        <InputLabel for="name" value="Judul Itinerary"/>
                        <TextInput
                            id="name"
                            v-model="form.name"
                            type="text"
                            class="mt-1 block w-full capitalize"
                            autocomplete="name"
                            required
                        />
                    </div>
                    <div class="flex items-end">
                        <PrimaryButton class="py-2.5" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            Tambah
                        </PrimaryButton>
                    </div>

                </div>

            </div>

            <template v-if="$page.props.selectItinerary != null">
                <div class="col-span-6 border-2 border-dashed border-indigo-300 rounded-2xl p-3">
                    <form @submit.prevent="storeTripItineraryDetail" class="w-full block">
                        <div class="flex justify-between items-end mb-5">
                            <h4>Tambah Deskripsi</h4>
                            <ActionMessage :on="formDetail.recentlySuccessful" class="mx-3">
                                Berhasil disimpan.
                            </ActionMessage>
                        </div>
                        <div class="flex gap-3">
                            <div class="grow">
                                <InputLabel for="itineraryCategory" value="Kategori"/>
                                <SelectInput
                                    id="itineraryCategory"
                                    v-model:model-value.number="formDetail.itinerary_id"
                                    :option="$page.props.selectItinerary"
                                    required
                                />
                            </div>
                            <div class="grow">
                                <InputLabel for="itineraryDesc" value="Deskripsi"/>
                                <TextAreaInput
                                    id="itineraryDesc"
                                    v-model="formDetail.desc"
                                    type="text"
                                    class="mt-1 block w-full"
                                    rows="1"
                                    required
                                />
                            </div>
                            <div class="flex items-end">
                                <PrimaryButton class="py-2.5" :class="{ 'opacity-25': formDetail.processing }"
                                               :disabled="formDetail.processing">
                                    Tambah
                                </PrimaryButton>
                            </div>
                        </div>
                    </form>
                </div>
            </template>

        </template>

        <!--        <template #actions>-->
        <!--            <ActionMessage :on="form.recentlySuccessful" class="mr-3">-->
        <!--                Berhasil disimpan.-->
        <!--            </ActionMessage>-->

        <!--            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">-->
        <!--                Simpan-->
        <!--            </PrimaryButton>-->
        <!--        </template>-->
    </FormSection>
</template>
