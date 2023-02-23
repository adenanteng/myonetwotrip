<script setup>
import {Head, Link, useForm} from '@inertiajs/inertia-vue3';
import LandingLayout from "@/Layouts/LandingLayout.vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import TextAreaInput from "@/Components/TextAreaInput.vue";
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import Heading from "@/Components/Heading.vue";
import Table from "@/Components/Table.vue";
import {ref} from "vue";

const props = defineProps({
    blog: Object | String,
    category: Object
});

const form = useForm({
    blog_id: props.blog.id,
    id: null,
    name: null,
    desc: null,
    icon: null,
});

const editBlogCategory = (index) => {
    form.defaults({
        id: props.category[index].id,
        name: props.category[index].name,
        desc: props.category[index].desc,
        icon: props.category[index].icon
    })
    form.reset()
}

const resetBlogCategory = () => {
    form.defaults({
        id: null,
        name: null,
        desc: null,
        icon: null
    })
    form.reset()
}

const storeBlogCategory = () => {

    if (form.id == null) {
        form.post(route('blog.addCategory'), {
            errorBag: 'storeCategory',
            preserveScroll: true,
            onSuccess: () => resetBlogCategory(),
        });
    } else {
        form.put(route('blog.editCategory', props.category), {
            errorBag: 'updateInformation',
            preserveScroll: true,
            onSuccess: () => resetBlogCategory(),
        });
    }
};

const deleteCategory = (id) => {
    form.delete(route('blog.deleteCategory', id), {
        preserveScroll: true,
        onSuccess: () => {
            // detailForm.reset()
        },
    })
};

const searchQuery = ref('')
const gridTitle = [
    'Nama',
    'Keterangan',
]
const gridColumns = [
    'name',
    'desc',
]

</script>

<template>
    <AppLayout title="Blog"
               name="Blog"
               desc="lorem ipsum"
               action="Tambah Blog"
               :href="route('blog.create')"
               >

        <form id="search">
            <TextInput
                name="query"
                v-model="searchQuery"
                type="text"
                class="mt-1 block w-96 mb-5 shadow"
                placeholder="Cari disini"
            />
        </form>

        <Table
            :title="gridTitle"
            :data="$page.props.blog"
            :columns="gridColumns"
            :filter-key="searchQuery"
            routes="blog"
            :slug=true
            :view=true
            :edit=true
        />


        <Heading >
            <template #header>
                Blog Kategori
            </template>

        </Heading>

        <div class="flex gap-5">

            <div class="-mx-4 shadow border border-gray-300 ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-2xl mb-10 grow">
                <table class="min-w-full divide-y divide-gray-300 dark:divide-gray-600 rounded-2xl">
                    <thead class="">
                    <tr>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Judul</th>
                        <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Deskripsi</th>
                        <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">Status</th>

                        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">

                        </th>
                    </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-300 dark:divide-gray-600 bg-white bg-opacity-25 ">
                    <tr v-for="(category, index) in $page.props.category" :key="category.id">
                        <td class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                            <i class="fa-regular mr-2" :class="category.icon"></i> {{ category.name }}
                            <dl class="font-normal lg:hidden">
                                <dd class="mt-1 truncate text-gray-700">{{ category.desc }}</dd>
                                <dd class="mt-1 truncate text-gray-500 sm:hidden"
                                    :class="category.status == 1 ? 'text-green-500' : 'text-red-500' " >
                                    {{ category.status == 1 ? 'Terbit' : 'Draft' }}
                                </dd>
                            </dl>
                        </td>
<!--                        <td class="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{{ category.desc }}</td>-->
                        <td class="hidden px-3 py-4 text-sm sm:table-cell"
                            :class="category.status == 1 ? 'text-green-500' : 'text-red-500' " >
                            {{ category.status == 1 ? 'Aktif' : 'Nonaktif' }}
                        </td>
<!--                        <td class="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{{ blog.user.name }}</td>-->
                        <td class="px-3 py-4 text-sm text-gray-500">{{ category.desc }}</td>
                        <td class="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <div class="relative">
                                <Dropdown align="right" width="48">
                                    <template #trigger>
                                        <button class="text-indigo-600 hover:text-indigo-900">
                                            Aksi
                                        </button>
                                    </template>

                                    <template #content>
                                        <!-- Account Management -->
                                        <DropdownLink as="button" @click="editBlogCategory(index)">
                                            Ubah
                                        </DropdownLink>

                                        <div class="border-t border-gray-100"/>

                                        <DropdownLink v-if="category.status == 1" href="#">
                                            Nonaktifkan
                                        </DropdownLink>

                                        <DropdownLink v-else href="#">
                                            Terbitkan
                                        </DropdownLink>

                                        <DropdownLink @click="deleteCategory(category.id)" >
                                            <span class="text-red-500">Hapus</span>
                                        </DropdownLink>
                                    </template>
                                </Dropdown>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <FormSection @submitted="storeBlogCategory" >
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

                    <div class="col-span-6 sm:col-span-4">
                        <InputLabel for="icon" value="Icon" />
                        <TextInput
                            id="icon"
                            v-model="form.icon"
                            type="text"
                            class="mt-1 block w-full"
                            autocomplete="icon"
                            required
                        />
                        <InputError :message="form.errors.icon" class="mt-2" />
                    </div>
                </template>

                <template #actions>
                    <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                        Berhasil disimpan.
                    </ActionMessage>

                    <SecondaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing" class="mr-2" @click="resetBlogCategory">
                        Reset
                    </SecondaryButton>

                    <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        Simpan
                    </PrimaryButton>
                </template>
            </FormSection>

        </div>
    </AppLayout>



</template>
