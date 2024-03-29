<script setup>
import { ref } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { Link, useForm } from '@inertiajs/inertia-vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

const props = defineProps({
    setting: Object,
});

const photoPreview = ref(null);
const photoInput = ref(null);

const form = useForm({
    id: props.setting.id ?? null,
    name: props.setting.name ?? null,
    desc: props.setting.desc ?? null,
    photo: null,
});

const updateSettingInformation = () => {
    if (photoInput.value) {
        form.photo = photoInput.value.files[0];
    }

    form.post(route('setting.store'), {
        errorBag: 'storeSettingInformation',
        preserveScroll: true,
        onSuccess: () => clearPhotoFileInput(),
    });


};

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

// const deletePhoto = () => {
//     Inertia.delete(route('current-user-photo.destroy'), {
//         preserveScroll: true,
//         onSuccess: () => {
//             photoPreview.value = null;
//             clearPhotoFileInput();
//         },
//     });
// };

const clearPhotoFileInput = () => {
    if (photoInput.value?.value) {
        photoInput.value.value = null;
    }
};

</script>

<template>
    <FormSection @submitted="updateSettingInformation">
        <template #title>
            Informasi Umum
        </template>

        <template #description>
            Informasi umum tentang aplikasi
        </template>

        <template #form>
            <!-- Profile Photo -->
            <div class="col-span-6 sm:col-span-4">
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
                    <template v-if="props.setting.media !=null">
                        <img :src="props.setting.media[0].original_url" :alt="setting.name" class="rounded-full h-20 w-20 object-cover">
                    </template>
                </div>

                <!-- New Profile Photo Preview -->
                <div v-show="photoPreview" class="mt-2">
                    <span
                        class="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center"
                        :style="'background-image: url(\'' + photoPreview + '\');'"
                    />
                </div>

                <SecondaryButton class="mt-2 mr-2" type="button" @click.prevent="selectNewPhoto">
                    Ubah Logo
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

            <!-- Name -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="name" value="Nama" />
                <TextInput
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="mt-1 block w-full capitalize"
                    autocomplete="name"
                    required
                />
                <InputError :message="form.errors.name" class="mt-2" />
            </div>

            <!-- Email -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="desc" value="Slogan" />
                <TextInput
                    id="desc"
                    v-model="form.desc"
                    type="text"
                    class="mt-1 block w-full"
                />
                <InputError :message="form.errors.desc" class="mt-2" />
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
