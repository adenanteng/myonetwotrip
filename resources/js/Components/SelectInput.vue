<script setup>
import {createApp, onMounted, ref} from 'vue'
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'

defineProps({
    modelValue: String | Number,
    option: Object,
});


defineEmits(['update:modelValue']);

</script>

<template>

    <Listbox
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :horizontal="true"
    >
        <div class="relative mt-1 block">
            <ListboxButton
                class="bg-white relative w-full flex justify-between cursor-default py-2 pl-3 pr-4 text-left border border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"
            >
                <span class="block truncate capitalize" >
                    {{ option[modelValue] }}
                </span>
<!--                <span class="block truncate" v-else>-->

<!--                </span>-->
                <span class="pointer-events-none inset-y-0 block items-center ">
                    <i class="fa-regular fa-angle-down"></i>
                </span>
            </ListboxButton>

            <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <ListboxOptions
                    class="z-40 absolute mt-2 max-h-60 w-full overflow-auto rounded-2xl bg-white/25 backdrop-blur text-base shadow-lg focus:outline-none sm:text-sm border border-gray-300"
                >
                    <ListboxOption
                        v-slot="{ active, selected }"
                        v-for="(list, index) in option"
                        :key="index"
                        :value="index"
                        class="inline-flex"
                        as="template"
                    >
                        <li :class="[
                                active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900',
                                'capitalize relative cursor-default select-none py-2 px-3 m-1 pr-4 inline-flex rounded-2xl focus:ring focus:ring-indigo-200 focus:ring-opacity-50',]"
                        >
                                <span :class="[ selected ? 'font-medium' : 'font-normal', 'block truncate',]">
                                    {{ list }}
                                </span>

                            <span v-if="selected" class="inset-y-0 left-0 flex items-center pl-1.5">
                                    <i class="fa-solid fa-check text-indigo-600"></i>
                                </span>
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </transition>
        </div>
    </Listbox>
</template>
