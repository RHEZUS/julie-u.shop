<template>
    <div class="bg-white px-4 animate-pulse rounded-lg">
        <!-- Search section -->
        <div class="mb-4">
            <div class="h-3 mb-2 w-full bg-slate-200 rounded"></div>
            <div>
                <div class="flex rounded-lg h-11">
                <div class="h-[44px] mb-2 w-full bg-white border-slate-200 border"></div>
                  <div type="text"  class="w-[50px] bg-slate-200">

                  </div>
                </div>
            </div>
        </div>

        <!-- Recent posts section -->
        <div class="mb-4">
            <div class="h-3 mb-2 w-full bg-slate-200 rounded"></div>
            <!-- Add your recent posts list here -->

            <div v-for="article in 5" class="mb-4">
                <div class="flex items-center gap-3">
                    <div class="">
                        <div alt="blog" class="w-20 h-20 bg-slate-200 rounded-lg"></div>
                    </div>
                    <div class="w-full">
                        <div class="h-3 mb-3 w-full bg-slate-200 rounded"></div>
                        <div class="h-3 mb-2 w-full bg-slate-200 rounded"></div>
                    </div>
                </div>
            </div>

        </div>

        <!-- Categories section -->
        <div class="mb-4">
            <div class="h-3 my-3 w-full bg-slate-200 rounded"></div>
            <!-- Add your categories list here -->
            <ul>
                <a v-for="category in 7" class="p-1"><li class="flex items-center justify-between"><div class="h-3 mb-2 w-full max-w-[40%] bg-slate-200 rounded"></div> <div class="h-3 w-3 mb-2 bg-slate-200 rounded"></div></li></a>
            </ul>
        </div>

        <!-- Share on social media section -->
        <div class="hidden">
            <h2 class="text-lg font-bold mb-2 border-l-4 p-2 border-blue-800" style="color: black;">Share on Social Media</h2>
            <!-- Add your social media sharing buttons here -->
        </div>
    </div>
</template>