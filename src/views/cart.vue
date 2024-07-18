<template>
    <div class="bg-white" v-if="!loading">
        <Header />
        <div class="px-2 md:px-10 grid grid-cols-12">
            <div class="bg-white dark:bg-slate-800 space-y-7 col-span-full sm:col-span-8">
                <div class="overflow-x-auto border-0">
                  <div class="inline-block min-w-full align-middle">
                    <div class="md:overflow-auto">
                      <table class="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                        <thead class="border-0 border-slate-100 dark:border-slate-800 dark:text-slate-400">
                          <tr>
                            <th scope="col" class="table-th md:px-5 px-3 py-3 text-left"> Product</th>
                            <th scope="col" class="table-th md:px-5 px-3 py-3 text-left">Price</th>
                            <th scope="col" class="table-th md:px-5 px-3 py-3 text-left">Quantity</th>
                            <th scope="col" class="table-th md:px-5 px-3 py-3 text-left">Total</th>
                            <th scope="col" class="table-th md:px-5 px-3 py-3 text-right">Remove</th>
                          </tr>
                        </thead>
                        <tbody
                          v-if="cart.items.length > 0"
                          class="bg-white divide-slate-100 dark:bg-slate-800 dark:divide-slate-700"
                        >
                          <tr v-for="(item, index) in cart.getItems" :key="index">
                            <td
                              :item="item"
                              class="table-td flex items-center space-x-3 rtl:space-x-reverse md:p-5 py-3 px-3 md:px-5"
                            >
                              <div
                                class="md:p-4 p-2 flex-none bg-slate-200 rounded md:h-20 md:w-20 w-16 h-16 rtl:ml-3"
                              >
                                <img class="w-full h-full object-contain" :src="item.img" />
                              </div>
                              <div>
                                <p
                                  class="text-slate-900 dark:text-slate-300 md:text-base text-sm font-medium md:py-2 py-1 md:w-[380px] w-[150px] truncate"
                                >
                                  {{ item.name }}
                                </p>
                                <p
                                  class="text-slate-900 dark:text-slate-300 md:text-base text-sm font-medium"
                                >
                                  <span
                                    class="text-slate-500 dark:text-slate-400 font-normal mr-1"
                                  >
                                    Brand:
                                  </span>
                                  {{ item.brand }}
                                </p>
                              </div>
                            </td>
                            <td
                              class="table-td text-left md:p-5 py-3 px-3 dark:text-slate-300"
                            >
                              ${{ item.price }}
                            </td>
                            <td class="table-td text-left md:p-5 py-3 px-3 dark:text-slate-300">
                              <div class="max-w-[100px]">
                              </div>
                            </td>
                            <td class="table-td text-left md:p-5 py-3 px-3 dark:text-slate-300">
                             ${{item.price * item.quantity}}
                            </td>
                            <td class="table-td text-right md:p-5 py-3 px-3 dark:text-slate-300">
                              <button
                                @click="cart.removeFromCart(item)"
                                class="text-lg inline-flex flex-col items-center justify-center h-8 w-8 rounded-full bg-gray-500-f7 dark:bg-slate-900 dark:text-slate-400 bg-slate-100 hover:bg-danger-500 hover:text-white dark:hover:bg-danger-500 dark:hover:text-white"
                              >
                                <Icon icon="heroicons:trash" />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                        <tbody
                          v-else
                          class="bg-white divide-slate-100 dark:bg-slate-800 dark:divide-slate-700"
                        >
                          <tr>
                            <td
                              class="table-td text-center h-24 dark:text-slate-300"
                              colSpan="5"
                            >
                              No result's
                            </td>
                          </tr>
                        </tbody>
            
                        <tfoot class="mx-6">
                          <tr class="border-t dark:border-slate-700">
                            <td class="table-td px-3 py-3 text-left" colSpan="4">
                              <p
                                class="md:text-base text-sm font-medium text-slate-500 dark:text-slate-400"
                              >
                                Subtotal:
                              </p>
                            </td>
                            <td class="table-td px-3 py-3 text-right">
                              <p
                                class="md:text-base text-sm font-medium text-slate-900 dark:text-slate-300"
                              >
                                ${{ cart.totalPrice }}
                              </p>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
            </div>
            <div class="">
                checkout
            </div>
        </div>
        <!-- Single result -->
        <div class="px-2 md:px-10 min-h-80 py-10  grid grid-cols-12 gap-6">
            <div class="col-span-full">
                <h1 class="text-2xl font-bold text-center">You may also like</h1>
            </div>
            <div class="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3 border" v-for="product in products.slice(3, 8)">
                <ProductCart :product="product" />
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
import { ref } from "vue";
import { cartStore } from "@/store/cart";
export default {
    data() {
        return {
            apiUrl: apiClient,
            inWishlist: null,
            cartItems: {},
            products: products,
            cart: cartStore(),
            loading: false,
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
        getCartItems(){
            const slug = this.$route.params.slug;
            this.product = products.filter(product => product.slug == slug)[0];
            console.log(this.product);
        },
        addQuantity(){
          this.form.quantity++;
        },
        reduceQuantity(){
          if(this.form.quantity > 1){
            this.form.quantity--;
          }
        },
      },
      
    async mounted() {
        
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
