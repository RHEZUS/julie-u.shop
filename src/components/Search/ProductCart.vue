<template>
    <div class="col-span-6 sm:col-span-3 md:col-span-3">
        <a :href="'/product/' + product.slug">
            <img class="w-full h-full md:mx-4" :src="`${apiUrl}/storage/${product.image}`" alt="">
        </a>
        <a href="#">
            <h1 class="text-lg font-medium mt-3 text-black">{{product.name}}</h1>
        </a>
        <p class="text-md font-medium text-black"><span>{{product.product_color[0].product_color_sizes[0].price + ' F CFA'}}</span> <span class="text-[#afaeae] line-through">699.00TL</span></p>
    </div>
</template>
<script>
    import apiClient from "@/plugins/axios";
    export default {
        data(){
            return {
                apiUrl: apiClient,
            }
        },
        
        props:{
            product:{
                type: Object,
                required: true,
                default: {},
            },
        }
    }
</script>