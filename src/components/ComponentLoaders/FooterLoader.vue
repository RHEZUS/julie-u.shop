<template>
    <div class="px-2 md:px-10 grid grid-cols-12 lg:grid-cols-10 bg-white border-t py-10 gap-8 text-black-500">
        <div class="capitalize col-span-full md:col-span-6 lg:col-span-4">
            <div class="mt-4 h-2 w-16 bg-slate-200"></div>
            <div class="space-y-3 mt-6">
                <div class="h-2 bg-slate-200 rounded"></div>
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-200 rounded"></div>
            </div>
            <ul>
                <div v-for="item in 3" class="py-2 flex items-start gap-4">
                    <div class="h-4 w-4 bg-slate-200 rounded-full col-span-2"></div>
                    <div class="h-2 w-[80%] bg-slate-200 rounded"></div>
                </div>
                <li class="py-2 flex items-start gap-4">
                    <div v-for="item in 4" class="h-6 w-6 bg-slate-200 rounded-full col-span-2"></div>
                </li>
            </ul>
        </div>
        <div class="capitalize text-base col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2">
            <div class="mt-4 h-2 w-16 bg-slate-200"></div>
            <ul class="h-full">
                <li v-for="item in 6"  class="h-2 my-4 w-full bg-slate-200"></li>
            </ul>
        </div>
        <div class="capitalize col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2">
            <div class="mt-4 h-2 w-16 bg-slate-200"></div>
            <ul class="h-full">
                <li v-for="item in 6"  class="h-2 my-4 w-full bg-slate-200"></li>
            </ul>
        </div>
        <div class="capitalize text-base col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2">
            <div class="mt-4 h-2 w-16 bg-slate-200"></div>
            <ul class="h-full">
                <li v-for="item in 6"  class="h-2 my-4 w-full bg-slate-200"></li>
            </ul>
        </div> 
    </div>
    
</template>
<script>
</script>