<template>
    <div class="px-2 md:px-10 grid grid-cols-12 lg:grid-cols-10 bg-white border-t py-10 gap-8 text-black-500">
        <div class="capitalize col-span-full md:col-span-6 lg:col-span-4">
            <p class="text-xl font-medium py-3"> Julie Underweare</p>
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
        <div class="capitalize text-base col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2">
            <p class="text-xl font-medium py-3"> Useful Links</p>
            <a href="/">
                <li class="py-2 text-base text-black-500 flex items-start gap-4">
                    Home
                </li>
            </a>
            <a href="">
                <li class="py-2 text-base text-black-500 flex items-start gap-4">
                    Contact Us
                </li>
            </a>
            <a href="/wishlist">
                <li class="py-2  text-black-500 flex items-start gap-4">
                    Wishlist
                </li>
            </a>
            <a href="">
                <li class="py-2 text-base text-black-500 flex items-start gap-4">
                    My Cart
                </li>
            </a>
            <a href="/order-again">
                <li class="py-2 text-base text-black-500 flex items-start gap-4">
                    Track Orders
                </li>
            </a>
        </div>
        <div class="capitalize col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2">
            <p class="text-xl font-medium py-3"> Categories</p>
            <a v-if="categories.length > 0" v-for="category in categories.slice(0, 6)"  :href="'/products/category/' + category.slug">
                <li class="py-2 text-black-500 flex items-start gap-4">
                    {{category.name}}
                </li>
            </a>
        </div>
        <div class="capitalize text-base col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2">
            <p class=" text-xl font-medium py-3"> Brands</p>
            <a v-for="brand in brands.slice(0, 6)"  :href="'/product/brand/' + brand.name">
                <li class="py-2 text-black-500 flex items-start gap-4">
                    {{brand.name}}
                </li>
            </a>
        </div> 
    </div>
    
</template>
<script>
    import apiClient from "@/plugins/axios";
    import axios from "axios";
    export default {
        data() {
            return {
                token: localStorage.getItem('authToken'),
                categories: [],
                brands: [],
            };
        },
        methods:{
            fetchBrands() {
                //this.tableData.loading = true;
                axios.get('api/brands/top')
                .then(response => {
                    const results = response.data;
                    this.brands = results.brands;
                })
                .catch(message => {
                    console.error('Error fetching brands:', message);
                });
                //this.tableData.loading = false;
            },
            fetchCategories() {
                //this.tableData.loading = true;
                axios.get('api/categories/top')
                .then(response => {
                    //const results = response.data;
                    this.categories = response.data.categories;
                    console.log(this.categories);
                    
                })
                .catch(message => {
                    console.error('Error fetching categories:', message);
                });
                //this.tableData.loading = false;
            },
        },
        mounted(){
            this.fetchBrands();
            this.fetchCategories();
        }
    }
</script>
<style scoped>
</style>