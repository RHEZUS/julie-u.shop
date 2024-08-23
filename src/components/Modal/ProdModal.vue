<template>
    <button type="button" @click="openModal" class="prod-btn relative w-10 h-10 hover:bg-black-500 border-0 hover:text-white rounded-full group flex items-center justify-center text-black-500 bg-white" v-if="showLabel == true" :class="labelClass">
        <div class="prod-btn-desc bg-black-500 duration-500 absolute bg-black text-white text-sm right-10 min-w-max py-1 px-4 rounded-lg">{{ 'Quick View' }}</div>
        <i class='bx bx-show'></i> 
    </button>
  
    <TransitionRoot :show="isOpen" as="template">
      <Dialog
        as="div"
        @close="closeModal"
        class="relative zblack-500-[99999]"
        v-if="disableBackdrop === false"
      >
        <TransitionChild
          :enter="noFade ? '' : 'duration-300 ease-out'"
          :enter-from="noFade ? '' : 'opacity-0'"
          :enter-to="noFade ? '' : 'opacity-100'"
          :leave="noFade ? '' : 'duration-300 ease-in'"
          :leave-from="noFade ? '' : 'opacity-100'"
          :leave-to="noFade ? '' : 'opacity-0'"
        >
          <div
            class="fixed inset-0 bg-slate-900/50 backdrop-filter backdrop-blur-sm"
          />
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-y-auto z-20">
          <div
            class="flex min-h-full justify-center text-center p-6"
            :class="centered ? 'items-center' : 'items-start '"
          >
            <TransitionChild
              as="template"
              :enter="noFade ? '' : 'duration-300  ease-out'"
              :enter-from="noFade ? '' : 'opacity-0 scale-95'"
              :enter-to="noFade ? '' : 'opacity-100 scale-100'"
              :leave="noFade ? '' : 'duration-200 ease-in'"
              :leave-from="noFade ? '' : 'opacity-100 scale-100'"
              :leave-to="noFade ? '' : 'opacity-0 scale-95'"
            >
              <DialogPanel
                class="w-full transform overflow-hidden rounded-md bg-white text-black-500 text-left align-middle z-50 shadow-xl transition-all"
                :class="'max-w-[960px] min-h-[400px]'"
              >
                <div
                  class="px-6 relative"
                  :class="scrollContent ? 'overflow-y-auto min-h-[400] max-h-[400px]' : ''"
                >
                <div @click="closeModal()" class="absolute top-2 z-20 w-8 h-8 flex items-center justify-center rounded-full right-6 text-2xl hover:bg-black-200" style="z-index: 100;">
                  <i class='bx bx-x'></i> 
                </div>
                  <slot />
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>
  
  <script>
  import Icon from "@/components/Icon";
  
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
  } from "@headlessui/vue";
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    components: {
      Icon,
      TransitionRoot,
      TransitionChild,
      Dialog,
      DialogPanel,
    },
  
    props: {
      labelClass: {
        type: String,
        default: "btn-primary",
      },
      showLabel:{
        type: Boolean,
        default: true
      },
      centered: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
      },
      label: {
        type: String,
        default: "",
      },
      disableBackdrop: {
        type: Boolean,
        default: false,
      },
      noFade: {
        type: Boolean,
        default: false,
      },
      themeClass: {
        type: String,
        default:
          "bg-slate-900 dark:bg-slate-800 dark:border-b dark:border-slate-700",
      },
      sizeClass: {
        type: String,
        default: "max-w-xl",
      },
      scrollContent: {
        type: Boolean,
        default: false,
      },
      activeModal: {
        type: Boolean,
        default: false,
      },
    },
  
    setup(props) {
      const isOpen = ref(props.activeModal);
  
      // open
      const openModal = () => {
        isOpen.value = !isOpen.value;
      };
      // close
      const closeModal = () => {
        isOpen.value = false;
      };
  
      return { closeModal, openModal, isOpen };
    },
  });
</script>
<style scoped>
  .prod-btn-desc {
    display: none;
  }
  .prod-btn:hover .prod-btn-desc {
    display: block;
  }
  .prod-btn i {
    color: black;
  }
  .prod-btn:hover i {
    color: white;
  }
</style>