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
    blog: Object | String,
});

const form = useForm({
    name: props.blog.name ?? null,
    desc: props.blog.desc ?? null,
    category_id: props.blog.category_id ?? null,
    photo: null,
});

const storeBlogInformation = () => {

    if (props.blog.name == null) {
        form.post(route('blog.store'), {
            errorBag: 'storeBlogInformation',
            preserveScroll: true,
            onSuccess: () => showPage(),
        });
    } else {
        form.put(route('blog.update', props.blog), {
            errorBag: 'updateBlogInformation',
            preserveScroll: true,
            onSuccess: () => showPage(),
        });
    }
};

const showPage = () => {

};


</script>

<template>
    <FormSection @submitted="storeBlogInformation">
        <template #title>
            Informasi Blog
        </template>

        <template #description>
            Update your account's profile information and email address.
        </template>

        <template #form>
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

            <div class="col-span-6 sm:col-span-5">
                <InputLabel for="desc" value="Deskripsi" />
                <TextAreaInput
                    id="desc"
                    v-model="form.desc"
                    class="mt-1 block w-full"
                    rows="2"
                    required
                />
                <InputError :message="form.errors.desc" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-5">
                <InputLabel for="category" value="Kategori" />
                <SelectInput
                    id="category"
                    v-model:model-value.number="form.category_id"
                    :option="$page.props.selectCategory"
                    class="mt-1 block w-full"
                    required
                />
                <InputError :message="form.errors.category_id" class="mt-2" />
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
