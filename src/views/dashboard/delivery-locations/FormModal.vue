<template>
    <div class="modal-groups">
        <Modal :showLabel="false" :title="formMode === 'create' ? 'Create New Brand' : 'Update Brand'" 
               label="Create Brand" labelClass="btn-outline-primary h-10 flex items-center" 
               ref="modal1" themeClass="bg-primary-500">
            <form @submit.prevent="formMode === 'create' ? createItem() : updateItem()"  class="text-base text-slate-600 dark:text-slate-300">
                <Textinput type="text" placeholder="Location Name"
                           name="name" v-model="form.name" :error="nameError" 
                           classInput="h-[48px] mb-3"/>
                <Textinput type="number" placeholder="Price"
                           name="name" v-model="form.price" :error="priceError" 
                           classInput="h-[48px] mb-3"/>
                <Textarea placeholder="Description" name="desc" v-model="form.desc" 
                          :error="descError" classInput="h-[48px] mb-3"/>
                <Switch v-model="form.is_active" label="Active" :activeClass="'bg-primary-500'" :active="form.is_active ? true : false" classInput="h-[48px] mb-3"/>
                <div class="text-danger-500" v-if="is_activeError"> {{ is_activeError }} </div>
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
import Switch from '@/components/Switch';
import * as yup from "yup";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import apiClient from "@/plugins/axios";
export default {
    data(){
        return {
            form:{
                name: '',
                price: '',
                desc: '',
                is_active: true,
            },
            nameError: '',
            priceError: '',
            descError: '',
            is_activeError: '',
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
        Switch
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
            this.form.price = item.price.toString();
            this.form.desc = item.desc;
            this.form.is_active = item.is_active;
            console.log('Form after load', this.form);
        },

        resetForm(){
            this.form.name = '';
            this.nameError = '';
            this.form.price = '';
            this.priceError = '';
            this.form.desc = '';
            this.descError = '';
            this.form.is_active = true;
            this.is_activeError = '';
            //console.log('Form after reset', this.form)

        },
        createItem(){
            this.form.is_active = this.form.is_active ? 1 : 0;
            const schema = yup.object({
                name: yup.string().required("Name is required"),
                price: yup.string().required("Price is required"),
                desc: yup.string().nullable("Description is required"),
                is_active: yup.number().required("Status is required"),
            });
            schema.validate({
                name: this.form.name,
                price: toString,
                desc: this.form.desc,
                is_active: this.form.is_active,

            }).then(() =>{
                apiClient.post(`/api/admin/delivery-location/create`, this.form, {withCredentials:true})
               .then(response => {
                    this.$refs.modal1.closeModal();
                    this.toast.success("Registered successfully", { timeout: 2000 });
                    this.resetForm();
                    this.loadData();
                    console.log(response);
                }).catch(error => {
                    console.log(error);
                    const errors = error.response.data.errors;
                    if (errors.hasOwnProperty('name')){
                        this.nameError = errors.name[0];
                    }
                    if (errors.hasOwnProperty('price')){
                        this.priceError = errors.price[0];
                    }
                    if (errors.hasOwnProperty('desc')){
                        this.descError = errors.desc[0];
                    }
                    if (errors.hasOwnProperty('is_active')){
                        this.is_activeError = errors.is_active[0];
                    }

                    this.toast.error(error.message, { timeout: 6000 });
                })
            }).catch((error) => {
                if (error.path === 'name'){
                    this.nameError = error.errors[0];
                } else if (error.path === 'price'){
                    this.priceError = error.errors[0];
                } else if (error.path === 'desc'){
                    this.descError = error.errors[0];
                } else if (error.path === 'is_active'){
                    this.is_activeError = error.errors[0];
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
                apiClient.put(`/api/admin/delivery-location/update/${this.form.id}`, this.form)
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
                    if (errors.hasOwnProperty('price')){
                        this.priceError = errors.price[0];
                    }
                    if (errors.hasOwnProperty('desc')){
                        this.descError = errors.desc[0];
                    }

                    this.toast.error(error.message, { timeout: 6000 });
                })
            }).catch((error) => {
                if (error.path === 'name'){
                    this.nameError = error.errors[0];
                } else if (error.path === 'price'){
                    this.priceError = error.errors[0];
                } else if (error.path === 'desc'){
                    this.descError = error.errors[0];
                }
            });
        }
    },
    mounted(){
    }
};
</script>
<style lang=""></style>
