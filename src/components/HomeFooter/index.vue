<template>
    <div class="page-padding footer-container bg-white border-t py-10 gap-8 text-black-500">
        <div class="capitalize col-span-2">
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
        <div class="capitalize text-base">
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
        <div class="capitalize">
            <p class="text-xl font-medium py-3"> Categories</p>
            <a v-for="category in categories"  :href="'/product/category/' + category.name">
                <li class="py-2 text-black-500 flex items-start gap-4">
                    {{category.name}}
                </li>
            </a>
        </div>
        <div class="capitalize text-base">
            <p class=" text-xl font-medium py-3"> Brands</p>
            <a v-for="brand in brands"  :href="'/product/brand/' + brand.name">
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
                axios.get(`${API_URL}/brands/limit`, {
                    headers: {
                    'Authorization': `Bearer ${this.token}`
                    }
                })
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
                axios.get(`${API_URL}/categories/limit/{7}`, {
                    headers: {
                    'Authorization': `Bearer ${this.token}`
                    }
                })
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
        mounted(){
            //this.fetchBrands();
            //this.fetchCategories();
        }
    }
</script>
<style scoped>
    .footer-container{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    } 
    .page-padding{
        padding-left: 12px;
        padding-right: 12px;
    } 
    @media screen and (max-width: 768px) {
        .footer-container{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
        } 
    }
    @media screen and (min-width: 768px) {
        .footer-container{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        } 
    }
    @media screen and (min-width: 1024px) {
        .footer-container{
            display: grid;
            grid-template-columns: repeat(5, 1fr);
        }
        .page-padding{
            padding-left: 48px;
            padding-right: 48px;
        } 
    }
</style>