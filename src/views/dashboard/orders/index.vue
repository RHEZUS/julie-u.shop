<template>
  <div class="">
    <div class="flex justify-between flex-wrap items-start">
      <Breadcrumb/>
      <div class="modal-groups">
        <FormModal :load-data="FetchData" :formMode="formMode" :user="item" ref="formModal1"></FormModal>
        <Button @click="showCreateModal()" type="submit" text="Create Category"  btnClass="btn-primary h-10 flex items-center"/>
      </div>
    </div>
    <div>
      <Card noborder>
        <div class="md:flex justify-between pb-6 md:space-y-0 space-y-3 items-center">
          <h5>Categories</h5>
          <InputGroup v-model="searchTerm" placeholder="Search" type="text" prependIcon="heroicons-outline:search" merged/>
        </div>
  
        <vue-good-table
          :columns="columns"
          styleClass="vgt-table bordered centered"
          :rows="orders"
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
            <span v-if="props.column.field == 'customer'" class="flex">
              <span class="w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none">
                <img
                  :src="props.row.customer.image"
                  :alt="props.row.customer.name"
                  class="object-cover w-full h-full rounded-full"
                />
              </span>
              <span
                class="text-sm text-slate-600 dark:text-slate-300 capitalize"
                >{{ props.row.customer.name }}</span
              >
            </span>
            <span
              v-if="props.column.field == 'created_at'"
              class="text-slate-500 dark:text-slate-300"
            >
            {{ formatDate(props.row.created_at) }}
            </span>
            <span v-if="props.column.field == 'is_active'" class="block w-full">
              <span
                class="inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25"
                :class="`${
                  props.row.is_active === 1
                    ? 'text-success-500 bg-success-500'
                    : ''
                } 
              ${
                props.row.is_active === 'due'
                  ? 'text-warning-500 bg-warning-500'
                  : ''
              }
              ${
                props.row.is_active === 0
                  ? 'text-danger-500 bg-danger-500'
                  : ''
              }
              
                `"
              >
                {{ props.row.is_active == 1 ? 'Activated' : 'Deactivated'}}
              </span>
            </span>
            
            <span v-if="props.column.field == 'action'">
              <div class="flex justify-between space-x-3 rtl:space-x-reverse">
                <Tooltip placement="top" arrow theme="dark">
                  <template #button>
                    <a :href="'order-details/' + props.row.id" class="action-btn">
                      <Icon icon="heroicons:eye" />
                    </a>
                  </template>
                  <span> View</span>
                </Tooltip>
                <Tooltip placement="top" arrow theme="dark">
                  <template  #button>
                    <div @click="showEditModal(props.row)" class="action-btn">
                      <Icon icon="heroicons:pencil-square" />
                    </div>
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
                @page-changed="current = $event; changePage($event)"
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
        orders: [],
        toast: useToast(),
        item: [],
        current: 1,
        perpage: 10,
        total: 0,
        pageRange: 1,
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
                label: "Id",
                field: "id",
            },
            {
                label: "Customer",
                field: "user.name",
            },
            {
                label: "No. Products",
                field: "items_sum_quantity",
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
        async FetchData(page = 1){
            await axios.get(`/api/admin/orders?page=${page}`)
            .then((response) => {
                this.orders = response.data.orders.data;
                this.total = response.data.orders.total;
                this.perpage = response.data.orders.per_page;
                this.current = response.data.orders.current_page;
                console.log(this.orders);
            }).catch((error) => {
              console.log(error);
              this.toast.error('Failed to fetch orders', { timeout: 2000 });
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
  
        confirmDelete(itemId) {Category
          if (confirm('Are you sure you want to delete this item?')) {
            this.deleteItem(itemId);
          }
        },
        async deleteItem(itemId) {
          await axios.delete(`/api/admin/orders/delete/${itemId}`, { withCredentials: true })
          .then((response) => {
              this.FetchData();
              this.toast.success('Orders has been deleted successfully', { timeout: 2000 });
          }).catch((error) => {
              this.toast.error('Failed to delete Orders', { timeout: 2000 });
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