<script setup>
import {computed, ref} from 'vue';
import {Inertia} from '@inertiajs/inertia';
import {Link, useForm, usePage} from '@inertiajs/inertia-vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import TextAreaInput from "@/Components/TextAreaInput.vue";
import SelectInput from "@/Components/SelectInput.vue";
import DangerButton from "@/Components/DangerButton.vue";

const props = defineProps({
    trip: Object,
});

const form = useForm({
    trip_id: props.trip.id,
    photo: null,
});

const photoPreview = ref(null);
const photoInput = ref(null);

const storeTripPhoto = () => {
    if (photoInput.value) {
        form.photo = photoInput.value.files[0];
    }

    form.post(route('trip.addPhoto'), {
        errorBag: 'storeTripInformation',
        preserveScroll: true,
        onSuccess: () => showTrip(),
    });

};

const showTrip = () => {

};

const selectNewPhoto = () => {
    photoInput.value.click();
};

const updatePhotoPreview = () => {
    storeTripPhoto();
    // const photo = photoInput.value.files[0];
    //
    // if (! photo) return;
    //
    // const reader = new FileReader();
    //
    // reader.onload = (e) => {
    //     photoPreview.value = e.target.result;
    // };
    //
    // reader.readAsDataURL(photo);
};

const deletePhoto = (index) => {
    Inertia.delete(route('trip.deletePhoto', [form.trip_id, index]), {
        preserveScroll: true,
        onSuccess: () => {
            photoPreview.value = null;
            clearPhotoFileInput();
        },
    });
};

const clearPhotoFileInput = () => {
    if (photoInput.value?.value) {
        photoInput.value.value = null;
    }
};
</script>

<template>
    <FormSection @submitted="storeTripPhoto">
        <template #title>
            Galeri Wisata
        </template>

        <template #description>
            Update your account's profile information and email address.
        </template>

        <template #form>
            <!-- Profile Photo -->
            <div class="col-span-6 sm:col-span-6">
                <!-- Profile Photo File Input -->
                <input
                    ref="photoInput"
                    type="file"
                    class="hidden"
                    @change="updatePhotoPreview"
                >

                <InputLabel for="photo" value="Galeri"/>

                <!-- Current Profile Photo -->
                <div v-if="trip.media[0]" class="block mt-2 flex gap-3 flex-wrap">
                    <template v-for="(media, index) in trip.media">
                        <div class="text-center">
                            <img :src="media.original_url" :alt="trip.name" class="rounded-2xl h-40 w-40 object-cover">

                            <DangerButton
                                type="button"
                                class="mt-2"
                                @click.prevent="deletePhoto(index)"
                            >
                                Hapus Foto
                            </DangerButton>
                        </div>
                    </template>
                </div>

                <div v-else class="block mt-2">
                    <button @click.prevent="selectNewPhoto" type="button"
                            class="relative block w-full p-12 text-center border-2 border-gray-400 border-dashed focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm">
                        <i class="fa-duotone fa-image text-gray-400 text-5xl"></i>
                        <span
                            class="mt-2 block text-sm font-medium text-gray-900"> Tambahkan foto pertama ke galeri </span>
                    </button>
                </div>

                <!-- New Profile Photo Preview -->
                <!--                <div v-show="photoPreview" class="mt-2 inline-flex">-->
                <!--                    <span-->
                <!--                        class="block rounded-2xl h-40 w-40 px-2 bg-cover bg-no-repeat bg-center"-->
                <!--                        :style="'background-image: url(\'' + photoPreview + '\');'"-->
                <!--                    />-->
                <!--                </div>-->

                <!--                <SecondaryButton class="mt-2 mr-2" type="button" @click.prevent="selectNewPhoto">-->
                <!--                    Tambah Foto-->
                <!--                </SecondaryButton>-->

                <InputError :message="form.errors.photo" class="mt-2"/>
            </div>

        </template>

        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                Berhasil disimpan.
            </ActionMessage>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                           @click.prevent="selectNewPhoto">
                Tambah Foto
            </PrimaryButton>

            <!--            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">-->
            <!--                Simpan-->
            <!--            </PrimaryButton>-->
        </template>
    </FormSection>
</template>
