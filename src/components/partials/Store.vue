<template>
    <div class="relative overflow-hidden text-left shadow-xl group rounded-xl bg-neutral-800">

        <div class="relative z-20 ">
            <figure class="relative overflow-hidden pt-[8.5rem] select-none bg-neutral-800">
                <div class="absolute inset-0 z-0 w-full h-full bg-neutral-600 animate-pulse"></div>
                <div class="absolute inset-0 w-full h-full overflow-hidden">
                    <img class="absolute inset-0 object-cover object-center w-full h-full" src="/store_bg.png"
                        alt="store bg">
                    <div
                        class="block absolute z-10 top-0 inset-x-0 h-[8.5rem] bg-gradient-to-b from-transparent to-neutral-800">
                    </div>
                    <div
                        class="block absolute z-10 top-0 inset-x-0 h-[8.5rem] bg-gradient-to-b from-transparent to-neutral-800">
                    </div>
                </div>
            </figure>

            <div class="absolute inset-x-0 z-50 -translate-y-16 rounded-full">
                <img class="z-50 block object-cover w-32 h-32 m-auto rounded-full pointer-events-none select-none motion-safe:transition ring-8 ring-neutral-800"
                    alt="$500,000 In-game Cash" width="80" height="80" src="/store_logo.png" loading="lazy">
            </div>

            <div>
                <div class="px-4 py-2 mt-32">
                    <button type="button"
                        class="relative inline-flex items-center justify-center w-full px-3 text-sm font-semibold text-white rounded-lg focus:outline-none h-9 bg-primary-500 highlight-white/20 hover:bg-primary-400"
                        style="text-shadow: black 0 0 2px">
                        Purchase for $5.00
                    </button>
                </div>
            </div>
            <div class="flex flex-col px-4 py-2">
                <h2 class="text-2xl font-bold text-neutral-50">
                    $500,000 In-game Cash
                </h2>

                <div
                    class="prose text-neutral-400 break-words whitespace-pre-line max-w-none overflow-y-auto max-h-[18rem]">
                    <p>Get $500,000 to use in-game after purchasing this product.</p>
                </div>
            </div>
        </div>

        <div class="absolute top-0 right-0 z-10 w-full h-full highlight-white/5 rounded-xl"></div>
    </div>
</template>