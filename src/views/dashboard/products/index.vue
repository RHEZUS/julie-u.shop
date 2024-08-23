<template>
  <div class="">
    <div class="flex justify-between flex-wrap items-start">
      <Breadcrumb/>
      <div class="modal-groups">
        <Button @click="$router.push('/dashboard/product-create')" type="submit" text="Create Product"  btnClass="btn-primary h-10 flex items-center"/>
      </div>
    </div>
    <div>
      <Card noborder>
        <div class="md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center">
          <h5>Products</h5>
          <InputGroup v-model="searchTerm" placeholder="Search" type="text" prependIcon="heroicons-outline:search" merged/>
        </div>
  
        <vue-good-table
          :columns="columns"
          styleClass="vgt-table bordered centered"
          :rows="products"
          :pagination-options="{
            enabled: true,
            perPage: perpage,
          }"
          :search-options="{
            enabled: true,
            externalQuery: searchTerm,
          }"
        >
          <template v-slot:table-row="props">
            <span v-if="props.column.field == 'image_url'" class="flex">
              <span class="w-12 h-12 overflow-hidden rounded flex-none">
                <img
                  :src="apiClient + '/storage/' + props.row.image_url"
                  :alt="props.row.name"
                  class="object-cover w-full h-full"
                />
              </span>
            </span>
            <span v-if="props.column.field == 'title'">
              {{ props.row.title }}
            </span>
            <span v-if="props.column.field == 'variants'">
              {{ props.row.variants.reduce((sum, item) => sum + item.inventory_quantity, 0) }}
            </span>
            <span v-if="props.column.label == 'category'">
              {{ props.row.category.name }}
            </span>
            <span
              v-if="props.column.field == 'created_at'"
              class="text-slate-500 dark:text-slate-300"
            >
            {{ formatDate(props.row.created_at) }}
            </span>
            <span v-if="props.column.field == 'status'" class="block w-full">
              <span
                class="inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25"
                :class="`${
                  props.row.is_active === 'published'
                    ? 'text-success-500 bg-success-500'
                    : ''
                } 
                ${
                  props.row.is_active === 'draft'
                    ? 'text-danger-500 bg-danger-500'
                    : ''
                }
                
                  `"
                >
                {{ props.row.is_active == 'published' ? 'Activated' : 'Deactivated'}}
              </span>
            </span>
            
            <span v-if="props.column.field == 'action'">
              <div class="flex space-x-3 rtl:space-x-reverse">
                <Tooltip placement="top" v-if="0 == 1" arrow theme="dark">
                  <template #button>
                    <a href="/" class="action-btn">
                      <Icon icon="heroicons:eye" />
                    </a>
                  </template>
                  <span> View</span>
                </Tooltip>
                <Tooltip placement="top" arrow theme="dark">
                  <template  #button>
                    <a :href="'/dashboard/product/edit/' + props.row.id" class="action-btn">
                      <Icon icon="heroicons:pencil-square" />
                    </a>
                  </template>
                  <span> Edit</span>
                </Tooltip>
                <Tooltip  placement="top" arrow theme="danger-500">
                  <template #button>
                    <div @click="confirmDelete(props.row.id)" class="action-btn">
                      <Icon icon="heroicons:trash" />
                    </div>
                  </template>
                  <span>Delete</span>
                </Tooltip>
              </div>
            </span>
          </template>
          <template #pagination-bottom="props">
            <div class="py-4 px-3">
              <Pagination
                :total="total"
                :current="current"
                :per-page="perpage"
                :pageRange="pageRange"
                @page-changed="current = $event"
                :pageChanged="props.pageChanged"
                :perPageChanged="props.perPageChanged"
                enableSearch
                :options="options"
              >
                >
              </Pagination>
            </div>
          </template>
        </vue-good-table>
      </Card>
    </div>
  </div>
</template>
<script>
  import Tooltip from "@/components/Tooltip";
  import Dropdown from "@/components/Dropdown";
  import Card from "@/components/Card";
  import Icon from "@/components/Icon";
  import InputGroup from "@/components/InputGroup";
  import Pagination from "@/components/Pagination";
  import { MenuItem } from "@headlessui/vue";
  import Button from "@/components/Button";
  import Modal from "@/components/Modal/Modal";
  import Textinput from "@/components/Textinput";
  import { useToast } from "vue-toastification";
  import apiClient from "@/plugins/axios";
  import Breadcrumb from "@/components/Breadcrumbs";
import axios from "axios";
  export default {
    components: {
      Pagination,
      InputGroup,
      Dropdown,
      Icon,
      Card,
      MenuItem,
      Modal,
      Button,
      Textinput,
      Tooltip,
      Breadcrumb,
    },
  
    data() {
      return {
        products: [],
        toast: useToast(),
        formMode: 'create',
        apiClient: axios.defaults.baseURL,
        form: {
          name: '',
          email: '',
          role: '',
          phone_number: '',
          password: '',
        },
        item: [],
        current: 1,
        perpage: 10,
        pageRange: 1,
        total: 0,
        searchTerm: "",

        actions: [
          {
            name: "view",
            icon: "heroicons-outline:eye",
          },
          {
            name: "edit",
            icon: "heroicons:pencil-square",
          },
          {
            name: "delete",
            icon: "heroicons-outline:trash",
          },
        ],
        options: [
          {
            value: "1",
            label: "1",
          },
          {
            value: "3",
            label: "3",
          },
          {
            value: "5",
            label: "5",
          },
        ],
        columns: [
            {
                label: "Image",
                field: "image_url",
            },
            {
                label: "Name",
                field: "title",
            },
            {
                label: "Category",
                field: "category.name",
            },
            {
                label: "Stock",
                field: "variants",
            },
            {
                label: "Status",
                field: "status",
            },
            {
                label: "Date",
                field: "created_at",
            },
            {
                label: "Action",
                field: "action",
            },
        ],
      };
    },
    methods: {
      async FetchData(){
          await axios.get(`/api/admin/products`, { withCredentials: true })
          .then((response) => {
              this.products = response.data.products.data;
              this.total = response.data.products.total;
              this.perpage = response.data.products.per_page;
              this.current = response.data.products.current_page;
              console.log(this.products);
          }).catch((error) => {
              this.toast.error('Failed to fetch products', { timeout: 2000 });
          });
      },

      changePage(page) {
        this.FetchData(page);
      },

      formatDate(dateString) {
          const date = new Date(dateString);
          const options = { day: '2-digit', month: 'short', year: 'numeric' };
          //console.log(date.toLocaleDateString('en-US', options));
          return date.toLocaleDateString('en-US', options);
      },

      confirmDelete(itemId) {
        if (confirm('Are you sure you want to delete this item?')) {
          this.deleteItem(itemId);
        }
      },

      async deleteItem(itemId) {
        await axios.delete(`/api/admin/product/destroy/${itemId}`, { withCredentials: true })
        .then((response) => {
            this.FetchData();
            this.toast.success('Products has been deleted successfully', { timeout: 2000 });
        }).catch((error) => {
            this.toast.error('Failed to delete products', { timeout: 2000 });
            console.log(error);
        });
      },
    },
    mounted() {
      this.FetchData();
    },
  };
  </script>
  <style lang="scss" scoped>
  .action-btn {
    @apply h-6 w-6 flex flex-col items-center justify-center border border-slate-200 dark:border-slate-700 rounded;
  }
  </style>