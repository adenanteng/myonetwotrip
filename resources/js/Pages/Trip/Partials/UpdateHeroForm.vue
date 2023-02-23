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
import SectionTitle from "@/Components/SectionTitle.vue";

const props = defineProps({
    trip: Object,
});

const form = useForm({
    id: props.trip.id,
    photo: null,
});

const photoPreview = ref(null);
const photoInput = ref(null);

const storeHero = () => {
    if (photoInput.value) {
        form.photo = photoInput.value.files[0];
    }

    form.post(route('trip.addHero'), {
        errorBag: 'storeHero',
        preserveScroll: true,
        onSuccess: () => {
            photoPreview.value = null;
            clearPhotoFileInput();
            form.reset();
        },
    });
};

const selectNewPhoto = () => {
    photoInput.value.click();
};

const updatePhotoPreview = () => {
    const photo = photoInput.value.files[0];

    if (!photo) return;

    const reader = new FileReader();

    reader.onload = (e) => {
        photoPreview.value = e.target.result;
    };

    reader.readAsDataURL(photo);
};

const deletePhoto = (trip, index) => {
    Inertia.delete(route('trip.deleteHero', [trip, index]), {
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
    <FormSection @submitted="storeHero">
        <template #title>
            Foto Galeri
        </template>

        <template #description>
            Update your account's profile information and email address.
        </template>

        <template #preview>
            <!-- Current Profile Photo -->

        </template>

        <template #form>

            <div class="col-span-6 grid grid-cols-2 gap-3 flex-wrap mb-5">
                <template v-for="(hero, index) in props.trip.media">
                    <div class="relative flex-1 flex flex-col border border-gray-300 rounded-2xl shadow-xl">
                        <img v-if="hero" class="aspect-video rounded-2xl"
                             :src="hero.original_url" alt=""/>
                        <!--                        <div class="px-6 pt-3 pb-5">-->
                        <!--                            <h3 class=" text-gray-900 text-base font-semibold">{{ hero.name }}</h3>-->
                        <!--                            <p class="text-gray-500 text-sm">{{ hero.desc }}</p>-->
                        <!--                        </div>-->
                        <div class="absolute bottom-0 right-0">
                            <DangerButton @click.prevent="deletePhoto(props.trip.id, hero.id)" class="rounded-none py-4 inline-flex rounded-br-2xl rounded-tl-2xl">
                                <i class="fa-duotone fa-trash" />
                                <span class="ml-3">Hapus</span>
                            </DangerButton>
                        </div>
                    </div>
                </template>
            </div>

            <!-- Profile Photo -->
            <div class="col-span-6 sm:col-span-3">
                <!-- Profile Photo File Input -->
                <input
                    ref="photoInput"
                    type="file"
                    class="hidden"
                    @change="updatePhotoPreview"
                >

                <InputLabel for="photo" value="Galeri"/>

                <div class="block mt-2">
                    <div v-if="photoPreview" class="" @click.prevent="selectNewPhoto">
                        <span
                            class="block rounded-2xl w-full aspect-video px-2 bg-cover bg-no-repeat bg-center border border-gray-300"
                            :style="'background-image: url(\'' + photoPreview + '\');'"
                        />
                    </div>

                    <button v-else @click.prevent="selectNewPhoto" type="button"
                            class="relative block w-full p-12 text-center border-2 border-gray-400 border-dashed focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm">
                        <i class="fa-duotone fa-image text-gray-400 text-5xl"></i>
                        <span class="mt-2 block text-sm font-medium text-gray-900">Tambah Foto</span>
                    </button>
                </div>

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

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Simpan
            </PrimaryButton>
        </template>
    </FormSection>
</template>
