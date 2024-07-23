<template>
    <div class="">
        <form @submit.prevent="createProduct()" class="flex flex-col gap-4 relative z-[100]">
            <!--Product details-->
            <Card noborder>
              <div class="md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center">
                <h5>Create new product</h5>
              </div>
              <div class="text-base text-slate-600 dark:text-slate-300 grid grid-cols-12  items-center gap-4">
                <div class="cols-span-12 md:col-span-6">
                    <Textinput type="text" placeholder="Name of the product" name="name" v-model="product.title" :error="formErrors.title" classInput="h-[48px]"/>
                </div>
                <div class="cols-span-12 md:col-span-6">
                    <Select v-model="product.category_id" :error="formErrors.category_id" :options="categories" :placeholder="'Select category'" classInput="h-[48px]"></Select>
                </div>
                <div class="cols-span-12 md:col-span-6">
                    <Select v-model="product.brand_id" :error="formErrors.brand_id" :options="brands" :placeholder="'Select Brand'" classInput="h-[48px]"></Select>
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <input type="file" name="file-input-medium" id="file-input-medium" @change="handleFileUpload" class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500   file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4">
                </div>
                <div class="col-span-12">
                    <Textarea  placeholder="Description of the product" v-model="product.description" :error="formErrors.description" hasicon classInput="min-h-[48px]"></Textarea>
                </div>
                <div class="cols-span-12 md:col-span-6">
                    <Textinput type="text" placeholder="Price" v-model="product.price" :error="formErrors.price" classInput="h-[48px]"/>
                </div>
                <div class="cols-span-12 md:col-span-6">
                    <Textinput type="number" placeholder="Quantity" v-model="product.quantity" :error="formErrors.price" classInput="h-[48px]"/>
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <Switch label="Is published" class="" v-model="product.status" :activeClass="'bg-primary-500'" :active="product.status ? true : false"></Switch>
                </div>
            </div>
            </Card>

            <!--Product Variants-->
            <Card noborder>
                <div class="md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center">
                  <h5>Product Variants</h5>
                </div>
                <div v-if="product.options.length > 0" class="text-base text-slate-600 dark:text-slate-300 items-center gap-4 rounded-lg">
                    <!-- Options List -->
                    <div class="p-2 flex flex-col gap-2 relative border mb-2" v-for="(option, optionIndex) in product.options" :key="optionIndex">
                        <div class="">
                            <div class="flex justify-between py-2">
                                <label for=""> Option Name   </label>
                                <button @click="removeOption(optionIndex)" type="button" class="float-end text-xl text-danger-600 flex items-center"><span class="text-base "> Delete option </span> </button>
                            </div>

                            <Select v-model="option.name" :error="formErrors.options.name" :options="[{label:'Color', value:'color'}, {label: 'Size', value: 'size'}]" :placeholder="'Select option'" classInput="h-[35px]"></Select>

                        </div>
                        
                        <div class="">
                            <div class="flex justify-between py-2">
                                <label for=""> Option Values  </label>
                                <button @click="addValue(optionIndex)" type="button" class="float-end text-xl text-blue-600 flex items-center"><i class='bx bx-plus'></i> <span class="text-base "> Add another {{ option.name ? option.name : 'Value' }}</span> </button>
                            </div>
                            <div class="grid grid-cols-12 relative gap-2 pr-10 items-center justify-between mt-3" v-for="(value, valueIndex) in option.values">
                                <div class="" :class="{'col-span-6' : option.name == 'color', 'col-span-12' : option.name != 'color' }">
                                    <Textinput type="text' " placeholder="Value" v-model="value.value" :error="formErrors.options.values" classInput="h-[35px]"/>
                                </div>
                                <div class="col-span-6" v-if="option.name == 'color'" >
                                    <input type="file" multiple name="file-input-medium" id="file-input-medium" @change="handleOptionFileSelected($event, optionIndex, valueIndex)" class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500   file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4">
                                </div>
                                <button @click="removeValue(optionIndex, valueIndex)" type="button" class="float-end text-xl absolute top-0 bottom-0 right-0"><i class='bx bx-trash'></i></button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="text-blue-600 pointer-events-auto " v-if="product.options.length < 2">
                    <button @click="addOption()" type="button" class=""><i class='bx bx-plus'></i> Add options like  color or size</button>
                </div>

                <div class="mt-8" v-if="showVariants()" >
                    <table class="table-auto w-full">
                        <tr>
                            <th class="text-left">Title</th>
                            <th class="text-left">Price</th>
                            <th class="text-left">Inventory Quantity</th>
                        </tr>
                        <tr v-for="index in product.variants.length" :key="index">
                            <td>
                                <Textinput type="text" placeholder="Title" name="title" v-model="product.variants[index - 1].title" :error="formErrors.variants.title" classInput="h-[35px]"/>
                            </td>
                            <td>
                                <Textinput type="text" placeholder="Price" name="price" v-model="product.variants[index - 1].price" :error="formErrors.variants.price" classInput="h-[35px]"/>
                            </td>
                            <td>
                                <Textinput type="number" placeholder="Inventory Quantity" name="inventory_quantity" v-model="product.variants[index - 1].inventory_quantity" :error="formErrors.variants.inventory_quantity" classInput="h-[35px]"/>
                            </td>
                        </tr>
                    </table>
                </div>
            </Card>
            <div class="col-span-12 py-3 flex justify-end space-x-3 border-t border-slate-100 dark:border-slate-700">
                <button type="submit" v-if="isCreating == false" class="bg-blue-500 text-white h-8 px-3 flex items-center">Save</button>
                <button type="button" v-if="isCreating == true" class="bg-blue-500 text-white h-8  px-3 flex items-center">Creating...</button>
            </div>
        </form>
    </div>
