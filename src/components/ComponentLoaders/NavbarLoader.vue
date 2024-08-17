<template>
  <div class="bg-white">
    <div class="grid grid-cols-12 justify-between items-center h-16 px-2 md:px-10 border-b">
        <!-- Manage language -->
        <div class="col-span-3 lg:col-span-4 hidden md:block">
          <div class="flex h-6 w-6 bg-slate-200"></div>
        </div>

        <!--Sidebar toggler-->
        <div class="col-span-1 block md:hidden">
          <div class="flex h-6 w-6 bg-slate-200"></div>
        </div>

        <!--Logo-->
        <div class="col-span-4 md:col-span-4 lg:col-span-4 text-left md:text-center">
          <div class="h-4 w-full bg-slate-200"></div>
        </div>

        <!--Top Right icons-->
        <div class="col-span-7 md:col-span-5 lg:col-span-4 flex items-center justify-end gap-4 md:gap-6">
          <div v-for="item in 5" class="h-6 w-6 bg-slate-200 rounded-full col-span-2"></div>
        </div>
    </div>

    <!--Categories-->
    <div class="hide-scroll px-10 hidden md:flex gap-6 justify-between min-h-12 items-center overflow-x-hidden">
        <div v-for="category in 10" class="h-4 w-1/4 bg-slate-200 "></div>
    </div>
    <!--ping navbar-->
    <div class="bg-slate-200 text-white hidden">
        <div class="px-10 hidden md:flex max-w-[80%] ml-auto mr-auto justify-between min-h-8 items-center text-sm"></div>
    </div>
    
  </div>
</template>
<script>
export default {
  name: 'NavbarLoader',

  props: {
    pageLoading: {
      type: Boolean,
      default: false
    }
  }
};
</script>