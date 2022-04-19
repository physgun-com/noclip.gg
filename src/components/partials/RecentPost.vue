<template>
    <div class="absolute transform z-[99] w-[320px] left-[60%] bottom-[-120px]">
        <div class="overflow-hidden shadow-xl group rounded-xl bg-neutral-800 motion-safe:transition">
            <div class="relative z-20 divide-y divide-neutral-200/5 ">
                <div class="relative flex p-4 overflow-hidden bg-neutral-900/10 motion-safe:transition">
                    <h3 class="truncate text-neutral-200">
                        Member Statistics
                    </h3>
                </div>

                <div class="flex items-center justify-between px-4 py-2">
                    <dt class="text-neutral-200">
                        Total Members
                    </dt>

                    <dd class="font-medium text-neutral-400">
                        153
                    </dd>
                </div>

                <div class="flex items-center px-4 py-2 text-neutral-400">
                    <a href="http://kings.noclip.test/members/aOcRIcw8MHpi9Gkn">
                        <img class="object-cover w-16 h-16 rounded-full pointer-events-none select-none"
                            url="/avatar.jpg" alt="atlas" src="/avatar.jpg" loading="lazy">
                    </a>

                    <div class="flex flex-col ml-4">
                        <div>Newest Member</div>
                        <a href="http://kings.noclip.test/members/aOcRIcw8MHpi9Gkn"
                            style="color: #ffffff; text-shadow: 0 0 4px #ffe500;">
                            atlas
                        </a>

                        <div class="text-neutral-400">Joined 1 week ago</div>
                    </div>
                </div>
            </div>

            <div class="absolute top-0 right-0 z-10 w-full h-full highlight-white/5 rounded-xl"></div>
        </div>
    </div>
</template>