</template>
<script>
import Breadcrumb from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import apiClient from "@/plugins/axios";
import Card from "@/components/Card";
import Textinput from "@/components/Textinput";
import Textarea from "@/components/Textarea";
import Select from '@/components/Select';
import FileInput from "@/components/Fileinput";
import Switch from "@/components/Switch";
import { useToast } from "vue-toastification";
export default {
    data() {
        return {
            toast: useToast(),
            product: {
                title: '',
                description: '',
                brand_id: null,
                category_id: null,
                image: null,
                price: "",
                quantity: "",
                status: 'draft',
                variants: [
                ],
                options: []
            },
            isCreating: false,
            categories: [],
            brands: [],
            formErrors: {
                title: '',
                slug: '',
                description: '',
                brand_id : '',
                category_id : '',
                tags: '',
                image: '',
                price: '',
                status: '',
                variants :  {
                    title: '',
                    price: '',
                    sku: '',
                    option1: '',
                    option2: '',
                    barcode: '',
                    grams: '',
                    weight: '',
                    inventory_quantity: ''
                },
                options:{
                    name: '',
                    position: '',
                    values: ''
                }

            },
            
        }
    },
    components: {
        Breadcrumb,
        Button,
        Card,
        Textinput,
        Textarea,
        Select,
        FileInput,
        Switch,
    },
    watch: {
        'product.options': {
        handler(newOptions) {
            this.generateVariants(newOptions);
        },
        deep: true
        }
    },
    methods: {
        async createProduct() {
            this.isCreating = true;
            this.errors = [];
            if (this.product.variants.length === 0) {
                this.createVariant();
            }
            console.log(this.product);

            await apiClient.post(`/api/admin/product/create`, this.product, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((response) => {
                this.toast.success('Product created successfully', { timeout: 2000 });
                console.log(response);
                this.clearForm();
                //this.$router.push({ name: 'products' });
            }).catch((error) => {
                this.toast.error('Failed to create product', { timeout: 2000 });
                console.log(error);
            });

            this.isCreating = false;
            
        },

        createVariant(){
            this.product.variants.push({
                title: this.product.title,
                price: this.product.price || 0,
                inventory_quantity: this.product.quantity || 0,
            });
        },

        addOption(index) {
            this.product.options.push({
                name: '',
                position: index + 1,
                values: [
                    { value: '', images: [] }
                ],
               
            });
            console.log(this.product.options);
        },

        removeOption(index) {
            this.product.options.splice(index, 1);
        },

        showVariants() {
            if (this.product.options.length > 0 && this.product.options.every(option => option.values.length > 0)) {
                return true;
            }
            return false;
        },

        generateVariants(options) {
            // Find color and size options
            const colorOption = options.find(option => option.name.toLowerCase() === "color");
            const sizeOption = options.find(option => option.name.toLowerCase() === "size");

            // Check if options are valid
            const colorValues = colorOption && colorOption.values ? colorOption.values.map(v => v.value) : [];
            const sizeValues = sizeOption && sizeOption.values ? sizeOption.values.map(v => v.value) : [];

            this.product.variants = []; // Clear existing variants

            // Generate new variants
            if (colorValues.length && sizeValues.length) {
                colorValues.forEach(color => {
                sizeValues.forEach(size => {
                    this.product.variants.push({
                        title: `${color} - ${size}`,
                        option1: color,
                        option2: size,
                        price: this.product.price || '0',
                        sku: null,
                        barcode: null,
                        grams: 0,
                        weight: 0,
                        inventory_quantity: this.product.quantity || '0'
                    });
                });
                });
            } else if (colorValues.length) {
                colorValues.forEach(color => {
                this.product.variants.push({
                    title: `${color}`,
                    option1: color,
                    option2: null,
                    price: this.product.price || '0',
                    sku: null,
                    barcode: null,
                    grams: 0,
                    weight: 0,
                    inventory_quantity: this.product.quantity || '0'
                });
                });
            } else if (sizeValues.length) {
                sizeValues.forEach(size => {
                this.product.variants.push({
                    title: `${size}`,
                    option1: null,
                    option2: size,
                    price: this.product.price || '0',
                    sku: null,
                    barcode: null,
                    grams: 0,
                    weight: 0,
                    inventory_quantity: this.product.quantity || '0'
                });
                });
            }
        },
  
        clearForm() {
            this.product = {
                title: '',
                description: '',
                brand_id: null,
                category_id: null,
                image: null,
                price: "",
                quantity: "",
                status: 'draft',
                variants: [
                ],
                options: []
            };
        },


        addValue(optionIndex) {
            this.product.options[optionIndex].values.push(
                { value: '', images: [] }
            );
        },
    
        removeValue(optionIndex, valueIndex) {
            this.product.options[optionIndex].values.splice(valueIndex, 1);
        },

        handleFileUpload(event) {
            this.product.image = event.target.files[0];
        },

        handleOptionFileSelected(event, optionIndex, valueIndex) {
            this.product.options[optionIndex].values[valueIndex].images = Array.from(event.target.files);;
            console.log(this.product); // You can now see all selected files here
        },

        async fetchCategories() {
            await apiClient.get(`/api/admin/categories/id-name`, { withCredentials: true })
            .then((response) => {
                this.categories = response.data.categories;
            }).catch((error) => {
                this.toast.error('Failed to fetch categories', { timeout: 2000 });
            });
        },

        async fetchBrands() {
            await apiClient.get(`/api/admin/brands/id-name`, { withCredentials: true })
            .then((response) => {
                this.brands = response.data.brands;
            }).catch((error) => {
                this.toast.error('Failed to fetch brands', { timeout: 2000 });
            });
        },

    },
    mounted() {
        this.fetchCategories();
        this.fetchBrands();
    }
}

</script>
  <style lang=""></style>
  