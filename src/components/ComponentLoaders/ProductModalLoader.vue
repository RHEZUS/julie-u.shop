<template>
    <div class="animate-pulse blog pmd:px-10 min-h-80 border pb-8 bg-white">
        <!-- Single result -->
        <div class="py-5 px-2 md:px-10">
            <!-- Product Image -->
            <div class="grid grid-cols-12">

                <div class="col-span-12 md:col-span-6 group flex items-center bg-slate-200 overflow-hidden justify-center"></div>


                <!-- Product Info -->
                <div class="modal-inner modal-details bg-white  col-span-12 md:col-span-6 relative bg-transparent scrollCard">
            
                    <form @submit.prevent="addToCart()" class="w-full flex flex-col h-full px-5 py-5">
    
                    <p class="h-2 w-full bg-slate-200"></p>
    
                    <div class="mt-4 h-2 w-16 bg-slate-200"></div>

                    <div class="">
                        <div class="space-y-3 mt-6">
                            <div class="h-2 bg-slate-200 rounded"></div>
                            <div class="grid grid-cols-3 gap-4">
                                <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                                <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                            </div>
                            <div class="h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
    
                    <!-- Products variants -->

                    <!-- product with more than one option options -->
                    <div class="mt-4">
                        <!-- List colors -->
                        <div class="mt-4 h-2 w-16 bg-slate-200"></div>
                        <div class="flex gap-4 text-black-500 items-center py-5">
                            <div v-for="item in 5" class="h-6 w-6 bg-slate-200 rounded-full col-span-2"></div>
                        </div>
                        <!-- List variants -->
                        <div class="mt-4 h-2 w-16 bg-slate-200"></div>
                        <div class="flex gap-4 items-center py-5 flex-wrap">
                            <div v-for="item in 5" class="h-6 w-6 bg-slate-200 rounded col-span-2"></div>
                        </div>
                    </div>
                    
                    <div class="mt-4">
                        <!--Quantity-->
                        <div class="mt-4 h-2 w-16 bg-slate-200"></div>
                        <div class="grid grid-cols-12 mt-4 gap-4">
                            <div class="col-span-4 h-7 text-xl flex justify-between relative bg-white border border-black rounded">
                                <div type="button" class="w-[30px] h-full bg-slate-200"></div>
                                <div class="w-10 h-full bg-white text-center outline-none border-none"  style="padding: 0 30px;"></div>
                                <div type="button" class="w-[30px] h-full bg-slate-200"></div>
                            </div>

                            <!--Add to  cart button-->
                            <div class="col-span-8 rounded">
                                <div class="h-6 w-full bg-slate-200 rounded-full col-span-2"></div>
                            </div>
                        </div>
                    </div>
            
                    <div class="h-5"></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>