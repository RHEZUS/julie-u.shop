<template>
    <div>
        <div class="grid grid-cols-12 justify-between items-center h-16 px-2 md:px-10 border-b">
            <!-- Manage language -->
            <div class="col-span-3 lg:col-span-4 hidden md:block">
                <div class="flex group w-fit relative hover:cursor-pointer justify-center items-center bg-black-50">
                    <div class="px-2">
                        <i class='bx bx-world'></i>
                    </div>
                    <div class="text-lg px-2">EN</div>


                    <div class="bg-white w-max p-4 hidden group-hover:flex font-medium hover:cursor-pointer flex-col gap-3 absolute left-0 top-8 border h-max" style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;">
                        <p><i class='bx bx-world'></i> Choose language </p>
                        <div class="flex gap-2">
                            <button class="border py-1 px-2"> English </button>
                            <button class="border py-1 px-2"> Francais </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-1 block md:hidden">
                <Responsive :categories="categories" />
            </div>

            <div class="col-span-4 md:col-span-4 lg:col-span-4 text-left md:text-center">
                <a href="/" class="uppercase font-bold text-[30px] whitespace-nowrap inline text-white">
                    <div class="pointer-events-none">
                        <span class="text-black-500 px-2">Julie</span>
                        <span class="text-pink-600 px-2 hidden sm:inline">Underwear</span>
                        <span class="text-white bg-pink-600 px-2 inline sm:hidden">U</span>
                    </div>
                    
                </a>
            </div>
            <div class="col-span-7 md:col-span-5 lg:col-span-4 flex items-center justify-end gap-4 md:gap-6">
                <Search />
                <button class="group relative" style="z-index: 1;">
                    <i class='text-2xl bx bx-user'></i>
                    <div v-if="!isAuth" class="bg-white w-max hidden group-hover:inline-block font-medium hover:cursor-pointer flex-col gap-3 absolute -right-2 top-8 border h-max" style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;">
                        <div class="border-b-2 p-6 flex flex-col gap-4">
                            <div class="text-lg font-semibold">You are not logged in Yet </div>
                            <Button btnClass="w-full border py-2 btn-dark"> Login </Button>
                        </div>
                        <div class="flex justify-between items-center gap-4 p-6 text-base">
                            <div class="">
                                <i class="bi bi-cart3"></i> <span>Track your orders</span>
                            </div>
                            <div class="">
                                <i class="bi bi-heart-fill"></i> <span>Your Favorites</span>
                            </div>
                        </div>
                    </div>
                    <div v-else class="bg-white w-max hidden group-hover:inline-block font-medium hover:cursor-pointer flex-col gap-3 absolute -right-2 top-8 border h-max" style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;">
                        <div class="border-b p-4 flex flex-col gap-4">
                            <a href="#" class="text-start flex gap-2"><i class='text-lg bx bx-user'></i> Profile</a>
                            <a href="#" class="text-start flex gap-2"><i class="text-lg bi bi-cart3"></i> Track Orders</a>
                            <a href="/wishlist" class="text-start flex gap-2"><i class='text-lg bx bx-heart' ></i> Wishlist</a>
                            <a href="#" class="text-start flex gap-2"><i class='text-lg bx bx-help-circle' ></i> Help</a>
                        </div>
                        <div class="flex justify-between items-center gap-4 p-4 text-base">
                            <a href="#">Logout</a>
                        </div>
                    </div>
                </button>
                <a href="/wishlist">
                    <i class='text-2xl bx bx-heart' ></i>
                </a>
                <a href="/cart">
                    <i class="text-2xl bi bi-cart3"></i>
                </a>
            </div>
        </div>
        <div class="hide-scroll px-10 hidden md:flex gap-6 justify-between min-h-12 items-center overflow-x-scroll">
            <a class="text-base font-medium text-nowrap" v-for="category in categories.slice(0, 12)" :href="'/products/category/' + category.slug">
                {{ category.name }}
            </a>
        </div>
        <div class="bg-black-500 text-black-300">
            <div class="px-10 hidden md:flex max-w-[80%] ml-auto mr-auto justify-between min-h-8 items-center text-sm">
                <div class=""><i class="text-lg bi bi-cart3"></i> Free Shipping </div>
                <div class=""><i class="bi bi-repeat"></i> 30 Days return policy</div>
                <div class=""><i class="bi bi-credit-card"></i> Secure payment</div>
            </div>
        </div>
        
    </div>
</template>
<script>
import Search from "@/components/Search/index.vue";
import Icon from "@/components/Icon/index.vue";
import Button from "@/components/Button/index.vue";
import { categories } from "@/constant/data";
import Responsive from './Responsive.vue';
import apiClient from '@/plugins/axios';
export default {
    name: 'HomeHeader',
    data() {
        return {
            isShow: false,
            isAuth: true,
            categories: [],
        }
    },
    components: {
        Button,
        Icon,
        Responsive,
        Search,
    },
    methods: {
        showLanguage() {
            this.isShow = !this.isShow
        },
        fetchCategories() {
            //this.tableData.loading = true;
            apiClient.get('api/categories/top')
            .then(response => {
                const results = response.data;
                this.categories = results.categories;
            })
            .catch(message => {
                console.error('Error fetching categories:', message);
            });
            //this.tableData.loading = false;
        },
    },
    mounted() {
        this.fetchCategories();
    }
}
</script>
<style scoped>
.hide-scroll::-webkit-scrollbar {
    display: none;
  }
  
.hide-scroll{
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
</style>