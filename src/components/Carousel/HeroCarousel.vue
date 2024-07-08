<template>
    <swiper
      :modules="modules"
      :slides-per-view="sliderPreview"
      :space-between="space"
      navigation
      :pagination="{ clickable: true }"
      class="main-caro z-0"
    >
      <swiper-slide v-for="(item, i) in carousels" :key="i">
        <div
          class="single-slide bg-no-repeat z-0 bg-cover bg-center min-h-[calc(100vh - 280px);]"
          :style="{
            backgroundImage: 'url(' + item.img + ')',
          }"
          style="z-index: 0,"
        >
          <div
            class="pt-44 container text-center px-4 slider-content h-full w-full min-h-[480px] rounded-md flex flex-col items-center justify-center text-white"
          >
            <div class="w-full flex flex-col gap-6">
              <div v-if="item.title" class="text-[0.875rem] font-bold uppercase text-white">
                {{ item.title }}
              </div>
              <p v-if="item.description" class="text-5xl font-black">
                {{ item.description }}
              </p>
              <div class="">
                <a :href="link" class="bg-white act-btn text-black-500 px-10 py-3 rounded-md font-bold text-sm">
                  Discover Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </template>
  <script>
  // import Swiper core and required modules
  import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    EffectFade,
  } from "swiper";
  
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import "swiper/css/effect-fade";
  
  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      sliderPreview: {
        type: Number,
        default: 1,
      },
      space: {
        type: Number,
        default: 0,
      },
  
      carousels: {
        type: Array,
        default: [],
      },
      link: {
        type: String,
        default: "#",
      },
    },
  
    setup() {
      return {
        modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade],
      };
    },
  };
  </script>
  
  <style lang="scss">
  .main-caro {
    .swiper-button-next:after,
    .swiper-button-prev:after {
      font-family: unset !important;
      @apply rtl:rotate-180;
    }
    .swiper-button-next:after {
      content: url("https://api.iconify.design/heroicons-outline/chevron-right.svg?color=white&width=24");
    }
    .swiper-button-prev:after {
      content: url("https://api.iconify.design/heroicons-outline/chevron-left.svg?color=white&width=24");
    }
    .swiper-pagination-bullet {
      height: 2px;
      width: 24px;
      @apply rounded-[1px] bg-white bg-opacity-70;
      &.swiper-pagination-bullet-active {
        @apply bg-opacity-100;
      }
    }
  }
  .swiper{
    z-index: 0;
  }
  .act-btn {
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s, transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
</style>
  