<template>
    <div class="fixed w-full h-screen top-[0px] left-0 duration-700 hidden" style="background-color: rgb(0 0 0 / 50%);" :class="{'visible' : showSidebar, 'hidden': !showSidebar}"></div>
    <div ref="RespNav" class="visible lg:hidden col-span-2">
        <div  @click="showSidebar = true"  class="col-span-2 text-black visible text-3xl hover:cursor-pointer relative flex items-center">
            <!--Show when the responsive menu is closed-->
            <div v-if="!showSidebar" class="pointer-events-none">
              <svg class="w-[22px] h-[22px]" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"></path>
              </svg>
            </div>
            <!--Show when the responsive menu is opened-->
            
        </div>
        <!-- Responsive Sidebar -->
        <div :class="{'translate-x-0' : showSidebar, '-translate-x-[600px]': !showSidebar}" class="duration-700 border lg:hidden absolute left-0 top-[0px] p-5 w-full sm:w-[400px] z-50 bg-white text-black"  ref="sidebar" style="height: calc(100vh - 0px); box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;">
            <div class="flex justify-between items-center gap-2">
                <a href="#" class="bg-black-50 w-1/4 py-1 text-center rounded-md"><i class='text-2xl bx bx-user'></i></a>
                <a href="#" class="bg-black-50 w-1/4 py-1 text-center rounded-md"><i class="text-2xl bi bi-cart3"></i></a>
                <a href="#" class="bg-black-50 w-1/4 py-1 text-center rounded-md"><i class='text-2xl bx bx-heart' ></i></a>
                <button  @click="showSidebar = false" class="w-1/4"><i v-if="showSidebar"  class='text-2xl text-black bx bx-x'></i></button>
            </div>

            <div class="grid grid-cols-2 justify-between flex-wrap items-center gap-2 my-3">
                <p class="col-span-2 mt-3 text-black-500 font-bold text-center py-[4px] text-[20px]">Categories</p>
                <a href="#" v-for="category in categories.slice(0, 8)" class="bg-black-50 col-span-1 py-2 text-start px-2 rounded-md flex items-center justify-between">
                    <span>{{category}}</span>
                    <img class="w-8 h-8 rounded-full" src="https://www.zeeman.com/media/catalog/product/2/0/2010020408999_Front03.jpg?quality=90&fit=bounds&height=700&width=700&canvas=700:700" />
                </a>
            </div>

            <div class="grid grid-cols-5 justify-between flex-wrap items-center gap-2 my-3">
                <p class="col-span-5 mt-3 text-black-500 font-bold text-center py-[4px] text-[20px]">Social Media</p>
                <a href="#" class="col-span-1 text-2xl text-start rounded-md"><i class='bx bxl-facebook' ></i></a>
                <a href="#" class="col-span-1 text-2xl text-start rounded-md"><i class='bx bxl-instagram' ></i></a>
                <a href="#" class="col-span-1 text-2xl text-start rounded-md"><i class='bx bxl-twitter' ></i></a>
                <a href="#" class="col-span-1 text-2xl text-start rounded-md"><i class='bx bxl-pinterest-alt' ></i></a>
                <a href="#" class="col-span-1 text-2xl text-start rounded-md"><i class='bx bxl-tiktok' ></i></a>
            </div>


        </div>
    </div>
    
</template>
<script>
import { categories } from '@/constant/data';


export default {
    data(){
        return{
            showSidebar: false,
        }
    },
    components:{
    },
    props: {
        categories  : {
            type: Array,
            default: () => []
        }
    },
    methods:{
        handleClickOutside(event) {
            // Check if the click was outside the referenced element
            if (this.$refs.RespNav && !this.$refs.RespNav.contains(event.target)) {
                this.showSidebar = false;
                //console.log('check if the click was outside the referenced element');
            }
        },
    },
    mounted() {
        // Add the event listener when the component is mounted
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
        // Remove the event listener when the component is destroyed
        document.removeEventListener('click', this.handleClickOutside);
    },
}
</script>
<style scoped>
@media screen and (max-width: 768px) {
    .toggler{
        display: block;
    } 
}
@media screen and (min-width: 768px) {
    .toggler{
        display: none;
    } 
}
@media screen and (min-width: 1024px) {
    .toggler{
        display: none;
    } 
}
</style>