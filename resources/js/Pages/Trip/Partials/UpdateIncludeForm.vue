<script setup>
import {onMounted, ref, watch} from 'vue';
import {Inertia} from '@inertiajs/inertia';
import {Link, useForm} from '@inertiajs/inertia-vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import EditorInput from "@/Components/EditorInput.vue";

const props = defineProps({
    trip: Object | String,
});

const form = useForm({
    id: props.trip.id,
    include: props.trip.include ?? null,
});

const updateInclude = () => {

    form.put(route('trip.update', props.trip), {
        errorBag: 'updateInformation',
        preserveScroll: true,
        onSuccess: () => showPage(),
    });
};

const showPage = () => {

};

</script>

<template>
    <FormSection @submitted="updateInclude">
        <template #title>
            Include
        </template>

        <template #description>
            Update your account's profile information and email address.
        </template>

        <template #form>

            <div class="col-span-6 sm:col-span-6">

                <EditorInput v-model="form.include" />

                <InputError :message="form.errors.include" class="mt-2"/>

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
