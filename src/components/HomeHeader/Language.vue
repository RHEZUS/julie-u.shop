<template>
    <div class="col-span-3 lg:col-span-4 hidden md:block">
        <div class="flex group w-fit relative hover:cursor-pointer justify-center items-center bg-black-50">
            <div class="px-2">
                <i class='bx bx-world'></i>
            </div>
            <div class="text-lg px-2 uppercase">{{ selectedLanguage }}</div>


            <div class="bg-white w-max p-4 hidden group-hover:flex font-medium hover:cursor-pointer flex-col gap-3 absolute left-0 top-7 border h-max" style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;">
                <p><i class='bx bx-world'></i> {{ $t('chooseLanguage') }} </p>
                <div class="flex gap-2">
                    <button class="border py-1 px-2" :class="selectedLanguage == 'en' ? 'border-pink-500' : '' " @click="changeLanguage('en')"> English </button>
                    <button class="border py-1 px-2" :class="selectedLanguage == 'fr' ? 'border-pink-500' : '' " @click="changeLanguage('fr')" > Francais </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selectedLanguage: this.$i18n.locale,
        };
    },
    methods: {
        changeLanguage(language) {
            this.$i18n.locale = language;
            localStorage.setItem('locale', language);
            this.selectedLanguage = language;

            // Reload the page to apply the language change across the entire app
            window.location.reload();
        },
    },

    mounted() {
        this.selectedLanguage = localStorage.getItem('locale') || 'fr';
        this.$i18n.locale = this.selectedLanguage;
    },
}
</script>