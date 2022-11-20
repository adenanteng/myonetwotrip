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
    Amenity: Object
});

const form = useForm({
    trip_id: props.trip.id,
    name: null,
    group_id: null,
});

const storeTripAmenity = () => {
    form.post(route('trip.addAmenity'), {
        errorBag: 'addAmenity',
        preserveScroll: true,
        onSuccess: () => form.reset('name'),
        onError: () => {

        },
    });
};

</script>

<template>
    <FormSection @submitted="storeTripAmenity">
        <template #title>
            Informasi Fasilitas
        </template>

        <template #description>
            Ensure your account is using a long, random password to stay secure.
        </template>

        <template #form>
            <div class="col-span-6" v-if="trip.amenity[0]">
                <ul class="space-y-5">
                    <!--                    <template v-for="amenity in trip.amenity">-->
                    <li class="">
                        <h4 class="font-medium capitalize"><i
                            class="fa-regular fa-check font-normal text-green-600 mr-2"/>Include</h4>
                        <ul class="text-gray-600 ml-10 list-disc">
                            <template v-for="include in trip.amenity">
                                <li v-if="include.group_id == 1" class="">
                                    {{ include.name }}
                                </li>
                            </template>
                        </ul>
                    </li>
                    <div class="py-1">
                        <div class="border-t border-gray-300"/>
                    </div>
                    <li class="">
                        <h4 class="font-medium capitalize"><i
                            class="fa-regular fa-x font-normal text-red-600 mr-2"/>Exclude</h4>
                        <ul class="text-gray-600 ml-10 list-disc">
                            <template v-for="exclude in trip.amenity">
                                <li v-if="exclude.group_id == 2" class="">
                                    {{ exclude.name }}
                                </li>
                            </template>
                        </ul>
                    </li>

                    <div class="py-1">
                        <div class="border-t border-gray-300"/>
                    </div>
                    <!--                    </template>-->
                </ul>

            </div>

            <div class="col-span-6 border-2 border-dashed border-indigo-300 rounded-2xl p-3">
                <div class="flex justify-between items-end mb-5">
                    <h4>Tambah Fasilitas</h4>
                    <ActionMessage :on="form.recentlySuccessful" class="mx-3">
                        Berhasil disimpan.
                    </ActionMessage>
                </div>
                <div class="flex gap-3">
                    <div class="grow">
                        <InputLabel for="amenityCategory" value="Kategori"/>
                        <SelectInput
                            id="amenityCategory"
                            v-model:model-value.number="form.group_id"
                            :option="$page.props.selectAmenity"
                            required
                        />
                    </div>
                    <div class="grow">
                        <InputLabel for="amenityName" value="Deskripsi"/>
                        <TextAreaInput
                            id="amenityName"
                            v-model="form.name"
                            type="text"
                            class="mt-1 block w-full"
                            rows="1"
                            required
                        />
                    </div>
                    <div class="flex items-end">
                        <PrimaryButton class="py-2.5" :class="{ 'opacity-25': form.processing }"
                                       :disabled="form.processing">
                            Tambah
                        </PrimaryButton>
                    </div>

                </div>

            </div>

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
