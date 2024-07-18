<template>
    <LoadingSpinner v-if="isLoading" />
    <div class="min-h-screen" v-else>
        <div class="w-full">
            <Header></Header>
        </div>
        <!-- list of products -->
        <div class="page-padding products w-full gap-6  px-[12px] mt-24 py-7">
            <div class="col-span-full  text-center">
                <h1 class="text-center text-2xl my-3 font-semibold">{{products.length}} result for:  {{'"' + keyword + '"'}}</h1>
            </div>

            <form @keyup.prevent="search()" class="col-span-full flex justify-center">
                <div class="search relative  h-10 border border-black rounded">
                    <input v-model="keyword" type="search" class="font-normal w-full h-full rounded focus:ring-0 border-none focus:border-none" style="padding-right: 45px;"  name="" id="">
                    <button type="submit" class="absolute right-0 w-[40px]  h-full">
                        <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 30 30">
                            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                        </svg>
                    </button>
                </div>
            </form>

            <div v-if="products.length > 0" v-for="(item) in products" class="col-span-1">
                <ProductCart :product="item" :fetch-data="search" :will-fetch="true"></ProductCart>
            </div>
            <div v-else class="col-span-12">
                <h1 class="text-center text-2xl my-3 font-semibold">No result for:  {{'"' + keyword + '"'}}</h1>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>
<script>
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import ProductCart from '@/components/Product/index.vue';
import Header from '@/components/HomeHeader/index.vue';
import Footer from '@/components/HomeFooter/index.vue';
import apiClient from '../plugins/axios';
export default {
    data(){
        return {
            keyword: this.$route.params.keyword,
            token: localStorage.getItem('authToken'),
            pageTitle: this.$route.name,
            products: [],
            categories: [],
            isLoading: false,
            apiUrl: API_URL
        }
    },
    components: {
        Header,
        ProductCart,
        Footer,
        LoadingSpinner,
    },
    //mounted(){
    //    this.search();
    //},
    async mounted() {
        this.isLoading=true
        await this.search().then(() => {
            setTimeout(() => {
                this.isLoading = false;
            }, 1000);
        });
    },
    
    methods:{
        async search() {
            const trimmedKeyword = this.keyword.trim();

            if (trimmedKeyword) {
                try {
                 apiClient.get(`/products/search/${trimmedKeyword}`, {
                    headers: {
                    'Authorization': `Bearer ${this.token}`
                    }
                });
                this.products = response.data.products;
                this.$router.push('/products/search/' + trimmedKeyword);
                //console.log(response.data);
                //console.log('products length: ' + this.products.length);
                } catch (error) {
                    console.error(error);
                }
            } else {
                this.products = [];
                this.$router.push({ query: { keyword: '' } });
            }
        },
    }
}
</script>
<style scoped>
    .products{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    } 
    .page-padding{
        padding-left: 12px;
        padding-right: 12px;
    } 
    @media screen and (max-width: 768px) {
        .products{
            grid-template-columns: repeat(2, 1fr);
        } 
    }
    @media screen and (min-width: 768px) {
        .products{
            grid-template-columns: repeat(3, 1fr);
        } 
    }
    @media screen and (min-width: 1024px) {
        .products{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
        } 
        .page-padding{
            padding-left: 48px;
            padding-right: 48px;
          } 
    }

    @media screen and (min-width: 1280px) {
        .products{
            display: grid;
            grid-template-columns: repeat(5, 1fr);
        } 
    }
    
</style>
