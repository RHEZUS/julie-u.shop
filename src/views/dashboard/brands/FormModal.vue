<template>
    <div class="modal-groups">
        <Modal :showLabel="false" :title="formMode === 'create' ? 'Create New Brand' : 'Update Brand'" 
               label="Create Brand" labelClass="btn-outline-primary h-10 flex items-center" 
               ref="modal1" themeClass="bg-primary-500">
            <form @submit.prevent="formMode === 'create' ? createItem() : updateItem()"  class="text-base text-slate-600 dark:text-slate-300">
                <Textinput type="text" placeholder="Brand Name"
                           name="name" v-model="form.name" :error="nameError" 
                           classInput="h-[48px] mb-3"/>
                <div class="py-3 flex justify-end space-x-3 border-t border-slate-100 dark:border-slate-700">
                    <Button type="submit" text="Save" btnClass="btn-primary h-10 flex items-center"/>
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
export default {
    data(){
        return {
            form:{
                name: '',
                desc: '',
            },
            nameError: '',
            descError: '',
            toast: useToast(),
            router: useRouter(),
            formOptions:[],
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
        loadData:{
            type: Function,
            required: true,
        }
    },
    methods:{

        loadEditData(item){
            this.form.id = item.id
            this.form.name = item.name;
        },

        resetForm(){
            this.form.name = '';
            this.nameError = '';
            //console.log('Form after reset', this.form)

        },
        createItem(){
            const schema = yup.object({
                name: yup.string().required("Name is required"),
            });
            schema.validate({
                name: this.form.name,
            }).then(() =>{
                apiClient.post(`/api/admin/brand/create`, this.form, {withCredentials:true})
               .then(response => {
                    this.$refs.modal1.closeModal();
                    this.toast.success("Registered successfully", { timeout: 2000 });
                    this.resetForm();
                    this.loadData();
                    console.log(response);
                }).catch(error => {
                    const errors = error.response.data.errors;
                    if (errors.hasOwnProperty('name')){
                        this.nameError = errors.name[0];
                    }
                    this.toast.error(error.message, { timeout: 6000 });
                })
            }).catch((error) => {
                if (error.path === 'name'){
                    this.nameError = error.errors[0];
                }
            });
        },
        updateItem(){
            const schema = yup.object({
                name: yup.string().required("Name is required"),
            });
            schema.validate({
                name: this.form.name,
            }).then(() =>{
                apiClient.put(`/api/admin/brand/update/${this.form.id}`, this.form)
               .then(response => {
                    this.$refs.modal1.closeModal();
                    this.toast.success("Registered successfully", { timeout: 2000 });
                    this.resetForm();
                    this.loadData();
                    //this.router.push("/");
                }).catch(error => {
                    const errors = error.response.data.errors;
                    if (errors.hasOwnProperty('name')){
                        this.nameError = errors.name[0];
                    }
                    this.toast.error(error.message, { timeout: 6000 });
                })
            }).catch((error) => {
                if (error.path === 'name'){
                    this.nameError = error.errors[0];
                }
            });
        }
    },
    mounted(){
    }
};
</script>
<style lang=""></style>
