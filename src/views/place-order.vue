<template>
    <div class="bg-white" v-if="!loading">
        <Header />

        <div class="px-2 md:px-10 min-h-80 py-10  grid grid-cols-12 gap-6" v-if="cartItems && cartItems.length > 0">
          <div class="col-span-full">
              <h1 class="text-2xl font-bold text-center">Shopping Cart</h1>
          </div>
          <div class="col-span-full md:col-span-8">
            <Card noborder>
              <div class=" pb-6 md:space-y-0 space-y-3 items-center">
                <h5 class="text-start mb-3">Shopping Address</h5>
                <div class="grid grid-cols-12 gap-6">
                  <div class="col-span-full sm:col-span-6">
                    <Select v-model="form.city" placeholder="Ville" :options="locationOptions" @change="" />
                  </div>
                  <div class="col-span-full sm:col-span-6">
                    <TextInput v-model="form.quartier" placeholder="Quartier"/>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div class="h-full col-span-full md:col-span-4 gap-2 rounded-lg flex bg-white">
              <div class="min-w-full flex flex-col gap-3 ml-auto border p-2  font-medium">
                <h3 class="text-lg"> Order Summary</h3>
                <div class=" border-b pb-2">
                  <div class="flex items-center justify-between py-1">
                    <div class="text-sm text-start">Product Total</div>
                    <div class="text-sm text-end">{{ total + 'FCFA' }}</div>
                  </div>
                  <div class="flex items-center justify-between py-1">
                    <div class="text-sm text-start">Delivery</div>
                    <div class="text-sm text-end">{{ delivery + 'FCFA' }}</div>
                  </div>
                </div>
                <div class="flex items-center justify-between py-1">
                  <div class="text-sm text-start">Total</div>
                  <div class="text-sm text-end">{{ total + delivery + 'FCFA' }}</div>
                </div>
                <div class="col-span-full">
                  <button  @click="cart.length > 0 ? placeOrder() : ''" :class="{'pointer-events-none':cart.length <=0, 'pointer-events-auto':cart.length > 0}" class="text-center bg-pink-600 w-full mt-10 font-medium text-base text-white py-3 rounded">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
          </div>

          <!--Shopping addresses-->
          <div class="col-span-full visible">
            <Card noborder>
              <div class=" pb-6 md:space-y-0 space-y-3 items-center">
                <h5 class="text-start mb-3">Shopping Address</h5>
                <div class="grid grid-cols-12 gap-6">
                  <div class="col-span-full sm:col-span-6">
                    <Select v-model="form.city" placeholder="Ville" :options="locationOptions" @change="" />
                  </div>
                  <div class="col-span-full sm:col-span-6">
                    <TextInput v-model="form.quartier" placeholder="Quartier"/>
                  </div>
                </div>
              </div>
            </Card>
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
import Card from '@/components/Card/frontCart.vue';
import Footer from '@/components/HomeFooter/index.vue';
import apiClient from '@/plugins/axios';
import Modal from '@/components/Modal/ProdModal.vue';
import Button from '@/components/Button';
import TextInput from "@/components/Textinput/white.vue";
import Select from '@/components/Select/white.vue';
import Icon from "@/components/Icon";
import {checkAuth} from '@/utils/checkAuth';
import axios from 'axios';
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
          detailAddressSaved: false,
          form: {
            ville: '',
            quartier: ''
          },
          locationOptions: [],
          locations: [],
        }
    },
      components:{
        Modal,
        Button,
        Header,
        Footer,
        ProductCart,
        Icon,
        TextInput,
        Select,
        Card
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
                for (let index = 0; index < products.length; index++) {
                  products[index].quantity = cart.find(item => item.productVariantId == products[index].id).quantity;
                  this.total += products[index].price * products[index].quantity;
                }
                this.cartItems = products;
                console.log(this.cartItems);
              }).catch((error) => {
                  console.log(error);
              });
            }
        },

        getLocations () {
          axios.get('api/delivery-locations/active').then((response) => {
            this.locationOptions = response.data.locations.map((location) => {
              return {
                value: location.id,
                label: location.name
              }
            });
            this.locations = response.data.locations;
            console.log(this.locationOptions);
          }).catch((error) => {
            console.log(error);
          });
        },
        async placeOrder(){
          if (!checkAuth()) {
            this.$router.push('/login');
            return;
          }
          if (!this.form.ville || !this.form.quartier) {
            this.toast.error('Please fill in the address fields', { timeout: 2000 });
            return;
          }
          let cart = JSON.parse(localStorage.getItem('cart'));
          let productVariantIds = [];
          for (let i = 0; i < cart.length; i++) {
            productVariantIds.push(cart[i].productVariantId);
          }
          await axios.post('api/orders', {
            'productVariantIds': productVariantIds,
            'ville': this.form.ville,
            'quartier': this.form.quartier
          }).then((response) => {
            this.toast.success('Order placed successfully', { timeout: 2000 });
            localStorage.removeItem('cart');
            this.$router.push('/orders');
          }).catch((error) => {
            this.toast.error('Failed to place order', { timeout: 2000 });
          });
        }

      },
      
    async mounted() {
      this.getCartItems();
      this.getLocations();
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
