<template>
    <div class="bg-white w-full overflow-hidden" v-if="!loading">
        <Header />

        <div class="px-2 md:px-10 min-h-80 py-10  w-full grid grid-cols-12 gap-6" v-if="cartItems && cartItems.length > 0">
          <!--Page title-->
          <div class="col-span-full">
              <h1 class="text-2xl font-bold text-center">Shopping Cart</h1>
          </div>
          <!--Cart summary-->
          <div class="col-span-full">
            <table class="table-auto w-full">
              <thead >
                <tr class="border-b">
                  <th scope="col" class="table-th font-medium py-3 text-left"> Product</th>
                  <th scope="col" class="table-th font-medium py-3 text-left hidden sm:table-cell">Price</th>
                  <th scope="col" class="table-th font-medium py-3 text-left hidden sm:table-cell">Quantity</th>
                  <th scope="col" class="table-th font-medium py-3 text-right  sm:text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cartItem in cartItems" :key="cartItem.id" class="border-b">
                  <td class="table-td  py-3 text-left">
                    <div class="flex items-center">
                      <img  :src="apiUrl + '/storage/' + cartItem.product.image_url" alt="product" class="w-20 h-20 object-cover" />
                      <div class="ml-3">
                        <p class="text-sm font-semibold">{{ cartItem.product.title }}</p>
                        <button v-if="isDeletingItem != cartItem.id" @click="deleteItem(cartItem.id)">Delete</button>
                        <button v-else>
                          <svg aria-hidden="true" class="mr-3 inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                          </svg>
                          Deleting...
                        </button>
                      </div>
                    </div>
                    <div class="col-span-4 max-w-40 h-12 text-xl relative bg-white border border-black rounded visible sm:hidden">
                      <button @click="reduceQuantity(cartItem.id)" type="button" class="absolute w-[30px] h-full bg-transparent">-</button>
                      <input :value="cartItem.quantity" class="w-full h-full text-center outline-none border-none focus:ring-0 bg-transparent" readonly type="text" name="" id="" style="padding: 0 30px;">
                      <button @click="addQuantity(cartItem.id)" type="button" class="absolute w-[30px] h-full bg-transparent right-0">+</button>
                    </div>
                  </td>
                  <td class="table-td md:px-5 px-3 py-3 text-left hidden sm:table-cell">
                    <p class="text-sm font-semibold">{{ cartItem.price }}</p>
                  </td>
                  <td class="table-td md:px-5 px-3 py-3 text-left hidden sm:table-cell">
                    <div class="col-span-4 max-w-40 h-12 text-xl relative bg-white border border-black rounded">
                      <button @click="reduceQuantity(cartItem.id)" type="button" class="absolute w-[30px] h-full bg-transparent">-</button>
                      <input :value="cartItem.quantity" class="w-full h-full text-center outline-none border-none focus:ring-0 bg-transparent" readonly type="text" name="" id="" style="padding: 0 30px;">
                      <button @click="addQuantity(cartItem.id)" type="button" class="absolute w-[30px] h-full bg-transparent right-0">+</button>
                    </div>
                  </td>
                  <td class="table-td md:px-5 px-3 py-3  text-right  sm:text-left">
                    <p class="text-sm font-semibold">{{ (cartItem.price * cartItem.quantity).toFixed(2) + ' FCFA'}}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!--Process to checkout button-->
          <div class="h-full col-span-full  gap-2 flex">
            <div class="w-full sm:w-[400px] ml-auto ">
              <div class="col-span-full p-2 flex justify-between text-xl font-semibold ">
                  <div class=""> SubTotal </div>
                  <div class="">{{total + 'FCFA'}}</div>
              </div>
              <p class="col-span-full p-2 font-normal">
                Tax included. Shipping is calculated on the payment page
              </p>
              <div class="col-span-full">
                <button  @click="cart.length > 0 ? placeOrder() : ''" :class="{'pointer-events-none':cart.length <=0, 'pointer-events-auto':cart.length > 0}" class="bg-pink-600 text-center w-full mt-10 font-medium text-base text-white py-3 rounded">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>

        <!--Empty cart message-->
        <div class="col-span-full px-2 md:px-10 min-h-80 py-10 flex flex-col justify-between" v-else>
          <div class="w-full pb-5">
            <h1 class="text-2xl font-bold text-center">Shopping Cart</h1>
          </div>
          <p class="text-lg font-medium text-slate-500 text-center">No products in cart. <a href="/" class="underline">Go shopping</a></p>
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
import Icon from "@/components/Icon";
import {checkAuth} from '@/utils/checkAuth.js';
import { useToast } from 'vue-toastification';
import countCartItems from "@/utils/cart";
import axios from 'axios';
import { EventBus } from '@/eventBus';
export default {
    data() {
        return {
          apiUrl: apiClient.defaults.baseURL,
          cartItems: [],
          products: [],
          loading: false,
          total: 0,
          delivery: 2500,
          cart: JSON.parse(localStorage.getItem('cart')),
          toast: useToast(),
          isFetchingData: false,
          isDeletingItem: null,

        }
    },
      components:{
        Modal,
        Button,
        Header,
        Footer,
        ProductCart,
        Icon,
      },
      methods: {
        async getCartItems(){
            let cart  = JSON.parse(localStorage.getItem('cart'));
            if (!cart) {
              cart = [];
              return;
            }
            for (let i = cart.length - 1; i >= 0; i--) {
              if (typeof cart[i] !== 'object') {
                cart.splice(i, 1);
              }
            }
            console.log(cart);
            if (cart.length > 0) {
              await axios.post('api/cart/items', {'productVariantIds': cart})
              .then((response) => {
                let products = response.data.products;
                this.total = 0;
                for (let index = 0; index < products.length; index++) {
                  products[index].quantity = cart.find(item => item.productVariantId == products[index].id).quantity;
                  this.total += parseInt(products[index].price) * products[index].quantity;
                }
                this.cartItems = products;
                console.log(this.cartItems);
                
              }).catch((error) => {
                  console.log(error);
              });
            }
        },
        addQuantity(productVariantId){
          let cart = JSON.parse(localStorage.getItem('cart'));
          let index = cart.findIndex(item => item.productVariantId == productVariantId);
          cart[index].quantity++;
          localStorage.setItem('cart', JSON.stringify(cart));
          this.getCartItems();
        },
        reduceQuantity(productVariantId){
          let cart = JSON.parse(localStorage.getItem('cart'));
          let index = cart.findIndex(item => item.productVariantId == productVariantId);
          if (cart[index].quantity > 1) {
            cart[index].quantity--;
            localStorage.setItem('cart', JSON.stringify(cart));
            this.getCartItems();
          }
        },

        updateQuantity(productVariantId, quantity){
          let cart = JSON.parse(localStorage.getItem('cart'));
          let index = cart.findIndex(item => item.productVariantId == productVariantId);
          cart[index].quantity = quantity;
          localStorage.setItem('cart', JSON.stringify(cart));
          this.getCartItems();
        },

        async placeOrder(){
          if (!checkAuth){
            this.$router.push('/login');
          } else{
            this.$router.push('/place-order');
          }
        },

        async deleteItem(productVariantId){
          this.isDeletingItem = productVariantId;
          let cart = JSON.parse(localStorage.getItem('cart'));
          let index = cart.findIndex(item => item.productVariantId == productVariantId);
          cart.splice(index, 1);
          localStorage.setItem('cart', JSON.stringify(cart));
          this.getCartItems().then(() => {
            this.emitter.emit('cartUpdated', {'eventContent': countCartItems()})
            this.toast.success('Item removed from cart', { timeout: 2000 });
            this.isDeletingItem = null; // Emit event to refresh cart items
          });
        }
      },
      
    async mounted() {
      this.getCartItems();
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
