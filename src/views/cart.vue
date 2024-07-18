<template>
    <div class="bg-white" v-if="!loading">
        <Header />

        <div class="px-2 md:px-10 min-h-80 py-10  grid grid-cols-12 gap-6" v-if="cartItems && cartItems.length > 0">
          <div class="col-span-full">
              <h1 class="text-2xl font-bold text-center">Shopping Cart</h1>
          </div>
          <div class="col-span-9">
            <table class="table-auto w-full">
              <thead >
                <tr class="border-b">
                  <th scope="col" class="table-th font-medium py-3 text-left"> Product</th>
                  <th scope="col" class="table-th font-medium py-3 text-left">Price</th>
                  <th scope="col" class="table-th font-medium py-3 text-left">Quantity</th>
                  <th scope="col" class="table-th font-medium py-3 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cartItem in cartItems" :key="cartItem.id" class="border-b">
                  <td class="table-td md:px-5 px-3 py-3 text-left">
                    <div class="flex items-center">
                      <img  :src="JSON.parse(cartItem.product.images_urls)[0] " alt="product" class="w-20 h-20 object-cover" />
                      <div class="ml-3">
                        <p class="text-sm font-semibold">{{ cartItem.product.title }}</p>
                        <button>Delete</button>
                      </div>
                    </div>
                  </td>
                  <td class="table-td md:px-5 px-3 py-3 text-left">
                    <p class="text-sm font-semibold">{{ cartItem.price }}</p>
                  </td>
                  <td class="table-td md:px-5 px-3 py-3 text-left">
                    <div class="col-span-4 max-w-40 h-12 text-xl relative bg-white border border-black rounded">
                      <button @click="reduceQuantity(cartItem.id)" type="button" class="absolute w-[30px] h-full bg-transparent">-</button>
                      <input :value="cartItem.quantity" class="w-full h-full text-center outline-none border-none focus:ring-0 bg-transparent" readonly type="text" name="" id="" style="padding: 0 30px;">
                      <button @click="addQuantity(cartItem.id)" type="button" class="absolute w-[30px] h-full bg-transparent right-0">+</button>
                    </div>
                  </td>
                  <td class="table-td md:px-5 px-3 py-3 text-left">
                    <p class="text-sm font-semibold">{{ (cartItem.price * cartItem.quantity) .toFixed(2) + ' FCFA'}}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="grid grid-cols-12 h-full sm:col-span-4 md:col-span-3 gap-2">
            <div class="col-span-full p-2 flex justify-between text-lg font-medium bg-pink-500 text-white">
                <div class=""> SubTotal </div>
                <div class="">{{total + 'FCFA'}}TL</div>
            </div>
            <div class="col-span-full px-2 flex justify-between text-lg font-medium">
              <div class=""> Subtotal </div>
              <div class="">{{total + 'FCFA'}}TL</div>
            </div>

            <div class="col-span-full px-2 flex justify-between text-lg font-medium ">
              <div class=""> Delivery </div>
              <div class="">{{delivery + 'FCFA'}}TL</div>
            </div>
            <div class="col-span-full px-2 flex justify-between text-lg font-medium">
              <div class=""> Total </div>
              <div class="">{{total + delivery + 'FCFA'}}TL</div>
            </div>
            <div class="col-span-full">
              <button  @click="cart.length > 0 ? placeOrder() : ''" :class="{'pointer-events-none':cart.length <=0, 'pointer-events-auto':cart.length > 0}" class="text-center w-full mt-10 font-medium text-base text-white bg-[#0e0e0e] py-3 rounded">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
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
export default {
    data() {
        return {
            apiUrl: apiClient,
            cartItems: [],
            products: [],
            loading: false,
            total: 0,
            delivery: 2500,
            cart: JSON.parse(localStorage.getItem('cart')),

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
            for (let i = cart.length - 1; i >= 0; i--) {
              if (typeof cart[i] !== 'object') {
                cart.splice(i, 1);
              }
            }
            console.log(cart);
            if (cart.length > 0) {
              await apiClient.post('api/cart/items', {'productVariantIds': cart})
              .then((response) => {
                let products = response.data.products;
                for (let index = 0; index < products.length; index++) {
                  products[index].quantity = cart.find(item => item.productVariantId == products[index].id).quantity;
                  this.total += products[index].price * products[index].quantity;
                }
                this.cartItems = products;
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
