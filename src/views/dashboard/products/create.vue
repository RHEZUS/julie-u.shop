<template>
    <div class="">
        <form @submit.prevent="validateForm()" class="flex flex-col gap-4 relative z-[100]">
            <!--Product details-->
            <Card noborder>
              <div class="md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center">
                <h5 class="h5">Create new product</h5>
              </div>
              <div class="text-base text-slate-600 dark:text-slate-300 grid grid-cols-12  items-center gap-4">
                <div class="col-span-12 md:col-span-6">
                    <Textinput type="text" placeholder="Name of the product" name="name" v-model="product.title" :error="formErrors.title" classInput="h-[48px]"/>
                </div>
                <div class="col-span-12 md:col-span-6">
                    <Select v-model="product.category_id" :error="formErrors.category_id" :options="categories" :placeholder="'Select category'" classInput="h-[48px]"></Select>
                </div>
                <div class="col-span-12 md:col-span-6">
                    <Select v-model="product.brand_id" :error="formErrors.brand_id" :options="brands" :placeholder="'Select Brand'" classInput="h-[48px]"></Select>
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <input type="file" name="file-input-medium" :class="formErrors.image ? 'border-danger-500' : 'border-gray-200'" id="file-input-medium" @change="handleFileUpload" class="block w-full border shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500   file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4">
                    <div class="col-span-full text-danger-500 mt-2 text-sm block" v-if="formErrors.image"> {{ formErrors.image }} </div>
                </div>
                <div class="col-span-12">
                    <Textarea  placeholder="Description of the product" v-model="product.description" :error="formErrors.description" hasicon classInput="min-h-[48px]"></Textarea>
                </div>
                <div class="col-span-12 md:col-span-6">
                    <Textinput type="text" placeholder="Price" v-model="product.price" :error="formErrors.price" classInput="h-[48px]"/>
                </div>
                <div class="col-span-12 md:col-span-6">
                    <Textinput type="number" placeholder="Quantity" v-model="product.quantity" :error="formErrors.quantity" classInput="h-[48px]" />
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <Switch label="Is published" class="" v-model="product.status" :activeClass="'bg-primary-500'" :active="product.status ? true : false"></Switch>
                </div>
            </div>
            </Card>
  
            <!--Product Variants-->
            <Card noborder>
                <div class="md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center">
                  <h5 class="h5">Product Variants</h5>
                </div>
                
                <div v-if="product.options.length > 0" class="text-base text-slate-600 dark:text-slate-300 items-center gap-4 rounded-lg">
                    <!-- Options List -->
                    <div class="p-2 flex flex-col gap-2 relative border mb-2" v-for="(option, optionIndex) in product.options" :key="optionIndex">
                        <div class="">
                            <div class="flex justify-between py-2">
                                <label for=""> Option Name   </label>
                                <button @click="deleteOption(optionIndex)" type="button" class="float-end text-xl text-danger-600 flex items-center"><span class="text-base "> Delete option </span> </button>
                            </div>
  
                            <Select v-model="option.name" :error="formErrors[`options[${optionIndex}].name`]" :options="[{label:'Color', value:'color'}, {label: 'Size', value: 'size'}]" :placeholder="'Select option'" classInput="h-[35px]"></Select>
  
                        </div>
                        
                        <div class="">
                            <div class="flex justify-between py-2">
                                <label for=""> Option Values  </label>
                                <button @click="addValue(optionIndex)" type="button" class="float-end text-xl text-blue-600 flex items-center"><i class='bx bx-plus'></i> <span class="text-base "> Add another {{ option.name ? option.name : 'Value' }}</span> </button>
                            </div>
                            <div class="mt-2 text-danger-500 text-sm" v-if="formErrors[`options[${optionIndex}].values`]">{{ formErrors[`options[${optionIndex}].values`] }} </div>
                            <div class="grid grid-cols-12 relative gap-2 pr-10 items-center justify-between mt-3" v-for="(value, valueIndex) in option.values" :key="value.code">
                                <div class="" :class="{'col-span-6' : option.name == 'color', 'col-span-12' : option.name != 'color' }">
                                    <Textinput :type="/*option.name == 'color' ? 'color' : */'text'" placeholder="Value" :error="formErrors[`options[${optionIndex}].values[${valueIndex}].value`]" v-model="value.value" v-on:keyup="updateValue(value)" classInput="h-[35px]"/>
                                </div>
                                <div class="col-span-6" v-if="option.name == 'color'" >
                                    <input type="file" multiple name="file-input-medium" id="file-input-medium" @change="handleOptionFileSelected($event, optionIndex, valueIndex)" class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500   file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4">
                                    <p v-if="formErrors[`options[${optionIndex}].values[${valueIndex}].images_urls`]" class="text-danger-600 text-sm">{{ formErrors[`options[${optionIndex}].values[${valueIndex}].images_urls`] }}</p>
                                    <div class="flex gap-3 py-2" v-if="value.images_urls">
                                      <div class="relative" v-for="(image, index) in value.images_urls" :key="index">
                                          <label for="file-input-medium hidden" @click="deleOptionImage(optionValueId, index)" class="cursor-pointer text-danger-600 absolute right-0 "><i class='bx bx-trash'></i></label>
                                          <img class="h-20 w-16" :src="image" alt="">
                                      </div>
                                    </div>
                                </div>
                                <button @click="deleteOptionValue(optionIndex, valueIndex)" type="button" class="float-end text-xl absolute top-0 bottom-0 right-0"><i class='bx bx-trash'></i></button>
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
                            <th class="text-left h6 text-sm">Title</th>
                            <th class="text-left h6 text-sm">Price</th>
                            <th class="text-left h6 text-sm">Inventory Quantity</th>
                        </tr>
                        <tr v-for="(variant, variantIndex) in product.variants" :key="variantIndex">
                            <td>
                                <Textinput type="text" placeholder="Title" name="title" :error="formErrors[`variants[${variantIndex}].title`]" v-model="variant.title" classInput="h-[35px]"/>
                            </td>
                            <td>
                                <Textinput type="text" placeholder="Price" name="price" :error="formErrors[`variants[${variantIndex}].price`]"  v-model="variant.price" classInput="h-[35px]"/>
                            </td>
                            <td>
                                <Textinput :type="'number'" placeholder="Inventory Quantity" :error="formErrors[`variants[${variantIndex}].inventory_quantity`]" name="inventory_quantity" v-model="variant.inventory_quantity" classInput="h-[35px]"/>
                            </td>
                        </tr>
                    </table>
                </div>
            </Card>
            <div class="col-span-12 py-3 flex justify-end space-x-3 border-t border-slate-100 dark:border-slate-700">
                <Button v-if="!storing" type="submit" text="Save" btnClass="btn-primary h-10 flex items-center"/>
                <button v-else type="button" class="text-white px-3 py-2 bg-blue-600 flex items-center gap-2 rounded">
                    <div class="flex flex-row space-x-4">
                        <div class="w-4 h-4 rounded-full animate-spin border-2 border-dashed border-white border-t-transparent"></div>
                    </div>
                    Saving
                </button>
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
import * as yup from "yup";
import axios from "axios";
import { math } from "@amcharts/amcharts5";
export default {
    data() {
        return {
          toast: useToast(),
          mediaUrl: apiClient.defaults.baseURL + '/storage/',
          product: {
              title: '',
              description: '',
              brand_id: null,
              category_id: undefined,
              image: null,
              price: "0",
              quantity: "0",
              status: 'draft',
              variants: [
              ],
              options: []
          },
          storing: false,
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
    methods: {
        async validateForm(){
            console.log('Validating form');
            this.formErrors = {};
            this.storing = true;

            const uniqueValues = (array) => {
                const values = array.map(item => item.value);
                return new Set(values).size === values.length;
            };

            const schema = yup.object({
                title: yup.string().required('Title field is required'),
                description: yup.string().required('Description field is required'),
                brand_id: yup.number().nullable('Brand field is required'),
                category_id: yup.number().required('Category field is required'),
                image: yup.mixed().required('Image field is required'),
                price: yup.number().required('Price field is required').min(1, 'Price must be greater than 0'),
                quantity: yup.number().required('Quantity field is required').min(1, 'Quantity must be greater than 0'),
                status: yup.string().required('Status field is required'),
                variants: yup.array().of(
                    yup.object().shape({
                        title: yup.string().required('Title field is required'),
                        price: yup.number().required('Price field is required'),
                        inventory_quantity: yup.number().required('Inventory Quantity field is required'),
                    })
                ),
                options: yup.array().of(
                    yup.object().shape({
                        name: yup.string().required('Option name field is required'),
                        values: yup.array().of(
                            yup.object().shape({
                                value: yup.string().required('Option value field is required'),
                                images_urls: yup.array().of(
                                    yup.object().shape({
                                        url: yup.string().required('Image field is required')
                                    })
                                )
                            })
                        ).test('unique', 'Option values must be unique', uniqueValues)
                    })
                )
            });

            schema.validate(this.product, { abortEarly: false }).then(() => {
                // If the form is valid, create the product
                console.log('Form is valid, Creating products');
                
                this.createProduct().then(() => {
                    this.storing = false;
                });

            }).catch((error) => {
                console.log('Form is invalid');
                
                error.inner.forEach(e => {
                    this.formErrors[e.path] = e.message;
                });
                console.log('Form errors', this.formErrors);
                console.log('Error', error);
                
                
                this.storing = false;
            });
        },

        async createProduct() {
            this.storing = true;
            this.errors = [];
            if (this.product.variants.length === 0) {
                this.createVariant();
            }
            console.log(this.product);

            await axios.post(`/api/admin/product/create`, this.product, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((response) => {
                this.toast.success('Product created successfully', { timeout: 2000 });
                console.log(response);
                //this.clearForm();
                //this.$router.push({ name: 'products' });
                this.storing = false;
            }).catch((error) => {
                this.toast.error('Failed to create product', { timeout: 2000 });
                console.log(error);
                this.storing = false;
            });
        },

        handleFileUpload(event) {
            this.product.image = event.target.files[0];
        },

        handleOptionFileSelected(event, optionIndex, valueIndex) {
            this.product.options[optionIndex].values[valueIndex].images = Array.from(event.target.files);
            this.product.options[optionIndex].values[valueIndex].images_urls = Array.from(event.target.files).map(file => URL.createObjectURL(file));
        },

        addOption() {
            this.product.options.push({
                name: '',
                values: [],
            });
        },

        addValue(optionIndex) {
            const uniqueCode = Math.random().toString(36).substr(2, 9);
            const newValue = { value: '', images_urls: null, uniqueCode: uniqueCode };
            this.product.options[optionIndex].values.push(newValue);
            
            // Generate new variants
            const newVariants = [];
            const options = this.product.options;
            const newOptionValues = options[optionIndex].values;
            if (options.length === 1) {
                newVariants.push({
                    title: '',
                    sku: '',  // Generate or set SKU
                    option1: newValue.value,
                    option1_id: null,
                    option2: null,
                    option2_id: null,
                    price: this.product.price.toString() | '0',
                    inventory_quantity: this.product.quantity.toString() | '0',
                    option1UniqueCode: uniqueCode,
                });
            } else if (options.length === 2) {
                const otherOptionIndex = optionIndex === 0 ? 1 : 0;
                const otherOptionValues = options[otherOptionIndex].values;

                if (options[optionIndex].values.length === 1) {
                    // If the new value is the first value of the option, update existing variants
                    this.product.variants.forEach(variant => {
                        if (optionIndex === 0) {
                            variant.option1 = newValue.value;
                            variant.option1_id = newValue.id;
                            variant.option1UniqueCode = newValue.uniqueCode;
                            //variant.uniqueCodes = [newValue.code, variant.uniqueCodes[1]];
                        } else {
                            variant.option2 = newValue.value;
                            variant.option2_id = newValue.id;
                            variant.option2UniqueCode = newValue.uniqueCode;
                            //variant.uniqueCodes = [variant.uniqueCodes[0], newValue.code];
                        }
                    });
                } else {
                    // Create new variants combining both options
                    const newVariants = [];
                    otherOptionValues.forEach(otherValue => {
                        if (optionIndex === 0) {
                            newVariants.push({
                                title: `${newValue.value} - ${otherValue.value}`,
                                price: this.product.price.toString() || '0',
                                inventory_quantity: this.product.quantity.toString() || '0',
                                sku: '',  // Generate or set SKU
                                option1: newValue.value,
                                option1_id: newValue.id,
                                option2: otherValue.value,
                                option2_id: otherValue.id,
                                option1UniqueCode: newValue.uniqueCode,
                                option2UniqueCode: otherValue.uniqueCode,
                                //uniqueCodes: [newValue.code, otherValue.code]
                            });
                        } else {
                            newVariants.push({
                                title: `${otherValue.value} - ${newValue.value}`,
                                price: this.product.price.toString() || '0',
                                inventory_quantity: this.product.quantity.toString() || '0',
                                sku: '',  // Generate or set SKU
                                option1: otherValue.value,
                                option1_id: otherValue.id,
                                option2: newValue.value,
                                option2_id: newValue.id,
                                option1UniqueCode: otherValue.uniqueCode,
                                option2UniqueCode: newValue.uniqueCode,
                                //uniqueCodes: [otherValue.code, newValue.code]
                            });
                        }
                    });
                    this.product.variants = [...this.product.variants, ...newVariants];
                }
            }

            // Add new variants to the product
            this.product.variants = [...this.product.variants, ...newVariants];
        },

        updateValue(value){
            console.log(value);
            this.product.variants.forEach(variant => {
                if (variant.option1UniqueCode === value.uniqueCode) {
                    const title = variant.title.split('-');
                    variant.option1 = value.value;
                    variant.title = `${value.value.trim()} ${title[1] ? '-' + title[1] : ''}`;
                }else if (variant.option2UniqueCode && variant.option2UniqueCode === value.uniqueCode){
                    const title = variant.title.split('-');
                    variant.title = `${title[0].trim()} - ${value.value}`;
                    variant.option2 = value.value;
                }
            })
        },

        deleteOption(optionIndex) {
            const options = this.product.options;

            // Remove the option
            const deletedOption = options.splice(optionIndex, 1)[0];

            if (options.length === 0) {
                this.product.variants = [];
            } else if (options.length === 1) {
                const remainingOptionValues = options[0].values.map(value => value.value);
                this.product.variants = this.product.variants
                    .filter(variant => 
                        remainingOptionValues.includes(variant.option1) || remainingOptionValues.includes(variant.option2)
                    )
                    .map(variant => ({
                        ...variant,
                        option1: variant.option1 || variant.option2,
                        option1_id: variant.option1_id || variant.option2_id,
                        option2: null,
                        option2_id: null,
                        title: variant.option1 || variant.option2,
                        option1UniqueCode: variant.option1UniqueCode || variant.option2UniqueCode,
                        //uniqueCodes: [variant.uniqueCodes[0]]
                    })).slice(0, remainingOptionValues.length);
            } else if (options.length === 2) {
                const remainingOptions = options;
                const option1Values = remainingOptions[0].values;
                const option2Values = remainingOptions[1].values;
                const newVariants = [];

                option1Values.forEach(value1 => {
                    option2Values.forEach(value2 => {
                        newVariants.push({
                            title: `${value1.value} - ${value2.value}`,
                            price: this.product.price.toString() || '0',
                            inventory_quantity: this.product.quantity.toString() || '0',
                            sku: '',  // Generate or set SKU
                            option1: value1.value,
                            option1_id: value1.id,
                            option2: value2.value,
                            option2_id: value2.id,
                            option1UniqueCode: value1.uniqueCode,
                            //uniqueCodes: [value1.code, value2.code]
                        });
                    });
                });

                this.product.variants = newVariants;
            }
        },

        deleteOptionValue(optionIndex, valueIndex) {
            const options = this.product.options;
            const deletedValue = options[optionIndex].values.splice(valueIndex, 1)[0];

            // If the option has no values left after deletion
            if (options[optionIndex].values.length === 0) {
                options.splice(optionIndex, 1);
                
                if (options.length === 0) {
                    // If there are no options left, remove all variants
                    this.product.variants = [];
                } else if (options.length === 1) {
                    // If only one option remains, update variants to reflect the single remaining option
                    const remainingOptionValues = options[0].values.map(value => value.value);
                    this.product.variants = this.product.variants
                        .filter(variant => 
                            remainingOptionValues.includes(variant.option1) || remainingOptionValues.includes(variant.option2)
                        )
                        .map(variant => ({
                            ...variant,
                            option1: variant.option1 || variant.option2,
                            option1_id: variant.option1_id || variant.option2_id,
                            option2: null,
                            option2_id: null,
                            title: variant.option1 || variant.option2,
                            option1UniqueCode: variant.option1UniqueCode || variant.option2UniqueCode,
                            //uniqueCodes: [variant.uniqueCodes[0]]
                        }));
                }
            } else {
                // If there are still values left in the option
                if (options.length === 1) {
                    // For single option case, remove variants with the deleted value
                    this.product.variants = this.product.variants.filter(variant => 
                        variant.option1 !== deletedValue.value
                    );
                } else if (options.length === 2) {
                    // For two options case, remove variants with the deleted value and regenerate variants
                    this.product.variants = this.product.variants.filter(variant => {
                        if (optionIndex === 0) {
                            return variant.option1 !== deletedValue.value;
                        } else {
                            return variant.option2 !== deletedValue.value;
                        }
                    });

                    const option1Values = options[0].values;
                    const option2Values = options[1].values;
                    const newVariants = [];

                    option1Values.forEach(value1 => {
                        option2Values.forEach(value2 => {
                            newVariants.push({
                                title: `${value1.value} - ${value2.value}`,
                                price: this.product.price.toString() || '0',
                                inventory_quantity: this.product.quantity.toString() || '0',
                                sku: '',  // Generate or set SKU
                                option1: value1.value,
                                option1_id: value1.id,
                                option2: value2.value,
                                option2_id: value2.id,
                                option1UniqueCode: value1.uniqueCode,
                                //uniqueCodes: [value1.code, value2.code]
                            });
                        });
                    });

                    this.product.variants = newVariants;
                }
            }
        },

        createVariant(){

            let newVariant = {
                title: '',
                price: this.product.price.toString() || '0',
                inventory_quantity: this.product.quantity.toString() || '0',
                sku: Math.random().toString(36).substr(2, 9),
                option1: '',
                option1_id: null,
                option2: '',
                option2_id: null,
                option1UniqueCode: '',
                option2UniqueCode: '',
                //uniqueCodes: []
            };

            this.product.variants =  [newVariant];
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

        showVariants() {
            return this.product.options.some(option => option.values.length > 0);
        },

    },
    async mounted() {
        try {
            const categoryResponse = await axios.get('/api/admin/categories/id-name');
            const brandResponse = await axios.get('/api/admin/brands/id-name');
            this.categories = categoryResponse.data.categories;
            this.brands = brandResponse.data.brands;
        } catch (error) {
            this.toast.error("Failed to load categories and brands");
        }
    },
}

</script>
  <style lang=""></style>
  