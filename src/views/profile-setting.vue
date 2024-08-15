<template>
  <div class="bg-[#f1f4f8] text-black-500 h-max">
  <Header />
  <div class="grid grid-cols-12 gap-6 my-3 px-2 md:px-10 bg-[#f1f4f8]">
    <div class="lg:col-span-4 hidden md:col-span-5 col-span-12">
      <Card :class="'bg-white'">
        <div class="space-y-8">
          <div class="h-[150px] w-[150px] mx-auto rounded-full ring-4 ring-slate-100 relative" >
            <img v-if="avatar"  :src="mediaUrl + avatar" alt="" class="w-full h-full object-cover rounded-full"/>
            <img v-else src="@/assets/images/users/user-1.jpg" alt="" class="w-full h-full object-cover rounded-full"/>
          </div>
          <div class="text-center">
            <label class="cursor-pointer">
              <input type="file" class="hidden" />
              <span class="border px-3 py-2 hover:bg-black-50 rounded-full">
                Upload Proifle Photo
              </span>
            </label>
          </div>
          <div class="text-sm text-slate-600 ">
            <span class="font-bold"> Remember:</span> For best results, use an
            image at least 200px by 200px in .jpg or .png format
          </div>
        </div>
      </Card>
    </div>

    <!-- Profile Information -->
    <div class="col-span-full md:col-span-6">
      <Card>
        <h1 class="pb-3 font-semibold">Your Information</h1>
        <form class="grid-cols-1 gap-6 grid">
          <Textinput v-model="userForm.name" :error="nameError" showClass="border pl-3"  type="text"  placeholder="First name"/>
          <Textinput v-model="userForm.email" :error="emailError" showClass="border pl-3"  type="email" placeholder="Last name"/>
          <Textinput v-model="userForm.telephone"  :error="telephoneError" showClass="border pl-3"  type="email" placeholder="Email"/>
          <div class="md:col-span-full">
            <button @click.prevent="updateProfile" class="btn-dark w-fit px-3 py-2 float-end">Update Profile</button>
          </div>
        </form>
      </Card>
    </div>

    <!-- Change Password -->
    <div class="col-span-full md:col-span-6">
      <Card>
        <h1 class="pb-3 font-semibold">Change Password</h1>
        <form class="gap-6 grid">
          <Textinput type="password"  classLabel="text-slate-600" :error="oldPassError" v-model="passwordForm.old_password" required hasicon class="bg-white" placeholder="Old Password"/>
          <Textinput type="password" classLabel="text-slate-600" :error="newPassError" v-model="passwordForm.new_password" required hasicon class="bg-white" placeholder="New Password"/>
          <div class="md:col-span-full">
            <button @click.prevent="updatePassword" class="btn-dark w-fit px-3 py-2 float-end">Update Password</button>
          </div>
        </form>
      </Card>
    </div>

    <!-- Delivery Addresses -->
    <div class="col-span-full">
      <Card >
        <div class="flex justify-between items-center">
          <h1 class="pb-3 font-semibold">Delivery Addresses</h1>
          <button @click="locationCreateModal()" class="text-blue-600 w-fit px-3 py-2 float-end">Add Address</button>
        </div>
        <div class="grid grid-cols-12 gap-3">
          <div class="border col-span-full sm:col-span-6 md:col-span-4" v-for="address in addresses">
            <div class="bg-black-50 p-2">
              {{ address.city.name }}
            </div>
            <div class="p-2 flex flex-col gap-2">
              <h2 class="text-base font-medium">{{ address.full_name }}</h2>
              <p  class="text-sm ">{{ address.neighborhood }}</p>
              <p  class="text-sm "> {{ address.full_address  }} </p>
              <p  class="text-sm "> {{ address.phone }} </p>
            </div>
            <div class="flex items-center justify-between p-2">
              <button class="" @click="deleteAddress(address.id)"> <Icon icon="bi:trash"/> </button>
              <button class="text-sm text-pink-600 border-pink-600 border py-1 px-2 hover:text-white hover:bg-pink-600" @click="locationUpdateModal(address)"> Update Address </button>
            </div>
          </div>
        </div>
      </Card>

      <Modal ref="locationModal" title="Address Form" :themeClass="'bg-white text-black-500'" :showLabel="false" :sizeClass="'max-w-lg'">
        <form @submit.prevent="locationFormOption == 'create' ? createLocation() : updateLocation()" class="grid-cols-12 gap-6 grid">
          <div class="col-span-6">
            <Textinput :label="'Full Name *'" v-model="locationForm.fullName" :error="locationFormError.fullName" showClass="border pl-3"  type="text"  placeholder="Full Name"/>
          </div>
          <div class="col-span-6">
            <Textinput :label="'Full Name *'" v-model="locationForm.phone" :error="locationFormError.phone" showClass="border pl-3"  type="text"  placeholder="Phone Number"/>
          </div>
          <div class="col-span-6">
            <Select :label="'City *'"  v-model="locationForm.cityId" :error="locationFormError.cityId" placeholder="City" :options="locationOptions"/>
          </div>
          <div class="col-span-6">
            <Textinput :label="'Neighborhood *'" v-model="locationForm.neighborhood" :error="locationFormError.neighborhood" showClass="border pl-3"  type="text"  placeholder="Neighbourhood"/>
          </div>
          <div class="col-span-full">
            <Textarea :label="'Full Address *'" v-model="locationForm.fullAddress" :error="locationFormError.fullAddress" showClass="border pl-3"  type="text"  placeholder="More description"/>
          </div>
          <div class="col-span-full"></div>

          <div class="col-span-full">
            <button type="submit" class="btn-dark w-fit px-3 py-2 float-end">Save Address</button>
          </div>
        </form>
      </Modal>
    </div>
  </div>
  <Footer />
