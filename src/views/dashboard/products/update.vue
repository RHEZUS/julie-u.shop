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
                  <Textinput type="text" placeholder="Full Name" name="name" v-model="product.title" :error="formErrors.title" classInput="h-[48px]"/>
              </div>
              <div class="cols-span-12 md:col-span-6">
                  <Select v-model="product.category_id" :error="formErrors.category_id" :options="categories" :placeholder="'Select category'" classInput="h-[48px]"></Select>
              </div>
              <div class="cols-span-12 md:col-span-6">
                  <Select v-model="product.brand_id" :error="formErrors.brand_id" :options="brands" :placeholder="'Select Brand'" classInput="h-[48px]"></Select>
              </div>
              <div class="col-span-12 sm:col-span-6">
                  <FileInput ref="fileInput" multiple :error="formErrors.images" preview name="preview" @input="handleFileSelected" />
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
              <div v-if="product.options.length > 0" class="text-base text-slate-600 dark:text-slate-300 items-center gap-4 border rounded-lg">
                  <!-- Options List -->
                  <div class="border-b p-2" v-for="index in product.options.length" :key="index">
                      <div class="w-full flex flex-col gap-2">
                          <label for="">Option Name</label>
                          <Textinput type="text" placeholder="Option name" name="name" v-model="product.options[index - 1].name" :error="formErrors.options.name" classInput="h-[35px]"/>
                      </div>
                      <!-- Options values List -->
                      <div class="col-span-12 pl-3 py-2 flex flex-col gap-2">
                          <h5 class="text-lg text-slate-600 dark:text-slate-300">Values</h5>
                          <div class="w-full relative" v-for="valIndex in product.options[index - 1].values.length" :key="valIndex" v-if="product.options[index - 1].values.length > 1" >
                              <Textinput type="text" placeholder="Medium" name="name" v-model="product.options[index - 1].values[valIndex]" :error="formErrors.options.values" classInput="h-[35px]"/>
                              <button type="button" v-if="valIndex !== product.options[index - 1].values.length" @click="removeValue(index - 1, valIndex)" class="h-8 flex items-center absolute z-[100] top-0 right-2">
                                  <i class='bx bxs-trash'></i>
                              </button>
                          </div>
                          <div v-else class="w-full relative" >
                              <Textinput v-for="valIn in 1" :key="valIn" type="text" placeholder="Medium" name="name" v-model="product.options[index - 1].values[valIn]" :error="formErrors.options.values" classInput="h-[35px]"/>
                          </div>
                          <div class="flex items-center justify-between py-2">
                              <Button type="button" text="Delete" @click="removeOption(index - 1)" btnClass="btn-danger h-8 flex items-center"/>
                          </div>
                      </div>
                  </div>
                  <div v-if="product.options.length < 2" class="text-blue-600 pointer-events-auto p-3  col-span-12">
                      <button @click="addOption()" type="button" class=""><i class='bx bx-plus'></i> Add another options</button>
                  </div>
              </div>
              <div v-else class="text-blue-600 pointer-events-auto ">
                  <button @click="addOption()" type="button" class=""><i class='bx bx-plus'></i> Add options like  color or size</button>
              </div>

              <div class="mt-8" v-if="showVariants()" >
                  <table>
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
              <Button type="submit" text="Save" btnClass="btn-primary h-10 flex items-center"/>
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
import { add } from "@amcharts/amcharts5/.internal/core/util/Time";
export default {
  data() {
      return {
          toast: useToast(),
          product: {
              title: '',
              description: '',
              brand_id: null,
              category_id: null,
              images: null,
              price: "",
              quantity: "",
              status: 'draft',
              variants: [
              ],
              options: []
          },
          addVariant: false,
          categories: [],
          brands: [],
          formErrors: {
              title: '',
              slug: '',
              description: '',
              brand_id : '',
              category_id : '',
              tags: '',
              images: [],
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
          handler: 'updateNew OneVariants',
          deep: true
      }
  },
  methods: {
      async createProduct() {
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
              //this.$router.push({ name: 'products' });
          }).catch((error) => {
              this.toast.error('Failed to create product', { timeout: 2000 });
              console.log(error);
          });
          
      },
      createVariant(){
          this.product.variants.push({
              title: this.product.title,
              price: this.product.price || "0",
              inventory_quantity: this.product.quantity || "0",
          });
      },
      addOption(index) {
          this.product.options.push({
              name: '',
              position: index + 1,
              values: [],
          });
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
          if (options.length === 0) return [];

          // Filter out options with no values
          const validOptions = options.filter(option => option.values.length > 0);

          // Cartesian product function
          const cartesianProduct = (arrays) => {
              return arrays.reduce((acc, array) => {
              return acc.flatMap(product => array.map(value => [...product, value]));
              }, [[]]);
          };

          // Generate combinations
          const valueArrays = validOptions.map(option => option.values);
          return cartesianProduct(valueArrays);
      },


      updateVariants() {
          const variantCombinations = this.generateVariants(this.product.options);
          const newVariants = [];

          variantCombinations.forEach(combination => {
              const title = combination.join(' - ');

              // Find if there's an existing variant with the same option1 and option2 values
              const existingVariant = this.product.variants.find(variant => 
              variant.option1 === combination[0] && variant.option2 === combination[1]
              );

              // Preserve other properties if the variant already exists
              if (existingVariant) {
              newVariants.push({
                  ...existingVariant,
                  title
              });
              } else {
              // Create a new variant if it does not exist
              newVariants.push({
                  title,
                  price: this.product.price || "0",
                  sku: '',
                  option1: combination[0] || '',
                  option2: combination[1] || '',
                  barcode: '',
                  grams: 0,
                  weight: 0,
                  inventory_quantity: this.product.quantity || "0",
              });
              }
          });

          this.product.variants = newVariants;
          console.log(this.product);
      },


      
      addValue(optionIndex) {
          this.product.options[optionIndex].values.push('');
      },
      removeValue(optionIndex, valueIndex) {
          this.product.options[optionIndex].values.splice(valueIndex, 1);
      },
      handleFileSelected(files) {
          this.product.images = files;
          console.log(this.product.images); // You can now see all selected files here
      },
      async fetchData(){
        try {
          const [brandsResponse, categoriesResponse, productResponse] = await Promise.all([
            apiClient.get('/api/admin/brands/id-name'),
            apiClient.get('/api/admin/categories/id-name'),
            apiClient.get(`/product/slug/${this.$route.params.slug}`)
          ]);
          this.brands = brandsResponse.data.categories;
          this.categories = categoriesResponse.data.brands;
          this.product = productResponse.data.product;
          console.log(this.product);
        } catch (error) {
          console.error('Error fetching brands and categories:', error);
        }
      },
  },
  mounted() {
      this.fetchData();
  }
}

</script>
<style lang=""></style>
