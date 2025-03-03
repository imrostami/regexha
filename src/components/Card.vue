<template>
      <div
      data-aos="fade-up"
     data-aos-offset="300"
     data-aos-duration="800"
     data-aos-once="true"
            class="dark:bg-[#1e1e1e] rounded-2xl shadow-md overflow-hidden hover:transition-all hover:duration-300 dark:border-neutral-700 dark:lg:hover:border-neutral-400 hover:shadow-lg hover:lg:scale-[101%] border-2 border-neutral-200 lg:hover:border-neutral-300 select-none">
            <div class="p-5">
                <div class="flex justify-between items-start mb-3 flex-row-reverse">
                    <span
                        class="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-neutral-700 text-gray-600 dark:text-gray-400">{{ category }}</span>
                    <h3 class="text-lg font-bold text-neutral-800 dark:text-gray-200" dir="rtl">
                    {{name}}
                    </h3>
                </div>

                <div class="bg-gray-100 dark:bg-neutral-700 rounded-lg p-3 mb-4 font-mono text-sm overflow-x-auto">
                    <code class="text-rose-600 dark:text-rose-400 overflow-hidden text-ellipsis whitespace-nowrap max-w-xs block">{{ pattern }}</code>
                </div>

                <p class="text-gray-600 dark:text-neutral-400 text-sm mb-4" dir="rtl">
                    {{ caption }}
                </p>

                <div class="flex justify-end">
                    <button @click="copyCode"
                        class="flex items-center gap-1 px-3 py-1.5 cursor-pointer bg-rose-500 hover:bg-rose-600 text-white rounded-md text-sm transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        کپی
                    </button>
                </div>
            </div>
        </div>
</template>

<script setup>

import { useToast } from "vue-toastification";
const toast = useToast();



const props = defineProps(['category','name','caption','pattern'])



function copyCode(){
    navigator.clipboard.writeText(props.pattern ?? '');
    toast.info('کد کپی شد')
}
</script>