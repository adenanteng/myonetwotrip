<script setup>
import {computed, ref} from 'vue';
import { Inertia } from '@inertiajs/inertia';
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
    name: props.trip.name ?? null,
    desc: props.trip.desc ?? null,
    location: props.trip.location ?? null,
    price: props.trip.price ?? null,
    category_id: props.trip.category_id ?? null,
    city_id: props.trip.city_id ?? null,
    status: props.trip.status ?? null,
});

const photoInput = ref(null);

const storeTripInformation = () => {
    if (photoInput.value) {
        form.photo = photoInput.value.files[0];
    }

    if (props.trip.name == null) {
        form.post(route('trip.store'), {
            errorBag: 'storeTripInformation',
            preserveScroll: true,
            onSuccess: () => showTrip(),
        });
    } else {
        form.put(route('trip.update', props.trip), {
            errorBag: 'storeTripInformation',
            preserveScroll: true,
            onSuccess: () => showTrip(),
        });
    }

};

const showTrip = () => {

};

function NumbersOnly(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
    } else {
        return true;
    }
}

</script>

<template>
    <FormSection @submitted="storeTripInformation">
        <template #title>
            Informasi Wisata
        </template>

        <template #description>
            Update your account's profile information and email address.
        </template>

        <template #form>

            <!-- Name -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="name" value="Judul" />
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

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="desc" value="Deskripsi" />
                <TextAreaInput
                    id="desc"
                    v-model="form.desc"
                    class="mt-1 block w-full"
                    rows="5"
                    required
                />
                <InputError :message="form.errors.desc" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="category" value="Kategori" />
                <SelectInput
                    id="category"
                    v-model:model-value.number="form.category_id"
                    :option="$page.props.selectCategory"
                    required
                />
                <InputError :message="form.errors.category_id" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="location" value="Destinasi" />
                <TextInput
                    id="location"
                    v-model="form.location"
                    type="text"
                    class="mt-1 block w-full capitalize"
                    autocomplete="location"
                    required
                />
                <InputError :message="form.errors.location" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="city" value="Kota" />
                <SelectInput
                    id="city"
                    v-model:model-value.number="form.city_id"
                    :option="$page.props.selectCity"
                    required
                />
                <InputError :message="form.errors.city_id" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="price" value="Harga" />
                <TextInput
                    id="price"
                    v-model.number="form.price"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="price"
                    required
                    v-on:keypress="NumbersOnly"
                />
                <InputError :message="form.errors.price" class="mt-2" />
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
