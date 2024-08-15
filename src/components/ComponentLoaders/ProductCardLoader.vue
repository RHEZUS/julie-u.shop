<template>
    <div class="w-full animate-pulse overflow-hidden bg-white pb-2" ref="ProductCart border">
      
        <div class="relative group z-0">
          <!-- Image -->
          <div class="flex items-center justify-center bg-slate-200 w-full h-[260px]"></div>
        </div>
        <!-- Product details -->
        <div class="w-full px-2">
            <div class="mt-3 bg-slate-200 w-full h-4"></div>
            <div class="mt-3 bg-slate-200 w-full h-4"></div>
        </div>
        
        <div class="flex items-center gap-4 px-2 py-5">
            <div v-for="item in 5" class="h-6 w-6 bg-slate-200 rounded-full col-span-2"></div>
        </div>
        
        
      </div>
</template>
<script>
</script>