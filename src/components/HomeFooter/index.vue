<template>
    <div v-if="loading" class="px-2 md:px-10 grid grid-cols-12 lg:grid-cols-10 bg-white border-t py-10 gap-8 text-black-500">
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

    <div v-else class="px-2 md:px-10 grid grid-cols-12 bg-white border-t py-10 gap-8 text-black-500">
        <div class="capitalize col-span-full md:col-span-6 lg:col-span-6">
            <p class="text-xl font-medium py-3"> Julie Underwear</p>
            <p class="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, nulla rem.</p>
            <ul>
                <li class="py-2 flex items-start gap-4">
                    <i class='text-base bx bx-current-location'></i>
                    Atalar Mahallesi, Kurban Sokak, 34710 Üsküdar, Istanbul, Turkey
                </li>
                <li class="py-2 flex items-start gap-4">
                    <i class='text-base bx bxs-phone-call' ></i>
                    +905526456574
                </li>
                <li class="py-2 flex items-start gap-4">
                    <i class='text-base bx bx-envelope' ></i>
                    ludivinseunda2@gmail.com 
                </li>
                <li class="py-2 flex items-start gap-4">
                    <a href="#" class=""><div class="bg-white w-8 h-8 rounded-full flex justify-center items-center text-lg"><i class='bx bxl-facebook' ></i></div></a>
                    <a href="#" class=""><div class="bg-white w-8 h-8 rounded-full flex justify-center items-center text-lg"><i class='bx bxl-whatsapp'></i></div></a>
                    <a href="#" class=""><div class="bg-white w-8 h-8 rounded-full flex justify-center items-center text-lg"><i class='bx bxl-tiktok' ></i></div></a>
                    <a href="#" class=""><div class="bg-white w-8 h-8 rounded-full flex justify-center items-center text-lg"><i class='bx bxl-instagram' ></i></div></a>
                </li>
            </ul>
        </div>
        <div class="capitalize text-base col-span-6  md:col-span-3 lg:col-span-3">
            <p class="text-xl font-medium py-3"> {{ $t('usefulLinks') }}</p>
            <a href="/">
                <li class="py-2 text-base text-black-500 flex items-start gap-4">
                    {{ $t('Home') }}
                </li>
            </a>
            <a href="">
                <li class="py-2 text-base text-black-500 flex items-start gap-4">
                    {{ $t('contactUs') }}
                </li>
            </a>
            <a href="/wishlist">
                <li class="py-2  text-black-500 flex items-start gap-4">
                    {{ $t('wishlist') }}
                </li>
            </a>
            <a href="">
                <li class="py-2 text-base text-black-500 flex items-start gap-4">
                    {{ $t('myCart') }}
                </li>
            </a>
            <a href="/order-again">
                <li class="py-2 text-base text-black-500 flex items-start gap-4">
                    {{ $t('myOrders') }}
                </li>
            </a>
        </div>
        <div class="capitalize col-span-6  md:col-span-3 lg:col-span-3">
            <p class="text-xl font-medium py-3"> {{ $t('categories') }}</p>
            <a v-if="categories.length > 0" v-for="category in categories.slice(0, 6)"  :href="'/products/category/' + category.slug">
                <li class="py-2 text-black-500 flex items-start gap-4">
                    {{category.name}}
                </li>
            </a>
        </div>
    </div>
    
</template>
<script>
import apiClient from "@/plugins/axios";
import { load } from "@amcharts/amcharts5/.internal/core/util/Net";
import axios from "axios";
export default {
    data() {
        return {
            token: localStorage.getItem('authToken'),
            categories: [],
            brands: [],
            loading: false,
        };
    },
    methods:{
        async fetchBrands() {
            await axios.get('api/brands/top')
            .then(response => {
                const results = response.data;
                this.brands = results.brands;
            })
            .catch(message => {
                console.error('Error fetching brands:', message);
            });
        },
        async fetchCategories() {
            await axios.get('api/categories/top')
            .then(response => {
                this.categories = response.data.categories;
                console.log(this.categories);
                
            })
            .catch(message => {
                console.error('Error fetching categories:', message);
            });
        },
    },
    mounted(){
        this.loading = true;
        this.fetchBrands().then(() => {
            this.fetchCategories().then(() => {
                this.loading = false;
            });
        });
        
    }
}
</script>
<style scoped>
</style>