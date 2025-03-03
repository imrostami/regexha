<template>
    <div class="lg:mx-auto lg:py-3 py-1 w-auto mx-4">
        <div class="max-w-md mx-auto relative">
            <input type="text" :value="modelValue" @input="updateValue" placeholder="جستجوی الگو ... (نام , دسته بندی , توضیحات)"
                class="w-full px-4 py-2 pr-10 rounded-xl border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all duration-300 text-sm"
                dir="rtl" />
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>
