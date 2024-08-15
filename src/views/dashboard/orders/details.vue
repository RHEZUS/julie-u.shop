<template>
    <div class="grid grid-cols-12 gap-2">
        <div class="col-span-full flex justify-between items-center mb-3">
            <div class="">
                <h2 class="font-semibold dark:text-white text-black-700 text-2xl flex items-center gap-3">
                    Order Id: {{ order.id }}
                    <span class="text-sm font-light bg-orange-200/40 text-orange-600 px-2 py-[2px] rounded-sm"> pending </span>
                </h2>
                <p class="text-black-400">January 8, 2024 at 9:48 pm from Draft Orders </p>
            </div>
            <div class="flex gap-2">
                <button class="px-3 py-1 bg-black-600 text-white">Mark as Paid</button>
                <button class="px-3 py-1 bg-black-600 text-white">Mark as Fulfilled</button>
            </div>
        </div>
        <div class="col-span-full md:col-span-8 flex gap-6 flex-col">
            <Card>
                <div class="flex flex-col gap-3">
                    <h3 class="font-semibold text-lg mb-2 dark:text-white text-black-700">Order Items</h3>
                    <div class="grid grid-cols-12 items-center gap-2" v-for="item in order.items">
                        <div class="col-span-2">
                            <img v-if="findImage(item.variant.product, item.variant.option1_id) != null" :src="mediaClient + '/storage/' + findImage(item.variant.product, item.variant.option1_id)"  alt="">
                            <img v-else :src="mediaClient + '/storage/' + item.variant.product.image_url" alt="">
                        </div>
                        <div class="col-span-5 dark:text-white flex flex-col gap-2 text-black-700">
                            <p class="text-black-400">Categorie</p>
                            <h4 class="font-semibold py-2">{{ item.variant.product.title }}</h4>
                            <div class="flex items-center gap-2">
                                <div  v-if="item.variant.option2 != 'N/A' /*&& item.variant.option2 == color*/" class="w-8 h-4 " :style="{ backgroundColor: item.variant.option1 }" ></div>
                                <div v-if="item.variant.option2 != 'N/A'" class="text-black-400"> {{ item.variant.option2 }} </div>
                            </div>
                        </div>
                        <div class="col-span-5 justify-self-end flex gap-2">
                            <div class="border text-sm px-3 py-1 h-fit dark:text-white text-black-500"> {{ item.quantity }} * {{  parseFloat(item.price) / item.quantity  }} </div>
                            <div class="border text-sm px-3 py-1 h-fit dark:text-white text-black-500"> {{ item.price }} </div>
                        </div>
                    </div>
                </div>

            </Card>
                
            <Card class="hidden">
                <div class="">
                    <h3 class="font-semibold text-lg dark:text-white text-black-700">Payment infos</h3>
                </div>
            </Card>
        </div>
        <div class="col-span-full md:col-span-4 flex gap-6 flex-col">
            <Card>
                <div class="">
                    <h3 class="font-semibold text-lg mb-2 dark:text-white text-black-700">Custommer</h3>
                    <div class="flex flex-col gap-2">
                        <p class="flex items-center gap-2 text-black-400" v-if="order.user"> <Icon icon="bx:user"/> {{ order.user.name }}  </p>
                        <p class="flex items-center gap-2 text-black-400" v-if="order.user"> <Icon icon="bx:envelope"/> {{ order.user.email }}  </p>
                        <p class="flex items-center gap-2 text-black-400" v-if="order.user"> <Icon icon="bx:envelope"/> {{ order.user.telephone }}  </p>
                        <p class="flex items-center gap-2 text-black-400" v-if="order.user"> <Icon icon="bx:envelope"/> {{ order.user.telephone }}  </p>
                    </div>
                </div>
            </Card>

            <Card>
                <div class="">
                    <h3 class="font-semibold text-lg mb-2 dark:text-white text-black-700">Delivery Address</h3>
                    <div class="flex flex-col gap-2">
                        <p class="flex items-center gap-2 text-black-400" v-if="order.user"> <Icon icon="bx:user"/> {{ order.user.name }}  </p>
                        <p class="flex items-center gap-2 text-black-400" v-if="order.user"> <Icon icon="bx:envelope"/> {{ order.user.email }}  </p>
                        <p class="flex items-center gap-2 text-black-400" v-if="order.user"> <Icon icon="bx:envelope"/> {{ order.user.telephone }}  </p>
                        <p class="flex items-center gap-2 text-black-400" v-if="order.user"> <Icon icon="bx:envelope"/> {{ order.user.telephone }}  </p>
                    </div>
                </div>
            </Card>
        </div> 
    </div>
</template>
<script>
import Card from "@/components/Card";
import { useToast } from "vue-toastification";
import apiClient from "@/plugins/axios";
import Icon from "@/components/Icon";
import axios from "axios";
export default {
    data() {
        return {
            order: [],
            toast: useToast(),
            mediaClient: apiClient.defaults.baseURL,
        };
    },
    components: {
        Card,
        Icon,
    },
    methods: {
        async fetchOrder() {
            try {
                const response = await axios.get(`/api/admin/order/${this.$route.params.id}`);
                this.order = response.data.order;
                console.log(this.order);
            } catch (error) {
                console.log(error);
                this.toast.error("Failed to fetch order details");
            }
        },

        findImage(product, optionId) {
            console.log(product.options[0].values);
            const value = product.options[0].values.find(value => value.id == optionId) || null;
            if (value == null) {
                return null;
            }
            return JSON.parse(value.images_urls)[0];
        },
    },
    mounted() {
        this.fetchOrder();
    },
};
</script>
<style lang=""></style>