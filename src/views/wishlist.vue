<template>
    <div class="bg-white text-black-500 h-max">
        <HomeHeader />
        <div class="px-2 md:px-10 min-h-80 py-10  grid grid-cols-12 gap-6">
            <div class="col-span-full">
                <p class="text-2xl font-bold text-center">My Wishlist</p>
            </div>
            <div class="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3 border" v-for="product in products">
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
import apiClient from '@/plugins/axios';
import { useToast } from 'vue-toastification';
export default {
    name: 'Wishlist',
    data() {
        return {
            products: [],
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
                let wishlist = JSON.parse(localStorage.getItem('wishlist'));
                for (let i = wishlist.length - 1; i >= 0; i--) {
                    if (typeof wishlist[i] === 'string' || typeof wishlist[i] === 'number') {
                        wishlist[i] = parseInt(wishlist[i]);
                    } else if (typeof wishlist[i] === 'object') {
                        wishlist.splice(i, 1);
                    }
                }
                console.log(wishlist);
                if (wishlist.length > 0) {
                    apiClient.post('api/wishlist/products', {'productIds': wishlist})
                    .then((response) => {
                        this.products = response.data.products;
                        console.log(this.products);
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
        this.getProducts();
    }
};
</script>
<style lang=""></style>
