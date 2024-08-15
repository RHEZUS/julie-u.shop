<template>
    <div class="fixed w-full h-screen z-50 top-[59px] left-0 duration-700" style="background-color: rgb(0 0 0 / 50%);" :class="{'visible' : showSearch, 'hidden': !showSearch}"></div>
  
    <div class="" ref="searchModal">
      <li class="text-3xl hover:cursor-pointer flex items-center">
        <div class="hover:text-pink-600" @click="showSearch = !showSearch">
          <i class="bx bx-search text-2xl hover:text-pink-600"></i>
        </div>
      </li>
      <div v-if="showSearch" class="fixed left-0 top-0 z-50 w-full h-full  md:h-auto bg-white border overflow-y-scroll md:overflow-y-hidden">
        <div class="relative w-full bg-white text-black font-semibold px-5 py-4">
  
          <!-- Search Form -->
          <div class="w-full grid grid-cols-12 items-center">
            <div class="hidden md:flex col-span-3">
              <a href="/">
                <img src="../../assets/images/logo/logo-j.svg" alt="logo" class="w-9 h-9">
              </a>
            </div>
            <form @keyup.prevent="search()" class="col-span-10 md:col-span-6 relative w-full h-10 border border-black rounded">
              <input v-model="keyword" type="search" class="font-normal w-full h-full rounded focus:ring-0 border-none focus:border-none pl-4" :placeholder="'Search Product'" style="padding-right: 45px;"  name="" id="">
              
              <a v-if="keywordSet && !loading" :href="'/products/search/' + keyword" class="absolute top-2 right-0 w-[40px]  h-full">
                <svg v-if="loading" aria-hidden="true" class="mr-3 inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <svg v-if="!loading" class="mx-auto" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 30 30">
                  <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                </svg>
              </a>
              <button v-else type="button" class="absolute top-0 right-0 w-[40px]  h-full">
                <svg v-if="loading" aria-hidden="true" class="mr-3 inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <svg v-if="!loading" class="mx-auto" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 30 30">
                  <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                </svg>
              </button>
            </form>
  
            <div class="flex col-span-2 md:col-span-3 items-center  justify-end">
              <!-- Close Search Modal -->
              <div class="text-black text-3xl mt-2 text-blue-600 hover:cursor-pointer" @click="showSearch = false"><i class='bx bx-x'></i></div>
            </div>
          </div>
          
          <!-- Popular Search -->
          <div class="gap-1 mt-2 justify-center hidden">
            <div class="font-normal capitalize text-[#afaeae]">Popular Search: </div>
            <ul class="flex gap-3 font-normal">
              <a href=""><li class="underline font-medium text-black">Home</li></a>
              <a href=""><li class="underline font-medium text-black">Bikini</li></a>
              <a href=""><li class="underline font-medium text-black">Contact Us</li></a>
            </ul>
          </div>
  
          <!-- Search Result -->
          <div class="grid grid-cols-12 gap-3">
            <h1 v-if="keywordSet" class="col-span-12 capitalize mb-2 text-lg text-center font-medium mt-3 text-[#afaeae]">{{products.length}} {{ 'Results For' }}: <span class="text-black">{{'"' + keyword + '"'}}</span> </h1>
            
            <!-- Single search result -->
  
            <div  v-for="product in products.slice(0, 4)"  :product="product" class="col-span-6 sm:col-span-3 border md:col-span-3">
              <a :href="'/product/' + product.slug">
                  <img class="w-full max-h-[300px]" :src="`${apiUrl}/storage/${product.image_url}`" alt="">
              </a>
              <a href="#">
                  <h1 class="text-base font-medium mt-3 text-black">{{product.title}}</h1>
              </a>
              <p class="text-md font-medium text-black"><span>{{product.variants[0].price + ' FCFA'}}</span></p>
              <div v-if="product.options.length > 0 && product.options[0].name == 'color'" class="flex gap-4 text-black-500 items-center px-2 py-5">
                <div v-for="color in product.options[0].values" :style="{ backgroundColor: color.value }"  class="w-8 h-8 rounded-full border"></div>
              </div>
            </div> 
            <div v-if="keywordSet" class="col-span-full flex justify-center">
              <a :href="'/products/search/' + keyword" class="mx-auto text-center px-3  font-medium text-base text-white bg-[#0e0e0e] py-2 rounded mb-3">Load More Results: </a>
            </div>  
          </div>
  
          <!-- More result Button -->
          
        </div>
      </div> 
    </div>
      
</template>
<script>
import apiClient from "@/plugins/axios";
import axios from "axios";
      export default {
      data() {
        return {
            showSearch: false,
            keywordSet: false,
            apiUrl: apiClient.defaults.baseURL,
            keyword: '',
            products: [],
            loading: false,
        }
      },
      methods:{
        async search() {
          this.loading = true;
          const trimmedKeyword = this.keyword.trim();
          
          if (trimmedKeyword) {
              axios.get(`/api/products/search/${trimmedKeyword}`).then(response => {
                this.products = response.data.products;
                this.keywordSet = true;
                console.log(response.data);
                console.log('products length: ' + this.products.length);
              }).catch(error => {
                console.log(error);
              });
          } else {
            this.keyword = '';
            this.keywordSet = false;
            this.products = [];
          }
          this.loading = false;
        },
        handleClickOutside(event) {
          // Check if the click was outside the referenced element
          if (this.$refs.searchModal && !this.$refs.searchModal.contains(event.target)) {
            this.showSearch = false;
          }
        },
      },
      mounted() {
        // Add the event listener when the component is mounted
        document.addEventListener('click', this.handleClickOutside);
      },
      beforeDestroy() {
        // Remove the event listener when the component is destroyed
        document.removeEventListener('click', this.handleClickOutside);
      },
  }
  </script>