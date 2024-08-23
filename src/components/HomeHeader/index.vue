<template>
    <div  v-if="pageLoading" class="bg-white">
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
    <div v-if="!pageLoading" class="bg-white">
        <div class="grid grid-cols-12 justify-between items-center h-16 px-2 md:px-10 border-b">
            <!-- Manage language -->
            <Language />
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
                    <i class='text-2xl bx bx-user hover:text-pink-600'></i>
                    <div v-if="!authStore.isAuthenticated" class="bg-white w-max hidden group-hover:inline-block font-medium hover:cursor-pointer flex-col gap-3 absolute -right-2 top-8 border h-max" style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;">
                        <div class="border-b-2 p-6 flex flex-col gap-4">
                            <div class="text-lg font-semibold">{{ $t('notLoggedInYet') }} </div>
                            <a href="/login" class="w-full border py-2 btn-dark"> Login </a>
                        </div>
                        <div class="flex justify-between items-center gap-4 p-6 text-base">
                            <a href="/cart"class="hover:text-pink-600">
                                <i class="bi bi-cart3"></i> <span>{{$t('myCart') }}</span>
                            </a>
                            <a href="/wishlist" class="hover:text-pink-600">
                                <i class="bi bi-heart-fill"></i> <span>{{$t('wishlist')}}</span>
                            </a>
                        </div>
                    </div>
                    <div v-if="authStore.isAuthenticated" class="bg-white w-max hidden group-hover:inline-block font-medium hover:cursor-pointer flex-col gap-3 absolute -right-2 top-8 border h-max" style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;">
                        <div class="border-b p-4 flex flex-col gap-4">
                            <a href="/profile-setting" class="text-start flex gap-2 hover:text-pink-600"><i class='text-lg nullbx bx-user'></i> Profile</a>
                            <a href="#" class="text-start flex gap-2 hover:text-pink-600"><i class="text-lg bi bi-cart3"></i> Track Orders</a>
                            <a href="/wishlist" class="text-start flex gap-2 hover:text-pink-600"><i class='text-lg bx bx-heart' ></i> Wishlist</a>
                            <a href="#" class="text-start gap-2 hidden hover:text-pink-600"><i class='text-lg bx bx-help-circle' ></i> Help</a>
                        </div>
                        <div @click="logout()" class="flex hover:text-pink-600 justify-between items-center gap-4 p-4 text-base">
                            <button>Logout</button>
                        </div>
                    </div>
                </button>
                <a class="hover:text-pink-600" href="/wishlist">
                    <i class='text-2xl bx bx-heart' ></i>
                </a>
                <a class="hover:text-pink-600 relative" href="/cart">
                    <i class="text-2xl bi bi-cart3"></i>
                    <div class="w-5 h-5 p-2 top-0 -right-2 rounded-full bg-pink-600 text-white absolute flex items-center justify-center"> {{ cartItemCount }} </div>
                </a>
            </div>
        </div>
        <div v-if="categories.length > 0" class="hide-scroll px-10 hidden md:flex gap-6 justify-between min-h-12 items-center overflow-x-scroll">
            <a class="text-base font-medium text-nowrap hover:text-pink-600" v-for="category in categories.slice(0, 12)" :href="'/products/category/' + category.slug">
                {{ category.name }}
            </a>
        </div>
        <div class="bg-pink-600 text-white">
            <div class="px-10 hidden md:flex max-w-[80%] ml-auto mr-auto justify-between min-h-8 items-center text-sm">
                <div class=""><i class="text-lg bi bi-cart3"></i> {{ $t('freeShipping') }} </div>
                <div class=""><i class="bi bi-repeat"></i> 30 {{ $t('returnPolicy') }}</div>
                <div class=""><i class="bi bi-credit-card"></i> {{ $t('securePayment') }}</div>
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
import Language from "./Language.vue";
import { authStore } from "@/store/auth";

import NavLoader from "@/components/ComponentLoaders/NavbarLoader.vue";

import apiClient from '@/plugins/axios';
import axios from "axios";
import { EventBus } from "@/eventBus";
import { checkAuth } from "@/utils/checkAuth";
import { logout } from "@/utils/logout";
export default {
    name: 'HomeHeader',
    data() {
        return {
            authStore: authStore(),
            isShow: false,
            isAuth: checkAuth() ? true : false,
            categories: [],
            cartItemCount: 0,
            eventContent: '',
            logout: logout,
            pageLoading: false,
        }
    },
    components: {
        Button,
        Icon,
        Responsive,
        Search,
        Language,
        NavLoader,

    },
    methods: {
        showLanguage() {
            this.isShow = !this.isShow
        },
        changeLanguage(){
            
        },
        countCart(){
            //let cart  = JSON.parse(localStorage.getItem('cart'));
            this.cartItemCount = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0;
        },
        async fetchCategories() {
            //this.tableData.loading = true;
            await axios.get('api/categories/top')
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
    async mounted() {
        this.pageLoading = true;
        this.fetchCategories().then(() => {
            this.countCart();
            this.emitter.on('cartUpdated', (evt) => {
                this.cartItemCount = evt.eventContent;
            });
        }).finally(() => {
            this.pageLoading = false;
        });
        
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