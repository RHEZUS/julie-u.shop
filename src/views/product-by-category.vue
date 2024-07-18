<template>
    <div class="bg-white text-black-500 h-max">
        <HomeHeader />
        <div class="px-2 md:px-10 min-h-80 py-10  grid grid-cols-12 gap-6">
            <div class="col-span-full">
                <p class="text-2xl font-bold text-center">My Wishlist</p>
            </div>
            <div class="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3 border" v-for="product in productsW">
                <ProductCart :product="product" :fetch-data="loadProducts" />
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import ProductCart from '@/components/Product/index.vue';
import HomeHeader from '@/components/HomeHeader/index.vue';
import Footer from '@/components/HomeFooter/index.vue';
import { products } from '@/constant/data';
import apiClient from '@/plugins/axios';
import { useToast } from 'vue-toastification';
export default {
    name: 'Wishlist',
    data() {
        return {
            products: products,
            productsW: [],
            toast: useToast(),
        };
    },
    components: {
        ProductCart,
        HomeHeader,
        Footer,
    },
    methods: {
        getProducts(){
            try{
                const wishlist = JSON.parse(localStorage.getItem('wishlist'));
                if (wishlist.length > 0) {
                    apiClient.post('', JSON.stringify({ productIds: wishlist }))
                    .then((response) => {
                        this.products = response.data.products;
                    }).catch((error) => {
                        console.log(error);
                        this.toast.error('Failed to fetch products');
                    });
                }else{
                    this.products = [];
                }

            }catch(error){
                console.log(error);
                this.toast.error('Failed to fetch products');
            }
        },
        loadProducts(){
            const wishlist = JSON.parse(localStorage.getItem('wishlist'));
            this.productsW = products.filter((product) => wishlist.includes(product.id));
        }
    },
    mounted(){
        this.loadProducts();
    }
};
</script>
<style lang=""></style>
