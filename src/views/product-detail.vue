<template>
  <div class="bg-white" v-if="!loading">
    <Header />
    <!-- Single result -->
    <div class="py-5 px-2 md:px-10">
        <!-- Product Image -->
        <div class="grid grid-cols-12">
            <div class="modal-inner modal-image col-span-12 md:col-span-6 group flex items-center overflow-hidden justify-center">
                <img class="max-w-full max-h-full h-full"  :src="`${apiUrl}/storage/${product.image_url}`" alt="">
            </div>
            <!-- Product Info -->
            <div class="modal-inner modal-details bg-white  col-span-12 md:col-span-6 relative bg-transparent scrollCard">
        
                <form @submit.prevent="addToCart()" class="w-full flex flex-col h-full px-5 py-5">
                <a href="#">
                    <p class="text-2xl font-medium mt-3 text-black">{{ product.title }}</p>
                </a>
                <p class="text-xl font-medium text-black mt-4 flex flex-wrap items-center gap-4">
                    <p class="text-md font-medium text-black-500">
                    <span  v-if="product.discount">699.00 Francs CFA </span>
                    <span class="" :class="{'text-[#afaeae] line-through':product.discount, 'text-black-500':!product.discount}">{{ (price * form.quantity).toFixed(2) + ' Francs CFA' }}</span>
                    </p>
                    <span class=" bg-red-600 h-3 flex items-center p-1 text-white text-[10px] rounded-lg">EARNINGS: 12%</span>
                </p>
                <div class="">
                    <p class="text-gray-500 text-md mt-6">
                    {{ product.description }}
                    </p>
                    <a class="text-md mt-4 underline font-medium" :href="'/product/' + product.slug">{{ 'ViewDetails' }} </a>
                </div>

                <!-- Products variants -->

                
                <!-- products without options -->
                <div class="mt-4">
                    
                </div>

                <!-- product which options is only the color -->
                <div class="mt-4" v-if="product.options.length == 1 && product.options[0].name == 'color'">
                    <p><span class="font-semibold">{{ 'Color' }}:</span> black</p>
                    <div class="flex gap-4 text-black-500 items-center px-2 py-5">
                    <div  v-for="variant in product.variants">
                        <label :for="'variant-' + variant.id">
                            <div :style="{ backgroundColor: variant.option1 }"  :class="{'ring-black-500': isSelectedVariant(variant.id), 'ring-black-300':!isSelectedVariant(variant.id)}" class="w-8 h-8 rounded-full border-2 ring-2 border-white  hover:cursor-pointer"></div>
                        </label>
                        <input 
                        type="radio"
                        class="hidden"
                        name="product_variant_id"
                        :id="'variant-' + variant.id"
                        @change="selectVariant(variant.id);"
                        >
                    </div>
                    
                    </div>
                </div>

                <!-- product which options is only one and is not the color -->
                <div class="mt-4" v-if="product.options.length == 1 && product.options[0].name != 'color'">
                    <p><span class="font-semibold">{{ product.options[0].name }}:</span></p>
                    <div class="flex gap-4 text-black-500 items-center px-2 py-5">
                    
                    <div v-for="variant in product.variants" :class="{'text-neutral-400 hover:bg-white hover:text-neutral-400' : variant.inventory_quantity == 0, 'hover:text-white': variant.inventory_quantity > 0 , 'bg-black-500 text-white': isSelectedVariant(variant.id), 'bg-white': !isSelectedVariant(variant.id)}" class="w-fit p-1 h-9 hover:cursor-pointer rounded-md flex items-center justify-center hover:bg-black-500  border">
                        <label :for="'variant-' + variant.id" class="w-full h-full flex justify-center items-center">
                        {{ variant.option1 }}
                        </label>
                        <input 
                        type="radio"
                        class="hidden"
                        name="product_variant_id"
                        :id="'variant-' + variant.id" 
                        :disabled="variant.inventory_quantity == 0 ? true : false"
                        @change="selectVariant(variant.id);"
                        >
        
                    </div>
                    
                    </div>
                    <div v-if="product.options.length > 1 && product.options[1].name == 'color'" class="flex gap-4 items-center px-2 py-5">
                    <div v-for="color in product.product_color" :class="[ 'bg-[' + color.color + ']' ]"  class="w-7 h-7 rounded-full border hover:cursor-pointer" @click="loadData(key)"></div>
                    </div>
                </div>
                
                <!-- product with more than one option options -->
                <div class="mt-4" v-if="product.options.length > 1 && product.options[0].name == 'color'">
                    <!-- List colors -->
                    <p><span class="font-semibold">{{ 'Color' }}:</span></p>
                    <div class="flex gap-4 text-black-500 items-center px-2 py-5">
                    <div v-for="(color, index) in product.options[0].values" :key="index" :style="{ backgroundColor: color.value }"  :class="{'ring-black-500': color.value == selected_color, 'ring-black-300':color.value != selected_color}" class="w-8 h-8 rounded-full border-2 ring-2 border-white" @click="loadData(index)"></div>
                    </div>
                    <!-- List variants -->
                    <p><span class="font-semibold">{{ product.options[1].name }}: </span></p>
                    <div class="flex gap-4 items-center py-5 flex-wrap">
                    <div v-for="variant in colorVariants" :class="{'text-neutral-400 hover:bg-white hover:text-neutral-400' : variant.inventory_quantity == 0, 'hover:text-white': variant.inventory_quantity > 0 , 'bg-black-500 text-white': isSelectedVariant(variant.id), 'bg-white': !isSelectedVariant(variant.id)}" class="w-fit p-1 h-9 hover:cursor-pointer rounded-md flex items-center justify-center hover:bg-black-500  border">
                        <label :for="['variant-' + variant.id]" class="w-full h-full flex justify-center items-center">
                        {{ variant.option2 }}
                        </label>
                        <input 
                        type="radio"  
                        v-model="form.product_variant_id"
                        class="hidden" 
                        :id="'variant-' + variant.id" 
                        :value="variant.id" 
                        :disabled="variant.inventory_quantity == 0 ? true : false"
                        @change="selectVariant(variant.id);"
                        >
        
                    </div>
                    </div>
                </div>

                <!-- Successfully added to cart -->
                <div  v-if="success" class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                    {{ success }}
                </div>
                
                <div class="mt-4">
                    <p><span class="font-semibold">Quantity: </span> </p>
                    <div class="grid grid-cols-12 mt-4 gap-4">
                    <div class="col-span-4 h-12 text-xl relative bg-white border border-black rounded">
                        <button @click="reduceQuantity()" type="button" class="absolute w-[30px] h-full bg-transparent">-</button>
                        <input v-model="form.quantity" class="w-full h-full text-center outline-none border-none focus:ring-0 bg-transparent" readonly type="text" name="" id="" style="padding: 0 30px;">
                        <button @click="addQuantity()" type="button" class="absolute w-[30px] h-full bg-transparent right-0">+</button>
                    </div>
                    <div class="col-span-8 bg-[#0e0e0e]  rounded">
                        <button type="submit" class="text-center w-full font-medium text-base text-white py-3">
                        <svg v-if="loadAddToCart" aria-hidden="true" class="mr-3 inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        Add to cart
                        </button>
                    </div>
                    </div>
                </div>
        
                <div class="h-5"></div>
                </form>
            </div>
        </div>
    </div>


    <!--Similar products-->
    <div class="px-2 md:px-10 min-h-80 py-10  grid grid-cols-12 gap-6">
      <div class="col-span-full">
          <h1 class="text-2xl font-bold text-start">Similar Products</h1>
      </div>
      <div class="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3 border" v-for="product in relatedProducts.slice(0, 8)">
          <ProductCart :product="product" />
      </div>
    </div>


    <!-- Reviews and Rating -->
    <div class="col-span-full py-5  px-2 md:px-10">
      <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
              <li class="me-2" role="presentation">
                  <button @click="showTab = 'description'"  class="inline-block p-4 border-b-2 rounded-t-lg" :class="{'border-pink-600': showTab == 'description'}" id="profile-tab" type="button">Description</button>
              </li>
              <li class="me-2" role="presentation">
                  <button @click="showTab = 'reviews'" class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" :class="{'border-pink-600': showTab == 'reviews'}" id="dashboard-tab" type="button">Reviews</button>
              </li>
          </ul>
      </div>
      <div id="default-tab-content">
          <div v-if="showTab === 'description'" class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" v-html="product.description">
              
          </div>
          <div v-if="showTab == 'reviews'" class="">
            <div class="">
              <h6 class="text-slate-900 dark:text-slate-300 pb-6 text-lg lg:text-xl">
                Reviews & Ratings
              </h6>

              <div class="space-y-12">
                <div
                  class="bg-secondary-100 p-6 rounded grid grid-cols-12"
                >
                  <div
                    class="col-span-12 items-center md:col-span-6 flex space-x-3 justify-center md:justify-start rtl:space-x-reverse order-2 md:order-1 mt-3 md:mt-0"
                  >
                    <div class="font-medium items-center flex">
                      <p
                        class="text-slate-900 dark:text-slate-300 text-base lg:text-lg"
                      >
                        {{product.reviews_avg_rate ? product.reviews_avg_rate : 5}}
                      </p>
                      <p
                        class="text-slate-500 dark:text-slate-400 text-sm lg:text-base"
                      >
                        /5
                      </p>
                    </div>
                    <div
                      class="flex flex-col sm:flex-row sm:items-center md:justify-start text-slate-900 dark:text-slate-300 font-normal text-sm lg:text-base"
                    >
                      <div class="flex items-center space-x-1.5">
                        <Icon icon="ph:star-fill" class="text-yellow-400" />
                        <Icon icon="ph:star-fill" class="text-yellow-400" />
                        <Icon icon="ph:star-fill" class="text-yellow-400" />
                        <Icon icon="ph:star-fill" class="text-yellow-400" />
                        <Icon icon="ph:star-fill" class="text-slate-300/80" />
                      </div>
                      <div class="text-slate-500 dark:text-slate-400">
                        ({{product.reviews_count}} reviews)
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-span-12 md:col-span-6 flex justify-center md:justify-end items-center order-1 md:order-2"
                  >
                    <button
                      type="button"
                      class="bg-yellow-500 text-white rounded px-6 py-3 text-sm lg:text-base"
                    >
                      Rate this product
                    </button>
                  </div>
                </div>
                <div class="flex space-x-3 rtl:space-x-reverse">
                  <div
                    class="h-14 w-14 rounded-full object-cover bg-white ring-1 overflow-hidden flex-none"
                  >
                    <img class="h-full w-full object-contain" :src="blackJumper" />
                  </div>
                  <div>
                    <div>
                      <p
                        class="text-slate-900 dark:text-slate-300 font-medium text-sm lg:text-base pb-1"
                      >
                        Devied Beakhum
                      </p>
                      <p
                        class="text-slate-500 dark:text-slate-400 font-normal text-xs pb-1"
                      >
                        08-03-2023
                      </p>
                      <p
                        class="flex items-center text-slate-900 dark:text-slate-300 font-normal text-sm lg:text-base space-x-1.5 rtl:space-x-reverse pb-3"
                      >
                        <Icon icon="ph:star-fill" class="text-yellow-400" />
                        <Icon icon="ph:star-fill" class="text-yellow-400" />
                        <Icon icon="ph:star-fill" class="text-yellow-400" />
                        <Icon icon="ph:star-fill" class="text-yellow-400" />
                        <Icon icon="ph:star-fill" class="text-yellow-400" />
                      </p>
                      <p
                        class="pb-4 text-sm lg:text-base text-slate-500 dark:text-slate-400"
                      >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                        Lori ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt.
                      </p>
                      <div class="flex space-x-2 rtl:space-x-reverse pb-3">
                        <p
                          class="font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400"
                        >
                          Info:
                        </p>
                        <p class="font-medium text-sm lg:text-base text-[#10B26C]">
                          Verified Purchase
                        </p>
                      </div>
                    </div>
                    <div class="grid grid-cols-12">
                      <div
                        class="col-span-12 flex justify-end space-x-4 rtl:space-x-reverse dark:text-slate-400"
                      >
                        <p class="flex items-center space-x-2 rtl:space-x-reverse">
                          <span class="cursor-pointer">
                            <Icon icon="heroicons:hand-thumb-up" />
                          </span>
                          <span>02</span>
                        </p>
                        <p class="flex items-center space-x-2 rtl:space-x-reverse">
                          <span class="cursor-pointer">
                            <Icon icon="carbon:reply" />
                          </span>
                          <span>00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex space-x-3 rtl:space-x-reverse">
                  <div
                    class="h-14 w-14 rounded-full object-cover bg-white ring-1 overflow-hidden flex-none"
                  >
                    <img class="h-full w-full object-contain" :src="blackJumper" />
                  </div>
                  <div>
                    <div>
                      <p
                        class="text-slate-900 dark:text-slate-300 font-medium text-sm lg:text-base pb-1"
                      >
                        Devied Beakhum
                      </p>
                      <p
                        class="text-slate-500 dark:text-slate-400 font-normal text-xs pb-1"
                      >
                        08-03-2023
                      </p>
                      <p
                        class="flex items-center text-slate-900 dark:text-slate-300 font-normal text-sm lg:text-base space-x-1.5 rtl:space-x-reverse pb-3"
                      >
                        <Icon icon="ph:star-fill" class="text-yellow-400" />
                        <Icon icon="ph:star-fill" class="text-yellow-400" />
                        <Icon icon="ph:star-fill" class="text-yellow-400" />
                        <Icon icon="ph:star-fill" class="text-yellow-400" />
                        <Icon icon="ph:star-fill" class="text-yellow-400" />
                      </p>
                      <p
                        class="pb-4 text-sm lg:text-base text-slate-500 dark:text-slate-400"
                      >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                        Lori ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt.
                      </p>
                      <div class="flex space-x-2 rtl:space-x-reverse pb-3">
                        <p
                          class="font-normal text-sm lg:text-base text-slate-500 dark:text-slate-400"
                        >
                          Info:
                        </p>
                        <p class="font-medium text-sm lg:text-base text-[#10B26C]">
                          Verified Purchase
                        </p>
                      </div>
                    </div>
                    <div class="grid grid-cols-12">
                      <div class="col-span-12 mb-3">
                        <div class="flex space-x-2 rtl:space-x-reverse mb-9">
                          <div
                            class="h-[90px] w-[90px] rounded bg-slate-100 p-1 overflow-hidden"
                          >
                            <img class="h-full w-full object-contain" :src="three" />
                          </div>
                          <div
                            class="h-[90px] w-[90px] rounded bg-slate-100 overflow-hidden p-1"
                          >
                            <img class="h-full w-full object-contain" :src="one" />
                          </div>
                          <div
                            class="h-[90px] w-[90px] rounded bg-slate-100 overflow-hidden p-1"
                          >
                            <img class="h-full w-full object-contain" :src="two" />
                          </div>
                        </div>
                        <div
                          class="max-h-[400px] max-w-[346px] rounded bg-slate-100 overflow-hidden p-1"
                        >
                          <img class="h-full w-full object-contain" :src="three" />
                        </div>
                      </div>
                      <div
                        class="col-span-12 flex justify-end dark:text-slate-400 space-x-4 rtl:space-x-reverse"
                      >
                        <p class="flex items-center space-x-2 rtl:space-x-reverse">
                          <span class="cursor-pointer">
                            <Icon icon="heroicons:hand-thumb-up" />
                          </span>
                          <span>02</span>
                        </p>
                        <p class="flex items-center space-x-2 rtl:space-x-reverse">
                          <span class="cursor-pointer">
                            <Icon icon="carbon:reply" />
                          </span>
                          <span>00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
        
    <Footer />
  </div>

      
