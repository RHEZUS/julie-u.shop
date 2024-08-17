<template>
    <div class="bg-white text-black-500 h-max">
        <HomeHeader />
        <Section v-if="pageLoading == true">
            <div class="grid grid-cols-12 gap-6 px-2 md:px-10">
                <div class="col-span-6 sm:col-span-6 md:col-span-4 mt-6 lg:col-span-3 border" v-for="product in 8">
                    <ProductLoader />
                </div>
            </div>
        </Section>
        <div v-if="pageLoading == false" class="px-2 md:px-10 min-h-80 py-10  grid grid-cols-12 gap-6">
            <div class="col-span-full">
                <p class="text-2xl font-bold text-center">{{ $t('wishlist') }}</p>
            </div>
            <div v-if="products.length > 0" class="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3 border" v-for="product in products">
                <ProductCart :product="product" :fetch-data="loadProducts" />
            </div>
            <div v-else class="col-span-full self-end">
                <p class="text-lg font-medium text-slate-500 text-center">No products in wishlist. <a href="/" class="underline">Go shopping</a></p>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import ProductCart from '@/components/Product/index.vue';
import HomeHeader from '@/components/HomeHeader/index.vue';
import Footer from '@/components/HomeFooter/index.vue';

import NavLoader from "@/components/ComponentLoaders/NavbarLoader.vue";
import HeroLoader from "@/components/ComponentLoaders/HeroLoader.vue";
import Section from "@/components/ComponentLoaders/Section.vue";
import ProductLoader from "@/components/ComponentLoaders/ProductCardLoader.vue";


import apiClient from '@/plugins/axios';
import { useToast } from 'vue-toastification';
import axios from 'axios';
import { sleep } from '@amcharts/amcharts5/.internal/core/util/Time';
export default {
    name: 'Wishlist',
    data() {
        return {
            products: [],
            productsW: [],
            toast: useToast(),
            pageLoading: false,

        };
    },
    components: {
        ProductCart,
        HomeHeader,
        Footer,

        NavLoader,
        HeroLoader,
        Section,
        ProductLoader,
    },
    methods: {
        async getProducts(){
            try{
                let wishlist = JSON.parse(localStorage.getItem('wishlist'));
                if (!wishlist) {
                    wishlist = [];
                    return;
                }
                for (let i = wishlist.length - 1; i >= 0; i--) {
                    if (typeof wishlist[i] === 'string' || typeof wishlist[i] === 'number') {
                        wishlist[i] = parseInt(wishlist[i]);
                    } else if (typeof wishlist[i] === 'object') {
                        wishlist.splice(i, 1);
                    }
                }
                console.log(wishlist);
                if (wishlist.length > 0) {
                    await axios.post('api/wishlist/products', {'productIds': wishlist})
                    .then((response) => {
                        this.products = response.data.products;
                        // remove whishlist items that are not in the products
                        wishlist = wishlist.filter((id) => this.products.map((product) => product.id).includes(id));
                        localStorage.setItem('wishlist', JSON.stringify(wishlist));

                        console.log('wishlist', wishlist);
                    }).catch((error) => {
                        //console.log(error);
                        //this.toast.error('Failed to fetch products');
                    });
                }else{
                    this.products = [];
                }

            }catch(error){
                console.log(error);
            } finally {
                this.pageLoading = false;
            }
        },
        loadProducts(){
            const wishlist = JSON.parse(localStorage.getItem('wishlist'));
            this.productsW = products.filter((product) => wishlist.includes(product.id));
        }
    },
    mounted(){
        this.pageLoading = true;
        this.getProducts().then(() => {
            this.pageLoading = false;
        });
            
        //this.getProducts();
    }
};
</script>


