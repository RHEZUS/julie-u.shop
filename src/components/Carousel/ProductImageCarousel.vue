<template>
    <swiper :modules="modules" :slides-per-view="sliderPreview" :space-between="space" navigation :pagination="{ clickable: true }" class="main-caro"  >
      <swiper-slide v-for="(item, i) in carousels" :key="i">
        <div class="single-slide bg-no-repeat bg-cover bg-center rounded-md min-h-full flex items-start justify-center" >
            <img :src="item.img" class="max-h-fit w-96" alt="">
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
      content: url("https://api.iconify.design/heroicons-outline/chevron-right.svg?color=deeppink&width=24");
    }
    .swiper-button-prev:after {
      content: url("https://api.iconify.design/heroicons-outline/chevron-left.svg?color=deeppink&width=24");
      color: deeppink;
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
  </style>
  