</template>
  
<script>
//import { EventBus } from '@/eventBus';
import ProductCart from '@/components/Product/index.vue';
import Header from '@/components/HomeHeader/index.vue';
import Footer from '@/components/HomeFooter/index.vue';
import apiClient from '@/plugins/axios';
import Modal from '@/components/Modal/ProdModal.vue';
import Button from '@/components/Button';
import { products } from '@/constant/data';
import Icon from "@/components/Icon";
import Badge from "@/components/Badge";
    export default {
      data() {
        return {
          apiUrl: apiClient.defaults.baseURL,
          inWishlist: null,
          loading: true,
          showTab: 'description',
          //inWishlist: this.isInWishlist(),
          products: products,
          relatedProducts: [],
          product: [],
          selected_color: null,
          price: 0,
          success: null,
          loadAddToCart: false,
          colorVariants: [],
          form: {
            product_variant_id: null,
            quantity: 1,
          }
        }
      },
      components:{
        Modal,
        Button,
        Header,
        Footer,
        ProductCart,
        Icon,
        Badge
      },
      methods: {
        async getProduct(){
          try{
            const slug = this.$route.params.slug;
            await apiClient.get(`api/product_by_slug/${slug}`).then(response => {
              this.product = response.data.product;
              console.log(this.product);
            });
          }
          catch(error){
            console.log(error);
          }
        },
        async getRelatedProducts(){
          try{
            const slug = this.$route.params.slug;
            await apiClient.get(`api/product/related/${slug}`).then(response => {
              this.relatedProducts = response.data.products;
              console.log('success Related',this.relatedProducts);
            });
          }
          catch(error){
            console.log(' Related', error);
          }
        },

        loadData(index=0, variant=null){
          if (this.product.options.length == 0){
            this.price = this.product.variants[0].price;
            this.form.product_variant_id = this.product.variants[0].id;
          } else if (this.product.options.length == 1 && this.product.options[0].name == 'color'){
            this.price = this.product.variants[index].price;
            this.form.product_variant_id = this.product.variants[index].id;
          } else if (this.product.options.length == 1 && this.product.options[0].name != 'color'){
            this.price = this.product.variants[index].price;
            this.form.product_variant_id = this.product.variants[index].id;
          } else if (this.product.options.length > 1 && this.product.options[0].name == 'color'){
            this.selected_color = this.product.options[0].values[index].value;
            const variants = this.getColorsVariants(this.selected_color);
            this.colorVariants = variants;
            this.price = variants[0].price;
            this.form.product_variant_id = variants[0].id;
          }
        },
        getVariantPrice(variantId){
          return this.product.variants.find(variant => variant.id === variantId).price;
        },
        selectVariant(variantId){
          this.form.product_variant_id = variantId;
          this.price = this.getVariantPrice(variantId);
        },
        getColorsVariants(color){
          const variants = this.product.variants.filter(variant => variant.option1 === color);
          this.form.product_variant_id = variants[0].id;
          this.selected_color = color;
          return variants;
        },
        addQuantity(){
          this.form.quantity++;
        },
        reduceQuantity(){
          if(this.form.quantity > 1){
            this.form.quantity--;
          }
        },
        isSelectedVariant(variantId){
          return this.form.product_variant_id == variantId;
        },
        isSelected(variantId){
          return this.form.product_variant_id == variantId;
        },

        addToCart() {
          let productVariantId = this.form.product_variant_id;
          let quantity = this.form.quantity;
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          const itemIndex = cart.findIndex(item => item.productVariantId === productVariantId);

          if (itemIndex !== -1) {
            // Update quantity if the item is already in the cart
            cart[itemIndex].quantity += quantity;
          } else {
            // Add new item to the cart
            cart.push({ productVariantId, quantity });
          }

          localStorage.setItem('cart', JSON.stringify(cart));
          console.log('cart: ', cart);
        },

        addToWishlist() {
          let productId = this.product.id;
          let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
          if (!wishlist.includes(productId)) {
            wishlist.push(productId);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            this.inWishlist = true;
          }
          
        },
        isInWishlist(){
          const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
          return wishlist.includes(this.product.id);
        },
        removeFromWishlist() {
          let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
          wishlist = wishlist.filter(id => id !== this.product.id);
          localStorage.setItem('wishlist', JSON.stringify(wishlist));
          this.inWishlist = false;
          if (this.fetchData) {
            this.fetchData();
          }
        },
        
        handleClickOutside(event) {
            // Check if the click was outside the referenced element
            if (this.$refs.ProductCart && !this.$refs.ProductCart.contains(event.target)) {
                this.showProductModal = false;
            }
        },
      },
      
    async mounted() {
            this.loading = true;
            await this.getProduct().then(() => {
              this.loadData(0);
              this.inWishlist = this.isInWishlist();
              this.getRelatedProducts();
            }).catch(error => {
              console.error(error);
            }).finally(() => {
              this.loading = false;
            }); 
    },
    oreDestroy() {
        // Remove the event listener when the component is destroyed
        document.removeEventListener('click', this.handleClickOutside);
    },
    }
</script>
<style scoped>
.prod-btn-desc {
  display: none;
}
.prod-btn:hover .prod-btn-desc {
  display: block;
}
</style> 