</div>
   
</template>
<script>
import Card from "@/components/Card/frontCart.vue";
import Textinput from "@/components/Textinput/white.vue";
import Textarea from "@/components/Textarea/white.vue";
import Select from "@/components/Select/white.vue";
import apiClient from "@/plugins/axios";
import Header from '@/components/HomeHeader/index.vue'
import Footer from '@/components/HomeFooter/index.vue'
import Modal from "@/components/Modal/WhiteModal.vue";
import * as yup from "yup";
import { useToast } from "vue-toastification";
import Icon from "@/components/Icon";
import axios from "axios";

export default {
  data() {
    return {
      toast: useToast(),
      userForm: {
        name: "",
        email: "",
        telephone: "",
      },

      locationFormOption: 'create',

      nameError: "",
      emailError: "",
      telephoneError: "",
      oldPassError: "",
      newPassError: "",

      passwordForm: {
        old_password: "",
        new_password: "",
      },

      locationForm: {
        fullName: '',
        phone: '',
        cityId: '',
        neighborhood: '',
        fullAddress: '',
      },

      locationFormError: {
        fullName: '',
        phone: '',
        cityId: '',
        neighborhood: '',
        fullAddress: '',
      },

      avatar: "",
      locationOptions: [],
      locations: [],
      addresses: [],
      mediaUrl: apiClient.defaults.baseURL + '/storage/',
    };
  },
  components: {
    Card,
    Textinput,
    Textarea,
    Select,
    Header,
    Footer,
    Modal,
    Icon,
  },
  methods:{
    async getProfile(){
      try {
        const response = await apiClient.get("/api/profile");
        const results = response.data.user;
        this.userForm.name = results.name;
        this.userForm.email = results.email;
        this.userForm.telephone = results.telephone;
        this.avatar = results.avatar;
        this.addresses = results.addresses;
        console.log(this.addresses);
      } catch (error) {
        console.log(error);
      }
    },

    clearError(){
      this.nameError = "";
      this.emailError = "";
      this.telephoneError = "";
    },

    clearLocationFormError(){
      this.locationFormError.fullName = "";
      this.locationFormError.phone = "";
      this.locationFormError.cityId = "";
      this.locationFormError.neighborhood = "";
      this.locationFormError.fullAddress = "";
    },

    clearLocationForm(){
      for (const key in this.locationForm) {
        this.locationForm[key] = '';
      }
    },

    updateProfile(){
      this.clearError();
      const schema = yup.object({
        name: yup.string().required("Name is required"),
        email: yup.string().required("Email is required").email(),
        telephone: yup.string().required("Telephone is required").min(9).max(9),
      });

      schema.validate({
        name: this.userForm.name,
        email: this.userForm.email,
        telephone: this.userForm.telephone,
      }).then(() => {
        const response = axios.put("/api/profile/update", this.userForm).then((response) => {
          this.$toast.success("Profile updated successfully", { timeout: 2000});
          this.clearError();
          this.getProfile();
        }).catch((error) => {
          console.log(error);
          const errors = error.response.data.errors || null;
          if (errors && errors.hasOwnProperty('email')) {
            this.emailError = errors.email[0];
          } else if (errors && errors.hasOwnProperty('name')) {
            this.nameError = errors.name[0];
          } else if (errors && errors.hasOwnProperty('telephone')) {
            this.telephoneError = errors.telephone[0];
          }
        });
        
        
      }).catch((error) => {
        if (error.path === 'name') {
          this.nameError = error.errors[0];
        } else if (error.path === 'email') {
          this.emailError = error.errors[0];
        } else if (error.path === 'password') {
          this.passwordError = error.errors[0];
        } else if (error.path === 'telephone') {
          this.telephoneError = error.errors[0];
        }
      });
    },

    async updatePassword(){
      this.clearError();
      console.log(this.passwordForm);
      const schema = yup.object({
        oldPassword: yup.string().required("Name is required").min(8),
        newPassword: yup.string().required("Email is required").min(8),
      });

      schema.validate({
        oldPassword: this.passwordForm.old_password,
        newPassword: this.passwordForm.new_password,
      }).then(() => {
        const response = axios.put("/api/profile/password/update", this.passwordForm)
        .then((response) => {
          this.$toast.success("Password updated successfully", { timeout: 2000});
        }).catch((error) => {
          console.log(error);
          const errors = error.response.data.errors || null;
          if (errors && errors.hasOwnProperty('old_password')) {
            this.oldPassError = errors.oldPassword[0];
          } else if (errors && errors.hasOwnProperty('new_password')) {
            this.newPassError = errors.newPassword[0];
          }
        });
      }).catch((error) => {
        if (error.path === 'oldPassword') {
          this.oldPassError = error.errors[0];
        } else if (error.path === 'newPassword') {
          this.newPassError = error.errors[0];
        }
      }); 
    },

    getLocations () {
      axios.get('api/delivery-locations/active').then((response) => {
        this.locationOptions = response.data.locations.map((location) => {
          return {
            value: location.id,
            label: location.name
          }
        });
        this.locations = response.data.locations;
        console.log(this.locationOptions);
      }).catch((error) => {
        console.log(error);
      });
    },

    locationCreateModal(){
      this.locationFormOption = 'create';
      for (const key in this.locationForm) {
        this.locationForm[key] = '';
      }
      this.$refs.locationModal.openModal();
    },

    locationUpdateModal(location){
      this.locationFormOption = 'update';
      this.locationForm.id = location.id;
      this.locationForm.cityId = location.city_id;
      this.locationForm.fullName = location.full_name;
      this.locationForm.neighborhood = location.neighborhood;
      this.locationForm.fullAddress = location.full_address;
      this.locationForm.phone = location.phone;
      this.$refs.locationModal.openModal();
    },

    createLocation(){
        const schema = yup.object({
            fullName: yup.string().required("Full name is required"),
            phone: yup.string().required("Phone number is required"),
            cityId: yup.string().required("City is required"),
            neighborhood: yup.string().required("Neighborhood is required"),
            fullAddress: yup.string().required("Full address is required"),
        });

        schema.validate({
            fullName: this.locationForm.fullName,
            phone: this.locationForm.phone,
            cityId: this.locationForm.cityId,
            neighborhood: this.locationForm.neighborhood,
            fullAddress: this.locationForm.fullAddress
        }, { abortEarly: false })
        .then(() => {
            axios.post("/api/profile/address/create", this.locationForm)
                .then((response) => {
                    this.$refs.locationModal.closeModal();
                    this.clearLocationForm();
                    this.clearLocationFormError();
                    this.getProfile();
                    this.toast.success("Location created successfully", { timeout: 2000 });
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                    if (error.response.status === 400) {
                        const errors = error.response.data.errors || null;
                        if (errors) {
                            this.locationFormError.fullName = errors.fullName ? errors.fullName[0] : '';
                            this.locationFormError.phone = errors.phone ? errors.phone[0] : '';
                            this.locationFormError.cityId = errors.cityId ? errors.cityId[0] : '';
                            this.locationFormError.neighborhood = errors.neighborhood ? errors.neighborhood[0] : '';
                            this.locationFormError.fullAddress = errors.fullAddress ? errors.fullAddress[0] : '';
                        }
                    }
                });
        })
        .catch((validationErrors) => {
            console.log(validationErrors);
            validationErrors.inner.forEach(error => {
                if (error.path === 'fullName') {
                    this.locationFormError.fullName = error.message;
                } else if (error.path === 'phone') {
                    this.locationFormError.phone = error.message;
                } else if (error.path === 'cityId') {
                    this.locationFormError.cityId = error.message;
                } else if (error.path === 'neighborhood') {
                    this.locationFormError.neighborhood = error.message;
                } else if (error.path === 'fullAddress') {
                    this.locationFormError.fullAddress = error.message;
                }
            });
        });
    },


    async updateLocation(){
    const schema = yup.object({
        fullName: yup.string().required("Full name is required"),
        phone: yup.string().required("Phone number is required"),
        cityId: yup.string().required("City is required"),
        neighborhood: yup.string().required("Neighborhood is required"),
        fullAddress: yup.string().required("Full address is required"),
    });

    try {
        await schema.validate({
            fullName: this.locationForm.fullName,
            phone: this.locationForm.phone,
            cityId: this.locationForm.cityId,
            neighborhood: this.locationForm.neighborhood,
            fullAddress: this.locationForm.fullAddress
        }, { abortEarly: false });

        await axios.put(`/api/profile/address/update/${this.locationForm.id}`, this.locationForm);
        this.$refs.locationModal.closeModal();
        this.clearLocationForm();
        this.clearLocationFormError();
        this.getProfile();
        this.toast.success("Location updated successfully", { timeout: 2000 });
        console.log(response);

    } catch (error) {
        if (error.inner) {
            // Handle Yup validation errors
            console.log(error);
            error.inner.forEach(err => {
                if (err.path === 'fullName') {
                    this.locationFormError.fullName = err.message;
                } else if (err.path === 'phone') {
                    this.locationFormError.phone = err.message;
                } else if (err.path === 'cityId') {
                    this.locationFormError.cityId = err.message;
                } else if (err.path === 'neighborhood') {
                    this.locationFormError.neighborhood = err.message;
                } else if (err.path === 'fullAddress') {
                    this.locationFormError.fullAddress = err.message;
                }
            });
        } else if (error.response && error.response.status === 400) {
            // Handle API validation errors
            const errors = error.response.data.errors || null;
            if (errors) {
                this.locationFormError.fullName = errors.fullName ? errors.fullName[0] : '';
                this.locationFormError.phone = errors.phone ? errors.phone[0] : '';
                this.locationFormError.cityId = errors.cityId ? errors.cityId[0] : '';
                this.locationFormError.neighborhood = errors.neighborhood ? errors.neighborhood[0] : '';
                this.locationFormError.fullAddress = errors.fullAddress ? errors.fullAddress[0] : '';
            }
        } else {
            console.log(error);
        }
    }
},

    async deleteAddress(addressId){
      await axios.delete(`/api/profile/address/delete/${addressId}`).then((response) => {
        console.log(response);
        this.getProfile();
        this.toast.success('Address deleted successfully', {timeout: 2000})
      }).catch((error) => {
        this.toast.error('Failed to delete address', {timeout: 2000})
      })
    }

  },
  mounted(){
    this.getProfile();
    this.getLocations();
  }
};
</script>
<style lang=""></style>
  