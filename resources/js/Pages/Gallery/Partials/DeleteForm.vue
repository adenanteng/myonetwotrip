<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import ActionSection from '@/Components/ActionSection.vue';
import DangerButton from '@/Components/DangerButton.vue';
import DialogModal from '@/Components/DialogModal.vue';
import InputError from '@/Components/InputError.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

const props = defineProps({
    gallery: Object
})

const passwordInput = ref(null);

const form = useForm({
    id: props.gallery.id,
});

const deletePage = () => {
    form.delete(route('gallery.destroy', props.gallery), {
        preserveScroll: true,
        // onSuccess: () => closeModal(),
        // onError: () => passwordInput.value.focus(),
        // onFinish: () => form.reset(),
    });
};

</script>

<template>
    <ActionSection>
        <template #title>
            Hapus Galeri
        </template>

        <template #description>
            Hapus galeri secara permanen
        </template>

        <template #content>
            <div class="max-w-xl text-sm text-gray-600">
                Setelah akun dihapus, semua sumber daya dan datanya akan dihapus secara permanen.
            </div>

            <div class="mt-5">
                <DangerButton class="" @click="deletePage">
                    Hapus Galeri
                </DangerButton>
            </div>

        </template>
    </ActionSection>
</template>
