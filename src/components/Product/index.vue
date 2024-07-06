<template>
    <!-- Single search result -->
     
    <div class="w-full overflow-hidden" ref="ProductCart border">
      
      <div class="relative group z-0">
        <!-- Image -->
        <div class="flex items-center justify-center">
        <a :href="'/product/' + product.slug" class="">
          <img class="h-full w-full" :src="`${JSON.parse(product.images_urls)[0]}`" alt="">
        </a>
        </div>
        <!-- Product buttons -->
        <div class="absolute top-4 md:top-14 group-hover:right-1 -right-16 duration-500 flex flex-col gap-4">
          <button @click="isInWishlist() ? removeFromWishlist() : addToWishlist()" type="button" :class="{ 'bg-black-500  text-white': inWishlist, 'bg-white text-black-500': !inWishlist }" class="prod-btn relative w-10 h-10 hover:bg-black-500 hover:text-white rounded-full flex items-center justify-center ">
            <div class="prod-btn-desc duration-500 absolute bg-black-500 text-white text-sm right-10 min-w-max py-1 px-2 rounded-lg" >{{inWishlist ? 'Remove From Wishlist' : 'Add To Wishlist' }}</div>
            <i class='bx bx-star' ></i> 
          </button>

          <div class="modal-groups">
            <Modal themeClass="bg-white " labelClass="btn-outline-dark  bg-white" ref="modal4" sizeClass="max-w-5xl">
              <!-- Product Image -->
               <div class="grid grid-cols-12">
                <div class="modal-inner modal-image col-span-12 sm:col-span-6 group flex items-center overflow-hidden justify-center">
                  <img class="h-full w-full" :src="`${JSON.parse(product.images_urls)[0]}`" alt="">
                </div>
                <!-- Product Info -->
                <div class="modal-inner modal-details bg-white  col-span-12 sm:col-span-6 relative bg-transparent scrollCard">
          
                  <form @submit.prevent="addToCard()" class="w-full h-full px-5 py-5">
                    <a href="#">
                      <h1 class="text-2xl font-medium mt-3 text-black">{{ product.name }}</h1>
                    </a>
                    <p class="text-xl font-medium text-black mt-4 flex flex-wrap items-center gap-4">
                      <p class="text-md font-medium text-black-500">
                        <span  v-if="product.discount">699.00 Francs CFA </span>
                        <span class="" :class="{'text-[#afaeae] line-through':product.discount, 'text-black-500':!product.discount}">{{ price + ' Francs CFA'}}</span>
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
                      <div v-if="product.options.length == 0" class="flex gap-4 text-black-500 items-center px-2 py-5">
                        <input 
                          type="text"  
                          v-model="form.product_variant_id"
                          class="hidde"
                          :id="'color-' + color.id"
                          @change="console.log('Size ID:', size.id, 'Has size:', hasSize(size.id))"
                        >
                      </div>
                      <div v-if="product.options.length > 1 && product.options[1].name == 'Color'" class="flex gap-4 items-center px-2 py-5">
                        <div v-for="color in product.product_color" :class="[ 'bg-[' + color.color + ']' ]" class="w-7 h-7 rounded-full border hover:cursor-pointer" @click="loadData(key)"></div>
                      </div>
                    </div>

                    <!-- product which options is only the color -->
          
                    <div class="mt-4">
                      <p><span class="font-semibold">{{ 'Color' }}:</span> black</p>
                      <div v-if="product.options[0].length == 1 && product.options[0].name == 'Color'" class="flex gap-4 text-black-500 items-center px-2 py-5">
                        <div  v-for="color in product.options[0].values">
                          <label :for="'color-' + color.id">
                            <div :class="[ 'bg-[' + color.value + ']' ]" class="w-8 h-8 rounded-full border  hover:cursor-pointer" @click="loadData(key)"></div>
                          </label>
                          <input 
                            type="text"  
                            v-model="form.product_variant_id"
                            class="hidde" 
                            :id="'color-' + color.id"
                            @change="console.log('Size ID:', size.id, 'Has size:', hasSize(size.id))"
                          >
                        </div>
                        
                      </div>
                      <div v-if="product.options.length > 1 && product.options[1].name == 'Color'" class="flex gap-4 items-center px-2 py-5">
                        <div v-for="color in product.product_color" :class="[ 'bg-[' + color.color + ']' ]" class="w-7 h-7 rounded-full border hover:cursor-pointer" @click="loadData(key)"></div>
                      </div>
                    </div>
                    
                    <!-- product with more than one option options -->
                    <div class="mt-4" v-if="product.options[0].name == 'Color'">
                      <p><span class="font-semibold">{{ 'Sizes' }}: </span> L</p>
                      <div class="flex gap-4 items-center py-5 flex-wrap">
                        <div v-for="size in sizes" :class="{'text-neutral-400 hover:bg-white hover:text-neutral-400' : !hasSize(size.id), 'hover:text-white': hasSize(size.id) , 'bg-black text-white': isSelected(size.id), 'bg-white': !isSelected(size.id)}" class="w-9 h-9 hover:cursor-pointer rounded-md flex items-center justify-center hover:bg-black  border">
                          <label :for="['size-' + size.id]" class="w-full h-full flex justify-center items-center">
                            {{ size.name }}
                          </label>
                          <input 
                            type="radio"  
                            v-model="form.size_id"
                            class="hidden" 
                            :id="'size-' + size.id" 
                            :value="size.id" 
                            :disabled="hasSize(size.id) ? false : true"
                            @change="console.log('Size ID:', size.id, 'Has size:', hasSize(size.id))"
                          >
          
                        </div>
                      </div>
                    </div>
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
        
              
            </Modal>
          </div>
        </div>
      </div>
      <!-- Product details -->
      <div class="w-full px-2">
        <a href="#">
          <p class="text-lg font-medium mt-3 text-black-500">{{ product.title }}</p>
        </a>
        <p class="text-md font-medium text-black-500">
          <span  v-if="product.discount">699.00 Francs CFA </span>
          <span class="" :class="{'text-[#afaeae] line-through':product.discount, 'text-black-500':!product.discount}">{{ product.variants[0].price + ' Francs CFA'}}</span>
        </p>
      </div>
      
      <div v-if="product.options[0].name == 'Color'" class="flex gap-4 text-black-500 items-center px-2 py-5">
        <div v-for="color in product.options[0].values" :class="[ 'bg-[' + color.value + ']' ]" class="w-8 h-8 rounded-full border"></div>
      </div>
      
    </div>
    
  
      
  </template>
  
  <script>
    //import { EventBus } from '@/eventBus';
    import apiClient from '@/plugins/axios';
    import Modal from '@/components/Modal/ProdModal.vue';
    import Button from '@/components/Button';
    import axios from "axios";
    import { products } from '@/constant/data';
    export default {
      data() {
        return {
          apiUrl: apiClient,
          inWishlist: this.isInWishlist(),
          selected_color: null,
          price: 0,
          success: null,
          loadAddToCart: false,
          form: {
            product_variant_id: null,
            quantity: 1,
          }
        }
      },
      components:{
        Modal,
        Button,
      },
      props: {
        product: {
          type: Object,
          required: true,
        },
        fetchData: {
          type: Function,
          required: false,
        },
        willFetch: {
          type: Boolean,
          required: false, 
        },
      },
      methods: {
        loadData(index=0){
          if (this.product.options.length == 0){
            this.price = this.product.variants[0].price;
            this.form.product_variant_id = this.product.variants[0].id;
          } else if (this.product.options.length == 1 && this.product.options[0].name == 'Color'){
            this.selected_color = this.product.variants[index].id;
            this.price = this.product.variants[index].price;
            this.form.product_variant_id = this.product.variants[index].id;
          } else if (this.product.options.length > 1 && this.product.options[1].name == 'Color'){
            this.selected_color = this.product.variants[index].id;
            this.price = this.product.variants[index].price;
            this.form.product_variant_id = this.product.variants[index].id;
          }
        },
        addQuantity(){
          this.form.quantity++;
        },
        reduceQuantity(){
          if(this.form.quantity > 1){
            this.form.quantity--;
          }
        },
        isSelected(sizeId){
          return this.form.size_id == sizeId;
        },
        async addToCard() {
          console.log('Add to cart: ', this.form);
          /*const isAuthenticatedAndHasRole = await checkAuthAndRole('admin', 'vendor', 'user');
          if (!isAuthenticatedAndHasRole){
              //localStorage.setItem('umberOfItemInCart', this.cart.length);
              //console.log(this.token);
              this.$router.push('/login/');
          }else{
            //console.log(this.form);
            this.loadAddToCart = true;
            try {
                const response = await axios.post(`${API_URL}/cart/add`, this.form, {
                    headers: {
                        'Authorization': `Bearer ${this.token}`
                    }
                });
                
                console.log(response.data);
                this.displayMessage(response.data.success);
                //console.log('emittingMessage cartUpdate');
                EventBus.emit('cartUpdated'); // Emit event to refresh cart items
                EventBus.emit('showCartModal'); // Emit event to show cart modal
                
                this.form.quantity = 1;
            } catch (error) {
                console.error(error);
            } finally {
                this.loadAddToCart = false;
            }
          }*/
        },
  
        closeModal () {
          this.isShowModal = false
        },
        showModal () {
          this.isShowModal = true
        },
        addToWishlist() {
          let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
          //console.log(wishlist);
          if (!wishlist.find(item => item.id === this.product.id)) {
            wishlist.push(this.product);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            this.inWishlist = true;
          }
        },
        isInWishlist(){
          let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
          return wishlist.some(item => item.id === this.product.id);
        },
        hasSize(sizeId) {
          const product = this.color_sizes.find(item => item.size_id === sizeId && item.stock > 0);
          return !!product;
        },
        removeFromWishlist() {
          let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
          wishlist = wishlist.filter(item => item.id !== this.product.id);
          localStorage.setItem('wishlist', JSON.stringify(wishlist));
          this.inWishlist = false;
          if (this.willFetch)
          {
            this.fetchData();
          }
        },
        
        handleClickOutside(event) {
            // Check if the click was outside the referenced element
            if (this.$refs.ProductCart && !this.$refs.ProductCart.contains(event.target)) {
                this.showProductModal = false;
                console.log('check if the click was outside the referenced element');
            }
        },
      },
      
      mounted() {
        
        // Add the event listener when the component is mounted
        document.addEventListener('click', this.handleClickOutside);
        this.loadData(0);
        //this.fetchSizes();
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
