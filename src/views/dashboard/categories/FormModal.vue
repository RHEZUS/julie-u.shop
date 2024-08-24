<template>
    <div class="modal-groups">
        <Modal :showLabel="false" :title="formMode === 'create' ? 'Create New Category' : 'Update Category'" 
               label="Create User" labelClass="btn-outline-primary h-10 flex items-center" 
               ref="modal1" themeClass="bg-primary-500">
            <form @submit.prevent="formMode === 'create' ? createItem() : updateItem()"  class="text-base text-slate-600 dark:text-slate-300">
                <Textinput label="Name in French" type="text" placeholder="Enter the name in French"
                           name="name" v-model="form.name_fr" :error="nameFRError" 
                           classInput="h-[48px] mb-3"/>
                <Textinput label="Name in English" type="text" placeholder="Enter the name in English"
                           name="name" v-model="form.name_en" :error="nameENError" 
                           classInput="h-[48px] mb-3"/>
                <Select v-model="form.parent_category_id" :error="parentError" :options="formOptions" 
                       label="Parent Category" :placeholder="'Select parent category'" classInput="h-[48px] mb-3"></Select>
                <Textarea label="Description"  placeholder="Description of the category"
                          v-model="form.desc" :error="descError" 
                           hasicon classInput="min-h-[48px]"></Textarea>
                <div class="py-3 flex justify-end space-x-3 border-t border-slate-100 dark:border-slate-700">
                    <Button v-if="!storing" type="submit" text="Save" btnClass="btn-primary h-10 flex items-center"/>
                    <button v-else type="button"class="px-3 py-2 bg-blue-600 flex items-center gap-2 rounded">
                        <div class="flex flex-row space-x-4">
                            <div class="w-4 h-4 rounded-full animate-spin border-2 border-dashed border-white border-t-transparent"></div>
                        </div>
                        Saving
                    </button>
                </div>
            </form>
            
        </Modal>
    </div>
</template>
<script>
import Button from "@/components/Button";
import Modal from "@/components/Modal/Modal";
import Textinput from "@/components/Textinput";
import Textarea from "@/components/Textarea";
import Select from '@/components/Select';
import * as yup from "yup";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import apiClient from "@/plugins/axios";
import axios from "axios";
export default {
    data(){
        return {
            form:{
                name_fr: '',
                name_en: '',
                parent_category_id: 0,
                desc: '',
            },
            nameFRError: '',
            nameENError: '',
            parentError: '',
            descError: '',
            toast: useToast(),
            router: useRouter(),
            formOptions:[],
            storing: false,
        }
    },
    components: {
        Modal,
        Button,
        Textinput,
        Select,
        Textarea,
    },
    props: {
        formMode:{
            type: String,
            required: true,
        },
        user:{
            type: Object,
            required: true,
            default: [],
        },
        loadData:{
            type: Function,
            required: true,
        }
    },
    methods:{
        validator(){
            const schema = yup.object({
                name: yup.string().required("Name is required"),
            });
            schema.validate({
                name: this.form.name,
            })
        },

        async FetchData(){
            await axios.get(`/api/admin/categories/id-name`, { withCredentials: true })
            .then((response) => {
                this.formOptions = response.data.categories;
                //console.log(response);
                
            }).catch((error) => {
                this.toast.error('Failed to fetch categories', { timeout: 2000 });
                console.log(error);
                
            });
        },

        loadEditData(item){
            this.form.id = item.id
            this.form.name_fr = item.name_fr;
            this.form.name_en = item.name_en;
            this.form.parent_category_id = item.parent_category_id;
            this.form.desc = item.desc;
            console.log('Item:', item , '\nForm:', this.form);
            
        },

        resetForm(){
            this.form.name_fr = '';
            this.form.name_en = '';
            this.form.parent_category_id = '';
            this.form.desc = '';
            this.nameFRError = '';
            this.nameENError = '';
            this.parentError = '';
            this.descError = '';

        },
        createItem(){
            this.storing = true;
            const schema = yup.object({
                name_fr: yup.string().required("French Name is required"),
                name_en: yup.string().required("English Name is required"),
                parent_category_id: yup.number().nullable(),
                desc: yup.string().nullable(),
            });
            schema.validate({
                name_fr: this.form.name_fr,
                name_en: this.form.name_en,
                parent_category_id: this.form.parent_category_id,
                desc: this.form.desc,
            }).then(() =>{
                axios.post(`/api/admin/category/create`, this.form, {withCredentials:true})
               .then(response => {
                    this.$refs.modal1.closeModal();
                    this.toast.success("Registered successfully", { timeout: 2000 });
                    this.resetForm();
                    this.loadData();
                    this.storing = false;
                }).catch(error => {
                    const errors = error.response.data.errors;
                    if (errors.hasOwnProperty('name')){
                        this.nameError = errors.name[0];
                    }
                    if (errors.hasOwnProperty('parent_category_id')){
                        this.parentError = errors.parent_category_id[0];
                    }
                    if (errors.hasOwnProperty('desc')){
                        this.descError = errors.desc[0];
                    }
                    this.toast.error(error.message, { timeout: 6000 });
                    this.storing = false;
                })
            }).catch((error) => {
                if (error.path === 'name'){
                    this.nameError = error.errors[0];
                } else if (error.path === 'parent_category_id') {
                    this.parentError = error.errors[0];
                } else if (error.path === 'desc') {
                    this.descError = error.errors[0];
                }
                this.storing = false;
            });
        },
        updateItem(){
            this.storing = true;
            const schema = yup.object({
                name_fr: yup.string().required("French Name is required"),
                name_en: yup.string().required("English Name is required"),
                parent_category_id: yup.number().nullable(),
                desc: yup.string().nullable(),
            });
            schema.validate({
                name_fr: this.form.name_fr,
                name_en: this.form.name_en,
                parent_category_id: this.form.parent_category_id,
                desc: this.form.desc,
            }).then(() =>{
                axios.put(`/api/admin/category/update/${this.form.id}`, this.form)
               .then(response => {
                    this.$refs.modal1.closeModal();
                    this.toast.success("Registered successfully", { timeout: 2000 });
                    this.resetForm();
                    this.loadData();
                    this.storing = false;
                }).catch(error => {
                    const errors = error.response.data.errors;
                    if (errors.hasOwnProperty('name_fr')){
                        this.nameFRError = errors.name_fr[0];
                    }
                    if (errors.hasOwnProperty('name_en')){
                        this.nameENError = errors.name_en[0];
                    }
                    if (errors.hasOwnProperty('parent_category_id')){
                        this.parentError = errors.parent_category_id[0];
                    }
                    if (errors.hasOwnProperty('desc')){
                        this.descError = errors.desc[0];
                    }
                    this.toast.error(error.message, { timeout: 6000 });
                    this.storing = false;
                })
            }).catch((error) => {
                if (error.path === 'name_fr'){
                    this.nameFRError = error.errors[0];
                } else if (error.path === 'name_en') {
                    this.nameENError = error.errors[0];
                } else if (error.path === 'parent_category_id') {
                    this.parentError = error.errors[0];
                } else if (error.path === 'desc') {
                    this.descError = error.errors[0];
                }
                this.storing = false;
            });
        }
    },
    mounted(){
        this.FetchData();
    }
};
</script>
<style lang=""></style>
