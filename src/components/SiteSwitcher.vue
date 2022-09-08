<template>
    <div>
        <Popover v-slot="{ open }" class="relative">
            <PopoverButton :class="open ? '' : 'text-opacity-90'"
                class="group inline-flex items-center text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <span>
                    <img class="h-10 w-10" :src="Logo" alt="logo">
                </span>

                <svg :class="open ? '' : 'text-opacity-70'"
                    class="ml-2 h-4 w-4 text-neutral-300 transition duration-150 ease-in-out group-hover:text-opacity-80"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>

            </PopoverButton>

            <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0"
                enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
                leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
                <PopoverPanel
                    class="absolute left-1/2 z-10 mt-3 w-screen max-w-sm px-4 sm:px-0 lg:max-w-3xl">
                    <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div class="relative grid gap-8 bg-neutral-800 p-7 lg:grid-cols-2">
                            <a v-for="item in solutions" :key="item.name" :href="item.href"
                                class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-50">
                                <div
                                    class="flex h-10 w-10 shrink-0 rounded bg-neutral-700/20 items-center justify-center text-white sm:h-12 sm:w-12">
                                    <div v-html="item.icon"></div>
                                </div>
                                <div class="ml-4">
                                    <p class="text-sm font-medium text-neutral-50">
                                        {{ item.name }}
                                    </p>
                                    <p class="text-sm text-neutral-500">
                                        {{ item.description }}
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </PopoverPanel>
            </transition>
        </Popover>
    </div>
</template>
  
<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import Logo from "../assets/logo.svg"

const solutions = [
    {
        name: 'Physgun - Hosting',
        description: 'All the tools you need to host your server backed by powerful hardware.',
        href: 'https://billing.physgun.com/aff.php?aff=2',
        icon: `
        <svg classs="w-4 h-4" width="32" height="32" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="190" cy="190" r="180" fill="#224FB1" stroke="#0C0C0C" stroke-width="20"/>
            <circle cx="180" cy="180" r="155" fill="#2563EB"/>
        </svg>

        `,
    },
    {
        name: 'Gmodload',
        description: 'Completely free hosted loading screens.',
        href: 'https://gmodload.com',
        icon: `
        <svg classs="w-4 h-4" width="32" height="32" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="190" cy="190" r="180" fill="#224FB1" stroke="#0C0C0C" stroke-width="20"/>
            <circle cx="180" cy="180" r="155" fill="#2563EB"/>
        </svg>

        `,
    }

]
</script>