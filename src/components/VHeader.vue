<template>
  <header
    class="h-16 px-6 flex justify-between items-center flex-row-reverse bg-white dark:bg-neutral-900 transition-colors duration-300">
    <button @click="themeToggleClick" id="darkmodeToggle"
      class="relative flex items-center justify-center w-10 h-10 text-gray-600 dark:text-gray-100 p-2 rounded-xl cursor-pointer transition-colors delay-200 md:hover:text-neutral-500 md:dark:hover:text-gray-200">
      <span class="absolute inset-0 flex items-center justify-center transition-transform duration-300"
        :class="appTheme === 'light' ? 'rotate-out' : 'rotate-in'">
        <svg v-if="appTheme === 'light'" key="moon" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
        </svg>
        <svg v-else key="sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
        </svg>
      </span>
    </button>

    <a target="_blank" href="https://github.com/imrostami/regex-explorer" class="relative flex items-center justify-center w-10 h-10 text-gray-600 dark:text-gray-100 p-2 rounded-xl cursor-pointer transition-colors delay-200 md:hover:text-neutral-500 md:dark:hover:text-gray-200">
      <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
    </a>

  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const appThemeKey = "regexa-theme";
const appTheme = ref(localStorage.getItem(appThemeKey) || 'light');

const applyTheme = () => {
  document.documentElement.classList.toggle("dark", appTheme.value === 'dark');
};

onMounted(applyTheme);

function themeToggleClick() {
  appTheme.value = appTheme.value === 'dark' ? 'light' : 'dark';
  localStorage.setItem(appThemeKey, appTheme.value);
  applyTheme();
}
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
