<template>
    <div class="bg-white text-black-500 h-max">
        <HomeHeader />
        <div class="">
            <Carousel :carousels="carouselsWithCaption" :autoplay="{  delay: 2500, disableOnInteraction: false, }" />
        </div>
        <div class="px-2 md:px-10 min-h-80 py-10  grid grid-cols-12 gap-6">
            <div class="col-span-full">
                <p class="text-2xl font-bold text-center">Best sellers</p>
            </div>
            <div class="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3 border" v-for="product in bestsellers.slice(0, 8)">
                <ProductCart :product="product" />
            </div>
            
        </div>
        <div class="px-2 md:px-10 min-h-80 py-10  grid grid-cols-12 gap-6">
            <div class="col-span-full">
                <p class="text-2xl font-bold text-center">New Arrivals</p>
            </div>
            <div class="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3 border" v-for="product in newArrivals.slice(0, 8)">
                <ProductCart :product="product" />
            </div>
            
        </div>
        <Footer />
    </div>
</template>
<script>
import Carousel from '@/components/Carousel/HeroCarousel.vue';
import ProductCart from '@/components/Product/index.vue';
import HomeHeader from '@/components/HomeHeader/index.vue';
import Footer from '@/components/HomeFooter/index.vue';
import apiClient from "@/plugins/axios";
export default {
    name: 'Home',
    data() {
        return {
           products: [],
           bestsellers: [],
           newArrivals: [],
           carouselsWithCaption: [
        {
          img: 'https://cdn.aboutstatic.com/file/dd5c376212b9d53632326cdbfa700fbd.jpg?width=2000&height=2000&quality=90&progressive=1',
          title: "Ankle, chelsea, cowboy and more",
          description:
            "How to style your boots",
        },
        {
          img: 'https://sfra.production.calzedonia.coremedia.cloud/resource/blob/1228406/fb3062c5d7b9e25e639ae4c1c875cca8/all-hp-herobanner-cw2024-limitededition-int-1--data.jpg',
          title: "Find your best gear",
          description:
            "Fitness essentials for any workout",
        },
        {
          img: 'https://sfra.production.calzedonia.coremedia.cloud/resource/blob/1228404/318be59948d8be96543e4232fbba51bf/all-hp-herobanner-cw2024-limitededition-m-int-1--data.jpg',
          title: "Accentuate your shape",
          description:
            "Best body-shaping swimwear",
        },
      ],
        };
    },
    components: {
        ProductCart,
        HomeHeader,
        Footer,
        Carousel,
    },
    methods: {
        changeMsg() {
            this.msg = 'Welcome to Your Vue.js App';
        },
        async getBestsellers(){
            try {
                const response = await apiClient.get('api/products/bestsellers');
                this.bestsellers = response.data.products;
                console.log('BestSelling', this.bestsellers);
            } catch (error) {
                console.error(error);
            }
        },

        async getNewArrivals(){
            try {
                const response = await apiClient.get('api/products/new-arrivals');
                this.newArrivals = response.data.products;
                console.log('New Arrival', this.newArrivals);
            } catch (error) {
                console.error(error);
            }
        },
    },
    mounted() {
        this.getBestsellers();
        this.getNewArrivals();
    }
};
</script>
<style lang=""></style>
  