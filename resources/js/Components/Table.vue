<script setup>
import { ref, computed } from 'vue'
import Dropdown from "./Dropdown.vue";
import DropdownLink from "./DropdownLink.vue";

const props = defineProps({
    title: Array,
    data: Array,
    columns: Array,
    filterKey: String,
    routes: String,
    slug: {
        type: Boolean,
        default: false
    },
    view: {
        type: Boolean,
        default: false
    },
    edit: {
        type:Boolean,
        default: false
    }
})

const sortKey = ref('')
const sortOrders = ref(
    props.columns.reduce((o, key) => ((o[key] = 1), o), {})
)

const filteredData = computed(() => {
    let { data, filterKey } = props
    if (filterKey) {
        filterKey = filterKey.toLowerCase()
        data = data.filter((row) => {
            return Object.keys(row).some((key) => {
                return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            })
        })
    }
    const key = sortKey.value
    if (key) {
        const order = sortOrders.value[key]
        data = data.slice().sort((a, b) => {
            a = a[key]
            b = b[key]
            return (a === b ? 0 : a > b ? 1 : -1) * order
        })
    }
    return data
})

function sortBy(key) {
    sortKey.value = key
    sortOrders.value[key] *= -1
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

<template>
    <div class="-mx-4 shadow-lg border border-gray-300 ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-2xl">
        <table v-if="filteredData.length" class="min-w-full divide-y divide-gray-300 dark:divide-gray-600 rounded-2xl">
            <thead>
            <tr >
                <th v-for="(key, index) in columns"
                    @click="sortBy(key)"
                    :class="{ active: sortKey == key }"
                    class="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900"
                >
                    <div class="flex items-center">
                        {{ capitalize(title[index]) }}
                        <span class="fa-regular ml-1 text-xs"
                              :class="sortOrders[key] > 0 ? 'fa-angle-down' : 'fa-angle-up'" />
                    </div>

                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="entry in filteredData">
                <td v-for="key in columns" class="px-3 py-4 text-sm text-gray-700">
                    {{entry[key]}}
                </td>

                <td v-if="routes" class="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <div class="relative">
                        <Dropdown align="right" width="48">
                            <template #trigger>
                                <button class="text-primary-600 hover:text-primary-900">
                                    Aksi
                                </button>
                            </template>

                            <template #content>
                                <!-- Account Management -->
                                <template v-if="slug">
                                    <DropdownLink v-if="view" :href="route(routes+'.show', entry.slug)">
                                        Lihat
                                    </DropdownLink>

                                    <DropdownLink v-if="edit" :href="route(routes+'.edit', entry.slug)">
                                        Ubah
                                    </DropdownLink>
                                </template>

                                <template v-else>
                                    <DropdownLink v-if="view" :href="route(routes+'.show', entry)">
                                        Lihat
                                    </DropdownLink>

                                    <DropdownLink v-if="edit" :href="route(routes+'.edit', entry)">
                                        Ubah
                                    </DropdownLink>
                                </template>

                            </template>
                        </Dropdown>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>

        <p v-else class="p-2 text-gray-900">No matches found.</p>
    </div>
</template>

<style>
/*table {*/
/*    border: 2px solid #42b983;*/
/*    border-radius: 3px;*/
/*    background-color: #fff;*/
/*}*/

/*th {*/
/*    background-color: #42b983;*/
/*    color: rgba(255, 255, 255, 0.66);*/
/*    cursor: pointer;*/
/*    user-select: none;*/
/*}*/

/*td {*/
/*    background-color: #f9f9f9;*/
/*}*/

/*th,*/
/*td {*/
/*    min-width: 120px;*/
/*    padding: 10px 20px;*/
/*}*/

/*th.active {*/
/*    color: #fff;*/
/*}*/

/*th.active .arrow {*/
/*    opacity: 1;*/
/*}*/

.arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
}

.arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
}

.arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
}
</style>
