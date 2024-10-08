<template>
  <div>
    <Listbox v-model="selectLanguage">
      <div class="relative z-[22]">
        <ListboxButton
          class="relative w-full flex items-center cursor-pointer space-x-[6px] rtl:space-x-reverse"
        >
          <span class="inline-block md:h-6 md:w-6 w-5 h-5 rounded-full"
            ><img
              :src="selectLanguage.image"
              alt=""
              class="h-full w-full object-cover rounded-full"
          /></span>
          <span
            class="text-sm capitalize md:block hidden font-medium text-slate-600 dark:text-slate-300"
            >{{ selectLanguage.name }}</span
          >
        </ListboxButton>

        <Transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute min-w-[100px] ltr:right-0 rtl:left-0 md:top-[49px] top-[34px] w-auto max-h-60 overflow-auto border border-slate-200 dark:border-slate-700 rounded bg-white dark:bg-slate-800 mt-1"
          >
            <ListboxOption
              v-slot="{ active }"
              v-for="item in months"
              :key="item.name"
              :value="item"
              as="template"
            >
              <li
                :class="[
                  active
                    ? 'bg-slate-100 dark:bg-slate-700 dark:bg-opacity-70 bg-opacity-50 dark:text-white '
                    : 'text-slate-600 dark:text-slate-300',
                  'w-full border-b border-b-gray-500 border-opacity-10 px-2 py-2 last:border-none last:mb-0 cursor-pointer first:rounded-t last:rounded-b',
                ]"
                @click="changeLanguage(item)"
              >
                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                  <span class="flex-none">
                    <span
                      class="lg:w-6 lg:h-6 w-4 h-4 rounded-full inline-block"
                    >
                      <img
                        :src="item.image"
                        alt=""
                        class="w-full h-full object-cover relative top-1 rounded-full"
                      />
                    </span>
                  </span>
                  <span class="flex-1 lg:text-base text-sm capitalize">
                    {{ item.name }}</span
                  >
                </div>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </Transition>
      </div>
    </Listbox>
  </div>
</template>

<script>
import langImg1 from "@/assets/images/flags/usa.png"
import langImg2 from "@/assets/images/flags/fr.png"
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  },
  setup() {
    const months = [
      { name: "en", image: langImg1 },
      { name: "fr", image: langImg2 },
    ];
    const selectLanguage = ref(months[0]);

    const changeLanguage = (language) => {
      console.log(language);
      
      //this.$i18n.locale = language; // Update the locale
      //locale.value = language.code; // Update the locale
      localStorage.setItem('locale', language.name); // Store the selected language in localStorage
      selectLanguage.value = language; // Update the selected language

      // Reload the page to apply the language change across the entire app
      window.location.reload();
    };

    return {
      months,
      selectLanguage,
      changeLanguage,
    };
  },

  mounted() {
    // Get the selected language from localStorage
    const selectedLanguage = localStorage.getItem('locale') || 'fr';
    if (selectedLanguage && selectedLanguage !== 'undefined') {
      console.log('Selected Language: ', selectedLanguage);
      this.selectLanguage = this.months.find((lang) => lang.name === selectedLanguage);
    }
  },
};
</script>
