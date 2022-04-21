<template>
    <input v-model="message" placeholder="Your community name.." type="text" maxlength="25"
        class="relative p-2 text-sm leading-6 border-none rounded-md shadow-sm appearance-none w-60 ring text-neutral-100 placeholder:text-neutral-500 ring-transparent focus:ring-2 bg-neutral-700 highlight-white/10 focus-within:bg-transparent focus:outline-none focus:ring-primary-500">
    <a class="inline-flex items-center justify-center px-3 mt-2 text-sm font-semibold text-white rounded-lg md:ml-4 md:mt-0 focus:outline-none h-9 bg-primary-500 highlight-white/20 hover:bg-primary-400"
        :href="'https://noclip.me?name=' + urlSlug(message)">
        Create your community
    </a>
</template>

<script setup>
import urlSlug from 'url-slug'

import { ref } from 'vue';
const message = ref('')
</script>