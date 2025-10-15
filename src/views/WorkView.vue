<script>
</script>

<template>
    <div>
        <div class="flex items-center justify-between py-[22px]">
            <div>
                <h1 class="text-4xl font-bold">Gigs</h1>
                <span class="text-[16px]">Flexible, fast tasks that fit your schedule.</span>
            </div>
            <div class="flex flex-col gap-2 items-end">
                <div class="flex items-center bg-(--color-primary) px-4 py-4 gap-2 rounded-lg w-fit">
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                    <span class="text-[16px] text-white">Switch to jobs</span>
                    <img src="../components/icons/question-lined.svg" class="">
                </div>
                <div class="flex gap-2">
                    <div class="flex  items-center gap-2 p-4 border rounded-lg border-(--color-border)">
                        <span class="text-[16px]">Most recent</span>

                        <!-- Dropdown Arrow -->
                        <svg class="size-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </div>
                    <img src="../components/icons/filter.svg" class="py-4 px-5 border border-(--color-border) rounded-lg">
                    <img src="../components/icons/bookmark-lined.svg" class="py-4 px-5 border border-(--color-border) rounded-lg">
                </div>
            </div>
        </div>

        
    </div>
    
</template>