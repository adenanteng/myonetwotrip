<script setup>
import {onBeforeUnmount, onMounted, onUnmounted, ref} from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { Link, useForm } from '@inertiajs/inertia-vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import TextAreaInput from "@/Components/TextAreaInput.vue";
import SelectInput from "@/Components/SelectInput.vue";

const props = defineProps({
    gallery: Object | String,
});

const form = useForm({
    id: props.gallery.id ?? null,
    name: props.gallery.name ?? null,
    desc: props.gallery.desc ?? null,
    photo: null
});

const photoPreview = ref(null);
const photoInput = ref(null);

const storeInformation = () => {
    if (photoInput.value) {
        form.photo = photoInput.value.files[0];
    }

    if (props.gallery.name == null) {
        form.post(route('gallery.store'), {
            errorBag: 'storeInformation',
            preserveScroll: true,
            onSuccess: () => {
                formReset()
            }
        });
    } else {
        form.put(route('gallery.update', form.id), {
            errorBag: 'updateInformation',
            preserveScroll: true,
            onSuccess: () => {
                formReset()
            }
        });
    }
};

const formReset = () => {
    form.defaults({
        id: null,
        name: null,
        desc: null,
        photo: null
    })
    form.reset()
}

const selectNewPhoto = () => {
    photoInput.value.click();
};

const updatePhotoPreview = () => {
    const photo = photoInput.value.files[0];

    if (! photo) return;

    const reader = new FileReader();

    reader.onload = (e) => {
        photoPreview.value = e.target.result;
    };

    reader.readAsDataURL(photo);
};

const clearPhotoFileInput = () => {
    if (photoInput.value?.value) {
        photoInput.value.value = null;
    }
};

</script>

<template>
    <FormSection @submitted="storeInformation">
        <template #title>
            Informasi Galeri
        </template>

        <template #description>
            Perbarui informasi profil akun dan alamat email pengguna.
        </template>

        <template #form>

            <!-- Profile Photo -->
            <div class="col-span-6 sm:col-span-3">
                <!-- Profile Photo File Input -->
                <input
                    ref="photoInput"
                    type="file"
                    class="hidden"
                    @change="updatePhotoPreview"
                >

                <InputLabel for="photo" value="Photo" />

                <!-- Current Profile Photo -->
                <div v-show="! photoPreview" class="mt-2">
                    <template v-if="props.gallery.media !=null">
                        <img :src="props.gallery.media[0].original_url" :alt="gallery.name" class="rounded-2xl h-48 w-auto object-cover">
                    </template>
                </div>

                <!-- New Profile Photo Preview -->
                <div v-show="photoPreview" class="mt-2">
                    <span
                        class="block rounded-2xl h-48 w-auto bg-cover bg-no-repeat bg-center"
                        :style="'background-image: url(\'' + photoPreview + '\');'"
                    />
                </div>

                <SecondaryButton class="mt-2 mr-2" type="button" @click.prevent="selectNewPhoto">
                    Tambah Foto
                </SecondaryButton>

                <!--                <SecondaryButton-->
                <!--                    v-if="user.profile_photo_path"-->
                <!--                    type="button"-->
                <!--                    class="mt-2"-->
                <!--                    @click.prevent="deletePhoto"-->
                <!--                >-->
                <!--                    Hapus Avatar-->
                <!--                </SecondaryButton>-->

                <InputError :message="form.errors.photo" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="name" value="Judul"/>
                <TextInput
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="mt-1 block w-full capitalize"
                    autocomplete="name"
                    required
                />
                <InputError :message="form.errors.name" class="mt-2"/>
            </div>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="desc" value="Keterangan"/>
                <TextInput
                    id="desc"
                    v-model="form.desc"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="email"
                    required
                />
                <InputError :message="form.errors.desc" class="mt-2"/>
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
