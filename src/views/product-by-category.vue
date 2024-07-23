<template>
    <div class="bg-white text-black-500 h-max">
        <HomeHeader />
        <div class="px-2 md:px-10 min-h-80 py-10  grid grid-cols-12 gap-6">
            <div class="col-span-full">
                <p class="text-2xl font-bold text-center uppercase">{{category.name}}</p>
            </div>
            <div v-if="products.length > 0" class="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3 border" v-for="product in products">
                <ProductCart :product="product" :fetch-data="getProducts" />
            </div>
            <div v-else class="col-span-full text-center">
                <p>No products found</p>
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
            products: [],
            category: [],
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
                const slug = this.$route.params.slug;
                if (slug) {
                    apiClient.get(`/api/category/products/${slug}`)
                    .then((response) => {
                        this.products = response.data.products;
                        this.category = response.data.category;
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
    },
    mounted(){
        this.getProducts();
    }
};
</script>
<style lang=""></style>
